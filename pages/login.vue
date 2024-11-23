<template>
 
  <div class=" relative   min-h-screen ">





        <div class="  absolute right-0 top-0 " >
      <img src="../assets/images/loginbackgrouon.svg" alt="">
    </div>


    <div class="  min-h-screen container  flex    px-[200px]  justify-start items-start  flex-col  ">
<div class="  w-[1000px]  shadow-md  flex items-center text-main  mt-11 justify-around bg-gradient-to-r  from-white/80   to-white/75 rounded-md   h-[70px] backdrop-blur-md ">
      <div  class="  flex items-center gap-x-1   ">
        <Icon name="raphael:icons" />
        <p class="text-[14px]   font-bold ">PURITY UI DASHBOARD</p>
    </div>
    
    <ul v-for="(itme,index) in Links"  :key="index">
      <li>
        <NuxtLink  class=" flex items-center gap-4   text-[10px] font-bold"><Icon :name="itme.icons" class=" w-5 h-5"/> {{ itme.titel }} </NuxtLink>
      </li>
    </ul>

    <Button class=" h-9  w-36 bg-white  py-2 rounded-[35px]  bg-gradient-to-r from-[#313860] to-[#151928] text-white px-10  hover:bg-white ">Free Download</Button>
   </div>

 <form  class=" w-[350px]  mt-[300px] space-y-4">
     
   <h1 class=" text-[32px]  text-[#4FD1C5]  font-bold">Welcome Back</h1>
   <p class=" text-[#A0AEC0]   text-[14px]">Enter your email and password to sign in</p>
        <div class="flex  flex-col items-start  space-y-2">
          <label for="email" class=" text-[14px] text-[#2D3748] ">Email</label>
          <input type="text" name="email" id="email" 
          class=" rounded-md  w-full h-[50px]   placeholder:pl-5 pl-2  border-[1px] outline-[1px]" placeholder=" your first name">
        </div>
        <div class="flex  flex-col items-start  space-y-2">
          <label for="password" class=" text-[14px] text-[#2D3748] ">Password</label>
          <input type="text" name="password" id="password" 
          class=" rounded-md  w-full h-[50px]   placeholder:pl-5 pl-2  border-[1px] outline-[1px] " placeholder=" your first name">
        </div>
        <div class=" flex   items-center gap-4">
      <Switch  style="  background: #4FD1C5; " /> <span class=" text-[12px]">Remember me </span>

        </div>
             
           
       
        <button class=" bg-[#4FD1C5]  rounded-md w-full text-white h-[45px] text-[10px]  ">SIGN In</button>

      </form>
      
          <div class=" h-[20px] py-5">
        <p class=" text-[14px]  text-black/45">Don't have an account?<NuxtLink to="/" ><span class=" text-[14px] font-bold text-[#4FD1C5]">Sign up?</span></NuxtLink></p>
       </div>


    </div>

   


  </div>
   
</template>

<script setup lang="ts">
import Switch from '~/components/ui/switch/Switch.vue';
 

 const Links=[
  {
    titel:'DASHBOARD',
    icons:'uim:box'
  },{
    titel:'PROFILE',
    icons:'mynaui:user-solid'
  },{
    titel:'SIGN UP',
     icons:'mingcute:user-4-fill'
  },
   {
      titel:'SIGN IN',
     icons:'fluent:key-16-regular'
   }
]
definePageMeta({
  layout:'form'
})

</script>

<style scoped>

</style>