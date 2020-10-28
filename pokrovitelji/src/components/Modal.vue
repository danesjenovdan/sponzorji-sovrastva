<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <div class="shares">
                <h1>Deli</h1>
                <button
                  class="btn btn-social js-twitter"
                  @click="$emit('tw-share')"
                >
                  <svg width="35" height="35" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <!-- eslint-disable-next-line max-len -->
                    <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                  </svg>
                </button>
                <button
                  class="btn btn-social js-facebook"
                  @click="$emit('fb-share')"
                >
                  <svg width="35" height="35" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <!-- eslint-disable-next-line max-len -->
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                  </svg>
                </button>
                <button
                  class="btn btn-social js-email"
                  @click="$emit('email-share')"
                >
                  <svg width="35" height="35" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <!-- eslint-disable-next-line max-len -->
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                  </svg>
                </button>
                <h1>Kopiraj povezavo</h1>
                <input
                  :value="shortenedShareLink"
                  class="form-control"
                  spellcheck="false"
                  @focus="$event.target.select()"
                />
                <br>
                <button class="modal-close-button" @click="$emit('close')">Zapri</button>
              </div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Modal',
  props: {
    shareLink: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      shortenedShareLink: null,
    };
  },
  mounted() {
    this.shortenShareLink();
  },
  methods: {
    shortenShareLink() {
      axios
        .post('https://djnd.si/yomamasofat/', `fatmama=${encodeURIComponent(this.shareLink)}`)
        .then((response) => {
          this.shortenedShareLink = response.data;
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
          this.shortenedShareLink = this.shareLink;
        });
    },
  },
};
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
  cursor: auto;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 600px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.shares {
    max-width: 100%;
    top: 40%;
    width: 100%;
    text-align: center;

    transition: all 0.3s;

    button {
      display: inline-flex;
      background: transparent;
      border: none;
      cursor: pointer;

      margin-left: 10px;
      margin-right: 10px;

      width: 100px;
      height: 100px;

      @media (max-width: 767px) {
        width: 70px;
        height: 70px;
      }

      svg {
        width: 100%;
        height: 100%;
        transform: scale(1);
        transition: all 0.3;
      }

      &:hover {
        svg {
          transform: scale(1.2);
        }
      }
    }

    input.form-control {
      border-radius: 0;
      border: 2px solid #000000;
      width: 100%;
      max-width: 400px;
      line-height: 24px;
      padding: 10px;
      font-size: 20px;
      text-align: center;
    }

    .modal-close-button {
      border: 2px solid #000000;
      border-radius: 0;
      padding: 10px;
      font-size: 20px;
      line-height: 24px;
      height: auto;
      margin-top: 20px;
      background: #000000;
      color: #ffffff;
      font-weight: bold;
      text-align: center;
      justify-content: center;

      &:hover {
        background: #ffffff;
        color: #000000;
      }
    }
  }
</style>
