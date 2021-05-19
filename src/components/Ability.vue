<template>
<div class="section">
    <div class="container">
        <div class="card">
             <div class="card-header">
                   <h2 style="color:black">ABILITY</h2>
             </div>
            <div class="card-body">
                <div class="row">
                    <div v-for="i in 19" :key="i" class="col-2">
                        <img :src="getImage(i)" class="icon"/>
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
            row:[6,6,6,4],
            loop:0
        }
    },
    methods:{
        getImage(i){
           
            var str="ic-"+(''+i).padStart(2, '0')
            return require("../assets/icon/" + str+".png");
        }
    }
}
</script>
<style scoped>
.icon{
    width: 50px;
    padding-bottom: 10px;
}
.section{
    padding-bottom: 60px;
}
</style>