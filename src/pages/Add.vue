<template>
    <div>
        <Navbar class="bg-blue-900" />

        <h2 class="text-3xl bg-gray-300 m-8 p-4 rounded-xl w-10/12">Nueva Reserva</h2>

        <div class="flex justify-around items-center">
            <form class="w-5/12 m-8" action>
                <div class="my-8">
                    <label
                        for="clientes"
                        class="block mb-2 text-sm font-medium text-gray-900"
                    >Cliente</label>
                    <select
                        id="clientes"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                        <option value="angel lahoz">Angel Lahoz</option>
                        <option value="john smith">John Smith</option>
                        <option value="pedro carlos">Pedro Carlos</option>
                    </select>
                </div>
                <div class="my-8">
                    <label for="hotels" class="block mb-2 text-sm font-medium text-gray-900">Hoteles</label>
                    <select
                        id="hotels"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                        <option value="paradise">Paradise</option>
                        <option value="hard rock">Hard Rock</option>
                    </select>
                </div>
                <div class="my-8 flex justify-around">
                    <div class="w-2/5">
                        <label
                            for="adultos"
                            class="block mb-2 text-sm font-medium text-gray-900"
                        >Adultos</label>
                        <input
                            type="number"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>
                    <div class="w-2/5">
                        <label
                            for="niños"
                            class="block mb-2 text-sm font-medium text-gray-900"
                        >Niños</label>
                        <input
                            type="number"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>
                </div>

                <div date-rangepicker class="flex items-center">
                    <div class="relative">
                        <div
                            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                        >
                            <svg
                                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                        <input
                            name="start"
                            type="text"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
                            placeholder="Select date start"
                        />
                    </div>
                    <span class="mx-4 text-gray-500">to</span>
                    <div class="relative">
                        <div
                            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                        >
                            <svg
                                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                        <input
                            name="end"
                            type="text"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
                            placeholder="Select date end"
                        />
                    </div>
                </div>
            </form>

            <div class="w-5/12">
                <div class="my-8">
                    <button
                        type="submit"
                        class="mx-4 text-white text-2xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-center px-12 py-4"
                    >Guardar</button>
                </div>

                <div>
                    <button
                        type="submit"
                        class="mx-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-2xl px-12 py-4 text-center"
                    >Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import "@themesberg/flowbite/dist/datepicker.bundle.js"

export default {
    name: "Add",
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { Navbar }
};
</script>