<template>
  <main aria-labelledby="mainTitle">
    <h1 id="mainTitle">{{ pageTitle }}</h1>
    <!-- Your page content goes here -->
  </main>
</template>

<script>
export default {
  computed: {
    pageTitle() {
      return this.$route.meta.title;
    },
  },
};
</script>