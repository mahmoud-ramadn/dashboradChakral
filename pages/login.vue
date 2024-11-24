<template>
  <div class="relative min-h-screen">
    <!-- Background Image -->
    <div class="absolute right-0 top-0">
      <img src="../assets/images/loginbackgrouon.svg" alt="Background" />
    </div>

    <!-- Container -->
    <div class="min-h-screen container flex px-[200px] justify-start items-start flex-col">
      <!-- Header -->
      <div
        class="w-[1000px] shadow-md flex items-center text-main mt-11 justify-around bg-gradient-to-r from-white/80 to-white/75 rounded-md h-[70px] backdrop-blur-md"
      >
        <div class="flex items-center gap-x-1">
          <Icon name="raphael:icons" />
          <p class="text-[14px] font-bold">PURITY UI DASHBOARD</p>
        </div>

        <ul v-for="(item, index) in Links" :key="index">
          <li>
            <NuxtLink class="flex items-center gap-4 text-[10px] font-bold">
              <Icon :name="item.icons" class="w-5 h-5" /> {{ item.titel }}
            </NuxtLink>
          </li>
        </ul>

        <Button
          class="h-9 w-36 bg-white py-2 rounded-[35px] bg-gradient-to-r from-[#313860] to-[#151928] text-white px-10 hover:bg-white"
        >
          Free Download
        </Button>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleSubmit" class="w-[350px] mt-[300px] space-y-4">
        <h1 class="text-[32px] text-[#4FD1C5] font-bold">Welcome Back</h1>
        <p class="text-[#A0AEC0] text-[14px]">Enter your email and password to sign in</p>

        <!-- Email Field -->
        <div class="flex flex-col items-start space-y-2">
          <label for="email" class="text-[14px] text-[#2D3748]">Email</label>
          <input
            @input="validateField('email')"
            type="text"
            v-model="formDate.email"
            name="email"
            id="email"
            class="rounded-md w-full h-[50px] placeholder:pl-5 pl-2 border-[1px] outline-[1px]"
            placeholder="Your email"
          />
          <p v-if="errors.email && errors.email !== 'required'" class="text-red-500 text-sm">
            {{ errors.email }}
          </p>
        </div>

        <!-- Password Field -->
        <div class="flex flex-col items-start space-y-2">
          <label for="password" class="text-[14px] text-[#2D3748]">Password</label>
          <input
            @input="validateField('password')"
            type="password"
            v-model="formDate.password"
            id="password"
            class="rounded-md w-full h-[50px] placeholder:pl-5 pl-2 border-[1px] outline-[1px]"
            placeholder="Your password"
          />
          <p v-if="errors.password && errors.password !== 'required'" class="text-red-500 text-sm">
            {{ errors.password }}
          </p>
        </div>

        <!-- Remember Me -->
        <div class="flex items-center gap-4">
          <Switch style="background: #4FD1C5;" />
          <span class="text-[12px]">Remember me</span>
        </div>

        <!-- Submit Button -->
        <button
          class="bg-[#4FD1C5] rounded-md w-full text-white h-[45px] text-[10px]"
          :disabled="loading"
        >
          {{ loading ? "Loading..." : "SIGN IN" }}
        </button>
      </form>

      <!-- Redirect to Sign Up -->
      <div class="h-[20px] py-5">
        <p class="text-[14px] text-black/45">
          Don't have an account?
          <NuxtLink to="/">
            <span class="text-[14px] font-bold text-[#4FD1C5]">Sign up?</span>
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import Switch from "~/components/ui/switch/Switch.vue";

const loading = ref(false);

const formDate = reactive({
  email: "",
  password: "",
});

const errors = reactive({
  email: "required",
  password: "required",
});

const router = useRouter();

// Validate a specific field
const validateField = (field: string) => {
  if (field === "email") {
    errors.email = !/\S+@\S+\.\S+/.test(formDate.email) ? "Enter a valid email." : " required";
  } else if (field === "password") {
    errors.password =
      formDate.password.length < 8 ? "Password must be at least 8 characters." : "";
  }
};

// Validate all fields
const validateForm = () => {
  validateField("email");
  validateField("password");
  return !errors.email && !errors.password;
};

// Submit the form
const handleSubmit = async () => {
  if (!validateForm()) {
    console.log("Validation failed");
    return;
  }

  loading.value = true;
  try {
    const { data } = await useAsyncGql({
      operation: "SignIN",
      variables: {
        email: formDate.email,
        password: formDate.password,
      },
    });
    console.log("Access Token:", data.value.login.access_token);

    // Navigate to the home page
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

definePageMeta({
  layout: "form",
});
</script>


<style scoped>

</style>