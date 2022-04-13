<template>
    <header>
        <div id="navigation">
        <div id="logo">
            <img src="../assets/icon-left-font.png" alt="GROUPOMANIA">
            <h3>{{header}}</h3>  
        </div>  
        <form action="" class="formulaire">
               <input class="champ" type="text" value="recherche"/>
                    <input class="bouton" type="button" value=" " />   
                </form>
        <div id="routes" v-if="!logged">
            <router-link to="/signup" class="link">Sign up</router-link>
            <router-link to="/" class="link">Login</router-link> 
            <router-link to="/" class="link">Logout</router-link>   
        </div>  
        </div>           
    </header>
</template>

<script>
export default {
    name: 'Header',
    // props: {
    //     header: String,
    //     home: Boolean
    // }
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


.link{
    text-align: center;
    padding: 1rem;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.75);
}
</style>