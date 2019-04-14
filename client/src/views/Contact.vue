<template>
  <div class="contact">
    <Hero v-bind:title="title" />
    <h2>Contact Us Here</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Hero from "@/components/Hero.vue";

@Component({
  data: function() {
    return {
      title: "Contact Us"
    };
  },
  components: {
    Hero
  }
})
export default class Contact extends Vue {}
</script>
