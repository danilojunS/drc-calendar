<template>
  <div class="hello">
    <img src="../../assets/vue-logo.png" title="powered by vuejs">
    <h1 class="title">{{ msg }}</h1>
    <div class="calendar-link">
      <a href="/#/calendar">
        Go to Calendar 🗓
      </a>
    </div>
    <div class="github-logo">
      <a href="https://www.github.com/danilojunS/drc-calendar">
        <img src="../../assets/github-icon.png"/>
      </a>
    </div>
    <p>Author: <a href="https://www.github.com/danilojunS">@danilojunS</a></p>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome to DRC Calendar App!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
}
.title {
  margin: 40px 0;
  font-weight: normal;
}
.calendar-link a {
  color: #42b983;
  font-size: 30px;
}
.github-logo {
  margin: 40px 0;
}
.github-logo img {
  height: 60px;
}
</style>
