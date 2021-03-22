<template>
  <div>      
      <input class="form-control" v-model="author" placeholder="author" name="author"/>
      <input class="form-control" v-model="title" placeholder="title"/>
      <textarea class="form-control" v-model="content" placeholder="content"/>   
      <button class="btn btn-primary btn-block" 
        @click="index !== undefined ? update() : write()">
             {{ index !== undefined ? 'Update' : 'Post' }}
      </button>
  </div>
</template>

<script>
import data from '@/data'

export default {
    name:'CREATE',
    data(){
        const index = this.$route.params.contentId;
        return{
            data:       data,
            index:      index,
            author:     index!== undefined ? data[index].author : "",
            title:      index!== undefined ? data[index].title : "",
            content:    index!== undefined ? data[index].content : "",
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
        },
        update(){
            data[this.index.author   = this.author]
            data[this.index.title    = this.title]
            data[this.index.content  = this.content]
            this.$router.push({
                path:'/read'
            })
        }
    }
}
</script>

<style>

</style>