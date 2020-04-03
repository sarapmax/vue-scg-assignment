<template>
  <div>
    <div class="card">
      <div class="card-body">
        X, Y, 5, 9, 15, 23, Z - Please create a new function for finding X, Y, Z value
      </div>
    </div>
    <div class="mt-4">
      <h5>Results from API.</h5>
      <ul class="list-group">
        <li v-for="result in sequenceResults" :key="result.key" class="list-group-item">{{ result.key }} = {{ result.value }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SequenceSolution',
  data () {
    return {
      sequenceResults: []
    }
  },
  mounted () {
    this.axios.get('/doscg/sequence').then((response) => {
      this.sequenceResults = response.data
    })
  }
}
</script>

<style scoped>

</style>
