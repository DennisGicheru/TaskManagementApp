<template>
    <div>
    <form @submit="onSubmit">
        <h2 class="text-center font-bold text-4xl mb-0 mt-5">Enter Task Details</h2>
        <div class="addTask form-group bg-white w-4/5 p-5 mt-0">
            <label class="mx-auto w-full text-base font-serif p-2 border hover:border-black-900">Title: <input v-model="task.title" placeholder="e.g send emails" class="pl-2 py-1 border hover:border-black-500 w-2/3"/></label>
            <label class="mx-auto w-full text-base font-serif p-2 border hover:border-black-900">Description: <input v-model="task.description" placeholder="e.g respond client emails" class="pl-2 py-1 border hover:border-black-500 w-2/3"/></label>
            <label class="mx-auto w-full text-base font-serif p-2 border hover:border-black-900">Date_added: <input type="date"  v-model="task.date_added" class="border hover:border-black-500 w-1/2"/></label>
            <label class="mx-auto w-full text-base font-serif p-2 border hover:border-black-900">Date completed: <input type="date" v-model="task.date_completed" class="border hover:border-black-500 w-1/2" ></label>
            <label class="mx-auto w-full text-base font-serif p-2 border hover:border-black-900">Deadline: <input type="date" v-model="task.deadline" class="border hover:border-black-500 w-1/2" ></label>
            <div class="flex justify-between">
                <button type="submit" id="addsubmit" class="btn btn-primary bg-green-500 rounded-md m-2 px-4 py-2 font-bold" @click="$emit('close')">Submit</button>
                <button type="button" @click="$emit('close')" class="btn btn-primary bg-blue-500 rounded-md m-2 px-4 py-2 font-bold">Cancel</button>
            </div>
        </div>
    </form>
    </div>  
</template>

<script>
let arrayFromStorage = JSON.parse(localStorage.getItem("TODOS"))
let arrayLength =arrayFromStorage.length
arrayLength = JSON.stringify(++arrayLength)
export default {
    setup() {
        return {
    }
  },
  data() {
    return {
            showmodal: false,
            task: {
                id: arrayLength,
                title: "",
                description: "",
                date_added: new Date().toISOString().slice(0,10),
                date_completed: new Date().toISOString().slice(0,10),
                deadline: "",  
            }
        }
  },
  methods: {
    onSubmit() {
        this.$store.dispatch("addTodo", this.task)
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
.addTask {
    display: flex;
    flex-direction: column; 
    margin: auto;

}
#addsubmit {
    background-color: rgb(100, 224, 69);
}
</style>