<template>
  <div id="createPost">
      <h1>Mon Post</h1>
      <div class="description">
          <input type="text" id="title" placeholder="Titre" v-model="post.title">
      </div>
      <div class="description">
          <textarea id="post" placeholder="Post"  v-model="post.post"></textarea>
        </div>
        <button id="postButton" @click="createPost">Publier</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"CreatePost",
    data(){
        return{
            post:{
                title :null,
                post:null,
                userId:null,
            }
        }
    },
    methods:{
        createPost(){
            axios.post("http://localhost:3000/api/post",{
                title: this.post.title,
                post:this.post.post,
                userId:this.post.userId
            })
            .then((res)=>{
				console.log(res);
				alert("Post publié")
			})
			.catch((error)=>{
				console.log(error);
				alert("erreur")
			})
    }

}
}
</script>

<style>

.description
{
    margin: 1rem;
}
#title
{
    width: 12rem;
    border: solid 2px;
}

#post
{
    width: 20rem;
    border: solid 2px;
}

#postButton
{
    width: 15rem;
}
</style>