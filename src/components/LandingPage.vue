<template>
  <div>
    <body>
      <div class = "landingpage">
        <h1 class="p-5 text-5xl text-white font-bold text-center">Task Manager PRO v1.0.0</h1>
        <button @click="showmodal=true" class="mt-10 p-5 text-white text-3xl bg-blue-500 hover:bg-blue-700 rounded-md">Show Tasks</button>
      </div>
    </body>
  <TasksList v-show="showmodal" class="absolute inset-0 flex flex-col bg-white w-full border-white min-h-full bg-white bg-opacity-100"/>
  </div>

</template>

<script setup>
    import { ref } from "vue";
import TasksList from "./TasksList.vue";

    const showmodal= ref(false)

</script>

<style scoped>
  body {
  background-image: url(src/images/background.jpg);
  background-repeat: no-repeat;
  height: 768px;
  display: flex;

}

.landingpage {
  width: 80%;
  text-align: center;
  margin: auto;
  height: 40%;
  background-color: rgb(54, 54, 54);
  opacity: 80%;
  color: white;
  font: sans-serif;
  border: solid 5px rgb(20, 20, 20);
}
</style>