<template>
  <div class="home">
    <div>
    <Header />
    </div>
    <div class="Posts">
      <div class="post" v-for="post in posts" :key="post.id">
      <div class="userProfile">
        <!-- <div class="profileContainer"> -->
                    <img :src="'http://localhost:3000/images/' + post.User.avatar" :alt="post.User.avatar" class="profile">    
        <!-- </div> -->
        <div class="auteur">
          <p> Publié par {{post.User.lastname}} {{post.User.firstname}}</p>
          <p> Le {{ formatDate(post.createdAt) }}</p>
        </div>
      </div>
        <div class="contenu">
          <p class="text">{{post.content}}</p>
          <img class="picture" alt="post.pictureURL" :src="post.pictureURL">
        </div>
        <div >
        <button  @click="deletePost(post.id)">SUPPRIMER</button>
        </div>
        <div class="comments">
          <div class="commentaire" v-for="comment in post.Comments" :key="comment.id">
            <p class="text_comment">{{ comment.content }}</p>
            <span>Publié par  {{comment.User.lastname}} {{comment.User.firstname}}
              
            <button class="button_comment" @click="deleteComment(comment.id)">SUPPRIMER</button></span>
           
          </div>
        </div>
        <div class="newComment"  @submit.prevent="createComment()">
          <input id="comment" placeholder="Commentaire..." v-model="newComment">
          <button class="button_comment" @click="createComment(post.id, post.newComment)" type="button">AJOUTER UN COMMENTAIRE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import axios from "axios"
import moment from "moment";



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
              newComment:null,
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
         if (!this.newComment) {
                alert("champ manquant")
                return
            }
          console.log(this.comment);
            axios.post("http://localhost:3000/api/comment/",{
                comment: this.newComment,
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
    auth(commentUserId) {
           
            if (this.userId !== commentUserId) {
                return false
            }
            return true              
        },
    deleteComment(commentId)	{
        console.log("je suis dans la suppression des comms");
        axios.delete(`http://localhost:3000/api/comment/` + commentId,{
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
      formatDate(value) {
        if (value) {
          return moment(String(value)).format("DD/MM/YYYY HH:mm");
        }
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
  /* align-items: center; */
  border: 1px solid black;
  margin: 5px;
  width: 80%;
}
.text{
  font-size: 1.5em;
}
.profile {
    height: 100%;
    width: 10%;
    object-fit: cover;
}
.userProfile{
  display: flex;
    /* justify-content: space-between; */
    align-items: center;
    text-align: left;
}
button {
    margin: 1rem;
  font-size: 20px;
  border-radius: 25px;
  background: rgb(50, 76, 133);
  color: white;
}
.picture {
  width: 40%;
}
.commentaire{
 background-color: #F5F5F5;
  border-radius: 2rem;
  position: relative;
  box-shadow: 0 0 10px #0000002e;
  margin: 28px;
}
p{
  font-size: 1.2em;
}
.text_comment{
padding-top: 15px;
}
.button_comment{
	padding:0.3em;
	padding-left: 1em;
	padding-right: 1em;
	border-radius: 0.5em;
	font-size: 1rem;
}
	
</style>
