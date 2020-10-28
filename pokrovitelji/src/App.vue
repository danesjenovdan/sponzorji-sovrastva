<template>
  <div id="app">
    <app-content
      @tw-share="twShare"
      @fb-share="fbShare"
      @email-share="emailShare"
    />
    <div id="footer">
      <p>
        <a href="https://danesjenovdan.si/" target="_blank">
          <img src="./assets/djnd-logo.svg" alt="Danes je nov dan" />
        </a>
        <a href="https://www.cnvos.si/" target="_blank">
          <img src="./assets/cnvos-logo.png" alt="CNVOS" />
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import AppContent from './components/Content.vue';

export default {
  components: {
    AppContent,
  },
  data() {
    const link = `https://danesjenovdan.si${process.env.BASE_URL}`;
    return {
      link,
      tweet: 'Vasko Simoniti bi rad radiral. Bo tako bolje, minister? #zradirani #metelkova6',
      emailSubject: 'Vasko Simoniti bi rad radiral',
      emailBody: 'Delo smo opravili namesto njega, da bo imel več časa za tekoče posle.',
    };
  },
  methods: {
    fbShare({ link }) {
      const url = `https://www.facebook.com/dialog/feed?app_id=301375193309601&redirect_uri=${encodeURIComponent(document.location.href)}&link=${encodeURIComponent(this.link + link)}&ref=responsive`;
      window.open(url, '_blank');
    },
    twShare({ link }) {
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${this.tweet} ${this.link + link}`)}`;
      window.open(url, '_blank');
    },
    emailShare({ link }) {
      const url = `mailto:?subject=${encodeURIComponent(this.emailSubject)}&body=${encodeURIComponent(`${this.emailBody} ${this.link + link}`)}`;
      window.open(url, '_blank');
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Barlow:300,500,900&subset=latin-ext');

body {
  padding: 0;
  margin: 0;
}
</style>

<style lang="scss" scoped>
$black: #363636;

#app {
  width: 100%;
  margin: 0;
  overflow-x: hidden;

  #footer {
    background-color: $black;
    margin: 0;
    text-align: center;
    font-family: 'Barlow', sans-serif;
    color: #ffffff;
    font-size: 30px;
    letter-spacing: 9.74px;
    padding: 40px;
    margin-top: 100px;

    p {
      display: flex;
      justify-content: center;

      a + a {
        margin-left: 50px;
      }
    }

    a,
    a:visited,
    a:active,
    a:focus {
      display: flex;
      justify-content: center;
      color: #fff;
      text-decoration: none;
      padding: 10px;
      border-radius: 4px;
      border: 4px solid transparent;
      transition: border-color 0.15s ease-in-out;

      &:hover {
        border-color: #fff;
      }

      img {
        height: 68px;
      }
    }
  }

  @media (max-width: 767px) {
    #footer {
      font-size: 16px;
      letter-spacing: 0;

      p {
        flex-direction: column;

        a + a {
          margin-left: 0;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
