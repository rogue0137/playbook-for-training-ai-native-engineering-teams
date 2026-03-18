import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import MarkdownDocument from "../../src/components/MarkdownDocument.vue";

describe("MarkdownDocument", () => {
  it("renders markdown content", () => {
    const wrapper = mount(MarkdownDocument, {
      props: {
        markdown: "# Hello\n\nA paragraph",
      },
    });

    expect(wrapper.html()).toContain("<h1>Hello</h1>");
    expect(wrapper.text()).toContain("A paragraph");
  });

  it("sanitizes script tags", () => {
    const wrapper = mount(MarkdownDocument, {
      props: {
        markdown: "Unsafe<script>alert('x')</script>",
      },
    });

    expect(wrapper.html()).not.toContain("<script>");
    expect(wrapper.text()).toContain("Unsafe");
  });
});
