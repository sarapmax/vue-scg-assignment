<template>
  <div>
    <div class="card">
      <div class="card-body">
        Please use “Google API” for finding the best way to go to Central World from SCG Bangsue
      </div>
    </div>
    <div class="mt-4">
      <h5>Results from API.</h5>
      <div class="row">
        <div class="col-md-8">
          <div id="map"></div>
        </div>
        <div class="col-md-4">
          <div id="right-panel"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Loader} from 'google-maps'
const loader = new Loader('AIzaSyAWTJJLOI9WQZbSO6hVAdABlPe8svGH1DM')
export default {
  name: 'GoogleApiMaps',
  data () {
    return {
    }
  },
  async mounted () {
    await loader.load().then((google) => {
      const directionsRenderer = new google.maps.DirectionsRenderer()
      const directionsService = new google.maps.DirectionsService()
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: { lat: 13.803987, lng: 100.538353 }
      })
      directionsRenderer.setMap(map)
      directionsRenderer.setPanel(document.getElementById('right-panel'))

      this.calculateAndDisplayRoute(directionsService, directionsRenderer)
    })
  },
  methods: {
    calculateAndDisplayRoute (directionsService, directionsRenderer) {
      directionsService.route({
        origin: { lat: 13.803987, lng: 100.538353 },
        destination: { lat: 13.746693, lng: 100.539346 },
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode['DRIVING'],
        drivingOptions: {
          departureTime: new Date(Date.now()),
          trafficModel: 'bestguess'
        }
      }, (response, status) => {
        if (status === 'OK') {
          directionsRenderer.setDirections(response)
        } else {
          window.alert('Directions request failed due to ' + status)
        }
      })
    }
  }
}
</script>

<style scoped>
  #map {
    width: 100%;
    height: 600px;
  }
  #right-panel {
    height: 600px;
    overflow: auto;
  }
</style>
