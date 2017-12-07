<template>
  <div class="camera">
    <div id="mobile">
      <br>
      <p>Capture Image:
        <input type="file" accept="image/*" id="capture" capture="camera">
      </p>
      <br>
    </div>

    <div id="desktop">
      <br>
      <div id="video">
        <video class="cam" autoplay></video>
      </div>
      <br><br>
      <img src="">
      <canvas style="display:none;" height="480" width="640"></canvas>
      <br>
      <md-button class="md-icon-button md-raised circleButton"
        v-if="isCapturing"
        v-on:click="snapshot">
        <md-icon>camera_alt</md-icon>
      </md-button>

      <div v-else>
        <md-button
          v-on:click="toggleCamera"
          class="md-raised md-primary buttonStyle">
          Scan New Receipt
        </md-button>

        <md-button
          v-on:click="vision"
          class="md-raised md-primary buttonStyle">
          Vision
        </md-button>
      </div>

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
        image: null,
        receipt: []
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
              features: [{ type: "DOCUMENT_TEXT_DETECTION" }],
              imageContext: {languageHints: ['en']}
            }
          ]
        }
        this.$http.post(url, body)
        .then(response => {
          const checkNewRow = function () {
            if (itemObj.quantity !== 0 && itemObj.item !== '' && itemObj.price.match(/^\$\d{0,8}([\.\,]\d{1,2})?$/)) {
              itemObj.item = itemObj.item.slice(0, -1)
              itemObj.price = itemObj.price.replace(',', '.')
              receipt.push(itemObj)
              itemObj = {
                quantity: 0,
                item: '',
                price: ''
              }
            }
          }

          let responseText = response.body.responses[0].textAnnotations[0].description.split('\n')
          let responseArr = response.body.responses[0].textAnnotations
          responseArr.shift()
          responseArr.sort(function(a, b) {
            let x = a.boundingPoly.vertices[0].y - b.boundingPoly.vertices[0].y
            return x == 0 ? a.boundingPoly.vertices[0].x - b.boundingPoly.vertices[0].x : x
          })

          let itemObj = {
            quantity: 0,
            item: '',
            price: ''
          }

          let receipt = []

          for (let i = 0, len = responseArr.length; i < len; i++) {
            let elem = responseArr[i].description

            if (elem === '$') {
              checkNewRow()

              itemObj.price += elem + responseArr[i+1].description + responseArr[i+2].description + responseArr[i+3].description
              i += 3
            } else if (!isNaN(parseInt(elem))) {
              checkNewRow()

              if (itemObj.quantity === 0) itemObj.quantity = parseInt(elem)
            } else {
              itemObj.item += elem + ' '
            }

            checkNewRow()
          }
          this.receipt = receipt
          console.log('receipt: ', this.receipt)
          document.querySelector('img').src = ''
          this.$router.push({
            name: 'receipt',
            params: {
              initialReceipt: this.receipt
            }
          })
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

.cam {
  border-radius: 15px;
}

.circleButton {
  background-color: rgba(255, 255, 255, 0.6);
  color: #404243;
}
</style>
