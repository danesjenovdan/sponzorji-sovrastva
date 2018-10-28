<template>
  <div id="content">
    <div class="title">
      <div id="logo"></div>
      <p>Pokrovitelji<br><strong>sovraštva</strong></p>
    </div>

    <div class="divider"></div>
    <p class="text">Ne zgolj <strong>politika</strong>, tudi <strong>neodgovoren kapital</strong> je kriv za zaskrbljujoče stanje v naši državi.</p>
    <p class="text">Tukaj je seznam podjetij, ki se jim ne zdi sporno, da podpirajo očitno širjenje strahu, sovraštva, ksenofobije, rasizma, homofobije, kar je pripeljalo do tega, da se po gozdovih ustanavljajo paravojaške milice in sovražni diskurz postaja del vsakdana.</p>
    <p class="text">Zahtevajmo umik oglaševanja podjetij v medijih, ki razpihujejo sovraštvo. Podjetja cenijo svoj ugled, pritisk javnosti deluje. <strong>Deli razglednico</strong> in pomagaj ustaviti</p>
    
    <div class="divider"></div>
    <razglednica
      imgSrc="https://placekitten.com/1600/800"
      tweet="I am the tweet yoyo #hešteg"
      emailSubject="I am the email subject"
      emailContent="I am the email content"
      link="https://danesjenovdan.si/thelink"
    />
    <p class="text">Zahtevajmo umik oglaševanja podjetij v medijih, ki razpihujejo sovraštvo. Podjetja cenijo svoj ugled, pritisk javnosti deluje. <strong>Deli razglednico</strong> in pomagaj ustaviti</p>
    <div class="divider"></div>
    <razglednica
      imgSrc="https://placekitten.com/1600/800"
      tweet="I am the tweet yoyo #hešteg"
      emailSubject="I am the email subject"
      emailContent="I am the email content"
      link="https://danesjenovdan.si/thelink"
    />
    <p class="text">Zahtevajmo umik oglaševanja podjetij v medijih, ki razpihujejo sovraštvo. Podjetja cenijo svoj ugled, pritisk javnosti deluje. <strong>Deli razglednico</strong> in pomagaj ustaviti</p>
    <div class="divider"></div>
    <razglednica
      imgSrc="https://placekitten.com/1600/800"
      tweet="I am the tweet yoyo #hešteg"
      emailSubject="I am the email subject"
      emailContent="I am the email content"
      link="https://danesjenovdan.si/thelink"
    />
    <p class="text">Zahtevajmo umik oglaševanja podjetij v medijih, ki razpihujejo sovraštvo. Podjetja cenijo svoj ugled, pritisk javnosti deluje. <strong>Deli razglednico</strong> in pomagaj ustaviti</p>
  </div>
</template>

<script>
import Razglednica from './Razglednica.vue';

export default {
  name: 'vse',
  components: {
    Razglednica,
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
