<template>
  <div class="services">
    <Hero v-bind:title="title" />
    <h2>Our Services</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Hero from "@/components/Hero.vue";

@Component({
  data: function() {
    return {
      title: "What We Do"
    };
  },
  components: {
    Hero
  }
})
export default class Services extends Vue {}
</script>
