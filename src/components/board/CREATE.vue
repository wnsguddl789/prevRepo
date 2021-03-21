<template>
  <div>      
      <input class="form-control" v-model="author" placeholder="author" name="author"/>
      <input class="form-control" v-model="title" placeholder="title"/>
      <input class="form-control" v-model="content" placeholder="content"/>      
      <button class="btn btn-primary btn-block" @click="write">write</button>
  </div>
</template>

<script>
import data from '@/data'

export default {
    name:'Create',
    data(){
        return{
            data:data,
            author:"",
            title:"",
            content:"",
        }
    },
    methods:{
        write(){
            this.data.push({
                author:this.author,
                title:this.title,
                content:this.content,
            })
            this.$router.push({
                path:'/read'
            })
        }
    }
}
</script>

<style>

</style>