<template>
    
    <div class="container mx-auto flex" style="max-width: 990px;">
        <div class="border border-gray-200 bg-white pt-3 px-6 pb-6 mr-7">
        <div class="w-full">
            <h1 class="text-xl font-semibold">Недавно входили на сайт с этого компьютера</h1>
            <span class="text-sm">Чтобы войти снова, нажмите на фотографию или имя</span>
        </div>

        <div class="grid grid-cols-3 gap-3 mt-4">

            <div class="border border-gray-200 relative flex flex-col items-center justify-center px-9 py-10 cursor-pointer">
                <img class="w-28 rounded-full" src="https://randomuser.me/api/portraits/men/82.jpg" alt="">
                <span class="text-sm mt-4 text-gray-900 text-center">Иван Иванов</span>
                <div class="absolute top-2 right-2">
                        <svg class="w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                </div>
            </div>

            <div class="border border-gray-200 relative flex flex-col items-center justify-center px-9 py-10 cursor-pointer">
                <img class="w-28 rounded-full" src="https://randomuser.me/api/portraits/women/40.jpg" alt="">
                <span class="text-sm mt-4 text-center text-gray-900">Елизавета Максимова</span>
                <div class="absolute top-2 right-2">
                        <svg class="w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                </div>
            </div>

            <div class="border border-gray-200 relative flex flex-col items-center justify-center px-9 py-10 cursor-pointer">
                <img class="w-28 rounded-full" src="https://randomuser.me/api/portraits/men/12.jpg" alt="">
                <span class="text-sm mt-4 text-gray-900 text-center">Макс Громов</span>
                <div class="absolute top-2 right-2">
                        <svg class="w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                </div>
            </div>

            <div class="border border-gray-200 relative flex flex-col items-center justify-self-start px-9 py-10 cursor-pointer">
                <div class="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg class="w-14 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
                <span class="text-sm mt-4 text-center text-blue-700">Войти в другой аккаунт</span>
            </div>


        </div>


    </div>
    <div class="w-1/3 h-12 bg-white border border-gray-200"></div>
    </div>
</template>