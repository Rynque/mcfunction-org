<template>
  <header class="bg-orange-400 border-b-4 border-b-orange-500">
    <div class="max-w-screen-xl mx-auto px-6 md:px-12 py-20">
      <p class="text-lg text-white/80">Minecraft 技术性月刊</p>
      <h1 class="text-3xl text-white">命令月报</h1>
    </div>
  </header>
  <section>
    <div class="max-w-screen-xl mx-auto py-24 flex flex-col justify-center items-center">
      <p class="text-lg font-medium font-sans tracking-wide">网站正在重构</p>
      <img class="w-64 md:w-96 pixelated" src="/icon/cleaner.png" alt="已经很努力在写网站了">
      <a class="button" href="https://github.com/Rynque/mcfunction-org" target="_blank" rel="noopener noreferrer">查看代码库</a>
    </div>
  </section>
  <AppFooter />
</template>
<style scoped>
.pixelated {
  image-rendering: pixelated;
}
.button {
  --orange-300: rgb(253, 186, 116);
  --orange-350: rgb(252, 166, 88);
  --orange-400: rgb(251, 146, 60);
  --orange-450: rgb(250, 126, 32);
  --orange-500: rgb(249, 115, 22);
  --orange-600: rgb(234, 88, 12);

  display: block;
  background-color: var(--orange-400);
  border: 2px solid var(--orange-300);
  color: white;
  font-size: medium;
  text-align: center;
  text-shadow: 2px 2px 0 rgba(85, 85, 85, 50%);
  
  width: 14rem;
  height: 2.8rem;

  line-height: 2.5rem;

  box-shadow:
    0 5px 0 0 var(--orange-500), /* 侧面 */
    0 6px 0 2px var(--orange-600), /* 边框 */
    0 0 0 2px var(--orange-600);  /* 边框 */
}
.button:hover {
  background-color: var(--orange-450);
}
.button:active {
  box-shadow: 0 0 0 2px var(--orange-600);  /* 边框 */
  transform: translateY(5px);
}
</style>