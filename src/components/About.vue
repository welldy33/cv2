<template>
    	<div id="about" class="section">
			<div class="container">
				<div class="row">
                    <div class="col-md-6 col-xs-11 wow fadeInRight" data-wow-delay="0.9s">
						<img class="imgabout" src="/src/assets/images/seswe.png" />
					</div>
					<div class="col-md-6 col-xs-11 wow fadeInLeft" data-wow-delay="0.9s">
						<h2>ABOUT WELLDY</h2>
						<h4>WEB DEVELOPER</h4>
						<p>Experienced in Designing and analyzing the System, as for several systems that have been involved in the development are:</p>

						<p v-for="p in projects" :key="p">{{p}}</p>
					</div>
					
				</div>
			</div>
		</div>
</template>
<script>
export default {
    data() {
        return {
            projects:[
                "EXIM (Export-Import) System Integrates ERP data to TPB / PEB applications from the Government",
                "Canteen System: Canteen Dining Management System, Buyplan, Calory, Budget Per menu, etc.",
                "Container System: Container Ordering System, container tracking,schedule planning",
                "Report & Job System: Report Builder System, and Job Builder",
                "Workshop Tracking, Tracking Prodsution Qty Every Step, Defect Input, Etc"
            ]
        }
    },
}
</script>
<style scoped>
.imgabout{
    background-size:     cover;
    background-repeat:   no-repeat;
    background-position: center center; 
    width: 60%;  
}
</style>