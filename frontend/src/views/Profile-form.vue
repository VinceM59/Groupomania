<template>
  <main>
      <div class="profil">
          <h1>Modification de votre profil</h1>
          <form class="modifications">
              <div class="changeInfo">
                <div class="inputInfo" v-if="profil">
                    <label for="firstName">Modification du prénom :</label>
                    <input type="text" name="firstName" v-model="user.firstName"/>
                </div> 
                <p v-else> Prénom: <span>{{user.firstName}}</span></p> 
              </div>
              <div class="changeInfo">
                <div class="inputInfo" v-if="profil">
                    <label for="lastName">Modification du nom :</label>
                    <input type="text" name="lastName" v-model="user.lastName"/>
                </div> 
                <p v-else> Nom: <span>{{user.lastName}}</span></p> 
              </div>
              <div class="changeInfo">
                <div class="inputInfo" v-if="profil">
                    <label for="email">Modification de l'email :</label>
                    <input type="email" name="email" v-model="user.newEmail"/>
                </div> 
                <p v-else> Email: <span>{{user.email}}</span></p> 
              </div>
              <div class="changeInfo">
                <div class="inputInfo" v-if="profil">
                    <label for="password">Modification du mot de passe:</label>
                    <input type="text" name="password" v-model="user.newPassword"/>
                </div> 
                <p v-else> Mot de passe: <span>{{user.password}}</span></p> 
              </div>
          </form>
      </div>
      <button v-if="!Profile" v-on:click.prevent.stop="Profile = true" class="button" type="submit">Modifier</button>
      <router-link :to="'/home/'"><button class="button" type="button">Retour</button></router-link>
  </main>
</template>

<script>
export default {
  // eslint-disable-next-line
  name:"Profile",
  components:{},
  data(){
    return{
      user:{},
      Profile: false,
    };
  },
  created(){
    this.account();
  },

  methods:{
    account(){
      const request = new XMLHttpRequest();
      request.open("get", "http://localhost:3000/api/user/:id", true);
      request.setRequestHeader(
        "Content-Type",
        "application/json;charset=UTF-8"
      );
      request.setRequestHeader(
        "Authorization",
        "Bearer" + localStorage.getItem("token")
      );
      request.send();
      request.onreadystatechange=()=>{
        if (request.readyState == XMLHttpRequest.DONE) {
          if (request.status == 200) {
            const user = JSON.parse(request.responseText);
            this.user = user;
          }
        }
      }
    },

    modifyProfile(){
      const request=new XMLHttpRequest();
      request.open("put", "http://localhost:3000/api/user/:id" + this.userId, true);
      request.setRequestHeader(
        "Authorization",
        "Bearer" + localStorage.getItem("token")
      );
      request.setRequestHeader(
        "Content-Type",
        "application/json;charset=UTF-8"
      );
      request.send(JSON.stringify({
        firstName:this.user.firstName,
        lastName:this.user.lastName,
        email :this.user.newEmail,
        password:this.user.newPassword
      }),);
      request.onreadystatechange = () => {
        if (request.readyState == XMLHttpRequest.DONE) {
          if (request.status == 200) {
            this.$router.go(0);
          }
        }
      }
    }
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