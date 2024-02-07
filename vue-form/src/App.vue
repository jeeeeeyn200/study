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
        axios.post();
      }
    },

    //npm i axios
  }
</script>

<style lang="scss" scoped>

</style>