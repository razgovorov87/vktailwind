<template>
    <div>
        <div class="bg-white h-12 border border-gray-200">
        <div class="container mx-auto flex items-center h-full space-x-5" style="max-width: 990px;">
            <img class="w-36 flex-shrink-0" src="@/assets/logo.svg" alt="Вконтакте">

            <div class="rounded bg-gray-200 w-52 py-1 flex-shrink-0 px-3 text-sm flex items-center text-gray-500">
                <svg class="w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input class="bg-transparent focus:outline-none" type="text" placeholder="Поиск">
            </div>

            <div class="h-full flex flex-grow justify-end font-bold text-sm">
                <p class="cursor-pointer hover:bg-gray-100 h-full flex items-center px-2">Switch to English</p>
            </div>
        </div>
    </div>

    <div class="py-7">
        <router-view/>
    </div>
</div>
</template>