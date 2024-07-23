<script setup>
import { ref, reactive, computed } from 'vue'
const bookList = ref([{ bookName: 'Math' }, { bookName: 'English' }, { bookName: 'AAAAAA' }])
</script>

<template>
  <ul>
    <li v-for="(book, index) in bookList" :key="book">{{ index }} - {{ book.bookName }}</li>
  </ul>

  <template v-for="book in bookList" :key="book">
    <li>{{ book.bookName }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</template>
