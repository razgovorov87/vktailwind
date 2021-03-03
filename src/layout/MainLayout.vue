<template>
    <div>
        <header class="bg-white h-12 border border-gray-200">
            <div class="container mx-auto flex items-center h-full space-x-5" style="max-width: 990px;">
                <img class="w-36 flex-shrink-0" src="@/assets/logo.svg" alt="Вконтакте">

                <div class="rounded bg-gray-200 w-52 py-1 flex-shrink-0 px-3 text-sm flex items-center text-gray-500">
                    <svg class="w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input class="bg-transparent focus:outline-none" type="text" placeholder="Поиск">
                </div>

                <!-- Notification -->
                <div class="h-full flex items-center px-4 hover:bg-gray-100 cursor-pointer">
                    <svg class="w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                    </svg>
                </div>

                <!-- Player -->
                <div class="h-full hover:bg-gray-100 flex items-center px-2 flex-grow">

                    <div class="h-full flex items-center space-x-2 mr-4">
                        <svg class="w-6 text-gray-500 cursor-pointer hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path>
                        </svg>

                        <svg class="w-6 text-gray-500 cursor-pointer hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>

                        <svg class="w-6 text-gray-500 cursor-pointer hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>

                    <div class="text-sm text-gray-500 truncate" style="max-width: 15rem;">
                        Кино - Кукушка
                    </div>

                </div>

                <div class="h-full flex justify-end font-bold text-sm flex-grow">
                    <div class="cursor-pointer hover:bg-gray-100 h-full flex items-center px-2 space-x-2">
                        <div>Мария</div>
                        <div>
                            <img class="w-9 rounded-full" src="https://randomuser.me/api/portraits/women/43.jpg" alt="">
                        </div>
                        <div>
                            <svg class="w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <main class="pt-4 h100">
            <div class="container mx-auto flex h-full" style="max-width: 990px;">
                <div class="w-40 h-12 mr-1 flex-shrink-0"></div>
                <router-view/>
            </div>
        </main>
    </div>
</template>


<style scoped>
.h100 {
    height: calc(100vh - 3rem);
}
</style>