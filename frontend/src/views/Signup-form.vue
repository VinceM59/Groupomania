<template>
	<div class="signup">
		<div class="formulaire">
			<h1>Bienvenue sur Groupomania</h1>
			<form @submit.prevent="submit">
				<div class="section">
					<label for="lastname">Nom</label>
					<input type="text" id="lastname" v-model="user.lastname" required>
				</div>
				<div class="section">
					<label for="firstname">Prénom</label>
					<input type="text" id="firstname" v-model="user.firstname" required>
				</div>
				<div class="section">
					<label for="email">Email</label>
					<input type="text" id="email" v-model="user.email" required>
				</div>
				<div class="section">
					<label for="password">Password</label>
					<input type="password" id="password" v-model="user.password" required>
				</div>
		<button id="signupButton" type="submit">Inscription</button>
			</form>
		</div>
		<p>Vous avez déjà un compte ?  <router-link to ="/login">Connexion</router-link></p>
	</div>
  
</template>

<script>
import axios from "axios"
export default {
	name:"Signup-form",
	data(){
		return{
			user:{
				lastname:null,
				firstname:null,
				email:null,
				password:null,
			}
		}
	},
	methods:{
		submit(){
			axios.post("http://localhost:3000/api/auth/signup",{

				lastname:this.user.lastname,
				firstname:this.user.firstname,
				email:this.user.email,
				password:this.user.password
			})
			.then((res)=>{
				console.log(res);
				alert("Compte validé")
			})
			.catch((error)=>{
				console.log(error);
				alert("erreur")
			})
	
	
		}
		
	}

}
</script>

<style scoped>

.signup
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