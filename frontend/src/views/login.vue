<template>
  <div class="login">
      <div class="formulaire">
        <h1>Connexion</h1>
            <form>
                <div>
                    <label for="email">email</label>
                    <input type="text" id="email" v-model="user.email" required>
                </div>
                <div>
                    <label for="password">password</label>
                    <input type="password" id="password" v-model="user.password" required>
                </div>
            </form>
     </div>
     <button id="loginButton" type="button" @click="login">Connexion</button>
  </div>
</template>

<script>
export default {
    name:"login",
    data(){
        return{
            user:{
                email:null,
                password:null,
            }
        }
    },
    components:{},
    methods:{
        login(){
            let email = this.user.email;
            let password =this.user.password;
        }
    }

}
</script>

<style>

</style>