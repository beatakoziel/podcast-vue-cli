<template>
  <div id="login-page">
    <app-header></app-header>
    <app-login></app-login>
    <app-footer></app-footer>
  </div>
</template>
<script>
import PlainHeader from "./shared/PlainHeader.vue";
import Footer from "./shared/Footer.vue";
import LoginPanel from "./LoginPanel.vue";
export default {
  components: {
    appHeader: PlainHeader,
    appFooter: Footer,
    appLogin: LoginPanel
  }
};
</script>
<style scoped>
body {
  height: 100%;
}
#login-page {
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  position: fixed;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
    url("./assets/microphone.jpg") no-repeat center bottom fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-blend-mode: darken;
}
.footer {
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>