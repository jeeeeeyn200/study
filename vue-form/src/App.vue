<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <div>
        <label for="username">id: </label>
        <input id="username" type="text" v-model="username"/>
      </div>
      <div>
        <label for="password">pw: </label>
        <input id="password" type="password" v-model="password"/>
      </div>
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
  //create : post
  //read : get
  //update : put  
  //delete : delete

  export default {
    data: function() {
      return {
        username : '',
        password : '',
      }
    },
    methods: {
      submitForm: function(){
        //e.preventDefault();
        
        console.log(this.username, this.password);
        var url = 'https://jsonplaceholder.typicode.com/users';
        var data = {
          username : this.username,
          password : this.password
        }
        axios.post(url, data)
        .then(function(res){
          console.log(res);
        })
        .catch(function(err){
          console.log(err);
        });
      }
    },

    //npm i axios
  }
</script>

<style lang="scss" scoped>

</style>