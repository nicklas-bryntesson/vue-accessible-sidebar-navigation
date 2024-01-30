<script setup>
import Header from './components/Header.vue';
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue';
import Footer from './components/Footer.vue'

</script>

<template>
  <Header/>

  <div class="contentContainer"> 
    <RouterView />
  
    <Sidebar/>
  </div>

  <Footer/>

</template>

<style scoped>
  .contentContainer {
    grid-column: main;
    display: grid;
    grid-template-columns: var(--inlineGrid);
    padding-block-end: 2rem;

    & main {
      grid-column: 1/8;
      grid-row: 1;
    }

    & aside {
      grid-column: 9/13;
      grid-row: 1;
    }
  }
</style>
