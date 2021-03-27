<template>
  <div class="barbara">
    <nuxt/>
<!--    <audio class="player" src="/audio/music-box.mp3" loop autoplay></audio>-->
  </div>
</template>

<script>
  export default {
    mounted() {
      if (process.client) {
        // const player = document.querySelector('.player');
        // player.volume = 0.25;
      }
    }
  }
</script>

<style scoped>
  .barbara {
    background-size: cover;
    background-position: top center;
    background-image: url(/barbara.webp);
  }

  .player {
    position: absolute;
    z-index: -1;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    top: 0;
  }
</style>

<style>
  .section {
    width: 100vw;
    height: 100vh;
  }

  .container {
    margin: 45vh auto;
    max-width: 450px !important;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 1em;
    justify-content: center;
    text-align: center;
    padding: 1em 0;
  }

  .title {
    margin: 0 auto;
    justify-content: center;
  }
</style>
