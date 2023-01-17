<script lant="ts">
  const logo = new URL("../../static/vjotaa.gif", import.meta.url).href;
  let open = false;
</script>

<nav class="bg-gray-800">
  <div class="w-full px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          on:click={() => (open = !open)}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            class="hidden h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div
        class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
      >
        <div class="flex flex-shrink-0 items-center">
          <a href="/">
            <img class="block h-8 w-auto lg:hidden" src={logo} alt="Coin" />
            <img class="hidden h-8 w-auto lg:block" src={logo} alt="Coin" />
          </a>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

            <a
              href="/about"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >About</a
            >

            <a
              href="/illustrations"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >illustrations</a
            >

            <a
              href="/designs"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >Designs</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  {#if open}
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <a
          on:click={() => (open = !open)}
          href="/about"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >About</a
        >

        <a
          on:click={() => (open = !open)}
          href="/illustrations"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >illustrations</a
        >

        <a
          on:click={() => (open = !open)}
          href="/designs"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Designs</a
        >
      </div>
    </div>
  {/if}
</nav>
<slot />
