<script setup>
import { ref, reactive, computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

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

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/studyList">StudyList</RouterLink>
  </nav>
  <RouterView style="margin-top: 100px" />
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>

<style scoped>
.active {
  display: block;
  margin: 0 auto 2rem;
}
.tColor {
  background-color: red;
}
</style>
<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
