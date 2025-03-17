<template>
  <!-- event.preventDefault와 같은 의미 -->
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit" >login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data: function(){
    return{
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm: function(){
      // event.preventDefault();//submit 새로고침 방지
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url,data)
        .then(function(response){
          console.log(response);
        })
        .catch(function(error){
          console.log(error)
        });
    }
  }
}
</script>

<style>

</style>