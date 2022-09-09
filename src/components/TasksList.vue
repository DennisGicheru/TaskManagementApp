<script setup>
import { onMounted, computed, ref } from 'vue';
import { useStore } from 'vuex';
import AddTasks from './AddTasks.vue';
import EditTasks from './EditTasks.vue';

const store = useStore()

const tasks = computed(() => {
  return store.state.tasks
})

onMounted(() => {
  store.dispatch('fetchTasks');
})

function completeTask(id) {
  store.dispatch('completeTask', {id});
  console.log(id)
}
const toggle = ref()
const showmodal = ref(false)

const showmodal2 = ref(false)

function deleteTask(id){
  store.dispatch('deleteTodo', {id})
  console.log(id)
}


</script>

<template>
  <div class="mainpage">
    <h1 class="p-5 text-5xl text-white font-bold text-center bg-blue-500">Welcome to your Task Manager</h1>
    <div class="flex justify-start bg-yellow-400 p-2">
      <div class="mx-0 flex-none">
        <button @click="showmodal =true" class="p-2 mx-1 bg-blue-600 rounded-lg text-white font-bold">Add To-Do</button>
      </div>
      <div class="mx-auto"><h2 class ="mb-3 text-3xl text-white font-bold">Current To-Do's</h2></div>
    </div>
    <div class="overflow-auto rounded-lg shadow">
      <table class="w-full">
        <thead class="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th class="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Id</th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Title</th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Description</th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Date Added</th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Deadline</th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Date Completed</th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Action</th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Action</th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Completion Status</th>
  
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr v-for="task in tasks" :key="task.id" class="bg-gray-50">
            <td class="w-20 p-3 text-sm text-gray-800">{{ task.id }}</td>
            <td class="p-3 text-sm text-gray-800">{{ task.title }}</td>
            <td class="p-3 text-sm text-gray-800">{{ task.description }}</td>
            <td class="p-3 text-sm text-gray-800">{{ task.date_added }}</td>
            <td class="p-3 text-sm text-gray-800">{{ task.deadline }}</td>
            <td class="p-3 text-sm text-gray-800">{{ task.date_completed }}</td>
            <td class="p-3 text-sm text-gray-800"><button type="button" @click="showmodal2 = true" class="bg-green-600 p-1 px-2 rounded-lg font-sm font-bold text-white">edit</button></td>
            <td class="p-3 text-sm text-gray-800"><button type="button" @click="deleteTask(task.id)" class="bg-red-500 p-1 px-2 rounded-lg font-sm font-bold text-white">delete</button></td>
            <td class="p-3 text-sm text-gray-800"><input type="checkbox" @click="completeTask(task.id)" v-model="toggle" true-value="complete" false-value="" /><label for="checkbox">{{ toggle }}</label></td>
            <td class="p-3 text-sm text-gray-800"><button type="button" class="bg-green-600 p-1 px-2 rounded-lg font-sm font-bold text-white"><router-link :to="{name: 'EditTasks', params: {id : task.id}}">edit</router-link></button></td>
          </tr>
        </tbody>  
      </table>
    </div>
    <EditTasks v-show="showmodal2" @close="showmodal2 = false" class="absolute inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50"/>  
    <AddTasks v-show="showmodal" @close="showmodal = false" class="absolute inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50"/>
  </div>

  <!-- <div class="p-5 bg-green-90">
    <AddTasks v-show="showmodal" />
  </div>
  <div class="p-5 bg-blue-90">
    <EditTasks v-show="showmodal2" />
  </div> -->
</template>
  
<style scoped>

</style>
  
  
  