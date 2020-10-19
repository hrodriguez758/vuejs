<template>
  <div class="container">
    <div>
      <p class="counter">
        {{ counter }}
      </p>

      <div v-show="isEqual">
        Es par
      </div>
      <div v-if="isEqual">
        Es par
      </div>

      <div v-for="todo in todos" :key="todo">
        <author :post-title="todo" @on-clicked="increase"></author>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      todos: [
        'Todo 1',
        'Todo 2',
        'Todo 3',
        'Todo 4',
        'Todo 5',
        'Todo 6',
      ]
    }
  },
  mounted() {
    debugger;
    console.log('App component was mounted');
  },
  computed: {
    isEqual() {
      return this.counter % 2 === 0;
    }
  },
  methods: {
    increase() {
      this.counter += 1;
    }
  },
}
</script>

<style scoped lang="scss">
  .container {
    text-align: center;

    .counter {
      font-size: 28px;
    }
  }
</style>
