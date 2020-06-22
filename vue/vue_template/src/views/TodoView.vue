<template>
    <div>
        <section class="todoapp">
            <header class="header">
                <h1>todos</h1>
                <input
                    class="new-todo"
                    autofocus
                    autocomplete="off"
                    placeholder="填写选项"
                    v-model="newTodo"
                    @keyup.enter="addTodo"
                />
            </header>
            <section class="main" v-show="todos.length" v-cloak>
                <input
                    id="toggle-all"
                    class="toggle-all"
                    type="checkbox"
                    v-model="allDone"
                />
                <label for="toggle-all"></label>
                <ul class="todo-list">
                    <li
                        v-for="todo in filteredTodos"
                        class="todo"
                        :key="todo.id"
                        :class="{ completed: todo.completed, editing: todo == editedTodo }"
                    >
                        <div class="view">
                            <input class="toggle" type="checkbox" v-model="todo.completed" />
                            <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
                            <button class="destroy" @click="removeTodo(todo)"></button>
                        </div>
                        <input
                            class="edit"
                            type="text"
                            v-model="todo.title"
                            v-todo-focus="todo == editedTodo"
                            @blur="doneEdit(todo)"
                            @keyup.enter="doneEdit(todo)"
                            @keyup.esc="cancelEdit(todo)"
                        />
                    </li>
                </ul>
            </section>
            <footer class="footer" v-show="todos.length" v-cloak>
                <span class="todo-count">
                    <strong>{{ remaining }}</strong> {{ remaining | pluralize }} left
                </span>
                <ul class="filters">
                    <li>
                        <a href="#/all" :class="{ selected: visibility == 'all' }">All</a>
                    </li>
                    <li>
                        <a href="#/active" :class="{ selected: visibility == 'active' }">Active</a>
                    </li>
                    <li>
                        <a href="#/completed" :class="{ selected: visibility == 'completed' }">Completed</a>
                    </li>
                </ul>
                <button
                    class="clear-completed"
                    @click="removeCompleted"
                    v-show=" todos.length > remaining "
                >
                 Clear completed
                </button>
            </footer>
        </section>
        <footer class="info">
            <p>Double-click to edit a todo</p>
            <p>Written by <a href="http://evanyou.me">Evan You</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
    </div>
</template>

<script>
    const STORAGE_KEY = "todos-vuejs-2.0";
    let todoStorage = {
        fetch: function() {
            const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
            todos.forEach(function(todo, index) {
                todo.id = index;
            });
            todoStorage.uid = todos.length;
            return todos;
        },
        save: function(todos) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        }
    };

    // visibility filters
    let filters = {
        all: function(todos) {
            return todos;
        },
        active: function(todos) {
            return todos.filter(function(todo) {
                return !todo.completed;
            });
        },
        completed: function(todos) {
            return todos.filter(function(todo) {
                return todo.completed;
            });
        }
    };
    export default {
        data() {
            return {
                todos: todoStorage.fetch(),
                newTodo: "",
                editedTodo: null,
                visibility: "all"
            }
        },
        watch: {
            data: {
                // immediate: true,
                deep: true,
                handler(todos, oldValue) {
                    todoStorage.save(todos);
                }
            }
        },
        computed: {
            filteredTodos() {
                return filters[this.visibility](this.todos);
            },
            remaining(){
                return filters.active(this.todos).length;
            },
            allDone:{
                get(){
                    return this.remaining === 0;
                },
                set(value){
                    this.todos.forEach(todo => {
                        todo.completed = value;
                    });
                }
            }
        },
        filters: {
            pluralize: function(n) {
                return n === 1 ? "item" : "items";;
            }
        },
        methods: {
            addTodo() {
                const value = this.newTodo && this.newTodo.trim();
                if (!value) return;
                
                this.todos.push({
                    id: todoStorage.uid++,
                    title: value,
                    completed: false
                });
                this.newTodo = "";
            },
            removeTodo(todo){
                this.todos.splice(this.todos.indexOf(todo), 1);
            },
            editTodo(todo){
                console.log(todo);
                
                this.beforeEditCache = todo.title;
                this.editedTodo = todo;
            },
            doneEdit(todo){
                if (!this.editedTodo) {
                    return;
                }
                this.editedTodo = null;
                todo.title = todo.title.trim();
                if (!todo.title) {
                    this.removeTodo(todo);
                }
            },
            cancelEdit(todo) {
                this.editedTodo = null;
                todo.title = this.beforeEditCache;
            },
            removeCompleted() {
                // console.log(this.todo);
                
                this.todos = filters.active(this.todos);
            }
        },
        // a custom directive to wait for the DOM to be updated
        // before focusing on the input field.
        // http://vuejs.org/guide/custom-directive.html
        directives: {
          "todo-focus": function(el, binding) {
            //   console.log(el);
              
            if (binding.value) {
              el.focus();
            }
          }
        }
    }

    //  Vue.directive('directiveName', {
    //         bind(el, binding, vnode) {
    //             el.style.arg = binding.value.arg;
    //         }
    //     });

    function onHashChange() {
        var visibility = window.location.hash.replace(/#\/?/, "");
        if (filters[visibility]) {
            app.visibility = visibility;
        } else {
            window.location.hash = "";
            app.visibility = "all";
        }
    }

    window.addEventListener("hashchange", onHashChange);
    onHashChange();
</script>

<style scoped>
    @import '../assets/css/todo.css';
</style>