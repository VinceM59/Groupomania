<template>

    <div id="createPost">
        <form
      class="createPost"
      enctype="multipart/form-data"
      method="post"
      @submit.prevent="createPost()"
    >
      <h3>Créer votre post :</h3>
      <label
        >Texte :<input name="text" id="text" type="text" v-model="post.text"
      /></label>
      <label
        >Fichier :
        <input name="image" id="image" type="file" @change="onFileChange"
      /></label>
      <button
        v-on:click.prevent.stop="createPost"
        aria-label="Postez"
        class="btn"
        type="submit"
      >
        Postez
      </button>
    </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"CreatePost",
    
    data(){
        return{
            post:{
                post:null,
                pictureURL:null,
                userId:null,
            }
        }
    },
    methods:{
        createPost(){
            axios.post("http://localhost:3000/api/post",{
                post:this.post.post,
                pictureURL:this.post.pictureURL,
                userId:this.post.userId
            }, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY0OTY5MzAxNywiZXhwIjoxNjQ5Nzc5NDE3fQ.eR8pNNk9qfe2zxJuQpbqvj39gu-gDxlbMmyVbkYfIwE"
                }
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