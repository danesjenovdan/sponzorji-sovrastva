<template>
  <div id="content">
    <div class="title">
      <div id="logo"></div>
      <p>Pokrovitelji<br><strong>sovraštva</strong></p>
    </div>

    <div class="divider"></div>
    <p class="text">
      Ne zgolj <strong>politika</strong>, tudi <strong>neodgovorna podjetja</strong> so kriva za
      zaskrbljujoče stanje v naši državi.
    </p>
    <p class="text">
      Tukaj je seznam tistih, ki posredno podpirajo očitno širjenje strahu, sovraštva, ksenofobije,
      rasizma, šovinizma in homofobije. Tudi to je pripeljalo do ustanavljanja paravojaških milic po
      gozdovih in normalizacije sovražnega diskurza.
    </p>
    <p class="text">
      Zahtevajmo umik oglaševanja podjetij v medijih, ki razpihujejo sovraštvo! Deli katerega od
      spodnjih “oglasov” in pomagaj opozoriti na problem posrednega financiranja sovražne politike.
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
      <p class="text" v-html="addTweetLinks(`${rzg.tweet} ${hashtag}`)"></p>
    </div>
  </div>
</template>

<script>
import Razglednica from './Razglednica.vue';

const razglednice = [
  {
    name: 'TELEKOM',
    imgSrc: 'boter-telekom.jpg',
    tweet: 'Nove ugodnosti za naše zveste bele naročnike. Poveži se s paketom RASIZEM! Več informacij pri našem partnerju @Demokracija1.',
    link: 'telekom',
  },
  {
    name: 'POŠTA',
    imgSrc: 'boter-posta.jpg',
    tweet: 'Pošlji sovraštvo s pomočjo @nova24! S @posta_slovenije hitro, varno in ugodno.',
    link: 'posta',
  },
  {
    name: 'T-2',
    imgSrc: 'boter-t2.jpg',
    tweet: 'Reši T-2 pred stečajem in preženi migrante s slovenskih izobraževalnih institucij!',
    link: 't2',
  },
  {
    name: 'TRIGLAV',
    imgSrc: 'boter-triglav.jpg',
    tweet: 'Zavaruj se pred grozotami LGBT! Novi paket @triglavgroup te brani s pomočjo @nova24.',
    link: 'triglav',
  },
  {
    name: 'MERCATOR',
    imgSrc: 'boter-mercator.jpg',
    tweet: 'Radi imamo domače! Vaš najbolj nestrpen sosed @mercator_sl! @nova24',
    link: 'mercator',
  },
  {
    name: 'TELEMACH',
    imgSrc: 'boter-telemach.jpg',
    tweet: 'Novi paketi @TelemachSi Še več, zdaj z neomejenimi količinami sovraštva in nestrpnosti @nova24.',
    link: 'telemach',
  },
  {
    name: 'PETROL',
    imgSrc: 'boter-petrol.jpg',
    tweet: 'Laž za življenje! @petrol in @Demokracija1.',
    link: 'petrol',
  },
  {
    name: 'SLOVENSKE ŽELEZNICE',
    imgSrc: 'boter-zeleznice.jpg',
    tweet: 'S histerijo lažje in hitreje po Sloveniji! Potovanje omogočata @slozeleznice in @nova24.',
    link: 'slovenske-zeleznice',
  },
];

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
      if (typeof window !== 'undefined') {
        const loc = window.location;
        return `${loc.origin}${this.baseUrl}${link}`;
      }
      return '';
    },
    addTweetLinks(text) {
      return String(text);
      // .replace(/#([^,;.'" ]+)/g, '<strong>#$1</strong>')
      // .replace(/(^|[^@\w])@(\w{1,15})\b/g, '$1<a href="https://twitter.com/$2" target="_blank" rel="noopener noreferrer">@$2</a>');
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Barlow:300,500,900&subset=latin-ext');

$black: #363636;

#content {
  max-width: 1680px;
  margin: auto;
  padding: 40px;

  font-family: 'Barlow', sans-serif;
  font-weight: 300;

  strong {
    font-weight: 500;
  }

  #logo {
    display: block;
    position: relative;
    width: 157px;
    height: 115px;
    background-image: url('../assets/hate.svg');
    margin: auto;
    background-position: center;

    // TODO HACK POSSIBLY WRONG
    left: -10px;
  }

  .title {
    p {
      font-size: 76px;
      text-align: center;
      text-transform: uppercase;

      margin-top: 0;

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
    font-size: 40px;
    position: relative;
    margin: auto;
    margin-top: 40px;
  }

  .razglednica-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    .title {
      p {
        font-size: 36px;

        strong {
          font-size: 41px;
        }
      }
    }

    .text {
      font-size: 26px;
    }
  }
}
</style>
