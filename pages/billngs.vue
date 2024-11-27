<template>
  <div class=" container mx-auto  space-y-4 mt-8">
    <div class=" grid  grid-cols-12  gap-4">



 <div class="  col-span-9   h-[436px]  flex  flex-col  justify-between   ">

  <div class=" flex  justify-between  w-full   items-start h-1/2 ">

    <div class=" w-[461.5px] h-[241px] overflow-hidden    p-6 text-white font-bold   rounded-3xl  flex flex-col   items-start  justify-between  backgroundImg "  >
       <div class=" flex  items-center  fl w-full  justify-between">

        <h3   class=" text-xl">Purity UI</h3>
        <Icon name="grommet-icons:mastercard" class="w-[49.22px] h-[32.81px]" />
       </div>

       <!--   TEsti this code  -->

       <h4>7812 2139 0823 XXXX</h4>
       <div class="  flex items-center justify-center gap-4 ">
        <div>
           <h2 class="  text-[10px] font-normal ">VALID THRU</h2>
           <small class=" font-bold text-sm">05/24</small>
        </div>

        <div>
           <h2 class="  text-[10px] font-normal ">CVV</h2>
           <small class=" font-bold text-sm">09X</small>
        </div>

       </div>

    </div>



    <div v-for="(itme,index) in paymentBox" :key="index" class=" h-full     ">

      <div  class=" w-[241px] h-[241px] flex items-center justify-center   space-y-3  flex-col  bg-white rounded-lg ">
        <div class="  w-[65px] h-[65px] rounded-md bg-[#4FD1C5] flex items-center justify-center">
     <Icon  :name="itme.icon" class="  w-6 h-6 text-white"/>

        </div>
         <h2 class="text-lg  text-[#2D3748] font-bold">{{ itme.titel }}</h2>
         <p class=" text-[#A0AEC0]  text-xs">{{ itme.titel }}</p>
          <hr class=" w-44  h-[1px] bg-black/35">
         <h3  class=" text-lg  text-[#2D3748] font-bold">{{ itme.pric }}</h3>
      </div>


    </div>

  </div>


  <form class=" p-5  bg-white  h-[172px] rounded-md space-y-3">
  <div class=" flex items-center   justify-between">
    <h1 class=" text-main  text-sm font-bold">Payment Method</h1>
    <button class=" w-[134.5px]  h-9 rounded-md    px-2 p-2  text-xs bg-gradient-to-t  from-[#313860] to-[#151928] text-white ">ADD A NEW CARD </button>
  </div>


  <div class=" flex items-center justify-between gap-3">
<div class="relative  w-[458.5px] ">
    <Icon class=" absolute   left-3 top-1/2  -translate-y-1/2" name="logos:mastercard" />
  <input  placeholder="7812 2139 0823 XXXX"
  class="  w-full  placeholder:text-sm placeholder:text-black/40  h-[65px] border-[1px] border-[#E2E8F0] rounded-2xl      pl-14 focus:outline-[#E2E8F0] " type="text" name="" id="">
      <Icon class=" absolute     w-[12px] h-[12px]   right-3  top-1/2  -translate-y-1/2" name="ic:twotone-edit" />

</div>

  <div class="relative  w-[458.5px] ">
    <Icon class=" w-[35px]   h-[8px] absolute  text-[#4318FF]   left-3 top-1/2  -translate-y-1/2" name="logos:visa"   />
  <input  placeholder="7812 2139 0823 XXXX"
  class="  w-full  placeholder:text-sm placeholder:text-black/40  h-[65px] border-[1px] border-[#E2E8F0] rounded-2xl      pl-14 focus:outline-[#E2E8F0] " type="text" name="" id="">
      <Icon class=" absolute     w-[12px] h-[12px]  right-3  top-1/2  -translate-y-1/2" name="ic:twotone-edit" />

