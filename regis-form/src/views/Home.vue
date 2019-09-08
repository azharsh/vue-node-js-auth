<template>
  <div class="home" >

    <div style="text-align: center;margin:100px;">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <h1>Welcome to Home</h1>
    <v-btn @click="logout" dark >Logout</v-btn>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  components: {

  },
   data(){
    return{

    }
  },
  methods:{
   logout(){
       this.$router.push('/login')
   }
  }
}
</script>
