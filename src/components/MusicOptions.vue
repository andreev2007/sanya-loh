<template>
  <div class="sanya-loh__music-wrapper" >
    <button v-if="windowWidth < 1000" class="sanya-loh__menu-wrapper" @click="toggleMenu">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
        <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" fill="pink"></path>
      </svg>
    </button>
    <transition name="bounce">
      <ul class="sanya-loh__music-list" v-if="windowWidth > 1000 || isMenuOpened">
        <li
            v-for="item in musicOptions"
            :class="{'active': activeItem.option_name === item.option_name}"
            :key="item.id"
            class="sanya-loh__music-item"
            @click="chooseAudio(item)"
        >
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
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import db from '/src/firebase/index';
import { collection, getDocs } from "firebase/firestore";

export default {
  name: "MusicOptions",
  setup() {
    const rndInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const successNotify = () => {
      toast.success(`+ ${rndInt(100, 1000)} Social credits`, {
        autoClose: 1000,
      });
    }
    const dangerNotify = () => {
      toast.error(`- ${rndInt(100000, 1000000)} Social credits`, {
        autoClose: 1000,
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
    activeItem: {
      type: Object,
    },
  },
  data() {
    return {
      isMenuOpened: false,
      windowWidth: window.innerWidth,
      musicOptions: [],
    }
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "music_options"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      this.musicOptions.push(doc.data());
    });
    this.musicOptions.sort((a, b) => b.created_at - a.created_at);
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
        new Audio('https://firebasestorage.googleapis.com/v0/b/sanya-loh-backend.appspot.com/o/audios%2Fchin%20chen%20hong%20chi.mp3?alt=media&token=50ff68d2-9a3c-479a-8491-ce845459e79b').play();
      } else {
        this.dangerNotify();
        new Audio('https://firebasestorage.googleapis.com/v0/b/sanya-loh-backend.appspot.com/o/audios%2Fsiren.mp3?alt=media&token=544db688-e3fb-412f-b068-aa6b748926ca').play();
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
      background-image: url("https://firebasestorage.googleapis.com/v0/b/sanya-loh-backend.appspot.com/o/images%2Flost%20social%20credit%20a%20lot.png?alt=media&token=3007241a-feb8-4dee-b26d-cd6469753a1e");
    }
  }

  &.Toastify__toast--success {
    .Toastify__toast-icon {
      background-image: url("https://firebasestorage.googleapis.com/v0/b/sanya-loh-backend.appspot.com/o/images%2Fplus-social-credits.png?alt=media&token=5da280a5-bc4d-439d-8127-5771c1b93276");
    }
  }
}

.Toastify__toast-icon {
  width: 50px;
  height: 50px;
  background-size: 50px 50px;

  svg {
    display: none;
  }
}

.sanya-loh__music-wrapper {
  display: grid;
  gap: 10px;
  background: linear-gradient(red, orange, yellow, green, blue, purple);
  border-radius: 30px;
  box-shadow: 2px 2px 10px black;
  overflow: hidden;
  padding: 20px;
  width: 300px;

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
  border-radius: 10px;
  padding: 5px;
  transition: 2s;

  &.active {
    background: darkmagenta;
  }
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  list-style: none;
  transition: .3s;
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