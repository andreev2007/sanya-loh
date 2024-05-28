<template>
  <div class="sanya-loh__music-wrapper">
    <button v-if="windowWidth < 1000" class="sanya-loh__menu-wrapper" @click="toggleMenu">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
        <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" fill="pink"></path>
      </svg>
    </button>
    <transition name="bounce">
      <ul class="sanya-loh__music-list" v-if="windowWidth > 1000 || isMenuOpened">
        <li v-for="item in musicOptions" :key="item.id" class="sanya-loh__music-item" @click="chooseAudio(item)">
          <img class="sanya-loh__music-img" :src="item.img_src"
               alt="nigga-music">
          <p class="sanya-loh__item-descr">
            {{ item.option_label }}
          </p>
        </li>
      </ul>
    </transition>
  </div>
</template>
<script>
import gtaSound from "@/assets/gta san.mp3";
import blowjoberSound from "@/assets/sanya-loh.mp3";
import chinaSound from "@/assets/china sound.mp3";
import chinaLoveSound from "@/assets/loverman.mp3";
import penisMusic from "@/assets/penis music.mp3";
import socialCreditPlusMusic from "@/assets/chin chen hong chi.mp3";
import socialCreditMinusMusic from "@/assets/siren.mp3";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  name: "MusicOptions",
  setup() {
    const rndInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const successNotify = () => {
      toast.success(`+ ${rndInt(100, 1000)} Social credits`, {
        autoClose: 2000,
      });
    }
    const dangerNotify = () => {
      toast.error(`- ${rndInt(100000, 1000000)} Social credits`, {
        autoClose: 2000,
      });
    }
    return { successNotify, dangerNotify };
  },
  props: {
    audio: {
      type: Object,
      required: true,
    },
    clicked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isMenuOpened: false,
      windowWidth: window.innerWidth,
      musicOptions: [
        {
          id: 1,
          option_name: 'nigga_chan',
          option_label: 'nigga chan',
          img_src: require('../assets/sanya-loh__music-nigga-head-Photoroom.png-Photoroom.png'),
          audio_src: gtaSound,
          social_credit: -1,
        },
        {
          id: 2,
          option_name: 'china_credit_gimn',
          option_label: 'china credit gimn',
          img_src: require('../assets/sanya-loh__music-nigga-head-second.png'),
          audio_src: chinaSound,
          social_credit: 1,
        },
        {
          id: 3,
          option_name: 'china_love',
          option_label: 'china love',
          img_src: require('../assets/Love_China_Flag.png'),
          audio_src: chinaLoveSound,
          social_credit: 1,
        },
        {
          id: 4,
          option_name: 'penis_music',
          option_label: 'penis music',
          img_src: require('../assets/penis.png'),
          audio_src: penisMusic,
          social_credit: -1,
        },
        {
          id: 5,
          option_name: 'sanya_sosi',
          option_label: 'sanya blowjober',
          img_src: require('../assets/728757-200.png'),
          audio_src: blowjoberSound,
          social_credit: -1,
        },
      ]
    }
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    toggleMenu() {
      this.isMenuOpened = !this.isMenuOpened;
    },
    chooseAudio(item) {
      if (item.social_credit > 0) {
        this.successNotify();
        new Audio(socialCreditPlusMusic).play();
      } else {
        this.dangerNotify();
        new Audio(socialCreditMinusMusic).play();
      }
      this.$emit('music-stop');
      this.$emit('music-replace', new Audio(item.audio_src), item);
      if (this.clicked) {
        this.$emit('music-start');
      }
    },
  }
}
</script>

<style lang="scss">

.Toastify__toast-theme--light {
  background: #c14a42;
  color: white;

  &.Toastify__toast--error {
    .Toastify__toast-icon {
      background-image: url("../assets/lost social credit a lot.png");
    }
  }

  &.Toastify__toast--success {
    .Toastify__toast-icon {
      background-image: url("../assets/plus-social-credits.png");
    }
  }
}

.Toastify__toast-icon {
  width: 100px;
  height: 100px;
  background-size: 100px 100px;

  svg {
    display: none;
  }
}

.sanya-loh__music-wrapper {
  display: grid;
  gap: 10px;
  height: 200px;
  background: linear-gradient(red, orange, yellow, green, blue, purple);
  border-radius: 30px;
  box-shadow: 2px 2px 10px black;
  overflow: hidden;
  padding: 20px;

  .sanya-loh__menu-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: brown;
    width: 60px;
    height: 60px;
    cursor: pointer;
    border: 2px solid pink;
    transition: .3s;

    &:hover {
      border: 2px solid #ca6b7d;
    }
  }
}


.sanya-loh__music-item {
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  cursor: pointer;
}

.sanya-loh__item-descr {
  font-size: 25px;
  font-family: "Sevillana", cursive;
  font-weight: 400;
  font-style: normal;
  padding: 0;
  margin: 0;
  user-select: none;
  transition: .3s;
  color: white;
}

.sanya-loh__music-item:hover .sanya-loh__music-img {
  transform: rotate(9999deg);
}

.sanya-loh__music-img {
  width: 60px;
  height: 60px;
  user-select: none;
  margin-right: 10px;
  transition: transform 5s ease-in-out;
}


.sanya-loh__music-list {
  margin: 0;
  list-style: none;
  transition: .3s;
  height: 170px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
}


.sanya-loh__item-descr:hover {
  text-shadow: 2px 0 blue, -2px 0 blue, 0 2px blue, 0 -2px blue,
  1px 1px blue, -1px -1px blue, 1px -1px blue, -1px 1px blue;

  color: red;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>