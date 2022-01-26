<template>
  <section class="flex justify-center items-center">
      <h1 class="mr-4 text-{{color}} font-normal text-4xl">{{ tittle }}</h1>
      <form>
        <div class="flex justify-center items-center bg-white rounded-lg m-2 border border-gray-300">
            <input type="text" class="bg-transparent rounded-lg text-gray-800 border-0 border-transparent text-sm p-2.5 mr-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-search mx-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
        </div>
      </form>
    </section>
</template>

<script>

export default {
    name:'Search',
    props:{
      tittle: String,
      color: String,
    }
}
</script>

<style>

</style>