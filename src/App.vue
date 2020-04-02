<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">DOSCG</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/sequence-solution">1. Sequence solution</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/equation-solution">2. Equation solution</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/line-bot">3. Line Bot</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/google-api-maps">4. Google Maps</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container py-4">
      <router-view/>
    </div>
    <footer class="footer">
      <div class="container">
        <span class="text-muted">Footer content goes here.</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html {
    position: relative;
    min-height: 100%;
  }
  body {
    margin-bottom: 60px; /* Margin bottom by footer height */
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f5f5f5;
  }
  .footer > .container {
    padding-right: 15px;
    padding-left: 15px;
  }
  .router-link-active {
    color: #fff !important;
  }
</style>
