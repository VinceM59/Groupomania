<template>
	<div class="signup">
		<div class="formulaire">
			<h1>Bienvenue sur Groupomania</h1>
			<form>
				<div>
					<label for="lastname">Nom</label>
					<input type="text" id="lastname" v-model="user.lastname" required>
				</div>
				<div>
					<label for="firstname">Prénom</label>
					<input type="text" id="firstname" v-model="user.firstname" required>
				</div>
				<div>
					<label for="email">Email</label>
					<input type="text" id="email" v-model="user.email" required>
				</div>
				<div>
					<label for="password">Password</label>
					<input type="password" id="password" v-model="user.password" required>
				</div>
			</form>
		</div>
		<button id="signupButton" type="button" @click="signup">Inscription</button>
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
	components:{},
	methods:{
		signup(e){
			axios.post("http://localhost:3000/api/auth/signup", this.user)
			.then((result)=>{
				console.log(result)
				alert("utilisateur crée")
			})
			e.preventDefault();
		}
	}

}
</script>

<style scoped>

.signup{
	border: solid 0.1rem #091f43;
	border-radius: 1rem;
	box-shadow: 0.5rem;
		}
	.formulaire{
		width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;}
		.form{
            margin: 1em;
            display: flex;
            flex-direction: column;
            align-items: baseline;}
			.margin{
				display: flex;
				margin: 1rem;
			}
			.div{
                margin: 0.1em;
                display: flex;
                width: 95%;}
                .input{
                    width: 80%;
                    flex: 1;
                }
            


</style>