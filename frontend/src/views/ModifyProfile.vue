<template>
<div class="modifyProfile">
  <div id="logo">
            <img src="../assets/icon-left-font-monochrome-black.png" alt="GROUPOMANIA"> 
        </div> 
  <form @submit.prevent="modifyProfile">
        <h1>Modification de vos informations</h1>
         <div class="changeInfo">
                    <!-- <img id="avatar" :src="user.avatar" :alt="user.avatar" class="avatar">   -->
                    <label>Changer votre photo de profil :<input name="image" id="image" type="file" @change="onFileChange"/></label> 
          </div> 
         
                <label for="firstname">Changer mon prénom : </label>
                <input type="text" id="user-firstname" v-model="user.firstname"  placeholder="Patrick" required /><br>
              
             
                <label for="lastname">Changer mon nom : </label>
                <input type="text" id="user-lastname" v-model="user.lastname"  placeholder="Dupond" required /><br>
             
             
                <label for="email">Changer mon Adresse Email : </label>
                <input type="email" id="user-email" v-model="user.email"  placeholder="email@example.com" required /><br>
             
              <!-- <div class="changeInfo">
                <p class="name"> Mot de passe: <span>{{user.password}}</span></p> 
                <label for="password">Changer mon mot de passe : </label>
                <input type="password" class="form-control" v-model="password" id="password"  required /><br>
              </div> -->
              <button  id="modifyButton"  @click.prevent="modifyProfil()">Valider</button>
              <button id="deleteProfile" @click.prevent="deleteProfil()">Supprimer le compte</button>
      <router-link :to="'/Profile/'"><button class="button" type="button">Retour</button></router-link>
      </form>
</div>
</template>

<script>
import axios from "axios"
import router from "../router"
export default {
  name:"ModifyProfile",

    data(){
      return{
        user:"",
        firstname:"",
        lastname:"",
        email:"",
      }
    },
  beforeCreate(){
     axios.get(`http://localhost:3000/api/user/${localStorage.getItem("userId")}`,{
        headers:{
          Authorization :`Bearer ${localStorage.getItem("token")}`
        }
      })
      .then((response)=>{
        this.user=response.data
        console.log(response.data);
          console.log("salut");
      })
      
      .catch(error=>{error})
    },

    methods:{
      modifyProfil(){
        console.log("je passe ici");
        axios.put(`http://localhost:3000/api/user/${localStorage.getItem("userId")}`, {
          firstname:this.user.firstname,
          lastname:this.user.lastname,
          email:this.user.email,
        },{
          headers: {
                        "Authorization": "Bearer " + localStorage.getItem ("token")
                    }
        })
        .then((response)=>{
        console.log(response)
        this.firstname=response.firstname
        router.push("/profile")
        })

        .catch((error)=>console.log(error))
      },


       deleteProfil(){
        console.log("ça passe là");
        axios.delete(`http://localhost:3000/api/user/${localStorage.getItem("userId")}`,{
          headers: {
                        "Authorization": "Bearer " + localStorage.getItem ("token")
                    }
        })
        .then((response)=>{
        console.log(response)
        alert("Utiisateur supprimé !")
        localStorage.clear()
        router.push("/")
        })

        .catch((error)=>console.log(error))
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

button {
    margin: 1rem;
  font-size: 20px;
  border-radius: 25px;
  background: rgba(23, 35, 60);
  color: white;
}
form {
  
  border: 1px solid black;
  margin: 20px;
  padding: 20px;
}
label {
  margin:20px;
}

</style>