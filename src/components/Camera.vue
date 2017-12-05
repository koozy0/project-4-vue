<template>
  <div class="camera">
    <div id="mobile">
      <p>Capture Image: <input type="file" accept="image/*" id="capture" capture="camera"></p>
    </div>

    <div id="desktop">
      <div id="video">
        <video autoplay></video>
      </div>
      <img src="">
      <canvas style="display:none;" height="480" width="640"></canvas>
      <button v-if="isCapturing" v-on:click="snapshot">Take Snapshot</button>
      <button v-else v-on:click="toggleCamera">Toggle Camera</button>
      <button v-on:click="vision">Vision</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'camera',
    data() {
      return {
        stream: null,
        isCapturing: false,
        image: null
      }
    },
    methods: {
      toggleCamera: function () {
        const errorCallback = function() {
          console.log('Error')
        }
        const video = document.querySelector('video')
        const that = this
        const videoDiv = document.getElementById('video')
        videoDiv.style.display="block"

        this.isCapturing = !this.isCapturing
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia

        if (navigator.getUserMedia && this.isCapturing) {
          navigator.getUserMedia({video: true}, function(stream) {
            video.src = window.URL.createObjectURL(stream)
            that.stream = stream
            document.querySelector('img').src=""
          }, errorCallback)
        } else {
          const stopTracks = track => track.stop()
          that.stream.getTracks().forEach(stopTracks)
          video.src = null
          videoDiv.style.display="none"
        }
      },
      snapshot: function () {
        const that = this
        const canvas = document.querySelector('canvas')
        const ctx = canvas.getContext('2d')
        const video = document.querySelector('video')

        if (that.stream) {
          ctx.drawImage(video, 0, 0, 640, 480)
          that.image = canvas.toDataURL('image/webp')
          document.querySelector('img').src = that.image
        }

        this.toggleCamera()
      },
      vision: function () {
        const key = 'AIzaSyBawpo7NovwPMYtBr_K-71BaF--_hluLSA'
        const url = `https://vision.googleapis.com/v1/images:annotate?key=${key}`
        let content = this.image.replace('data:image/webp;base64,', '')
        let body =
        {
          requests: [
            {
              image: { content: content },
              features: [{ type: "DOCUMENT_TEXT_DETECTION" }]
            }
          ]
        }
        this.$http.post(url, body)
        .then(response => {
          console.log(response.body.responses[0])
        }, response => {
          console.log('error', response)
        })
      }
    }
  }
</script>

<style scoped>
@media screen and (min-width: 0px) and (max-width: 480px) {
  #mobile { display: block; }  /* show it on small screens */
  #desktop { display: none; } /* hide it on small screens */
}

@media screen and (min-width: 481px) {
  #desktop { display: block; }  /* show it on large screens */
  #mobile { display: none; } /* hide it on large screens */
}
</style>
