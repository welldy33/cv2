<template>
  <div id="home" class="section">
    <div class="container">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8 wow fadeIn" data-wow-delay="0.9s">
          <h1>{{ name }}</h1>
          <h2 class="rotate">
            {{ job }}
          </h2>
          <p>{{ about }}</p>
          <a
            href="#work"
            class="btn btn-default smoothScroll wow fadeInUp"
            data-wow-delay="1s"
            >Get started</a
          >
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Welldy Rosman",
      job: "DIGITAL MANUFACTURE, WEB DEVELOPER , GRAPHIC DESIGN ,FULLSTACK PROGRAMMER",
      about:
        "Experienced Lead Web Developer with a demonstrated history of working in the sporting goods industry. Skilled in Javasript,Vue JS, PHP, Public Speaking, Management, and HTML. Strong engineering professional with a Bachelor`s degree focused in Management Information Systems, General from Bina Sarana Informatika. ",
    };
  },
};
</script>
