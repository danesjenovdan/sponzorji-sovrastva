<template>
  <div id="app">
    <vse />

    <div id="footer">
      <div id="footershare">
        <div class="front">
          Povej naprej! <img src="./assets/share.svg">
        </div>
        <div class="back">
          <button
            class="btn btn-social js-twitter"
            @click="twShare"
          >
            <svg width="35" height="35" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <!-- eslint-disable-next-line max-len -->
              <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
            </svg>
          </button>
          <button
            class="btn btn-social js-facebook"
            @click="fbShare"
          >
            <svg width="35" height="35" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <!-- eslint-disable-next-line max-len -->
              <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
            </svg>
          </button>
          <button
            class="btn btn-social js-email"
            @click="emailShare"
          >
            <svg width="35" height="35" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <!-- eslint-disable-next-line max-len -->
              <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
            </svg>
          </button>
        </div>
      </div>
      <p>Danes je nov dan</p>
    </div>
  </div>
</template>

<script>
import Vse from './components/Content.vue';

export default {
  name: 'pokrovitelji',
  components: {
    Vse,
  },

  data() {
    return {
      link: 'https://danesjenovdan.si/blahblah',
      tweet: 'This is the default tweet',
      emailSubject: 'This is the email subject',
      emailBody: 'This is the email body',
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
      const url = `mailto:?subject=${encodeURIComponent(this.emailSubject)}&body=${encodeURIComponent(this.emailBody)}`;
      window.open(url, '_blank');
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Barlow:300,500,900&subset=latin-ext');

$black: #363636;

body {
  padding: 0;
  margin: 0;
}

#app {
  width: 100%;
  margin: 0;

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

    #footershare {
      border: 5px solid #ffffff;
      max-width: 385px;
      height: 106px;
      line-height: 100px;
      letter-spacing: 1.2px;
      text-transform: uppercase;

      margin: auto;

      cursor: pointer;

      position: relative;

      .front {
        img {
          display: inline-block;
          width: 50px;
          bottom: -10px;
          position: relative;
        }
      }
      .back {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0;
        display: none;
        background-color: $black;
        transition: all 0.3s;

        padding-top: 20px;

        button {
          background: transparent;
          border: none;
          cursor: pointer;

          margin-left: 10px;
          margin-right: 10px;

          width: 60px;
          height: 60px;

          svg {
            width: 100%;
            height: 100%;
            transform: scale(1);
            transition: all 0.3;

            fill: #ffffff;
          }

          &:hover {
            svg {
              transform: scale(1.2);
            }
          }
        }
      }

      &:hover {
        .back {
          opacity: 1;
          display: block;
        }
      }
    }
  }

  @media (max-width: 767px) {
    #footer {
      font-size: 16px;
      letter-spacing: 0;

      #footershare {
        .front {
          img {
            width: 35px;
          }
        }
        .back {
          button {
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }
}
</style>
