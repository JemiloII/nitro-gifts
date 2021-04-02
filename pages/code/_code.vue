<template>
  <section class="section">
    <div class="container">
      <button v-if="!revealed" class="button is-success is-large" type="button" @click.prevent="reveal()">Human Check</button>
      <div v-if="revealed" class="title is-size-2 has-text-weight-semibold">
        <span class="has-text-white">Click on:</span>
        <span class="has-text-danger is-capitalized">{{waifu}}</span>
      </div>

      <button v-if="revealed" @click="isWaifu(character)" v-for="(character, index) in characters" :key="index">
        <img
          width="100"
          height="100"
          :src="`/captcha/${character}.png`"
          :alt="character"
        >
      </button>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        player: {
          play() {}
        }
      };
    },
    async asyncData({ route }) {
      const {
        nitro = 'ZqyKmQFba8NhC2D9'
      } = await fetch(`https://nitro.shibiko.io/nitro/${route.params.code}`)
            .then(res => res.json());

      return {
        nitro,
        waifu: '',
        revealed: false,
        characters: [
          'barbara',
          'diona',
          'klee',
          'xiangling'
        ]
      }
    },
    methods: {
      selectWaifu() {
        const index = Math.floor(Math.random() * 3);
        this.waifu = this.characters[index];
      },
      isWaifu(character) {
        this.player.play();
        if (this.revealed) {
          if (this.waifu === character) {
            return this.$router.push({path: `/claim/${this.nitro}`});
          }
          return this.$router.push({path: `/miss-clicked`});
        }
      },
      reveal() {
        this.player.play();
        this.revealed = !this.revealed;
      },
      shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;
      }
    },
    mounted() {
      this.characters = this.shuffle(this.characters);
      this.selectWaifu();
      this.player = document.querySelector('.player') || this.player;
    }
  }
</script>

<style scoped>
  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .button {
    vertical-align: bottom;
  }
</style>

