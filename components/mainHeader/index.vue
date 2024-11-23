<template>
   <div class=" container mx-auto pt-9  ">
<div class=" flex   justify-between  items-start   ">
    <!-- link  -->
     <p class="  text-black/35">pages / <span class="  text-black">{{ route.name }}</span></p>

     <!-- search section -->

     <div class=" flex items-center gap-5 ">
        <div class=" relative">
              <Icon name="basil:search-outline" class=" absolute  text-[#718096] left-3  top-1/2  -translate-y-1/2" />
        <input class="  w-52  h-10 rounded-2xl   shadow-md placeholder:text-black/40 placeholder:text-[10px]  px-8 " type='search' name="" id=""  placeholder="Type here..."  >
        </div>
          <NuxtLink to="/" class="flex items-center text-[#718096] gap-1">
          <Icon name="mynaui:user-solid" />
            <p class=" text-[12px]">Sign In</p>
          </NuxtLink>
          <div class="   text-[#718096]  space-x-4 ">
            <Icon name="mdi:gear" />
            <Icon name="tabler:bell" />
          </div>
      
     </div>

</div>
 
 <h1 class=" text-[18px] text-main">{{  route.name.toUpperCase()}}</h1>
   </div>
</template>

<script setup lang="ts">
const route=useRoute();

</script>

<style scoped>

</style>