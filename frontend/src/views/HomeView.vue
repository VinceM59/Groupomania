<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Header />
    <CreatePost />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import CreatePost from '@/components/CreatePost.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    CreatePost
  }
}
</script>
