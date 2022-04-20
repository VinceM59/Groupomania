<template>
<main>
  <div class="login">
      <div class="formulaire">
        <h1>Connexion</h1>
            <form @submit.prevent="submit">
                <div class="section">
                    <label for="email">email</label>
                    <input type="email" id="email" v-model="user.email" required="">
                </div>
                <div class="section">
                    <label for="password">password</label>
                    <input type="password" id="password" v-model="user.password" required="">
                </div>
     <button  id="loginButton" type="submit">Connexion</button>
            </form>
     </div>
     <p>Vous n'avez pas de compte ?  <router-link to ="/signup">Inscrivez-vous</router-link></p>
  </div>
</main>
</template>

<script>
import axios from "axios"
import router from "../router"
export default {
    name:"Login-form",
    components:{},
    data(){
        return{
            user:{
                email:"",
                password:"",
            },
            msgErr :null,
        };
    },
    methods:{

submit(){
            axios.post("http://localhost:3000/api/auth/login",{

                email:this.user.email,
                password:this.user.password
            })
            .then((res)=>{
                console.log(res.data.token)
                let data = res.data;
                localStorage.setItem("userId", data.userId)
                localStorage.setItem("token", data.token)
                if (res.status ===200){
                    router.push("/home")
                }else{
                    alert("erreur email ou mot de passe")
                }
            }) 
            .catch((error)=>{console.error(error)})
            }



        // login() {
		// 	if (!this.user.email || !this.user.password){
        //         this.msgErr = "Champs manquant";
        //         return;
        //     }
        //     const request = new XMLHttpRequest();
        //     request.open("post", "http://localhost:3000/api/auth/login", true);
        //     request.setRequestHeader(
        //         'Content-Type',
        //         'application/json;charset=UTF-8',
        //     );
        //     const data = {
        //         email:this.user.email,
        //         password:this.user.password,
        //     };
        //     request.send(JSON.stringify(data));
        //     request.onreadystatechange=()=>{
        //         if (request.readyState===XMLHttpRequest.DONE){
        //             if (request.status===200){
        //                 const user = JSON.parse(request.responseText);
        //                 localStorage.setItem("token", user.token);
        //                 localStorage.setItem("user", JSON.stringify(user));
        //                 this.$router.push("/home");
        //             }else{
        //                 alert("une erreur est survenue");
        //             }
        //         }
        //     };
		// },
        },
    };


</script>

<style scoped>

.login
{
	border: solid 0.1rem #091f43;
	border-radius: 1rem;
	box-shadow: 0.5rem;
	padding: 1rem;
}

.formulaire
{
	width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section
{
     margin: 1rem;
    display: flex;
}

label
{
    width: 80%;
    flex: 1;
}

</style>