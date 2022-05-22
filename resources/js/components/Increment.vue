<template>
    <div>

        hello from vue
        {{ a }}
        <button @click="a+=1" class="btn btn-primary">+</button>

    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup() {
        const a = ref(0)
        return {
            a
        }
    },
}
</script>