<script setup>
import { RouterView } from 'vue-router'
</script>

<script>
import PageHeader from './components/PageHealer.vue';
export default {
  components: {
    'page-header': PageHeader
  }
}
</script>

<template>
  <div class="text-center main_div">
    <page-header></page-header>
    <RouterView />
  </div>
</template>

<style>
html,
body {
  height: 100%;
}

.main_div {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}
</style>
