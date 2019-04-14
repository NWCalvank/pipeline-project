<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/services">Services</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {}
</script>


<style lang="scss">
#nav {
  padding: 30px;
  a {
    color: rgba(255, 255, 255, 0.7);
    font-weight: bold;
    text-decoration: none;
    margin-left: 30px;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
    &.router-link-exact-active {
      color: rgba(255, 255, 255, 1);
      border-bottom: 2px solid #ffffff;
    }
  }
}
</style>

<style scoped lang="scss">
</style>
