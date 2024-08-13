<template>
  <div id="content">
    <div class="title">
      <div id="logo">
        <img src="../assets/logo-botri.png" />
      </div>
      <!-- <p>Botri<br><strong>sovraštva</strong></p> -->
    </div>

    <div class="divider" style="margin-top: 80px;"></div>
    <p class="text">
      Ne zgolj <strong>politika</strong>, tudi <strong>neodgovorna podjetja</strong> so kriva za
      zaskrbljujoče stanje v naši državi.
    </p>
    <p class="text">
      Tukaj je seznam nekaterih, ki z oglaševalskim denarjem posredno podpirajo očitno širjenje
      strahu, sovraštva, ksenofobije, rasizma, šovinizma in homofobije.
    </p>
    <p class="text">
      Normalizacija sovražnega diskurza je družbeni problem, na katerega moramo dosledno in glasno opozarjati. Kljub <a href="https://www.dnevnik.si/1042845291/slovenija/svet-evrope-poziva-slovenijo-k-boju-proti-sovraznemu-govoru" target="_blank">priporočilom Sveta Evrope</a> v Sloveniji primanjkuje moralnih zgledov političnih funkcionarjev in ustreznih mehanizmov v pravosodju. Zato je odgovornost civilne družbe, da se postavi po robu razraščanju nevarne in toksične sovražnosti. Namesto da se čudimo ustanavljanju paravojaških milic po gozdovih, se vprašajmo, kje je izvor problema in kaj mu botruje.
    </p>
    <p class="text">
      Zahtevajmo umik oglaševanja podjetij v medijih, ki razpihujejo sovraštvo!
    </p>
    <p class="text">
      <strong>
        Deli katerega od spodnjih "oglasov" in pomagaj prisiliti odločevalce, da razmislijo, če
        želijo svojo blagovno znamko res povezovati s sovražnimi vsebinami.
      </strong>
    </p>

    <div v-for="rzg in razglednice" :key="rzg.name" class="razglednica-container">
      <div class="divider"></div>
      <razglednica
        :imgSrc="`${baseUrl}razglednice/${rzg.imgSrc}`"
        :tweet="`${rzg.tweet} ${hashtag}`"
        :emailSubject="emailSubject"
        :emailContent="rzg.tweet"
        :link="getShareLink(rzg.link)"
      />
      <p class="text">
        <strong style="font-size: 1.1em;">{{ rzg.title }}</strong>
        <br>
        <br>
        {{ rzg.description }}
      </p>
    </div>
  </div>
</template>

<script>
import Razglednica from './Razglednica.vue';
import { razglednice } from '../assets/razglednice.json';

export default {
  name: 'vse',
  components: {
    Razglednica,
  },
  data() {
    return {
      hashtag: '#protisovraštvu',
      emailSubject: 'Ustavimo botre sovraštva',
      baseUrl: process.env.BASE_URL,
      razglednice,
    };
  },
  methods: {
    getShareLink(link) {
      return `https://botri-sovrastva.danesjenovdan.si${this.baseUrl}${link}`;
    },
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
    // width: 500px;
    // height: 300px;
    // background-image: url('../assets/logo-botri.png');
    margin: auto;
    // background-position: center;
    // background-size: contain;

    // TODO HACK POSSIBLY WRONG
    // left: -10px;

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
    }
  }
}
</style>
