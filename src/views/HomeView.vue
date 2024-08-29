<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from '@/services/api'

const { t } = useI18n()
const { locale } = useI18n()
const setLocale = (value: string): void => {
  locale.value = value
}

const posts = ref(null)
const loading = ref<boolean>(false)
const getPosts = async () => {
  try {
    loading.value = true
    const response = await axios.get('/posts')
    posts.value = response.data
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

getPosts()
</script>

<template>
  <div class="home container">
    <h1 class="home__title">{{ t('home.title') }} --- HOME PAGE</h1>
    <div class="home__locale">
      <button @click="setLocale('ru')">ru</button>
      <button @click="setLocale('kk')">kk</button>
    </div>
    <router-link to="/about" class="home__btn">About</router-link>
    <p v-if="loading">Loading...</p>
    <pre v-else>{{ posts }} --- posts</pre>
  </div>
</template>

<style scoped lang="scss">
.home {
  &__title {
    font-size: 30px;
    color: $secondary-color;
    text-align: center;
  }
  &__locale {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    button {
      margin: 0 10px;
      padding: 5px 10px;
      border: 1px solid $secondary-color;
      border-radius: 5px;
      background-color: $secondary-color;
      color: white;
      cursor: pointer;
      &:hover {
        background-color: darken($secondary-color, 10%);
      }
    }
  }
  &__btn {
    display: block;
    margin: 20px;
    padding: 10px 20px;
    border: 1px solid $secondary-color;
    border-radius: 5px;
    background-color: $secondary-color;
    color: white;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: darken($secondary-color, 10%);
    }
  }
}
</style>
