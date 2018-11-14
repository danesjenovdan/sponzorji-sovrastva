<template>
  <div
    class="razglednica"
  >
    <img :src="imgSrc" @click="showModal = true">
    <div class="badge" @click="showModal = true">Deli!</div>
    <modal
      v-if="showModal"
      @close="showModal = false"
      @twShare="twShare"
      @fbShare="fbShare"
      @emailShare="emailShare"
      :shareLink="link"
    />
  </div>
</template>

<script>
import Modal from './Modal.vue';

export default {
  name: 'razglednica',

  components: { Modal },

  props: {
    imgSrc: {
      type: String,
      default: 'https://placekitten.com/1600/800',
    },
    tweet: {
      type: String,
      default: 'Pomagaj prisiliti odločevalce, da razmislijo, če želijo svojo blagovno znamko res povezovati s sovražnimi vsebinami. #botrisovraštva #brezstrahu @TelekomSlo, @petrol, @TriglavGroup, @mercator_sl, @TelemachSi @radio1slo @tedvanet',
    },
    emailSubject: {
      type: String,
      default: 'Ustavimo botre sovraštva',
    },
    emailContent: {
      type: String,
      default: 'Ustavimo botre sovraštva',
    },
    link: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      showModal: false,
    };
  },

  methods: {
    fbShare() {
      const url = `https://www.facebook.com/dialog/feed?app_id=301375193309601&redirect_uri=${encodeURIComponent(document.location.href)}&link=${encodeURIComponent(this.link)}&ref=responsive`;
      window.open(url, '_blank');
    },
    twShare() {
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${this.tweet} ${this.link}`)}`;
      window.open(url, '_blank');
    },
    emailShare() {
      const url = `mailto:?subject=${encodeURIComponent(this.emailSubject)}&body=${encodeURIComponent(`${this.emailContent} ${this.link}`)}`;
      window.open(url, '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>
.razglednica {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  position: relative;

  cursor: pointer;

  img {
    max-width: 100%;
    position: relative;
    margin: auto;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.25);

    transition: all 0.3s;
  }

  .badge {
    background-color: #000000;
    border-radius: 50%;
    width: 160px;
    height: 160px;

    position: absolute;
    right: -30px;
    bottom: -30px;

    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    font-size: 30px;
    font-weight: 500;
    line-height: 105px;

    // transition: all 0.4s;
    transition: all 0.6s cubic-bezier(.87,-1.81,.19,1.44);

    &::after {
      content: '';
      display: block;
      position: relative;

      background-image: url('../assets/share.svg');
      background-repeat: no-repeat;
      background-position: center;

      width: 100px;
      height: 80px;
      margin: auto;
      top: -40px;
    }
  }

  &:hover {
    // img {
    //   filter: grayscale(100%);
    //   opacity: 0.5;
    // }
    // .shares {
    //   opacity: 1;
    //   display: block;
    // }
    .badge {
      transform: scale(1.2);
    }
  }

  @media (max-width: 767px) {
    & {
      margin-left: -40px;
      margin-right: -40px;
    }
    .shares {
      button {
        width: 50px;
        height: 50px;
      }
    }

    .badge {
      width: 100%;
      border-radius: 0;
      height: 40px;
      font-size: 20px;
      line-height: 40px;

      right: 0;
      bottom: -37px;

      &::after {
        width: 20px;
        height: 20px;
        top: 0;
        margin-left: 10px;
        display: inline-block;
      }
    }
  }
}
</style>
