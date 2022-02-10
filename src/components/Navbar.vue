<script></script>

<template>
  <header
    class="bg-white pb-6 sm:pb-8 lg:pb-12 flex justify-between items-center py-4 md:py-8 mb-8 md:mb-12 xl:mb-16 max-w-screen-2xl px-4 md:px-8 mx-auto"
  >
    <!-- logo - start -->
    <a
      href="/"
      class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
      aria-label="logo"
    >
      <img src="/src/assets/icon.svg" alt="logo" class="w-10" />

      Speech to Text
    </a>
    <!-- logo - end -->

    <!-- nav - start -->
    <nav class="hidden lg:flex gap-12">
      <a
        href="#home"
        class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
        >Home</a
      >
      <a
        href="#feature"
        class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
        >Feature</a
      >
      <a
        href="#gallery"
        class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
        >Galery</a
      >
      <a
        href="#faq"
        class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
        >FAQ</a
      >
    </nav>
    <!-- nav - end -->

    <button
      type="button"
      class="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
      </svg>

      Menu
    </button>
    <!-- buttons - end -->
  </header>
</template>

<style scoped></style>
