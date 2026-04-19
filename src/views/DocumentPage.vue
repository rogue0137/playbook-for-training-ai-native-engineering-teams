<template>
  <section class="content-pane" v-if="document">
    <header class="content-header">
      <p class="eyebrow">{{ document.section }}</p>
      <h1>{{ document.title }}</h1>
    </header>
    <MarkdownDocument :markdown="document.markdown" />
  </section>

  <section class="content-pane" v-else>
    <header class="content-header">
      <p class="eyebrow">Not Found</p>
      <h1>Document Not Found</h1>
    </header>
    <p class="empty-copy">
      The requested route does not map to a markdown file in this repository.
    </p>
  </section>
</template>

<script setup>
import { computed } from "vue";
import MarkdownDocument from "../components/MarkdownDocument.vue";
import { documentRepository } from "../content/library";

const props = defineProps({
  slug: {
    type: String,
    default: "readme",
  },
});

const document = computed(() => documentRepository.findBySlug(props.slug));
</script>
