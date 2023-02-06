<template>
  <button :class="buttonClass">{{ title }}</button>
</template>

<script>
export default {
  name: "ActionButton",
  methods: {
    handleClick(event) {
    }
  },
  props: {
    title: {
      type: String,
      require: true
    },
    typeName: {
      type: String,
      require: false,
      dafault: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      }
    }
  },
  computed: {
    buttonClass() {
      return {[this.typeName]: true}
    }
  }
}
</script>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}

.primary {
  @apply border-0 bg-brand-blue-1 text-white hover:shadow-blue;
}

.secondary {
  @apply bg-transparent text-brand-blue-1  hover:bg-brand-blue-2 hover:text-white;
}
</style>