<script>
export default {
  name: "Header"
}
</script>

<template>
  <div class="flex justify-center items-center m-6 pb-2 border-b-2">
    <a class="mr-2 text-4xl font-bold" href="/">Countries Quiz</a>
    <font-awesome-icon class="text-3xl" :icon="['far', 'flag']" />
  </div>
</template>
