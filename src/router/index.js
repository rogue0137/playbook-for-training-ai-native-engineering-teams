import { createRouter, createWebHashHistory } from "vue-router";
import DocumentPage from "../views/DocumentPage.vue";

function routeSlug(params) {
  if (!params.slug) {
    return "readme";
  }

  if (Array.isArray(params.slug)) {
    return params.slug.join("/").toLowerCase();
  }

  return String(params.slug).toLowerCase();
}

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DocumentPage,
      props: { slug: "readme" },
    },
    {
      path: "/:slug(.*)*",
      name: "document",
      component: DocumentPage,
      props: (route) => ({ slug: routeSlug(route.params) }),
    },
  ],
});
