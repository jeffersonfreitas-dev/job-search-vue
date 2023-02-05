<template>
  <button :class="{ primary }" @click="doubleHeight" >height {{ height }} area {{ area }}</button>
</template>

<script>
export default {
  name: "ActionButton",
  methods: {
    handleClick(event) {
    },
    doubleHeight() {
      this.height = this.height *2;
    }
  },
  props: ["title"],
  data() {
    return {
      primary: true,
      height: 1,
      width: 2
    }
  },
  computed: {
    area() {
      return this.height * this.width;
    }
  }
}
</script>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium hover:shadow-blue;
}

.primary {
  @apply border-0 bg-brand-blue-1 text-white;
}

.secondary {}
</style>