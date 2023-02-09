<template>
  <img :src="imageLink" alt="Profile image" class="h-8 w-8 rounded-3xl object-contain">
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: "https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-lin-gace-png-transparent.png"
    }
  }
}
</script>