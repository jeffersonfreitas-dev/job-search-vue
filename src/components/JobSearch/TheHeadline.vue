<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter"><span :class="actionClasses">{{ action }} </span> 
      <br />
      for everyone</h1>
    <h2 class="text-3xl font-light">Find your next job at Jeff Corp</h2>
  </section>
</template>

<script>
import nextElementInList from '@/utils/nextElementInList';

export default {
  name: "TheHeadline",
  data () {
    return {
      action: "Build",
      interval: null
    }
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true
      }
    }
  },
  methods: {
    changeTitle(){
      this.interval = setInterval(() => {
        this.action = nextElementInList(["Build", "Create", "Desing", "Code"], this.action);
      }, 2000)
    }
  }
}
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.desing {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>