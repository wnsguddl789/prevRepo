<template>
	<div>
		<table class="table">
			<thead>
				<tr>
					<th scopre="col">#</th>
					<th scopre="col">author</th>
					<th scopre="col">title</th>
					<th scopre="col">content</th>
				</tr>
			</thead>
			<tbody>
				<tr :key="index" @click="detail(index)" v-for="(value,index) in data"  >
					<th scope="row">{{index + 1}}</th>
					<td>{{value.author}}</td>
					<td>{{value.title}}</td>
					<td>{{value.content}}</td>
				</tr>
			</tbody>
			
		</table>
		<button class="btn btn-primary btn-block" @click="write">write</button>
	</div>
</template>

<script>
import data from '@/data'
export default{
	name: 'Read',
	data(){
		return{
			data:data
		}
	},
	methods:{
		write(){
			this.$router.push({
				path:'create'
			})
		},
		detail(index){
			this.$router.push({
				name:'DETAIL',
				params:{
					contentId:index
				}
		})
	}
	},
	
}
</script>

<style>
</style>