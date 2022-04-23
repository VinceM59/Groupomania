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
          <p class="text">{{posts.content}}</p>
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
        return{
            posts:{
                content:"",
                pictureURL:"",
                userId:""
            },
            user: JSON.parse(localStorage.getItem("user")),
            msgErr :null,
        };
    },
    lookPosts(){
      axios.get("http://localhost:3000/api/post",{
        posts:this.posts.content,
        pictureURL:this.posts.pictureURL,
        userId:this.posts.userId
      },{
        Headers:{
          "Authorization": "Bearer " + localStorage.getItem ("token")
        }
      })
      .then((res)=>{
        console.log(res);
        console.log("salut");
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
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  margin: 5px;
  width: 80%;
}
</style>
