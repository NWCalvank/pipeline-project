<template>
  <div class="home">
    <Hero v-bind:title="title" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Hero from "@/components/Hero.vue";

@Component({
  data: function() {
    return {
      title: "Welcome"
    };
  },
  components: {
    Hero
  }
})
export default class Home extends Vue {}
</script>
