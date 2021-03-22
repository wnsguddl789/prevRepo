<template>
  <div>detail</div>
</template>

<script>
import data from '@/data'
export default {
    name:'DETAIL',
    data(){
        const index = this.$route.params.contentId
        return{
            data:data[index]
        }
    }
}
</script>

<style>

</style>