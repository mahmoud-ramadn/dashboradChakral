<template>
  <div
    class="h-[520px] rounded-md setbackground flex relative space-y-10 justify-start flex-col items-center py-6"
  >
    <!-- Header -->
    <div class="w-[939px] h-9 flex items-center justify-between">
      <div class="flex items-center gap-x-1 text-white">
        <Icon name="raphael:icons" />
        <p class="text-[14px] font-bold">PURITY UI DASHBOARD</p>
      </div>

      <ul v-for="(item, index) in Links" :key="index">
        <li>
          <NuxtLink
            class="flex items-center gap-4 text-white text-[10px] font-bold"
            :to="item.titel.toLowerCase()"
          >
            <Icon :name="item.icons" class="w-5 h-5" /> {{ item.titel }}
          </NuxtLink>
        </li>
      </ul>

      <Button
        class="h-9 w-36 bg-white text-[#2D3748] rounded-[35px] px-10 hover:text-main hover:bg-white"
      >
        Free Download
      </Button>
    </div>

    <div class="w-[333px] h-[88px] text-white text-center p-2">
      <h3 class="font-bold text-[32px]">Welcome!</h3>
      <p class="text-xs">
        Use these awesome forms to login or create new account in your project
        for free.
      </p>
    </div>

 
    <!-- Form -->
     <div
      class="w-[452px] h-[713px] absolute left-1/2 -translate-x-1/2 bg-white flex flex-col justify-around items-center p-7 top-56 rounded-md shadow-lg"
    >
    <form @submit.prevent="handleSubmit" class="w-[350px] space-y-7">
      <!-- Name Field -->
      <div class="flex flex-col items-start space-y-2">
        <label for="name" class="text-[14px] text-[#2D3748] cursor-pointer">Name</label>
        <input
          v-model="formDate.name"
          @input="validateField('name')"
          type="text"
          id="name"
          class="rounded-md w-full h-[50px] placeholder:pl-5 pl-2 border-[1px] outline-[1px]"
          placeholder="Your first name"
        />
        <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
      </div>

      <!-- Email Field -->
      <div class="flex flex-col items-start space-y-2">
        <label for="email" class="text-[14px] text-[#2D3748] cursor-pointer">Email</label>
        <input
          v-model="formDate.email"
          @input="validateField('email')"
          type="email"
          id="email"
          class="rounded-md w-full h-[50px] placeholder:pl-5 pl-2 border-[1px] outline-[1px]"
          placeholder="Your email"
        />
        <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
      </div>

      <!-- Password Field -->
      <div class="flex flex-col items-start space-y-2">
        <label for="password" class="text-[14px] text-[#2D3748] cursor-pointer">Password</label>
        <input
          v-model="formDate.password"
          @input="validateField('password')"
          type="password"
          id="password"
          class="rounded-md w-full h-[50px] placeholder:pl-5 pl-2 border-[1px] outline-[1px]"
          placeholder="Your password"
        />
        <p v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</p>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="bg-[#4FD1C5] rounded-md w-full text-white h-[45px] text-[10px]"
        :disabled="loading"
      >
        {{ loading ? "Loading..." : "Sign Up" }}
      </button>
    </form>
  
    <div class="h-[20px]">
        <p class="text-[14px] text-black/45">
          Already have an account?
          <NuxtLink to="/login">
            <span class="text-[14px] font-bold text-[#4FD1C5]">Sign In</span>
          </NuxtLink>
        </p>
      </div>

     </div>
  </div>
</template>


<script setup lang="ts">

// حالة التحميل
const loading = ref(false);

// البيانات الخاصة بالنموذج
const formDate = reactive({
  name: "",
  email: "",
  password: "",
});

// الأخطاء
const errors = reactive({
  name: "",
  email: "",
  password: "",
});

const router = useRouter();

// التحقق من القيم ديناميكيًا
const validateField = (field: string) => {
  if (field === "name") {
    errors.name = formDate.name.length < 2 ? "Name must be at least 2 characters." : "";
  } else if (field === "email") {
    errors.email = !/\S+@\S+\.\S+/.test(formDate.email) ? "Enter a valid email." : "";
  } else if (field === "password") {
    errors.password =
      formDate.password.length < 8 ? "Password must be at least 8 characters." : "";
  }
};

// التحقق من كل الحقول
const validateForm = () => {
  validateField("name");
  validateField("email");
  validateField("password");
  return !errors.name && !errors.email && !errors.password;
};

// إرسال النموذج
const handleSubmit = async () => {
  if (!validateForm()) {
    console.log("Validation failed");
    return;
  }

  loading.value = true;
  try {
    const { data } = await useAsyncGql({
      operation: "CreateUser",
      variables: {
        name: formDate.name,
        email: formDate.email,
        password: formDate.password,
        avatar: "https://example.com/avatar.jpg",
      },
    });
    console.log("User Created:", data);

    // التنقل إلى الصفحة الرئيسية
    router.push("/home");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    loading.value = false;
  }
};

const Links = [
  { titel: "DASHBOARD", icons: "uim:box" },
  { titel: "PROFILE", icons: "mynaui:user-solid" },
  { titel: "SIGN UP", icons: "mingcute:user-4-fill" },
  { titel: "SIGN IN", icons: "fluent:key-16-regular" },
];
</script>

<style scoped>
.setbackground{
background-image: url('../../assets/images/registerbackground.svg');
background-repeat: no-repeat;
background-position: center;
}
</style>