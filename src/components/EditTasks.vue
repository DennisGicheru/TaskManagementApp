<template>
    <div class="taskEditor">
        <form @submit.prevent="">
            <h1 class="text-center font-bold text-4xl mb-0 mt-5">Edit To-Do</h1>
            <div class="form-group flex flex-col bg-white m-auto w-4/5 p-5">
                <label class="mx-auto w-full text-base font-serif  p-2 border">Title: <input type="text" class="pl-2 border hover:border-black-500 w-2/3" /></label>
                <label class="mx-auto w-full text-base font-serif  p-2 border">Description: <input class="pl-2 border hover:border-black-500 w-2/3"/></label>
                <label class="mx-auto w-full text-base font-serif  p-2 border">Date_added: <input type="date" class="border hover:border-black-500 w-1/2" /></label>
                <label class="mx-auto w-full text-base font-serif  p-2 border">Deadline: <input type="date" class="border hover:border-black-500 w-1/2" /></label>
                <label class="mx-auto w-full text-base font-serif  p-2 border">Date completed: <input type="date" class="border hover:border-black-500 w-1/2" /></label>
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
        task(){
            return this.$store.state.tasks.find(t => t.id == this.$route.params.id)
        }
        // onsubmit() {
        //     this.$store.dispatch("Edittodo", this.task)
        // }
    },
    methods: {
        editTask(id){
            this.$store.dispatch('editTodos', {id}).then(this.$router.push("/"))
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