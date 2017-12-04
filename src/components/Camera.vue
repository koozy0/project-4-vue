<template>
  <div class="camera">
    <h1>{{ title }}</h1>

    <video autoplay></video>
    <img src="">
    <canvas style="display:none;"></canvas>
    <button v-on:click="toggleCamera">Toggle Camera</button>
    <button v-on:click="snapshot">Take Snapshot</button>
  </div>
</template>

<script>
  export default {
    name: 'camera',
    data() {
      return {
        title: 'Camera',
        stream: null,
        isCapturing: false
      }
    },
    methods: {
      toggleCamera: function () {
        const errorCallback = function(e) {
          console.log('Reeeejected!', e)
        }

        const video = document.querySelector('video')

        const that = this
        this.isCapturing = !this.isCapturing

        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia

        if (navigator.getUserMedia && this.isCapturing) {
          navigator.getUserMedia({video: true}, function(stream) {
            video.src = window.URL.createObjectURL(stream)
            that.stream = stream
            console.log('capturing starting')
          }, errorCallback)
        } else {
          const stopTracks = function (track) {
            track.stop()
          }
          console.log('capturing stopping')
          video.src = null
          that.stream.getTracks().forEach(stopTracks)
        }
      },
      snapshot: function () {
        console.log('snapshot!')
        const that = this
        const canvas = document.querySelector('canvas')
        const ctx = canvas.getContext('2d')
        const video = document.querySelector('video')

        if (that.stream) {
          ctx.drawImage(video, 0, 0);
          document.querySelector('img').src = canvas.toDataURL('image/webp');
        }

        this.toggleCamera()
      }
    }
  }
</script>

<style scoped>

</style>
