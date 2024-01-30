<template>
    <main>
      <h1>{{ pageTitle }}</h1>
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