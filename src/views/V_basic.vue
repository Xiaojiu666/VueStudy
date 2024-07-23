<script setup>
import { ref, reactive, computed } from 'vue'

const count = ref(0)

const isActive = ref(true)
const hasError = ref(true)

const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery']
})
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

function increment() {
  count.value++
  isActive.value = !isActive.value
  hasError.value = !hasError.value
}

function deleteValue() {
  count.value--
}
</script>

<template>
  <button @click="increment">Count increment : {{ count }}</button>
  <button @click="deleteValue">Count delete: {{ count }}</button>
  <span>{{ publishedBooksMessage }}</span>

  <div class="static" :class="{ active: isActive, tColor: hasError }">AAAAAA</div>

  <span v-if="isActive">This is span</span>
  <span v-else>Oh no 😢</span>
</template>

<style scoped>
.active {
  display: block;
  margin: 0 auto 2rem;
}
.tColor {
  background-color: red;
}
</style>
