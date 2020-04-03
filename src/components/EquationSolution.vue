<template>
  <div>
    <div class="card">
      <div class="card-body">
        If A = 21, A + B = 23, A + C = -21 - Please create a new function for finding B and C value
      </div>
    </div>
    <div class="mt-4">
      <h5>Results from API.</h5>
      <ul class="list-group">
        <li class="list-group-item">B = {{ equationResult.B }}</li>
        <li class="list-group-item">C = {{ equationResult.C }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EquationSolution',
  data () {
    return {
      equationResult: []
    }
  },
  mounted () {
    this.axios.get('/doscg/equation').then((response) => {
      this.equationResult = response.data
    })
  }
}
</script>

<style scoped>

</style>
