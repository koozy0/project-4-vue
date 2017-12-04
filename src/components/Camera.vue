<template>
  <div class="camera">
    <h1>{{ title }}</h1>

    <p>Capture Image: <input type="file" accept="image/*" id="capture" capture="camera"></p>
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
        const video = document.querySelector('video')
        const mediaDevices = navigator.mediaDevices
        const constraints = {
          advanced: [{
              facingMode: "environment"
          }]
        }

        const that = this
        this.isCapturing = !this.isCapturing

        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia

        if (mediaDevices.getUserMedia && this.isCapturing) {
          mediaDevices.getUserMedia({video: constraints})
          .then(stream => {
            console.log('capture starting')
            video.src = window.URL.createObjectURL(stream)
            that.stream = stream
          })
          .catch(err => console.log(err))
        } else {
          const stopTracks = track => track.stop()
          console.log('capture stopping')
          that.stream.getTracks().forEach(stopTracks)
          video.src = null
        }
      },
      snapshot: function (e) {
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
