<template>
  <div>
    <b-navbar :transparent="true" :fixed-top="true" type="is-dark" :mobile-burger="true" class="main-nav">
      <template #brand>
        <b-navbar-item tag="router-link" to="/">
          <div class="has-text-weight-semibold is-size-4">
            <span class="has-text-white">Shibiko's:</span>
            <span class="has-text-danger">Nitro Gifts</span>
          </div>
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item tag="div">
          <button class="audio-volume button is-danger" @click="toggleAudio()">
            <font-awesome-icon :icon="['fas', audioIcon]" size="lg" />
          </button>
          <audio class="player" src="/audio/music-box.mp3" loop autoplay></audio>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="barbara">
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  export default {
    components: {
      'font-awesome-icon': FontAwesomeIcon
    },
    data() {
      return {
        audioIcon: 'volume-up',
        player: {
          volume: 0.075
        }
      }
    },
    methods: {
      toggleAudio() {
        if (this.audioIcon === 'volume-up') {
          this.audioIcon = 'volume-mute';
          this.player.volume = 0;
          localStorage.setItem('isMuted', 'true');
        } else {
          this.audioIcon = 'volume-up';
          this.player.volume = 0.075;
          localStorage.setItem('isMuted', 'false');
        }
        this.player.play();
      }
    },
    mounted() {
      if (process.client) {
        const isMutedKey = localStorage.getItem('isMuted');
        const isMuted = isMutedKey === 'true' || isMutedKey === undefined;
        this.audioIcon = isMuted ? 'volume-mute' : 'volume-up';
        this.player = document.querySelector('.player');
        this.player.volume = isMuted ? 0 : 0.075;
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

  .main-nav {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }

  a.navbar-item:hover {
    background-color: transparent;
  }

  nav.navbar.is-fixed-top {
    background: transparent;
  }

  .audio-volume {
    width: 40px;
    height: 40px;
    border-radius: 25em;
    text-align: center;
  }

  .player {
    outline: none;
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
  .navbar-menu, .navbar-item {
    background-color: transparent !important;
  }

  .section {
    top: 0;
    width: 100vw;
    height: 100vh;
  }

  .container {
    margin: 45vh auto;
    max-width: 450px !important;
    background: rgba(0, 0, 0, 0.5);
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
