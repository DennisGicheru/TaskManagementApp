import { createStore} from 'vuex';
import axios from 'axios';


export default createStore({
    state: {
        tasks: JSON.parse(localStorage.getItem("TODOS")) ? JSON.parse(localStorage.getItem("TODOS")) : [],
    },
    getters: { 
        todos: state => {
            return state.tasks;
        },
        completeTask(state) {
            return state.tasks.filter(task => task.completed == true)
        }
	},
	mutations: {
        setTasks(state, tasks) {
            //state.tasks = tasks
            localStorage.setItem("TODOS", JSON.stringify(state.tasks))
            state.tasks = JSON.parse(localStorage.getItem("TODOS"))
        },

        newTask(state, task) {
        let tasks = state.tasks.concat(task)
        localStorage.setItem("TODOS", JSON.stringify(tasks))
        state.tasks = JSON.parse(localStorage.getItem(tasks))
        console.log(task)
	    },

        deleteTask(state, {id}) {
            let tasks = state.tasks.filter(task => task.id != id)
            state.tasks= tasks
            var delTodo = JSON.parse(localStorage.getItem("TODOS"))
                for (var i = 0; i < delTodo.length; i++) {
                    if(delTodo[i].id == id) {
                        delTodo = state.tasks
                    }
                }
            localStorage.setItem("TODOS", JSON.stringify(delTodo));
        }, 

        editTodos(state, {id}) {
            state.tasks = tasks
            var editTodo = JSON.parse(localStorage.getItem("TODOS"))
            for (var i = 0; i < editTodo.length; i++) {
                if(editTodo[i].id == id) {
                    editTodo = state.todos
                }
            }
            localStorage.setItem("TODOS", JSON.stringify(editTodo));
        },          
        
        completeTask(state, {id}) {
            state.tasks = tasks
            var completeTodo = JSON.parse(localStorage.getItem("TODOS"))
            for (var i = 0; i < completeTodo.length; i++) {
                if(completeTodo[i].id == id) {
                    completeTodo = state.todos
                }
            }
            localStorage.setItem("TODOS", JSON.stringify(completeTodo));
        }

    },
    actions: {
        async fetchTasks({commit}) {
            const data = await axios.get('https://tychak.github.io/')
            commit('setTasks', data.data)
        },
        async addTodo({commit}, task) {
            commit('newTask', task)
        },
        async deleteTodo({commit}, {id}) {
            commit('deleteTask', {id})
        },
        async editTodo({commit}, {id}) {
            commit('editTodo', {id} )
        },
        async completeTask({commit}, {id}) {
            commit('completeTask', {id} )
        }
    },
	modules: {
        
	}
})