<template>
  <div id="hero">
    <Navigation/>
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";

@Component({
  components: {
    Navigation
  }
})
export default class Hero extends Vue {
  @Prop() private title!: string;
}
</script>


<style lang="scss">
#hero {
  background-color: lightblue;
  height: 500px;
}
h1 {
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
}
</style>
