<template>
  <div>
      <div id="navigation">
        <button @click="next" class="float-right next-button" variant="light">Next</button>
        <div></div>
        <button @click="back" class="prev-button" variant="light">Prev</button>
      </div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      background="#ababab"
      img-width="800"
      img-height="600"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      @next="next"
      ref="myCarousel"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        img-src="https://upload.wikimedia.org/wikipedia/commons/b/b5/800x600_Wallpaper_Blue_Sky.png"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/d/da/Mandelbrot_Creation_Animation_%28800x600%29.gif">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://images.wallpaperscraft.com/image/tree_fog_grass_119819_800x600.jpg"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide img-src="https://images.wallpaperscraft.com/image/space_background_blue_dots_73340_800x600.jpg"></b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide img-src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Steel-bridge-800x600.JPG"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3000')

export default {
    data() {
        return {
        slide: 0,
        sliding: null
        }
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        },
        next() {
            this.$refs.myCarousel.next()
            const next = this.slide === 5 ? 0 : this.slide + 1;
            socket.emit('nextSlide', next)
        },
        back() {
            this.$refs.myCarousel.prev()
            const back = this.slide === 5 ? 0 : this.slide - 1;
            socket.emit('previousSlide', back)
        }
    },
    created() {
        socket.on('changeSlide', slide => {
            this.slide = slide
        })
    }
}
</script>

<style scoped>
button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
#navigation {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
</style>