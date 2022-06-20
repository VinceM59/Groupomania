<template>
  <div class="home" v-if="logged">
    <div>
    <Header />
    </div>
    <div class="Posts">
      <div class="post" v-for="post in posts" :key="post.id">
      <div class="userProfile">
        <!-- <div class="profileContainer"> -->
                    <img :src="post.User.avatar" :alt="post.User.avatar" class="profile">    
        <!-- </div> -->
        <div class="auteur">
          <p> Publié par {{post.User.lastname}} {{post.User.firstname}}</p>
          <p> Le {{ formatDate(post.createdAt) }}</p>
        </div>
      </div>
        <div class="contenu">
          <p class="text">{{post.content}}</p>
          <div v-if="post.pictureURL" >
          <img class="picture" alt="post.pictureURL" :src="post.pictureURL">
          </div>
        </div>
        <div >
        <button v-if="userId == post.UserId || isAdmin" @click="deletePost(post.id)">SUPPRIMER</button>
        </div>
        <div class="comments">
          <div class="commentaire" v-for="comment in post.Comments" :key="comment.id">
            <p class="text_comment">{{ comment.content }}</p>
            <div class="info_comm">
            <img :src="comment.User.avatar" :alt="comment.User.avatar" class="profile_comm"> 
            <span class="span">Publié par  {{comment.User.lastname}} {{comment.User.firstname}}</span>
            <button v-if="userId == comment.UserId || isAdmin" class="button_comment" @click="deleteComment(comment.id)">SUPPRIMER</button>
            </div>
              
           
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
            userId: localStorage.getItem("userId"),
            isAdmin: (localStorage.getItem("isAdmin") === "true"),
            comment:{
              userId:localStorage.getItem("userId"),
              content:null,
              postId:null,
              newComment:null,
            }
        };
    },
    mounted(){
      if (!localStorage.getItem('token')) {
        window.location = "/"
      }
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

      logged() {
        if (localStorage.getItem('token')) {
          return false;
        }
        return true
      },

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
    // auth(commentUserId) {
           
    //         if (this.userId !== commentUserId) {
    //             return false
    //         }
    //         return true              
    //     },
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
    border-radius: 20%;
    margin: 2%;
}

.profile_comm {
    height: 100%;
    width: 4%;
    object-fit: cover;
    border-radius: 50%;
    margin: 2%;
}
.userProfile{
  display: flex;
    /* justify-content: space-between; */
    align-items: center;
    text-align: left;
}
button {
    background: linear-gradient(#00c6fb, #005bea);
    padding: 0.75rem 1rem;
    color: #F5F5F5;
    border-radius: 100px;
    cursor: pointer;
    box-shadow: 0 0 16px #0000002e;
    font-size: 0.8rem;
    margin: 1rem;
}
button:hover{
 background-color: #F5F5F5;
      box-shadow: 0.25rem 0.25rem 10px rgb(0 0 0 / 50%);
      transition-duration: 800ms;
      filter: brightness(1.1);
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
  font-size: 1em;
}
.text_comment{
padding-top: 15px;
font-size: 1.2em;
}
.button_comment{
	padding:0.3em;
	padding-left: 1em;
	padding-right: 1em;
	border-radius: 0.5em;
	font-size: 1rem;
}
/* .span{
  margin-bottom: 1em;
} */

.info_comm{
      display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
}


@media screen and (max-width: 992px){
  #navigation{
    width: 10%;
  }
}
</style>
