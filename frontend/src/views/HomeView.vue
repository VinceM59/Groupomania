<template>
  <div class="home">
    <div>
    <Header />
    </div>
    <div class="posts">
      <div class="post" v-for="post in posts" :key="post.id"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'


export default {
  name: 'HomeView',
  components: {
    Header
  }
}
</script>
