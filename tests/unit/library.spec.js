import { describe, expect, it } from "vitest";
import { createDocumentIndex, createDocumentRepository, pathToSlug } from "../../src/content/library";

describe("content library", () => {
  it("normalizes file paths into deterministic slugs", () => {
    expect(pathToSlug("/README.md")).toBe("readme");
    expect(pathToSlug("/week-01/week-01-setup-and-baseline.md")).toBe(
      "week-01/week-01-setup-and-baseline",
    );
  });

  it("throws when duplicate slugs are detected", () => {
    const duplicateMap = {
      "/README.md": "# one",
      "/readme.md": "# two",
    };

    expect(() => createDocumentIndex(duplicateMap)).toThrow(/Duplicate document slug/);
  });

  it("returns documents sorted with overview first", () => {
    const docs = createDocumentIndex({
      "/week-02/topic.md": "# Week 2",
      "/README.md": "# Intro",
      "/week-01/topic.md": "# Week 1",
    });

    expect(docs[0].slug).toBe("readme");
    expect(docs[1].slug).toContain("week-01");
  });

  it("resolves documents by slug", () => {
    const repository = createDocumentRepository({
      "/README.md": "# Intro",
      "/week-01/sample.md": "# Sample",
    });

    expect(repository.findBySlug("readme")?.title).toBe("Program Overview");
    expect(repository.findBySlug("week-01/sample")?.markdown).toBe("# Sample");
    expect(repository.findBySlug("missing")).toBeNull();
  });
});
