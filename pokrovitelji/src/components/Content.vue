<template>
  <div id="content">
    <div class="title">
      <div id="logo">
        <img src="../assets/zradirani.gif" />
      </div>
    </div>

    <div class="divider" style="margin-top: 80px;"></div>
    <p class="text lead">
      Vasko Simoniti bi rad radiral. Pomagali smo mu. Bo tako bolje, minister?
    </p>

    <div v-for="razglednica in razglednice" :key="razglednica.name" class="razglednica-container">
      <div class="divider"></div>
      <razglednica
        :image="`${baseUrl}razglednice/${razglednica.image}`"
        :share-link="shareLink"
        @tw-share="$emit('tw-share')"
        @fb-share="$emit('fb-share')"
        @email-share="$emit('email-share')"
      />
      <p class="source-text">
        <a :href="razglednica.url" target="_blank" rel="noopener noreferrer">Vir</a>
      </p>
    </div>
  </div>
</template>

<script>
import Razglednica from './Razglednica.vue';
import { razglednice } from '../assets/razglednice.json';

export default {
  components: {
    Razglednica,
  },
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      razglednice,
      hashtag: '#protisovraštvu',
      emailSubject: 'Ustavimo botre sovraštva',
      shareLink: `https://danesjenovdan.si${process.env.BASE_URL}`,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Barlow:300,500,900&subset=latin-ext');

$black: #363636;

#content {
  max-width: 992px;
  margin: auto;
  padding: 40px 80px;

  font-family: 'Barlow', sans-serif;
  font-weight: 300;

  strong {
    font-weight: 500;
  }

  #logo {
    display: block;
    position: relative;
    margin: auto;
    text-align: center;

    img {
      width: 100%;
      max-width: 400px;
      height: auto;
    }
  }

  .title {
    p {
      font-size: 195px;
      text-align: center;
      text-transform: uppercase;
      line-height: 90px;
      margin-top: 30px;
      margin-bottom: 30px;

      strong {
        font-weight: 900;
        font-size: 87px;
      }
    }
  }

  .divider {
    max-width: 466px;
    height: 13px;
    background-color: $black;
    position: relative;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 120px;
  }

  .text {
    text-align: center;
    max-width: 1200px;
    font-size: 26px;
    position: relative;
    margin: auto;
    margin-top: 40px;
    padding: 0 60px;

    &.lead {
      font-size: 45px;
    }
  }

  .source-text {
    font-size: 20px;
    font-weight: 500;
    font-style: italic;

    a,
    a:focus,
    a:active,
    a:visited {
      color: $black;
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .razglednica-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    .title {
      p {
        font-size: 89px;
        line-height: 46px;

        strong {
          font-size: 41px;
        }
      }
    }

    .text {
      font-size: 28px;
      padding: 0;

      &.lead {
        font-size: 45px;
      }
    }

    .razglednica + .text {
      margin-top: 60px;
    }
  }
}

@media (max-width: 480px) {
  #content {
    padding-left: 30px;
    padding-right: 30px;

    .divider {
      margin-bottom: 100px;
    }

    .text {
      font-size: 20px;

      &.lead {
        font-size: 35px;
      }
    }
  }
}
</style>
