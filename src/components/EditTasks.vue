<template>
    <div class="taskEditor">
        <form @submit="editTodo">
            <h1 class="text-center font-bold text-4xl mb-0 mt-5">Edit To-Do</h1>
            <!-- <h1>{{task}}</h1> -->
            <div class="form-group flex flex-col bg-white m-auto w-4/5 p-5">
                <label class="mx-auto w-full text-base font-serif  p-2 border">Title: <input type="text" class="pl-2 border hover:border-black-500 w-2/3" v-model="task"/></label>
                <label class="mx-auto w-full text-base font-serif  p-2 border">Description: <input class="pl-2 border hover:border-black-500 w-2/3" v-model="task.description"/></label>
                <label class="mx-auto w-full text-base font-serif  p-2 border">Date_added: <input type="date" class="border hover:border-black-500 w-1/2" v-model="task.date_added"/></label>
                <label class="mx-auto w-full text-base font-serif  p-2 border">Deadline: <input type="date" class="border hover:border-black-500 w-1/2" v-model="task.deadline"/></label>
                <label class="mx-auto w-full text-base font-serif  p-2 border">Date completed: <input type="date" class="border hover:border-black-500 w-1/2" v-model="task.date_completed" /></label>
                <div class="flex justify-between">
                    <button type="submit" @click="editTask(task.id)" class="bg-green-500 rounded-md p-2 ml-3 mt-2 font-bold">Save Changes</button>
                    <button type="button" @click="$emit('close')" class="btn btn-primary bg-blue-500 rounded-md px-5 py-2 mr-3 mt-2 font-bold">Cancel</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    setup () {
        return {
       }
    },
    data() {
        return {}
    },
    computed: {
        task() {
            return this.$store.state.tasks.find(t => t.id === this.$route.params.id)
        },
    }, 
    methods: {
        editTodo(id){
            this.$store.dispatch('editTodo', {id}).then(this.$router.push("/"))
        }
    },
    emits: ['']
}
</script>

<style scoped>
form {
    width: 50%;
    background-color: rgb(226, 225, 225);
    opacity: 95%;
    height: 100%;
    display: flex;
    flex-direction: column; 
}

</style>