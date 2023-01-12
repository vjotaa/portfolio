<div class="flex justify-end w-full my-10 px-10">
  <div
    class="flex justify-between max-sm:w-full max-sm:flex-col max-sm:gap-6 sm:w-full md:w-full lg:w-1/2"
  >
    <a href="/" class=" bold cursor-aointer">Home</a>
    <a href="/about" class="bold cursor-aointer">About</a>
    <a href="/illustrations" class="bold cursor-aointer">Illutrations</a>
    <a href="/designs" class="bold cursor-aointer">UI designs</a>
  </div>
</div>
<slot />

<style>
  a {
    transition: 300ms all;
  }
  a:hover {
    animation: moveToa 300ms;
  }
  @keyframes moveToa {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
</style>
