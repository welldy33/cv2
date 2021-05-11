<template>
    	<div id="portfolio" class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="wow bounce">Training & Seminar</h2>
                    </div>
                    <div v-for="(i,index) in cers" :key="index" class="col-md-3 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
                        <div class="portfolio-thumb">
                            <img :src="getImage(index+1)" height="200" class="img-responsive" alt="portfolio img">
                                <div class="portfolio-overlay">
                                    <h4>{{i.name}}</h4>
                                    <h5>{{'Year  : '+i.year}}</h5>
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
            cers:[
                {
                    name:"Android Beginner",
                    year:"2021"
                },
                {
                    name:"AWS Cloud Practitioner",
                    year:"2021"
                },
                {
                    name:"Javascript Intermediate",
                    year:"2021"
                },
                {
                    name:"SCRUM Management Project",
                    year:"2021"
                },
                 {
                    name:"Backend Beginner",
                    year:"2021"
                },
                {
                    name:"Modular Android App",
                    year:"2021"
                },
                {
                    name:"Javascript Beginner",
                    year:"2021"
                },
                {
                    name:"Kotlin Beginner",
                    year:"2021"
                },
                 {
                    name:"IO & UX Reasearcher",
                    year:"2021"
                },
                 {
                    name:"Train The Trainer",
                    year:"2019"
                },
                 {
                    name:"Lead Action Lead Program",
                    year:"2016"
                },
            ]
        }
    },
    methods:{
        getImage(i){
            var str="c"+i
            return ("/src/assets/images/" + str+".png");
        }
    }
}
</script>