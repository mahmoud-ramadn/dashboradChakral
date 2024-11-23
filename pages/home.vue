<template>
    <div class="container mx-auto py-4 ">


      <div class="flex md:justify-between justify-center items-center  md:flex-nowrap flex-wrap gap-4   gap-y-4   "  >

         <div  v-for="(itme,index) in newsData " :key="index" class=" w-[382px]   h-20  bg-white rounded-2xl p-5 flex  justify-between  items-center  ">
            <div>
        <h1 class=" text-black/50  text-[12px]">{{ itme.titel }}</h1>
        <p class=" text-[18px] font-bold">{{ itme.price }} <span class="  text-[14px] font-bold " :class=" itme.incresed.includes('+') ? 'text-[#48BB78]' :'text-red-400' ">{{ itme.incresed }}</span></p>
            </div>
            <div class="   bg-[#4FD1C5]  rounded-xl w-8 h-8 flex items-center justify-center  ">
        <Icon :name="`${itme.icons}`" class="  text-white  transition-all duration-100 ease-linear " />
        </div>

         </div>
      </div>

   <div class=" grid grid-cols-12 gap-4  my-4">

      <div class=" col-span-7   bg-white shadow-md  flex   justify-between   items-start  rounded-md h-[290px] p-5   ">

 <div class=" flex flex-col w-[330px]  justify-between  h-full">
     <div class=" space-y-3" >
       <h4 class=" font-bold text-sm text-black/45">Built by developers</h4>
     <h5 class=" text-xl font-bold">Purity UI Dashboard</h5>
     <p class=" text-black/45 text-sm">From colors, cards, typography to complex elements,
you will find the full documentation.</p>

         </div>

   <div>
      <button class=" text-[10px] flex items-center gap-x-2" >Read more <Icon name="tabler:arrow-right" class=" text-[12px]" /></button>
   </div>

 </div>
       

   <div class=" w-[360px]  overflow-hidden   h-64    rounded-lg">
      <img class=" w-full h-full  " src="../assets/images/og-image 1.svg" alt="">

   </div>


      </div>




      <div class=" col-span-5 h-[290px] overflow-hidden shadow-md relative  bg-white rounded-md  " >
          <img  class=" w-full h-full  rounded-md  object-cover    brightness-50  "  src="../assets/images/brooke-cagle-g1Kr4Ozfoac-unsplash 1.png" alt="">
          <div class=" w-96  absolute  top-0 left-0  h-full p-5     z-20 flex flex-col  justify-between ">
            <div class=" text-white">

                    <h3 class=" text-xl font-bold  ">Work with the Rockets</h3>
            <p class=" text-sm">Wealth creation is an evolutionarily recent positive-sum game.
It is all about who take the opportunity first.</p>

            </div>

         <div class="text-white">
      <button class=" text-[10px] flex items-center gap-x-2" >Read more <Icon name="tabler:arrow-right" class=" text-[12px]" /></button>
   </div>

          </div>
      </div>

   </div>

   <!-- charts -->

   <div class=" grid grid-cols-12 gap-4 my-4 h-[445px]  ">
      <div class=" col-span-5  bg-white  p-5   rounded-md h-full  flex flex-col  justify-between ">
         <!-- chart one -->
          <div class=" grounded-md h-[222px]">


<BarChart     style=" height: 222px;   "
 class="gradient rounded-xl  custom-bar-chart"
    :data="data"
    index="name"
    :categories="['total', 'predicted']"
    :y-formatter="(tick, i) => {
      return typeof tick === 'number'
        ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
        : ''
    }"
    
    
    :colors="['white']"
    :show-legend="false"
    :show-grid-line="false"
    :show-x-axis="false"
    :roundedCorners=20
    :show-tooltip="false"
    
     :type="'grouped'"

  
  />
          </div>
          <!-- actvie user -->
<div class=" space-y-1 ">
 <h1 class=" text-xl  font-bold text-[#2D3748] ">Active Users</h1>
 <p class=" text-sm  text-[#4FD1C5]">(+23) <span class=" text-xs text-black/25">than last week</span></p>
