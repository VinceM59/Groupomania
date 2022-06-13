<template>
  <main>
    <div id="logo">
           <a href="http://localhost:8080/home/" ><img src="../assets/icon-left-font-monochrome-black.png" alt="GROUPOMANIA"></a> 
        </div> 
      <div class="profil">
          <h1>Bienvenue sur votre profil</h1>
          <form class="profileUser">
            <label for="file" class="profileLabel">
              <div class="profileContainer">
                <img :src="user.avatar" :alt="user.avatar" class="profile">   
              </div>
            </label>
              <div class="changeInfo">
                <p class="name"> Prénom: <span>{{user.firstname}}</span></p> 
              </div>
              <div class="changeInfo">
                <p class="name"> Nom: <span>{{user.lastname}}</span></p> 
              </div>
              <div class="changeInfo">
                <p class="name"> Email: <span>{{user.email}}</span></p> 
              </div>
          </form>
      </div>
      
      <router-link to="/ModifyProfile"><button class="button" type="button">Modifier</button></router-link>
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
      user:{
        firstName:"",
        lastName:"",
        email:"",
        avatar:"",
        password:""
      },
      change:{
        firstname:"",
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
        data.avatar = `${data.avatar}`
        this.user =data
        //console.log(user);
      })
      .catch(error=>{error})
    },
  
    
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