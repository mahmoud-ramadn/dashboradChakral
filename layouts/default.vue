<template>
  <div class=" grid grid-cols-10  ">
    <!--  sidebar -->
      <Sidebar class="  pt-11 bg-[#F8F9FA]      col-span-2"/>
      <!--  header -->
    <main class="  bg-[#F8F9FA] col-span-8 ">
<MainHeader/>
      <slot/>
    </main>
    </div>
</template>

<script setup lang="ts">
</script>
<style scoped>
/* Add your default layout styles */
</style>
