const rawDocuments = import.meta.glob(["/README.md", "/metrics/*.md", "/week-*/*.md"], {
  eager: true,
  query: "?raw",
  import: "default",
});

function prettifySegment(segment) {
  return segment
    .replace(/\.md$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function titleFromPath(path) {
  if (path === "/README.md") {
    return "Program Overview";
  }

  const parts = path.split("/").filter(Boolean);
  const fileName = parts[parts.length - 1] || "";
  return prettifySegment(fileName);
}

function sectionFromPath(path) {
  if (path === "/README.md") {
    return "Overview";
  }

  const [folder] = path.split("/").filter(Boolean);
  return prettifySegment(folder || "Content");
}

function sortByPath(a, b) {
  const left = a.path;
  const right = b.path;

  if (left === "/README.md") {
    return -1;
  }

  if (right === "/README.md") {
    return 1;
  }

  if (left.startsWith("/week-") && right.startsWith("/week-")) {
    return left.localeCompare(right, undefined, { numeric: true });
  }

  if (left.startsWith("/week-") && !right.startsWith("/week-")) {
    return -1;
  }

  if (!left.startsWith("/week-") && right.startsWith("/week-")) {
    return 1;
  }

  return left.localeCompare(right, undefined, { numeric: true });
}

export function pathToSlug(path) {
  return path.replace(/^\//, "").replace(/\.md$/, "").toLowerCase();
}

export function createDocumentIndex(source) {
  const seenSlugs = new Set();
  const docs = Object.entries(source)
    .map(([path, markdown]) => {
      const slug = pathToSlug(path);

      if (seenSlugs.has(slug)) {
        throw new Error(`Duplicate document slug detected: ${slug}`);
      }

      seenSlugs.add(slug);

      return {
        path,
        slug,
        markdown,
        title: titleFromPath(path),
        section: sectionFromPath(path),
      };
    })
    .sort(sortByPath);

  return docs;
}

export function createDocumentRepository(source = rawDocuments) {
  const index = createDocumentIndex(source);
  const bySlug = new Map(index.map((item) => [item.slug, item]));

  return {
    list() {
      return index;
    },
    findBySlug(slug) {
      return bySlug.get((slug || "").toLowerCase()) || null;
    },
  };
}

export const documentRepository = createDocumentRepository();
