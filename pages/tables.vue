<template>
   <div class=" container  space-y-5"  >


  <div class="    bg-white p-5 rounded-md h-[519px]  mt-4 ">
         <div class=" flex  justify-between items-start">
            <div  class=" space-y-[6px]">
            <h2 class=" text-[#2D3748] text-[18xp] font-bold ">Authors Table</h2>
            </div>
         </div>
 <Table>
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
      <TableRow class=" h-[70px]" v-for="invoice in AuthTables" :key="invoice.ulr" >
        <TableCell class="font-medium flex items-center  h-[70px]   w-[700px]    gap-2 ">
           <img :src="`${invoice.ulr}`" class=" w-[20px] h-[20px] rounded-md"/> 
           <div>

                       <h1 class=" text-[14px] font-bold text-[#2D3748]">{{ invoice.name }}</h1>
                       <p class=" text-[#718096]  text-[14px]">{{ invoice.email }}</p>

           </div>
        </TableCell >
        <TableCell class="   w-[200px]   ">
                     <h1 class=" text-[14px] font-bold text-[#2D3748]">{{ invoice.job }}</h1>
                     <p class="text-[#718096]  text-[14px]">{{ invoice.postion }}</p>

        </TableCell>
        <TableCell class="   w-[200px] ">
            <button class=" w-[65px] h-[25px] rounded-md p-3 text-white flex items-center " :class="invoice.status==='Online'? 'bg-green-500':' bg-gray-500 opacity-[0.4]' ">{{ invoice.status }}</button>
        </TableCell>
        <TableCell class=" w-[200px]  text-start">
          <p class="  text-main  text-[14px] font-bold ">{{ invoice.data }}</p>  
          
        </TableCell>
   
        <TableCell class="   w-[200px] "  >
      <h1 class=" text-black/35 text-[12px]">Edit</h1>
        </TableCell>
   
      </TableRow>
    </TableBody>
  </Table>

</div>






  <div class="    bg-white p-5 rounded-md h-[519px]   ">
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
      <TableRow class=" h-[70px]" v-for="invoice in projectsTabels" :key="invoice.icons" >
        <TableCell class="font-medium flex items-center  h-[70px]    w-[300px] gap-2 ">
           <Icon :name="`${invoice.icons}`" class=" w-[20px]"/> 
           <h1 class=" text-[14px] font-bold text-[#2D3748]">{{ invoice.company }}</h1>
        </TableCell>
        <TableCell class=" ">
                     <h1 class=" text-[14px] font-bold text-[#2D3748]">{{ invoice.budugt }}</h1>

        </TableCell>
        <TableCell>{{ invoice.status }}</TableCell>
        <TableCell class="  w-24 text-start">
          <p class=" text-[#4FD1C5]  text-[14px] font-bold ">{{ invoice.compultion }}</p>  
          <div class="relative w-[100px] bg-gray-300 h-[3px]  rounded-md">
  <div :style="{ width:invoice.compultion, backgroundColor: '#4FD1C5' }" class="absolute h-[3px] rounded-md top-1/2 transform -translate-y-1/2"></div>
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

const route=useRoute();
console.log(route.name);


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


const AuthTables=[
  {
    ulr:'https://images.pexels.com/photos/28870747/pexels-photo-28870747/free-photo-of-cinematic-urban-portrait-in-new-york-city.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name:'Esthera Jackson',
    job:'Manager',
    status:'Online',
    data:'14/06/21',
    email:'esthera@simmmple.com',
    postion:'Organization'
}
,
  {
    ulr:'https://images.pexels.com/photos/20061413/pexels-photo-20061413/free-photo-of-young-woman-in-a-snowy-forest-with-smartphone-shooting-video-blog.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name:'Alexa Liras',
    job:'Manager',
    status:'Online',
    data:'14/06/23',
    email:'alexa@simmmple.com',
    postion:'Organization'
}
,
  {
    ulr:'https://images.pexels.com/photos/21972308/pexels-photo-21972308/free-photo-of-a-young-woman-with-an-electric-guitar-standing-on-a-street-at-night.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name:'Laurent Michael',
    job:'Manager',
    status:'Offline',
    data:'14/06/21',
    email:'laurentmaca@simmmple.com',
    postion:'Organization'
}
,
  {
    ulr:'https://images.pexels.com/photos/27940276/pexels-photo-27940276/free-photo-of-a-man-sitting-in-the-grass-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name:'Freduardo Hill',
    job:'Manager',
    status:'Online',
    data:'13/06/24',
    email:'freduardhill@simmmple.com',
    postion:'Organization'
}
,
  {
    ulr:'https://images.pexels.com/photos/27045941/pexels-photo-27045941/free-photo-of-young-man-wearing-white-shirt-and-gray-jeans-sitting-in-chair-outdoors.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name:'Esthera Jackson',
    job:'Manager',
    status:'Online',
    data:'14/06/21',
    email:'esthera@simmmple.com',
    postion:'Organization'
}
,
 {
    ulr:'https://images.pexels.com/photos/29486501/pexels-photo-29486501/free-photo-of-stylish-woman-in-modern-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    name:'Mark Wilson',
    job:'Manager',
    status:'Offline',
    data:'14/06/22',
    email:'markWilson23@simmmple.com',
    postion:'Organization'
}
,

]


</script>

<style scoped>

</style>