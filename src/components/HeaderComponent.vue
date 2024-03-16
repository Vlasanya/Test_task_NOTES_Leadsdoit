<script setup>
  defineProps({
    totalPrice: Number
  })

</script>
<template>
     <header class="flex justify-between border border-b-2 border-slate-300 p-4">
        <router-link to="/" class="flex items-center gap-4">
          <img src="/logo.svg" alt="Logo">
          <div>
            <h1 class="text-3xl font-bold uppercase">Vue Notes</h1>
            <p class="text-slate-400">Your notes</p>
          </div>
          
        </router-link>
        <ul class="flex items-center gap-4">
          
          <li class="text-slate-500 hover:text-black">
            <router-link to="/favorites" class="flex items-center gap-2">
              <img src="/heart.svg" alt="Heart">
              <span>Favorites</span>
            </router-link>
          </li>
          <li class="text-slate-500 hover:text-black">
            <a href="#" class="flex items-center gap-2">
              <img src="/profile.svg" alt="Profile">
              <span>Profile</span>
            </a>
          </li>
        </ul>
        
      </header>
</template>