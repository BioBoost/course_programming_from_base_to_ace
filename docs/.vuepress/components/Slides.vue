<template>
  <a :href="link">Download Slides</a>
</template>

<script>
export default {
  props: ["link"],
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