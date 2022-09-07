<script setup>
import LandingPage from "../components/LandingPage.vue";
import { ref } from "vue";

  
  const showmodal= ref(false)
</script>

<template>
  <main>
    <LandingPage/>
    <!-- <TasksList v-show="showmodal"/> -->
  </main>
</template>

