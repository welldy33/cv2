<template>
  <div id="work" class="section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 wow bounce">
          <h2>EXPERIENCE</h2>
        </div>
      </div>

      <div class="row">
        <div
          v-for="(com, index) in explist"
          :key="index"
          class="col-md-4 col-xs-11 wow fadeInUp"
          data-wow-delay="0.6s"
        >
          <div class="media">
            <div class="media-object media-left">
              <img :src="getImgUrl(com.src)" class="logocomp" />
            </div>
            <div class="media-body">
              <h4 class="media-heading">{{ com.jobtitle }}</h4>
              <em
                ><p class="compname">{{ com.compname }}</p></em
              >
              <em
                ><p class="year">{{ com.year }}</p></em
              >
              <p class="desc">
                {{ com.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    getImgUrl(pic) {
      return ("/src/assets/images/" + pic);
    },
  },
  data() {
    return {
      explist: [
        {
          compname: "PT. PARKLAND WORLD INDONESIA",
          jobtitle: "Ass. Manager Digital Manufacture",
          year: "2020-Now",
          src: "logo-pwi.jpg",
          desc: `Support MES(Manufacture Execution System) Bussiness Analyst Flow Ensure
                                that all software runs with no output error, no response time problems and
                                functioning according spesifications,Maintain all user access and
                                authorizations (Web Apps) ,Fullstack Developer`,
        },
        {
          compname: "PT. NIKOMAS GEMILANG",
          jobtitle: "Web Developer Leader",
          year: "2016-2020",
          src: "logo-pci.png",
          desc: `Analyze and Design System/Apps,Manage Team for finishing a project,
                Developing Web Application (SJS Framework & C# as service),Maintenance Web Apps`,
        },
          {
          compname: "PT. PURA MAYUNGAN",
          jobtitle: "EDP Staff",
          year: "2014-2015",
          src: "logo-pm.png",
          desc: `Ensure that the IT device runs properly,Support theneeds of IT users,
do hardaware / softwarerepairs,web-application creation, (application
requests hardware / software repair`,
        },
          {
          compname: "PT. ANGKASA PURA SOLUSI",
          jobtitle: "Technical Support",
          year: "2013-2014",
          src: "logo-ap.jfif",
          desc: `Network monitoring,handling problems in the Field 
(software / hardware),ensure operational work devices run 
smoothly (computer, scanner, printer,gate, etc.`,
        },
      ],
    };
  },
};
</script>
<style scoped>
.desc {
  text-align: justify;
}
.logocomp {
  border-radius: 50%;
  height: 50px;
  width: 50px;
}
.year {
  margin: 0;
  margin-bottom: 10px;
}
.compname {
  margin: 0;
}
</style>