</div>
  </div>




  </form>






 </div>


 <div class="  col-span-3 h-[436px] p-4  bg-white rounded-md ">
  <div class="flex items-center justify-between">
    <h2 class=" text-main font-bold">Invoices</h2>
    <button class=" text-[#4FD1C5] w-[110px] h-9 rounded-md border-[#4FD1C5]  border-[1px] text-[10px]  font-bold ">VIEW ALL</button>
  </div>
  <div v-for="(it,index) in monthes" :key="index">
    <div   class=" flex  justify-between  items-start  h-11  my-6">
      <div>
        <h1 class=" font-bold text-main" >{{ it.month }}</h1>
         <small class=" font-bold  text-xs text-black/40">{{ it.tite }}</small>

      </div>
      <div>
        <span class="  text-main font-normal flex items-center  gap-x-1"> <span class=" text-black/65  text-xs ">{{ it.price }} </span> <Icon class="  text-main" name="material-symbols-light:docs-rounded" /> PDF</span>

      </div>

    </div>

  </div>


 </div>


    </div>

    <div class=" grid grid-cols-12 gap-5">
      <div class="  col-span-7 h-[538px]     bg-white  rounded-md p-5  overflow-y-scroll  overflow-hidden">
        <h3 class=" font-bold text-main text-xl ">Billing Information</h3>


         <p v-if="loading" class=" text-blue-500  font-bold text-xs animate-pulse">loading...</p>

        <div v-for="(bi,index) in userData" :key="index" >
          <div class=" p-5 bg-[#F8F9FA]  mt-3 rounded-md">
            <div class=" flex  items-center justify-between">
               <h1 class=" font-bold  text-sm text-[#718096]">{{ bi.name }}</h1>
              <div class=" flex  items-center gap-3 ">
                <button class="  text-[#E53E3E] font-bold text-xs flex items-center "> <Icon  name="mdi:trash" /> DELETE</button>
                <button class="font-bold text-xs  text-main flex items-center "> <Icon name="ic:outline-edit" />EDIT</button>  </div> </div>

               <p class="  text-xs text-[#A0AEC0]  ">Company Name: <span  class=" font-bold  text-gray-400  text-sm">{{ bi.name.includes('p')?'biainat':'microsoft'  }}</span></p>
               <p class="text-xs text-[#A0AEC0]">Company Name: <span class="font-bold  text-gray-400  text-sm">{{bi.email }}</span></p>
               <p class="text-xs text-[#A0AEC0]">Company Name: <span class="font-bold  text-gray-400  text-sm">{{bi.role }}</span></p>



          </div>

        </div>

      </div>
      <div class="  col-span-5 h-[538px] space-y-2 bg-white  rounded-md p-5 ">
       <div class="  flex items-center justify-between">
        <h3 class=" text-main  font-bold text-xl">Your Transactions</h3>
          <h3 class=" text-[#A0AEC0] font-bold text-sm flex items-center gap-2"> <Icon   name="oui:token-date"  style=" width: 30px;" /> 23 - 30 March 2020</h3>
       </div>
                 <h4 class=" text-[#A0AEC0]  font-bold text-[10px]">NEWEST</h4>



      </div>


    </div>
  </div>


</template>

<script setup lang="ts">

const   paymentBox=[
  {
    icon:'fluent:payment-24-filled',
    titel:'Salary',
    subtitle:'Belong Interactive',
    pric:'+$2000'
  },
  {
     icon:'mage:paypal',
    titel:'Paypal',
    subtitle:'Freelance Payment',
    pric:'$455.00'
  },

]

const monthes=[
  {
    month:'March, 01, 2020',
    tite:'#MS-415646',
     price:'$180',
  },
  {
    month:'March, 01, 2020',
    tite:'#MS-415646',
     price:'$180',
  },
  {
    month:'March, 01, 2020',
    tite:'#MS-415646',
     price:'$180',
  },
  {
    month:'March, 01, 2020',
    tite:'#MS-415646',
     price:'$180',
  },
  {
    month:'March, 01, 2020',
    tite:'#MS-415646',
     price:'$180',
  },



]


const billingInfomation=[
  {
    title:'Oliver Liam',
    companyName:'Viking Burrito',
    Email:'oliver@burrito.com',
    vat:'FRB1235476'

  },
  {
    title:'Oliver Liam',
    companyName:'Viking Burrito',
    Email:'oliver@burrito.com',
    vat:'FRB1235476'

  },
  {
    title:'Oliver Liam',
    companyName:'Viking Burrito',
    Email:'oliver@burrito.com',
    vat:'FRB1235476'

  },
  {
    title:'Oliver Liam',
    companyName:'Viking Burrito',
    Email:'oliver@burrito.com',
    vat:'FRB1235476'

  },
  {
    title:'Oliver Liam',
    companyName:'Viking Burrito',
    Email:'oliver@burrito.com',
    vat:'FRB1235476'

  },
  {
    title:'Oliver Liam',
    companyName:'Viking Burrito',
    Email:'oliver@burrito.com',
    vat:'FRB1235476'

  },

]

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

</script>

<style scoped>
.backgroundImg{
  background: url("../assets/images/maseteCard.svg");
  background-repeat: no-repeat;
  background-position:center;

}

</style>
