<template>
  <div class="home">
    <div>
    <Header />
    </div>
    <div class="Posts">
      <div class="post" v-for="post in posts" :key="post.id">
        <div class="auteur">
          <p> Publié par {{post.User.lastname}} {{post.User.firstname}}</p>
          <p> Le {{post.createdAt}}</p>
        </div>
        <div class="contenu">
          <p class="text">{{post.content}}</p>
          <img class="picture" alt="post.pictureURL" src="">
        </div>
      </div>

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
    console.log("Test")
        return{
            posts:[]
        };
    },
    mounted(){

      console.log("Je passe bien ici");
      axios.get("http://localhost:3000/api/post/",{
        headers:{
       Authorization :`Bearer ${localStorage.getItem("token")}`
     }
      })
      .then((response)=>{
        this.posts = response.data.posts;
      })
    }
  
}
</script>

<style scoped>
.posts {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 0 auto;
  width: 100%;
}

.post {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  margin: 5px;
  width: 80%;
}
</style>
