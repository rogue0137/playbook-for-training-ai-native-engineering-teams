<template>
  <article class="document" v-html="html"></article>
</template>

<script setup>
import { computed } from "vue";
import MarkdownIt from "markdown-it";
import DOMPurify from "dompurify";

const props = defineProps({
  markdown: {
    type: String,
    default: "",
  },
});

const markdown = new MarkdownIt({
  html: true,
  linkify: true,
});

const html = computed(() => {
  const rendered = markdown.render(props.markdown || "");
  return DOMPurify.sanitize(rendered, {
    USE_PROFILES: { html: true },
  });
});
</script>
