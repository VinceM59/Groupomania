<template>
  <div class="home">
    <div>
    <Header />
    </div>
    <div class="Posts">
      <div class="post" v-for="post in posts" :key="post.id">
      <div class="userProfile">
        <div class="profileContainer">
                    <img :src="'http://localhost:3000/images/' + post.User.avatar" :alt="post.User.avatar" class="profile">    
                </div>
        <div class="auteur">
          <p> Publié par {{post.User.lastname}} {{post.User.firstname}}</p>
          <p> Le {{post.createdAt}}</p>
        </div>
      </div>
        <div class="contenu">
          <p class="text">{{post.content}}</p>
          <img class="picture" alt="post.pictureURL" src="">
        </div>
        <button v-if="post.userId" @click="deletePost(post.id)">SUPPRIMER</button>
        
        <div class="comments">
          <div class="commentaire" v-for="comment in post.Comments" :key="comment.id">
            <p>{{ comment.content }}</p>
            <span>auteur: {{comment.User.lastname}} {{comment.User.firstname}} {{ comment.createdAt }}
            <button  @click="deleteComment(comment.id)">SUPPRIMER</button></span>
          </div>
        </div>
        <div class="newComment"  @submit.prevent="createComment()">
          <textarea id="comment" placeholder="Commentaire..." v-model="comment.content"></textarea>
          <button @click="createComment(post.id)">AJOUTER UN COMMENTAIRE</button>
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
            posts:[],
            comments :[],
            comment:{
              userId:localStorage.getItem("userId"),
              content:null,
              postId:null,
            }
        };
    },
    mounted(){
      console.log(this.posts);
      console.log("Je passe bien ici");
      axios.get("http://localhost:3000/api/post/",{
        headers:{
       Authorization :`Bearer ${localStorage.getItem("token")}`
     }
      })
      .then((response)=>{
        this.posts = response.data.posts;
        console.log(response.data.posts);
      })
      console.log("hola");
      console.log(this.posts.content);
    },
    methods: {
      deletePost(postId)	{
        console.log("je suis là");
        axios.delete(`http://localhost:3000/api/post/` + postId,{
        headers:{
       Authorization :`Bearer ${localStorage.getItem("token")}`
     }
      })
        .then(res => {
          console.log(res.data);
          window.location.reload()
        })
        .catch(err => {console.log(err)});
      },

      createComment(postId){
          console.log(this.comment);
            axios.post("http://localhost:3000/api/comment/",{
                comment:this.comment.content,
                userId:this.comment.userId,
                postId:postId
            }, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem ("token")
                }
            })
            .then((res)=>{
				console.log(res);
				alert("Commentaire publié")
        window.location.reload()
			})
			.catch((error)=>{
				console.log(error);
				//alert("erreur")
			})
    },
    mounted(){
      console.log(this.comments);
      console.log("je monte les commentaires");
    }
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
.profile {
    height: 100%;
    width: 35%;
    object-fit: cover;
}
.userProfile{
  display: flex;
    justify-content: space-between;
    align-items: center;
}
button {
    margin: 1rem;
  font-size: 20px;
  border-radius: 25px;
  background: rgba(23, 35, 60);
  color: white;
}
</style>
