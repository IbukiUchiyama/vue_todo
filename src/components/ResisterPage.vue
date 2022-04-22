<template>
    <div id = "resister">
    <h2>サインアップ</h2>
    <!-- 登録フォーム -->
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button @click="login">登録</button>
    <p>
      アカウントをすでにお持ちの方
      <router-link to="/lohin">sign in now</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase"; // firebaseのインポート

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .createUserAndRetrieveDataWithEmailAndPassword(
          this.email,
          this.password
        )
        .then(user => {
          alert("Create account: " + user.user.email);
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
};
</script>


<style>
</style>