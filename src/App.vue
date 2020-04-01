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
              <a class="nav-link" href="#">3. Line Bot</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">4. Google Maps</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container py-4">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .router-link-active {
    color: #fff !important;
  }
</style>
