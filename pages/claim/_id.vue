<template>
  <section class="section">
    <div class="container">
      <div class="title is-size-2 has-text-weight-semibold">
        <span class="has-text-white">Claim your prize:</span>
        <a :href="link">
          <button class="button is-success is-medium has-text-weight-semibold">
            Claim
          </button>
        </a>
      </div>
    </div>
    <audio src="/audio/barbara.mp3#t=0.8" autoplay></audio>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        link: `https://discord.gift/${this.$route.params.id}`
      };
    }
  }
</script>

<style scoped>
  .button {
    vertical-align: text-bottom;
  }
</style>
