<script setup>
import { RouterView } from 'vue-router'
</script>

<script>
import PageHeader from './components/PageHeader.vue';

export default {
  components: {
    'page-header': PageHeader
  }
}
</script>

<template>
  <div class="text-center">
    <page-header></page-header>
    <RouterView />
    <pulse-loader></pulse-loader>
  </div>
</template>

<style>
html,
body {
  height: 100%;
}

#app {
  padding-bottom: 20px;
  background-color: #f5f5f5;
  height: 100%;
}
</style>
