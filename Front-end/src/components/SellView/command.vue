<script setup>
    import {ref} from 'vue'

    const isopen = ref(false)
</script>
<template>
    <form>
        <div>
            <input type="text" placeholder="email">
        </div>
        <div>
            <button @click="isopen = true">Send</button>
        </div>
    </form>
</template>