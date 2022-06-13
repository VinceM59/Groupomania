<template>

<main>
       <div id="logo">
           <a href="http://localhost:8080/home/" ><img src="../assets/icon-left-font-monochrome-black.png" alt="GROUPOMANIA"></a> 
        </div> 
    <div id="createPost">
        <form
      class="createPost"
      enctype="multipart/form-data"
      method="post"
      @submit.prevent="createPost()"
    >
      <h3>Créer votre post :</h3>
      <label>Texte :<input name="text" id="text" type="text" v-model="post.content"/></label>
      <label>Fichier :<input name="image" id="image" ref="image" type="file" @change="handleFile"/></label>
      <button
        v-on:click.prevent.stop="createPost"
        aria-label="Postez"
        class="btn"
        type="submit"
      >
        Postez
      </button>
    </form>
<div>
  <router-link :to="'/home/'"><button class="button" type="button">Retour</button></router-link>
</div>
    </div>
</main>
</template>

<script>
import axios from 'axios';
import router from "../router"
export default {
    name:"CreatePost",
    
    data(){
        return{
            post:{
                content:null,
                pictureURL:'',
                image:'',
                userId:localStorage.getItem("userId"),
            }
        }
    },
    methods:{
        createPost(){
          console.log(this.post);
          let formData = new FormData();
          formData.append("post", this.post.content);
          formData.append("userId", this.post.userId);
          formData.append("image", this.post.image);

          
            axios.post("http://localhost:3000/api/post",formData, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem ("token")
                }
            })
            .then((res)=>{
				console.log(res);
				alert("Post publié")
        router.push("/home")
			})
			.catch((error)=>{
				console.log(error);
				alert("Erreur système")
			})
    },
     
    handleFile: function () {
      const file = this.$refs.image.files[0];
      console.log(file);
      this.post.image = file;
    }
}
}
</script>

<style scoped>

#logo
{
    text-align: center;
    margin: -5rem;
}
img 
{
    height: 12rem;
}

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