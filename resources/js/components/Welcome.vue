<template>
    <div>

        hello from vue
       
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