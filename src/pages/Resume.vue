<template>
    <div>
        <Navbar class="bg-blue-900" />

        <section class="flex justify-around">
            <div class="w-2/5 m-4">
                <h1 class="p-4 text-xl bg-gray-400 rounded-xl">Resumen del cliente</h1>

                <form>
                    <div class="my-8">
                        <label
                            for="nombre"
                            class="block mb-2 text-sm font-medium text-gray-900"
                        >Nombre</label>
                        <input
                            type="text"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="John Smith"
                            required
                        />
                    </div>
                    <div class="my-8">
                        <label
                            for="Telefono"
                            class="block mb-2 text-sm font-medium text-gray-900"
                        >Telefono</label>
                        <input
                            type="text"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="809-123-7654"
                            required
                        />
                    </div>
                    <div class="my-8">
                        <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900"
                        >Email</label>
                        <input
                            type="email"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="johnsmith@mail.com"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        class="mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >Agregar</button>

                    <button
                        class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >Cancelar</button>
                </form>
            </div>

            <div class="w-2/5 m-4">
                <div class="flex items-start justify-around m-4">
                    <button class="h-12 p-2 bg-blue-700 px-8 rounded-xl flex justify-center">
                        <img src="../assets/play.png" style="transform: rotate(90deg);" alt="">
                    </button>
                    <button class="h-12 p-2 bg-gray-700 px-8 rounded-xl flex justify-center">
                        <img src="../assets/time.png" alt="">
                    </button>
                    <button class="h-12 p-2 bg-red-700 px-8 rounded-xl flex justify-center">
                        <img src="../assets/delete.png" alt="">
                    </button>
                </div>

                <div class="mt-8">
                    <div class="h-12 bg-gray-600 my-8"></div>
                    <div class="h-12 bg-gray-600 my-8"></div>
                    <div class="h-12 bg-gray-600 my-8"></div>
                    <div class="h-12 bg-gray-600 my-8"></div>
                    <div class="h-12 bg-gray-600 my-8"></div>
                    <div class="h-12 bg-gray-600 my-8"></div>
                </div>

                <button
                        type="submit"
                        class="mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >Agregar reserva</button>
            </div>
        </section>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
    name: "Resume",
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { Navbar }
};
</script>

<style lang="scss" scoped>
</style>