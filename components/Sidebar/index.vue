<template>
    <div class=" flex justify-center   ">

 <div class=" w-[246.5px]  h-[1018px]    ">

 <div class="    space-y-4  ">
 <div  class=" border-b-[1px] px-3   py-10 flex items-center gap-x-1">
        <Icon name="raphael:icons" />
        <p class="text-[14px]  text-[#2D3748] font-bold ">PURITY UI DASHBOARD</p>
    </div>

    <div v-for="(page,index) in pages" :key="index" class=" flex  group items-center gap-3  h-14  rounded-2xl  hover:shadow-md  p-3  hover:bg-white transition-all duration-100 ease-linear " >
        <div class="   bg-white group-hover:bg-[#4FD1C5]  rounded-xl w-8 h-8 flex items-center justify-center ">
        <Icon :name="`${page.icons}`" class="  text-[#4FD1C5] group-hover:text-white  transition-all duration-100 ease-linear " />
        </div>
         <NuxtLink :to="page.url"  class=" text-[#A0AEC0]  group-hover:text-black  transition-all duration-100 ease-linear " >
{{ page.title }}
  </NuxtLink>
    </div>

    <div class=" px-3">
        <h1 class="text-xs font-bold text-[#2D3748]">ACCOUNT PAGES</h1>
    </div>
 
     <div v-for="(page,index) in accountSetteingsPages" :key="index" class=" flex  group items-center gap-3  h-14  rounded-2xl  hover:shadow-md  p-3  hover:bg-white transition-all duration-100 ease-linear " >
        <div class="   bg-white group-hover:bg-[#4FD1C5]  rounded-xl w-8 h-8 flex items-center justify-center ">
        <Icon :name="`${page.icons}`" class="  text-[#4FD1C5] group-hover:text-white  transition-all duration-100 ease-linear " />
        </div>
         <NuxtLink :to="page.url"  class=" text-[#A0AEC0]  group-hover:text-black  transition-all duration-100 ease-linear " >
{{ page.title }}
  </NuxtLink>
    </div>

 </div>

 <div class="  w-[218px] h-[169px]   bg-[#4FD1C5] space-y-2 rounded-2xl mt-8 p-6 ">

     <div class="   bg-white group-hover:bg-[#4FD1C5]   rounded-xl w-8 h-8 flex items-center justify-center ">
        <Icon name="akar-icons:question" class="  text-[#4FD1C5] group-hover:text-white  transition-all duration-100 ease-linear " />
        </div>
        <h3 class=" text-[14px] font-bold text-white">Need help?</h3>
        <p class="  text-sm font-normal text-white ">Please check our docs</p>
        <button  class=" h-9   w-full bg-white rounded-md text-[10px] " type="button">DOCUMENTATION</button>


 </div>


 


   

 <div>


 </div>

    </div>

     <div>

     </div>
 


    </div>
   
    
</template>

<script setup lang="ts">
const pages=[

{
title:'Dashboard',
url:'/home',
icons:'humbleicons:home'
},
{
title:'Tables',
url:'/tables',
icons:'humbleicons:chart'

},
{
title:'Billing',
url:'/billngs',
icons:'fluent:payment-28-regular'
},
{
title:'RTL',
url:'/rtl',
icons:'mynaui:tool'
},


]

const accountSetteingsPages=[
    {
title:'Profile',
url:'/home',
icons:'iconamoon:profile-thin'
    },{
        title:'Sign In',
url:'/home',
icons:'material-symbols:login'

    }
    ,{
        title:'Sign Up',
url:'/home',
icons:'solar:rocket-bold'

    }
]
</script>

