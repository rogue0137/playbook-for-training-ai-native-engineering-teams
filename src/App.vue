<template>
  <div class="app-shell">
    <aside class="side-nav" aria-label="Program navigation">
      <p class="brand-kicker">AI Engineering</p>
      <h1>Pilot Program</h1>
      <p class="brand-copy">12-week curriculum rendered from repository markdown.</p>

      <nav>
        <RouterLink
          v-for="doc in documents"
          :key="doc.slug"
          :to="toRoute(doc.slug)"
          class="nav-link"
        >
          <span>{{ doc.title }}</span>
          <small>{{ doc.section }}</small>
        </RouterLink>
      </nav>
    </aside>

    <main class="main-panel">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { documentRepository } from "./content/library";

const documents = documentRepository.list();

function toRoute(slug) {
  return slug === "readme" ? "/" : `/${slug}`;
}
</script>
