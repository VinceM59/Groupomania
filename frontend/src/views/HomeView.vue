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
import axios from "axios"


export default {
  name: 'HomeView',
  components: {
    Header
  },
  data(){
        return{
            posts:{
                // content:"",
                // pictureUrl:"",
                //userId:""
            },
            msgErr :null,
        };
    },
  created(){ 
    axios.get("http://localhost:3000/api/post/",{
      headers:  {
        "Authorization": "Bearer " + localStorage.getItem ("token")
      }
    })
  }
}
</script>
