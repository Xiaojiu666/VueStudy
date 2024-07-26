<script setup>
import { ref, reactive, computed } from 'vue'
import ItemTodo from '@/components/ItemTodo.vue';

const newTodoText = ref('')
const todos = ref([
  {
    id: 1,
    title: 'Do the dishes'
  },
  {
    id: 2,
    title: 'Take out the trash'
  },
  {
    id: 3,
    title: 'Mow the lawn'
  }
])

let nextTodoId = 4

function addNewTodo() {
  todos.value.push({
    id: nextTodoId++,
    title: newTodoText.value
  })
  newTodoText.value = ''
}



const numbers = ref([1, 2, 3, 4, 5])

const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0)
})

</script>

<!-- <template>
  <ul>
    <li v-for="(book, index) in bookList" :key="book">{{ index }} - {{ book.bookName }}</li>
  </ul>

  <template v-for="book in bookList" :key="book">
    <li>{{ book.bookName }}</li>
    <li class="divider" role="presentation"></li>
  </template> -->

<template>
  <!-- 提交事件将不再重新加载页面 -->
  <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input v-model="newTodoText" id="new-todo" placeholder="E.g. Feed the cat" />
    <button>Add</button>
  </form>
  <ul>
    <item-todo v-for="(todo, index) in todos" :key="todo.id" :title="todo.title"
      @remove="todos.splice(index, 1)"></item-todo>
  </ul>

  <li v-for="n in evenNumbers" :key="n">{{ n }}</li>

  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

  <div>Selected: {{ selected }}</div>

  <p>Message is: {{ message }}</p>
  <input v-model="message" placeholder="edit me" />
</template>
<style scoped></style>