</div>
 <!-- icon bosx -->
   <div class=" flex  justify-between items-center  h-[65px] ">

      <div v-for="(item,index) in activeUsers" :key="index" class="  space-y-2  ">
         <div class="flex items-center gap-2   ">
         <div class="  w-[25px] h-[25px] flex items-center justify-center  bg-[#4FD1C5] rounded-sm ">
         <Icon :name="`${item.icons}`" class=" text-white" />

         </div>
         <p class=" text-[12px]  text-black/45 ">{{ item.title }}</p>

         </div>
          <h1 class="  text-[18px]  text-[#2D3748] font-bold " >{{ item.num }}</h1>

<div class="relative w-[100px] bg-gray-300 h-[3px]">
  <div :style="{ width: item.progress, backgroundColor: '#4FD1C5' }" class="absolute h-[3px] top-1/2 transform -translate-y-1/2"></div>
</div>



      </div>


   </div>




</div>



      <div class=" col-span-7   rounded-md   bg-white gap-2   flex  items-center justify-center flex-col  h-[445px] ">
        <div class=' self-baseline  p-5 '>
          <h1 class=" text-[#2D3748] text-lg  font-bold" >Sales overview</h1>
        <p class=" text-sm text-[#68D391]  font-bold">(+5)  <span class=" text-[#A0AEC0]  font-normal ">more in 2021 </span> </p>

        </div>
      
        <AreaChart :data="data" index="name" :categories="['total', 'predicted']"  style=" width: 800px; height: 290px;"  :show-legend="false" :colors="['#4FD1C5','#2D3748']" />

      </div>

   </div>



   <div class=" grid grid-cols-12 gap-4 my-4 ">
      <div class=" col-span-7   bg-white p-5 rounded-md h-[519px] ">
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
        <TableHead>Members</TableHead>
        <TableHead>BUDGET</TableHead>
        <TableHead class="text-right">
          COMPLETION
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow class=" h-[70px]" v-for="invoice in projectsTabels" :key="invoice.icons" >
        <TableCell class="font-medium flex items-center  h-[70px]    w-[300px] gap-2 ">
           <Icon :name="`${invoice.icons}`" class=" w-[20px]"/> 
           <h1 class=" text-[14px] font-bold text-[#2D3748]">{{ invoice.company }}</h1>
        </TableCell>
        <TableCell class=" ">
         <img class=" w-[20px] h-[20px]  rounded-full object-cover" :src="invoice.memeber" alt="">
        </TableCell>
        <TableCell>{{ invoice.budugt }}</TableCell>
        <TableCell class="  w-24 text-start">
          <p class=" text-[#4FD1C5]  text-[14px] font-bold ">{{ invoice.compultion }}</p>  
          <div class="relative w-[100px] bg-gray-300 h-[3px]  rounded-md">
  <div :style="{ width:invoice.compultion, backgroundColor: '#4FD1C5' }" class="absolute h-[3px] rounded-md top-1/2 transform -translate-y-1/2"></div>
</div>
        </TableCell>
   
      </TableRow>
    </TableBody>
  </Table>

</div>


      <div class=" col-span-5 h-[519px]  space-y-3 bg-white p-5 rounded-md ">
         <div class=" h-[49px]">
 <h1 class=" text-[#2D3748] text-[18px] font-bold">Orders overview</h1>

         <p class=" text-green-500 font-bold  ">+30%<span class=" text-black/30    font-normal ">this month </span></p>
         </div>
       
         <div v-for="(order,index) in ordersVeiws" :key="index"  class=" w-[273px]h-[374px]">
          <div class="  w-[190px] h-[61px] flex items-start  ">
            <div class=" w-[30px]  flex flex-col  items-center justify-center">
 <Icon :name="`${order.icons}`" class=" w-[15px] text-green-400 " />
             <div class="  bg-[#E2E8F0]  w-[2px] h-[37px]">

             </div>
            </div>
             <div>
              <h1 class=" text-[#2D3748]font-bold text-[14px]">{{ order.price }}</h1>
              <p class=" text-black/45 text-[12px] ">{{order.time}}</p>
             </div>

           

          </div>


         </div>
         

      </div>

   </div>

   <div class=" h-4  bg-red-700  rounded-md ">

   </div>


    </div>
</template>

<script setup lang="ts">






