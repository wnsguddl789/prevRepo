<template>
	<div>
		<table class="table table-striped">
			<thead>
				<tr>
					<th scopre="col">#</th>
					<th scopre="col">author</th>
					<th scopre="col">title</th>
					<th scopre="col">views</th>
					<th scopre="col">Created At</th>
				</tr>
			</thead>
			<tbody>
				<tr :key="index" @click="detail(index)" v-for="(value,index) in data"  >
					<th scope="row">{{index + 1}}</th>
					<td>{{value.author}}</td>
					<td>{{value.content}}</td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
			
		</table>
		<button class="btn btn-dark btn-block" @click="write">write</button>
		<nav aria-label="Page navigation example">
			<ul class="pagination justify-content-center">
				<li class="page-item">
				<a class="page-link" href="#" aria-label="Previous">
					<span aria-hidden="true">&laquo;</span>
				</a>
				</li>
				<li class="page-item"><a class="page-link" href="#">1</a></li>
				<li class="page-item"><a class="page-link" href="#">2</a></li>
				<li class="page-item"><a class="page-link" href="#">3</a></li>
				<li class="page-item">
				<a class="page-link" href="#" aria-label="Next">
					<span aria-hidden="true">&raquo;</span>
				</a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
import data from '../../data/board.json'
export default{
	name: 'READ',
	data(){
		return{
			data : data
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
	table{
		text-align: center;
	}
</style>