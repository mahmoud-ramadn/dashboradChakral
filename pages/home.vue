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
      <div class=" col-span-5  bg-white  p-5  rounded-md h-full  flex flex-col  justify-between ">
         <!-- chart one -->
          <div class="  overflow-hidden  rounded-md h-[222px]">
<BarChart  class="h-[222px] w-full"
    :data="data"
    index="name"
    :categories="['total', 'predicted']"
    :y-formatter="(tick, i) => {
      return typeof tick === 'number'
        ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
        : ''
    }"
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



      <div class=" col-span-7   rounded-md h-full bg-black ">
        <highchart :options="options" style="  height: 100%;"/>

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


import { BarChart } from '@/components/ui/chart-bar'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { colors } from '@unovis/ts';
import { item } from '@unovis/ts/components/bullet-legend/style';
import { invoke } from '@vueuse/core';



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

  const options = ref(
  {
    chart: {
        type: 'area',
        backgroundColor: 'red', // Light gray background
        borderRadius: 10, // Rounded corners
        spacing: [10, 10, 15, 10], // Spacing around the chart
    },
    accessibility: {
        description: 'Image description: An area chart comparing the nuclear stockpiles of the USA and the USSR/Russia from 1945 to 2024.',
    },
    title: {
        text: 'US and USSR Nuclear Stockpiles (1945-2024)',
        style: {
            color: '#fffff', // Dark text color
            fontSize: '18px',
            fontWeight: 'bold',
        },
    },
    subtitle: {
        text: 'Source: <a href="https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/" target="_blank">FAS</a>',
        style: {
            color: "green", // Subtle gray text
            fontSize: '12px',
        },
    },
    xAxis: {
        allowDecimals: false,
        lineColor: 'yellow', // Axis line color
        gridLineColor: 'orange', // Grid lines color
        labels: {
            style: {
                color: 'white', // Label color
                fontSize: '12px',
            },
        },
        accessibility: {
            rangeDescription: 'Range: 1940 to 2024.',
        },
    },
    yAxis: {
        title: {
            text: 'Number of Warheads',
            style: {
                color: '#333333', // Title color
                fontSize: '14px',
                fontWeight: 'bold',
            },
        },
        gridLineColor:"green", // Grid lines color
        labels: {
            style: {
                color: '#555555', // Label color
                fontSize: '12px',
            },
        },
    },
    tooltip: {
        backgroundColor: '#ffffff', // Tooltip background
        borderColor: '#cccccc', // Tooltip border
        borderRadius: 5,
        style: {
            color: '#333333', // Tooltip text color
        },
        pointFormat: '{series.name} had <b>{point.y:,.0f}</b> warheads in {point.x}',
    },
    plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 3,
                states: {
                    hover: {
                        enabled: true,
                        fillColor: '#ffffff', // Marker fill on hover
                        lineWidth: 2,
                    },
                },
            },
            fillOpacity: 0.5, // Adjust the area opacity
        },
    },
    series: [
        {
            name: 'USA',
            data: [
                null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
                1169, 1703, 2422, 3692, 5543, 7345, 12298, 18638, 22229, 25540,
                28133, 29463, 31139, 31175, 31255, 29561, 27552, 26008, 25830,
                26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104,
                23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217,
                21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732,
                10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273,
                5113, 5066, 4897, 4881, 4804, 4717, 4571, 4018, 3822, 3785, 3805,
                3750, 3708, 3708, 3708, 3708,
            ],
            color: '#ff6f61', // Area fill color for USA
            lineWidth: 2, // Line thickness
        },
        {
            name: 'USSR/Russia',
            data: [
                null, null, null, null, null, null, null, null, null, 1, 5, 25,
                50, 120, 150, 200, 426, 660, 863, 1048, 1627, 2492, 3346, 4259,
                5242, 6144, 7091, 8400, 9490, 10671, 11736, 13279, 14600, 15878,
                17286, 19235, 22165, 24281, 26169, 28258, 30665, 32146, 33486,
                35130, 36825, 38582, 40159, 38107, 36538, 35078, 32980, 29154,
                26734, 24403, 21339, 18179, 15942, 15442, 14368, 13188, 12188,
                11152, 10114, 9076, 8038, 7000, 6643, 6286, 5929, 5527, 5215,
                4858, 4750, 4650, 4600, 4500, 4490, 4300, 4350, 4330, 4310, 4495,
                4477, 4489, 4380,
            ],
            color: '#4c9f70', // Area fill color for USSR/Russia
            lineWidth: 2, // Line thickness
        },
    ],
    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        itemStyle: {
            color: '#333333', // Legend text color
            fontSize: '12px',
        },
        itemHoverStyle: {
            color: '#000000', // Hover color
        },
    },
}
  )
 

const data = [
  { name: 'Jan', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Feb', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Mar', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Apr', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'May', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Jun', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Jul', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
]


const projectsTabels=[
   {
      icons:'devicon:xd',
      company:'Chakra Soft UI Version',
       memeber:'',
      budugt:'$14,000',

      compultion:"60%",
      optoins:'simple-line-icons:options-vertical'

   },
   
   {
      icons:'devicon:xd',
      company:'Add Progress Track',
       memeber:'../assets/images/brooke-cagle-g1Kr4Ozfoac-unsplash 1.png',
      budugt:'$3,000',

      compultion:"60%",
      optoins:'simple-line-icons:options-vertical'

   },
   
   {
      icons:'devicon:xd',
      company:'Fix Platform Errors',
       memeber:'',
      budugt:'Not set',
   
      compultion:"10%",
      optoins:'simple-line-icons:options-vertical'

   },
   
   {
      icons:'devicon:xd',
      company:'Launch our Mobile App',
       memeber:'',
      budugt:'$32,000',
      
      compultion:"100%",
      optoins:'simple-line-icons:options-vertical'

   },
   
   {
      icons:'devicon:xd',
      company:'Add the New Pricing Page',
       memeber:'',
      budugt:'$400',
    
      compultion:"60%",
      optoins:'simple-line-icons:options-vertical'

   },
   
   {
      icons:'skill-icons:linkedin',
      company:'Redesign New Online Shop',
       memeber:'',
      budugt:'$7,600',
   
      compultion:"20%",
      optoins:'simple-line-icons:options-vertical'

   },
   

]
   
   
</script>

 