const ordersVeiws=[
{
  price:'$2400, Design changes',
  icons:'mynaui:bell',
   time:'21 DEC 11:21 PM'
},
{
   price:'New order #4219423',
  icons:'devicon:html5',
   time:'21 DEC 11:21 PM'
},{
   price:'Server Payments for April',
  icons:'marketeq:cart',
   time:'21 DEC 9:28 PM'
},{
  price:'New card added for order #3210145',
  icons:'marketeq:mobile-payment-done-2',
   time:'20 DEC 3:52 PM'
   },{
     price:'Unlock packages for Development',
  icons:'icon-park:box',
   time:'19 DEC 11:35 PM'
   },{
    price:'New order #9851258',
  icons:'devicon:xd',
   time:'18 DEC 4:41 PM'
   }


]

const  newsData=[
   {
      titel:'Today’s Money',
       price:'$53,000',
       incresed:'+55%',
       icons:'fluent:payment-16-filled'

   },
   {
      titel:'Today’s Users',
       price:'2,300',
       incresed:'+5%',
       icons:'et:global'

   },
   {
      titel:'New Clients',
       price:'+3,052',
       incresed:'-14%',
       icons:'f7:doc-text-fill'

   },
   {
      titel:'Total Sales',
       price:'$173,000',
       incresed:'+8%',
       icons:'mynaui:cart'

   },
]


const activeUsers=[

   {
 title:'Users',
 icons:'fluent:payment-48-regular',
 num:'32,984',
 progress:'90%'
},
   {
 title:'Clicks',
 icons:'solar:rocket-bold',
 num:'2,42m',
 progress:'70%'
},
   {
 title:'Sales',
 icons:'fluent:cart-24-regular',
 num:'2,400$',
 progress:'20%'
},
   {
 title:'Items',
 icons:'mynaui:tool',
 num:'320',
 progress:'30%'
},


]




 definePageMeta({
    layout:"default"
 })

 
const data = [
  { name: 'Jan', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Feb', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Mar', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },


]


const projectsTabels=[
   {
      icons:'devicon:xd',
      company:'Chakra Soft UI Version',
       memeber:'https://images.pexels.com/photos/29486501/pexels-photo-29486501/free-photo-of-stylish-woman-in-modern-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      budugt:'$14,000',

      compultion:"60%",
      optoins:'simple-line-icons:options-vertical'

   },
   
   {
      icons:'devicon:xd',
      company:'Add Progress Track',
       memeber:'https://images.pexels.com/photos/29486501/pexels-photo-29486501/free-photo-of-stylish-woman-in-modern-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      budugt:'$3,000',

      compultion:"60%",
      optoins:'simple-line-icons:options-vertical'

   },
   
   {
      icons:'devicon:xd',
      company:'Fix Platform Errors',
       memeber:'https://images.pexels.com/photos/29486501/pexels-photo-29486501/free-photo-of-stylish-woman-in-modern-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      budugt:'Not set',
   
      compultion:"10%",
      optoins:'simple-line-icons:options-vertical'

   },
   
   {
      icons:'devicon:xd',
      company:'Launch our Mobile App',
       memeber:'https://images.pexels.com/photos/29486501/pexels-photo-29486501/free-photo-of-stylish-woman-in-modern-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      budugt:'$32,000',
      
      compultion:"100%",
      optoins:'simple-line-icons:options-vertical'

   },
   
   {
      icons:'devicon:xd',
      company:'Add the New Pricing Page',
       memeber:'https://images.pexels.com/photos/29486501/pexels-photo-29486501/free-photo-of-stylish-woman-in-modern-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      budugt:'$400',
    
      compultion:"60%",
      optoins:'simple-line-icons:options-vertical'

   },
   
   {
      icons:'skill-icons:linkedin',
      company:'Redesign New Online Shop',
       memeber:'https://images.pexels.com/photos/29486501/pexels-photo-29486501/free-photo-of-stylish-woman-in-modern-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      budugt:'$7,600',
   
      compultion:"20%",
      optoins:'simple-line-icons:options-vertical'

   },
   

]
   
   
</script>

<style scoped>

.gradient {
  background: linear-gradient(to right, #313860, #151928); /* From pink to orange */
};


</style>