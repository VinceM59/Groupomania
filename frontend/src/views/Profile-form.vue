<template>
  <main>
    <div id="logo">
            <img src="../assets/icon-left-font-monochrome-black.png" alt="GROUPOMANIA"> 
        </div> 
      <div class="profil">
          <h1>Bienvenue sur votre profil</h1>
          <form class="modifications">
            <label for="file" class="profileLabel">
              <div class="changeInfo">
                <img class="avatar" :src="Backend/images" :alt="user.avatar">
                </div>
                <div>
                    Changer d'image de profil :
                </div>
                <div class="changeInfo">
                    <img id="avatar" :src="user.avatar" :alt="user.avatar" class="avatar">  
                    <label>Fichier :<input name="image" id="image" type="file" @change="onFileChange"/></label> 
                </div>                
            </label>
              <div class="changeInfo">
                <p class="name"> Prénom: <span>{{user.firstname}}</span></p> 
                <label for="firstname">Changer mon prénom : </label>
                <input type="firstname" class="form-control" v-model="firstname" id="firstname" placeholder="Patrick" required /><br>
              </div>
              <div class="changeInfo">
                <p class="name"> Nom: <span>{{user.lastname}}</span></p> 
                <label for="lastname">Changer mon nom : </label>
                <input type="lastname" class="form-control" v-model="lastname" id="lastname" placeholder="Dupond" required /><br>
              </div>
              <div class="changeInfo">
                <p class="name"> Email: <span>{{user.email}}</span></p> 
                <label for="email">Changer mon Adresse Email : </label>
                <input type="email" class="form-control" v-model="email" id="email" placeholder="email@example.com" required /><br>
              </div>
              <div class="changeInfo">
                <p class="name"> Mot de passe: <span>{{user.password}}</span></p> 
                <label for="password">Changer mon mot de passe : </label>
                <input type="password" class="form-control" v-model="password" id="password"  required /><br>
              </div>
              
          </form>
      </div>
      <button type="submit" value="modifier" class="button" @click.prevent="modifyProfile()">Modifier </button>
      <router-link :to="'/home/'"><button class="button" type="button">Retour</button></router-link>
  </main>
</template>

<script>
//import axios from "axios"
export default {
  // eslint-disable-next-line
  name:"Profile",
  components:{},
  data(){
    return{
      user:{
        firstName:"",
        lastName:"",
        email:"",
        avatar:"",
        password:""
      },
      msgErr :null,
    };
  },
  beforeCreate(){
    fetch(`http://localhost:3000/api/user/${localStorage.getItem("userId")}`,{
      headers:{
        Authorization :`Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      data.createdAt = data.createdAt.split("U")[0]
      data.avatar = `http://localhost:3000/images/${data.avatar}`
      this.user =data
      localStorage.setItem("user", JSON.stringify(data))
      //console.log(user);
    })
    .catch(error=>{error})
  },
  // data (){
  //   return{
  //     user:{}
  //   }
  // },

  // methods:{

  //   modifyProfile(){
  //     const userId = localStorage.getItem("userId")
  //     const email = document.querySelector("#email").value;

  //     let user ={
  //       email:email
  //     };

  //     axios.put("http://localhost:3000/api/user/" + userId, user, {
  //       headers:{
  //         "Content-Type": "application/json",
  //             Authorization: "Bearer " + localStorage.getItem ("token")
  //       }
  //     })
  //   }
  // }

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
.profil{
  border: 1px solid black;
  margin: 20px;
  padding: 20px;
}
.name{
  font-weight: bold;
}
</style>