<template>
  <div class="about">
    <Hero v-bind:title="title" />
    <h2>This is an about page</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Hero from "@/components/Hero.vue";

@Component({
  data: function() {
    return {
      title: "About Us"
    };
  },
  components: {
    Hero
  }
})
export default class About extends Vue {}
</script>
