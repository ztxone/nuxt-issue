<template>
  <div class="antialiased bg-white dark:bg-black text-black dark:text-white min-h-screen place-content-center flex flex-col items-center justify-center text-sm sm:text-base">
    <div class="flex-1 flex flex-col gap-y-16 py-14">
      <div class="flex flex-col gap-y-4 items-center justify-center">
        <!-- The default call with EN filename  -->
        <Icon mode="svg" name="el:utm-robot" class="size-20" />

        <!-- Call with custom component name in nuxt.config.ts with EN filename -->
        <NuxtIcon mode="svg" name="el:utm-robot" class="size-20" />

        <!-- Filenames in not EN chars -->

        <!-- The default call with unEN filename  -->
        <!-- <Icon mode="svg" name="el:Отрезные-диски" class="size-20" /> -->

        <!-- With custom component name in nuxt.config.ts with unEN filename  -->
        <!-- <Icon mode="svg" name="el:Отрезные-диски" class="size-20" /> -->

        <h1 class="text-black dark:text-white text-4xl sm:text-5xl font-semibold text-center">Welcome to Nuxt!</h1>
      </div>
    </div>
  </div>
</template>