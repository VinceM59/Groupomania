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
                <p v-else> Prénom: <span>{{User.firstName}}</span></p> 
              </div>
          </form>
      </div>
  </main>
</template>

<script>
export default {

}
</script>

<style>

</style>