<template>
  <div class="author">
    <h1>{{ postTitle }}: {{ author }}</h1>
    <hr>
    <button @click="$emit('on-clicked')">Click me!!</button>
  </div>
</template>

<script>
export default {
  props: ['postTitle'],
  data() {
    return {
      firstname: 'Hector',
      lastname: 'Rodriguez'
    }
  },
  mounted() {
    console.log('Profile component was mounted');
  },
  computed: {
    author() {
      return `${this.firstname} ${this.lastname}`;
    }
  }
}
</script>

<style scoped lang="scss">
  h1 {
    color: rebeccapurple;
  }
</style>