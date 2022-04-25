<template>
  <div class="home">
    <div>
    <Header />
    </div>
    <div class="Posts">
      <div class="post" v-for="post in posts" :key="post.id">
        <div class="auteur">
          <p> Publié par {{user.lastname}} {{user.firstname}}</p>
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
//import axios from "axios"


export default {
  name: 'HomeView',
  components: {
    Header
  },
  data(){
        return{
            posts:{
                content:"",
                pictureURL:"",
                userId:"",
                createdAt:""
            },
            user: JSON.parse(localStorage.getItem("user")),
            msgErr :null,
        };
    },
    getAllPosts(){
      fetch(`http://localhost:3000/api/post/${localStorage.getItem("userId")}`,{
        headers:{
          Authorization : `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        this.posts=data
      })
      // axios.get("http://localhost:3000/api/post/",{
      //   content : this.posts.content
      // })
      // .then((response)=>{
      //   console.log(response);
      // })
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
