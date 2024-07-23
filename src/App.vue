<script setup>
import { ref, reactive, computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="row">
      <nav>
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/studyList">StudyList</RouterLink>
      </nav>
    </div>
    <div class="row">
      <RouterView style="margin-top: 100px" />
    </div>
  </div>
</template>

<style scoped>
.link {
  padding: 12px;
}

#app {
  margin: 0; /* 移除默认的外边距 */
  padding: 0; /* 移除默认的内边距 */
}

.container {
  width: 100vw; /* 设置容器宽度为视口宽度 */
  max-width: 100vw;
  margin: 0; /* 移除默认的外边距 */
  padding: 0; /* 移除默认的内边距 */
  height: 100vh; /* 设置容器高度为视口高度 */
  display: flex; /* 使用flex布局 */
  align-items: flex-start; /* 将内容对齐到顶部 */
  justify-content: flex-start; /* 将内容对齐到左侧 */
  justify-content: flex-start; /* 将内容对齐到左侧 */
  flex-direction: column;
}

.row {
  display: flex; /* 使用flex布局 */
  flex-direction: row; /* 子元素水平排列 */
  width: 100%; /* 行的宽度为100% */
  margin: 0; /* 移除行的默认外边距 */
  padding: 0; /* 移除行的默认内边距 */
}

nav {
  display: flex; /* 使用flex布局 */
  flex-direction: row; /* 子元素水平排列 */
  width: 100%; /* 导航栏的宽度为100% */
}

.column {
  flex: 1; /* 设置每列占据的空间比例，使每列均匀分布 */
  border: 1px solid #000; /* 添加1像素的黑色实线边框 */
  padding: 10px; /* 添加10像素的内边距 */
  box-sizing: border-box; /* 确保内边距和边框包含在元素的总宽度和高度内 */
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
