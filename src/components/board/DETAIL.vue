<template>
  <div>
      <form>
          <div class="form-group">
            <p><strong>Index</strong> {{index}}</p>
          </div>
          <div class="form-group">
            <p><strong>Author</strong> {{data.author}}</p>
          </div>
          <div class="form-group">
            <p><strong>Title</strong> {{data.title}}</p>
          </div>
          <div class="form-group">
            <p><strong>Content</strong> {{data.content}}</p>
            <!-- <textarea class="form-control" v-model="data.content" id="exampleFormControlTextarea1" rows="3">
                
            </textarea> -->
          </div>
          <button class="btn btn-secondary btn-block" @click="updateData">update</button>
          <button class="btn btn-dark btn-block" @click="deleteData">delete</button>
      </form>
      
  </div>
</template>

<script>
import data from '@/data'
export default {
    name:'DETAIL',
    data(){
        const index = this.$route.params.contentId
        return{
            data:data[index],
            index:index
        }
    },
    methods:{
        deleteData(){
            data.splice(this.index,1)
            this.$router.push({
                path:'/board/read'
            })
        },
        updateData(index){
            this.$router.push({
				name:'CREATE',
				params:{
					contentId:this.index
				}
		    })
        }
    }
}
</script>

<style>

</style>