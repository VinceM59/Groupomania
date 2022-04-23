<template>


    <div id="createPost">
<div>
  <router-link :to="'/home/'"><button class="button" type="button">Retour</button></router-link>
</div>
        <form
      class="createPost"
      enctype="multipart/form-data"
      method="post"
      @submit.prevent="createPost()"
    >
      <h3>Créer votre post :</h3>
      <label>Texte :<input name="text" id="text" type="text" v-model="post.content"/></label>
      <label>Fichier :<input name="image" id="image" type="file" @change="onFileChange"/></label>
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
                content:null,
                pictureURL:null,
                userId:localStorage.getItem("userId"),
            }
        }
    },
    methods:{
        createPost(){
            axios.post("http://localhost:3000/api/post",{
                post:this.post.content,
                pictureURL:this.post.pictureURL,
                userId:this.post.userId
            }, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem ("token")
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



        // createPost(){
        //     const request = new XMLHttpRequest()
        //     request.open("post", "http://localhost:3000/api/post", true);
        //     request.setRequestHeader(
        //         "authorization",
        //         "Bearer" + localStorage.getItem("token")
        //     );
        //     const formData = new formData();
        //     formData.append("text", this.post.content)
        //     formData.append("image", this.post.pictureUrl)
        //     request.send(formData)
        //     request.onreadystatechange=()=>{
        //         if (request.readyState == XMLHttpRequest.DONE){
        //             if (request.status ==201){
        //                 this.$router.go(0);
        //             }
        //         }
        //     };
        // },
}
}
</script>

<style scoped>

.description
{
    margin: 1rem;
}
h3
{
    color: red;
}

#createPost
{
    display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 1px 1px 6px grey;
  margin: 50px;
}
input#text{
    margin:1rem;
}

input#image {
  margin:1rem;
}

button {
    margin: 1rem;
  font-size: 20px;
  border-radius: 25px;
  background: rgba(23, 35, 60);
  color: white;
}
</style>