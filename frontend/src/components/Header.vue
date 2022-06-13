<template>
    <header class="header">
        <div class="title">Bienvenue chez Groupomania</div>
        <div id="navigation">
        <div id="logo">
            <img src="../assets/icon-left-font.png" alt="GROUPOMANIA"> 
        </div>  

        <div class="profil">
            <router-link to="/createPost"><button  class="button" type="button" >Créer votre post</button></router-link>
            <router-link to="/profile"><button class="button" type="button">Profil</button></router-link>
            <router-link to="/" @click="logout" ><button class="button" type="button" >Déconnexion</button></router-link>  
        </div>
        
        </div>           
    </header>
</template>

<script>
import router from "../router"
export default {
    name: 'Header-nav',

    methods:{
        logout(){
            router.push("/")
            localStorage.clear()
            console.log("user déconnecté");
        }
    }
}


</script>

<style scoped>
header 
{
    margin: 2rem;
}
#navigation{
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 100px;
    border-bottom: 3px solid red;
    justify-content: space-between;
}

#logo
{
    text-align: center;
}
img 
{
    height: 12rem;
}

.button {
    margin: 1rem;
  font-size: 20px;
  border-radius: 25px;
  background: rgba(23, 35, 60);
  color: white;
  cursor: pointer;
}
.link{
    text-align: center;
    padding: 1rem;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.75);
}
</style>