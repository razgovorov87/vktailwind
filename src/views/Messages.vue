<template>
    <div class="flex h-full w-full">
        <div id="msg-wrapper" class="flex flex-col flex-grow overflow-y-auto bg-white mr-4">
            <div class="w-full bg-red-300 p-10 mb-2"></div>
            <div class="w-full bg-red-300 p-10 mb-2"></div>
            <div class="w-full bg-red-300 p-10 mb-2"></div>
            <div class="w-full bg-red-300 p-10 mb-2"></div>
            <div class="w-full bg-red-300 p-10 mb-2"></div>
            <div class="w-full bg-red-300 p-10 mb-2"></div>
            <div class="w-full bg-red-300 p-10 mb-2"></div>
            <div class="w-full bg-red-300 p-10 mb-2"></div>
            <div class="w-full bg-red-300 p-10 mb-2"></div>
            <div class="w-full bg-red-300 p-10 mb-2"></div>
            <div class="w-full bg-red-300 p-10 mb-2"></div>
            <div class="w-full bg-red-300 p-10 mb-2"></div>
            <div class="w-full bg-red-300 p-10 mb-2"></div>
            <div class="w-full bg-red-300 p-10 mb-2"></div>
            <div class="w-full bg-red-300 p-10 mb-2"></div>
            <div class="w-full bg-red-300 p-10 mb-2"></div>
            <div class="w-full bg-red-300 p-10 mb-2"></div>
        </div>
        <div class="w-52 h-12 bg-white flex-shrink-0"></div>
    </div>
</template>


<script>
document.addEventListener("wheel", e => {
    const div = document.querySelector("#msg-wrapper");
    div.scrollTo(0, div.scrollTop + e.deltaY);
}, true)
</script>