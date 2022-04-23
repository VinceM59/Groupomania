<template>
  <main>
      <div class="profil">
          <h1>Bienvenue sur votre profil</h1>
          <form class="modifications">
            <label for="file" class="profileLabel">
                <div>
                    Changer d'image de profil :
                </div>
                <div class="profileContainer">
                    <img id="preview" :src="user.profile" :alt="user.profile" class="profile">  
                    <label>Fichier :<input name="image" id="image" type="file" @change="onFileChange"/></label> 
                </div>                
            </label>
              <div class="changeInfo">
                <div class="inputInfo" v-if="profil">
                    <label for="firstname">Modification du prénom :</label>
                    <input type="text" name="firstname" v-model="user.firstname"/>
                </div> 
                <p v-else> Prénom: <span>{{user.firstname}}</span></p> 
                <label for="firstname">Changer mon prénom : </label>
                <input type="firstname" class="form-control" v-model="firstname" id="firstname" placeholder="Patrick" required /><br>
              </div>
              <div class="changeInfo">
                <div class="inputInfo" v-if="profil">
                    <label for="lastname">Modification du nom :</label>
                    <input type="text" name="lastname" v-model="user.lastname"/>
                </div> 
                <p v-else> Nom: <span>{{user.lastname}}</span></p> 
                <label for="lastname">Changer mon nom : </label>
                <input type="lastname" class="form-control" v-model="lastname" id="lastname" placeholder="Dupond" required /><br>
              </div>
              <div class="changeInfo">
                <div class="inputInfo" v-if="profil">
                    <label for="email">Modification de l'email :</label>
                    <input type="email" name="email" v-model="user.newEmail"/>
                </div> 
                <p v-else> Email: <span>{{user.email}}</span></p> 
                <label for="email">Changer mon Adresse Email : </label>
                <input type="email" class="form-control" v-model="email" id="email" placeholder="email@example.com" required /><br>
              </div>
              <div class="changeInfo">
                <div class="inputInfo" v-if="profil">
                    <label for="password">Modification du mot de passe:</label>
                    <input type="text" name="password" v-model="user.newPassword"/>
                </div> 
                <p v-else> Mot de passe: <span>{{user.password}}</span></p> 
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
import axios from "axios"
export default {
  // eslint-disable-next-line
  name:"Profile",
  components:{},
  // data(){
  //   return{
  //     user:{
  //       firstName:"",
  //       lastName:"",
  //       email:"",
  //       password:""
  //     },
  //     msgErr :null,
  //   };
  // },
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
      data.profile = `http://localhost:3000/images/${data.avatar}`
      this.user =data
      localStorage.setItem("user", JSON.stringify(data))
      //console.log(user);
    })
    .catch(error=>{error})
  },
  data (){
    return{
      user:{}
    }
  },

  methods:{

    modifyProfile(){
      const userId = localStorage.getItem("userId")
      const email = document.querySelector("#email").value;

      let user ={
        email:email
      };

      axios.put("http://localhost:3000/api/user/" + userId, user, {
        headers:{
          "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem ("token")
        }
      })
    }



    // account(){
    //   const request = new XMLHttpRequest();
    //   request.open("get", "http://localhost:3000/api/user/", true);
    //   request.setRequestHeader(
    //     "Content-Type",
    //     "application/json;charset=UTF-8"
    //   );
    //   request.setRequestHeader(
    //     "Authorization",
    //     "Bearer" + localStorage.getItem("token")
    //   );
    //   request.send();
    //   request.onreadystatechange=()=>{
    //     if (request.readyState == XMLHttpRequest.DONE) {
    //       if (request.status == 200) {
    //         const user = JSON.parse(request.responseText);
    //         this.user = user;
    //       }
    //     }
    //   }
    // },

  }

}
</script>

<style scoped>
button {
    margin: 1rem;
  font-size: 20px;
  border-radius: 25px;
  background: rgba(23, 35, 60);
  color: white;
}
</style>