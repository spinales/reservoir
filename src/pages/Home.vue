<template>
  <div class="bg-blue-900 h-screen">
    <Navbar />

    <Search color="white" tittle="Buscar clientes" class="my-24"/>

    <section>
      <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div class="flex justify-around">
          <div class="p-6">
            <button
              type="button"
              class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-3xl text-center mr-2 mb-2 p-12"
            >Reservas</button>
          </div>
          <div class="p-6">
            <button
              type="button"
              class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-3xl text-center mr-2 mb-2 p-12"
            >Clientes</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Search from '../components/Search.vue'


export default {
  name: 'Home',
  components: {
    Navbar,
    Search
  },
}
</script>

<style scoped>

</style>