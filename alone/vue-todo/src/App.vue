<template>
    <div id="app">
      <todo-header></todo-header>
      <todo-input v-on:addTodo="addTodo"></todo-input>
      <todo-list v-bind:propsdata="todoItems" @removeTodo="removeTodo"></todo-list><!-- v-on:removeTodo-->
      <todo-footer v-on:removeAll="clearAll"></todo-footer>
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    addTodo(todoItem) {
      // 로컬스토리지에 데이터를 추가하는 로직
      console.log(todoItem); // value와 같음(input 입력값)
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created() {
    if(localStorage.length > 0) {
        for(var i = 0; i < localStorage.length; i++) {
            this.todoItems.push(localStorage.key(i));
        }
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #f6f6f8;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
