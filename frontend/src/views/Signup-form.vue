<template>
  <div>
      <div class = "register">
          <p class ="register_text">salut !</p>
      </div> 
      <div class="main-w3layouts wrapper">
		<h1>Inscription</h1>
		<div class="main-agileinfo">
			<div class="agileits-top">
				<form action="#" method="post">
					<input class="text" type="text" name="Lastname" placeholder="Lastname" required="">
					<input class="text" type="text" name="Firstname" placeholder="Firstname" required="">
					<input class="text email" type="email" name="email" placeholder="Email" required="">
					<input class="text" type="password" name="password" placeholder="Password" required="">
					<input class="text w3lpass" type="password" name="password" placeholder="Confirm Password" required="">
					<div class="wthree-text">
						<label class="anim">
							<input type="checkbox" class="checkbox" required="">
							<span>I Agree To The Terms & Conditions</span>
						</label>
						<div class="clear"> </div>
					</div>
					<input type="submit" value="SIGNUP">
				</form>
				<p>Don't have an Account? <a href="#"> Login Now!</a></p>
			</div>
		</div> 
      </div>
  </div>
</template>

<script>
export default {
    name:'Signup-form'

}
</script>

<style scoped>

</style>