<template>
  <a :href="`${link_without_extension}.pdf`">Download Slides</a>
</template>

<script>
export default {
  props: ["link"],

  computed: {
    link_without_extension() {
      const lastDot = this.link.lastIndexOf('.');
      return this.link.substring(0, (lastDot >= 0 ? lastDot : this.link.length));
    }
  }
};
</script>

<style scoped>
a {
  color: var(--c-bg);
  background-color: var(--c-brand);
  border-color: var(--c-brand);
  display: inline-block;
  font-size: 1rem;
  margin-top: 2rem;
  padding: 0.4rem 1.6rem;
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  transition: background-color var(--t-color);
  box-sizing: border-box;
}

</style>