<template>
  <div class="Register" >

<div style="text-align: center;">
<div class="card">
  <h1>Registration </h1>

<v-layout column style="margin-top:30px;"  >
 
        <v-flex xs3 >
          <v-text-field
            label="Mobile Number"
            filled   
            v-model="bodyadd.mobile"
            data-vv-name="mobile"             
            :error-messages="errors.collect('mobile')"
            v-validate="'required'"         
          ></v-text-field>
        </v-flex>

        <v-flex xs3 >
          <v-text-field
            label="First Name"
            filled  
            v-model="bodyadd.firstname"
            data-vv-name="firstname"             
            :error-messages="errors.collect('firstname')"
            v-validate="'required'"        
          ></v-text-field>
        </v-flex>

        <v-flex xs3 >
          <v-text-field
            label="Last Name"
            filled   
            v-model="bodyadd.lastname"
            data-vv-name="lastname"             
            :error-messages="errors.collect('lastname')"
            v-validate="'required'"   
          ></v-text-field>
        </v-flex>

    <v-flex xs12 style="margin-top30px;">
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Date Of Birth"
            prepend-icon="event"
            readonly
            v-on="on"    
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>

    <v-radio-group  v-model="row" row >
      <v-radio label="Male " value="radio-1"></v-radio>
      <v-radio label="Female" value="radio-2"></v-radio>
    </v-radio-group>
   
          <v-flex xs3 >
          <v-text-field
            label="Email"
            filled  
             v-model="bodyadd.email"
            data-vv-name="email"             
            :error-messages="errors.collect('email')" 
            v-validate="'required'"
          ></v-text-field>
        </v-flex>

          <v-btn block @click="submit" style="background-color:#5dade2;"   :disabled="regisdisable" color="secondary" >Register</v-btn>

          <v-btn v-if="loginbutton" style="margin-top:30px;" @click="loginpage" block color="secondary" dark>Login</v-btn>

</v-layout>
</div>
</div>
    

  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import swal from 'sweetalert'

export default {
  $_veeValidate: {
      validator: 'new'
  },
  name: 'register',
  components: {
  
  },
  data(){
    return{
      date:"",
      error:[],
      menu: false,
      modal: false,
      menu2: false,
      regisdisable:false,
      row: null,
      bodyadd:{
        userid:0,
        mobile:"",
        firstname:"",
        lastname:"",
        email:"",
        birthdate:"",
      },
      loginbutton:false,
       dictionary: {
        attributes: {
          
        },
        custom: {
          firstname: {
            required: () => 'First Name can not be empty',    
          },
          lastname: {
            required:() => 'Last Name can not be empty'
          },
          email: {
            required:() => 'Email can not be empty'
          },
          mobile: {
            required:() => 'Mobile Number can not be empty'
          }
        }
      }

    }
  },
  methods:{
    submit(){

      this.bodyadd.birthdate = this.date
 
      this.$validator.validateAll().then(result => {

        if (!result) {
            return;
        } else {

          this.regisdisable = true

          var self = this

          return axios.post('http://localhost:3000/user',self.bodyadd,{            
           'Content-Type': 'application/json'
          }).then(response => {

                console.log('succes')
                swal("Register Succes","", "success")
                self.loginbutton = true   
               
            }).catch(function(error) {

                console.log('error')
                swal( "Register Fail", "","error")
                self.regisdisable = false
            })
        
          }
        })
     
    },
    loginpage(){
    
     this.$router.push('/login')
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

