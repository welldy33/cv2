<template>
<div class="section">
    <div class="container">
        <div class="card text-white bg-dark">
             <div class="card-header">
                   <h2 class="headerabi">ABILITY</h2>
             </div>
            <div class="card-body">
                <div v-for="j in row" :key="j" class="row">
                    <div v-for="i in j==4?1:qty" :key="i" class="col-2 wow fadeIn">
                        <img :src="getImage(i,j)" class="icon"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            qty:6,
            row:4,
            loop:0
        }
    },
    methods:{
        getImage(i,j){
            this.loop=(this.qty*j)-this.qty
            var str="ic-"+(''+(i+this.loop)).padStart(2, '0')
            return ("/src/assets/icon/" + str+".png");
        }
    }
}
</script>
<style scoped>
.icon{
    width: 70px;
    padding-bottom: 10px;
}
</style>