<template>
  <div class="Login">

   <div >
          <div class="card">
            <h1>Login </h1>

            <v-flex xs12 style="margin-top:30px;" >
              <v-text-field
                label="Email"
                filled
              
              ></v-text-field>
            </v-flex>

            <v-flex xs12 >
              <v-text-field
                label="Password"
                filled
              
              ></v-text-field>
            </v-flex>

            <v-btn block @click="gotohome" color="secondary" dark>Login</v-btn>

            <div style="margin-top:30px;" >
            <router-link to="/">
              Sign Up
            </router-link>
            </div>
          </div>

   </div>
  
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'login',
  components: {
  
  },
  data(){
    return{

    }
  },
  methods:{
    gotohome(){
      this.$router.push('/home')
    }
    
  }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 45%;
  
  padding:30px;
  margin :100px;
  float:center;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}



</style>
