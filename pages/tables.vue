<template>
   <div class=" container  space-y-5"  >

     <p class=" font-bold text-xs"  v-if="loading">loading.......</p>

  <div class="  overflow-hidden overflow-y-scroll   bg-white p-5 rounded-md h-[519px]  mt-4 ">
         <div class=" flex  justify-between items-start">
            <div  class=" space-y-[6px]">
            <h2 class=" text-[#2D3748] text-[18xp] font-bold ">Authors Table</h2>
            </div>
         </div>
 <Table class="">
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]">
AUTHOR
        </TableHead>
        <TableHead>FUNCTION</TableHead>
        <TableHead>STATUS</TableHead>
        <TableHead >
          EMPLOYED
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow class=" h-[70px]"   v-for="(itme,index)  in userData" >
        <TableCell class="font-medium flex items-center  h-[70px]   w-[700px]    gap-2 ">
           <img   :src="`${itme.avatar}`"  class=" w-[20px] h-[20px] rounded-md"/> 
           <div>
                       <h1 class=" text-[14px] font-bold text-[#2D3748]">{{ itme.name }}</h1>
                       <p class=" text-[#718096]  text-[14px]">{{ itme.email}}</p>
           </div> 
        </TableCell >

      <TableCell class="w-[200px]">
                     <h1 class=" text-[14px] font-bold text-[#2D3748]">{{  itme.role.toUpperCase() }}</h1>
                     <p class="text-[#718096]  text-[14px]">{{ itme.name.includes('mi')?"OnLine":'Offline' }}</p>
        </TableCell>
        <TableCell class="   w-[200px] ">
            <button class=" w-[80px] h-[25px] rounded-md py-2 px-3 flex justify-center items-center  text-white  ":class=" itme.name.includes('o')? 'bg-green-500':' bg-gray-500 opacity-[0.4]' ">{{ itme.role }}</button>
        </TableCell>
        <TableCell class=" w-[200px]  text-start">
          <p class="  text-main  text-[14px] font-bold ">{{  itme.creationAt.substring(0,10) }}</p>  
          
        </TableCell> 
        <TableCell class="   w-[200px] "  >
      <h1 class=" text-black/35 text-[12px]">Edit</h1>
        </TableCell>
   
      </TableRow>
    </TableBody>
  </Table> 
</div>
  <div class="    bg-white p-5 rounded-md h-[519px]   overflow-hidden overflow-y-scroll  ">
         <div class=" flex  justify-between items-start">
            <div  class=" space-y-[6px]">
            <h2 class=" text-[#2D3748] text-[18xp] font-bold ">Projects</h2>
             <p class=" text-black/45 text-[14px] font-bold flex items-center gap-2 "><Icon name="icon-park-solid:check-one"  style="color: #68D391" />  30 done this month</p>
            </div>
 <Icon name="cil:options"  class=" text-[#A0AEC0]  w-[20px]"/>
         </div>
 <Table>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]">
          COMPANIES
        </TableHead>
        <TableHead>BUDGET</TableHead>
        <TableHead>STATUS</TableHead>
        <TableHead class="text-right">
          COMPLETION
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow class=" h-[70px]" v-for="invoice in userData" :key="invoice.name" >
        <TableCell class="font-medium flex items-center  h-[70px]    w-[300px] gap-2 ">
           <Icon  name="devicon:xd" class=" w-[20px]"/> 
           <h1 class=" text-[14px] font-bold text-[#2D3748]">{{ invoice.name.includes('l')?'mico':'biaanita' }}</h1>
        </TableCell>
        <TableCell class=" ">
                     <h1 class=" text-[14px] font-bold text-[#2D3748]">{{ invoice.role==='customer'?'1200$' :'7121$'}}</h1>

        </TableCell>
        <TableCell>{{ invoice.role==='admin'?'working':'canceled' }}</TableCell>
        <TableCell class="  w-24 text-start">
          <p class=" text-[#4FD1C5]  text-[14px] font-bold ">{{ invoice.name.includes('u')? '10%':'80%'>'10%'?'80%':'10%'}}</p>  
          <div class="relative w-[100px] bg-gray-300 h-[3px]  rounded-md">
  <div :style="{ width:invoice.email.includes('u')? '10%':'80%', backgroundColor: '#4FD1C5' }" class="absolute h-[3px] rounded-md top-1/2 transform -translate-y-1/2"></div>
</div>
        </TableCell>
   
        <TableCell class="   w-9" >
<Icon name="simple-line-icons:options-vertical" />
        </TableCell>
   
      </TableRow>
    </TableBody>
  </Table>

</div>



   </div>
</template>

<script setup lang="ts">

import { item } from '@unovis/ts/components/bullet-legend/style';


const route=useRoute();
console.log(route.name);
const loading=ref(true)

interface TUser {
  name: string;
  email: string;
  avatar: string;
   role:string;
    creationAt:string;
}


const userData = ref<TUser[]>([]);



onMounted( async()=>{
  try {
    loading.value=true;
    const  { data,refresh,pending}=  await useAsyncGql ({
  operation:'GetUsers',
  variables:{limit: 15},
})
 userData.value= data.value.users || []; 

 console.log(userData.value);
    
  } catch (error) {
    console.log(error);
    
  }finally{
    loading.value=false
    console.log(userData.value);
    
  }


})











const projectsTabels=[
   {
      icons:'devicon:xd',
      company:'Chakra Soft UI Version',
             status:'Working',
      budugt:'$14,000',
      compultion:"60%",
      optoins:'simple-line-icons:options-vertical'

   },
   
   {
      icons:'devicon:xd',
      company:'Add Progress Track',
       memeber:'../assets/images/brooke-cagle-g1Kr4Ozfoac-unsplash 1.png',
      budugt:'$3,000',
      status:'Working',
      compultion:"60%",
      optoins:'simple-line-icons:options-vertical'

   },
   
   {
      icons:'devicon:xd',
      company:'Fix Platform Errors',
       memeber:'',
      budugt:'Not set',
         status:'Canceled',

      compultion:"10%",
      optoins:'simple-line-icons:options-vertical'

   },
   
   {
      icons:'devicon:xd',
      company:'Launch our Mobile App',
       memeber:'',
                status:'Done',

      budugt:'$32,000',
      
      compultion:"100%",
      optoins:'simple-line-icons:options-vertical'

   },
   
   {
      icons:'devicon:xd',
      company:'Add the New Pricing Page',
       memeber:'',
                       status:'Done',

      budugt:'$400',
    
      compultion:"60%",
      optoins:'simple-line-icons:options-vertical'

   },
   
   {
      icons:'skill-icons:linkedin',
      company:'Redesign New Online Shop',
       memeber:'',
      budugt:'$7,600',
         status:'Working',
      compultion:"20%",
      optoins:'simple-line-icons:options-vertical'

   },
   

]





</script>

<style scoped>

</style>