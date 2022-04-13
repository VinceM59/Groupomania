<template>
    <div id="createPost">
        <form @submit.prevent="createPost">
            <div id="text">
                <textarea name="textarea" placeholder="Publiez votre message" v-model="text"></textarea>
            </div>
            <div id="preview" v-if="preview">
                <img :src="preview" :alt="preview">
            </div>         
            <div id="btns">                
                <input type="file" ref="file" name="file" class="upload" id="file" @change="selectFile">             
                <input type="submit" value="J'envoie !" class="btn">
            </div>
            <p>{{errMsg}}</p>
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