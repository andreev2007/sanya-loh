<template>
  <div class="main-wrapper">
    <MusicOptions
        :audio="audio"
        @music-stop="musicStop"
        @music-start="musicStart"
        @music-replace="audioReplace"
        :clicked="clicked"
    />
    <div class="sanya-loh-wrapper">
      <div class="sanya-loh-wrapper__music-info">
        <h1 v-if="currentMusicName">{{ currentMusicName }}</h1>
      </div>
      <div class="sanya-loh-spinning-wrapper">
        <div
            ref="sanya-loh-element"
            class="sanya-loh-spinning"
            :class="{'sanya-is-loh': clicked}"
            @click="toggleAudio"
            :style="sigmaStyle"
        >
          <img :src="activeSanyaImage">
        </div>
      </div>
      <div class="info">
        <div class="you-agree-block">
          <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFMmw2OZx7f8zb5Hd0FAk9T9d3mLRny6CjXi33ONDZw&s"
              width="20px" height="20px">
          <label>Используя этот вэбсайт вы соглашаетесь на обработку всех ваших персональных данных</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MusicOptions from "@/components/MusicOptions.vue";
const defaultSanyaSrc = 'https://firebasestorage.googleapis.com/v0/b/sanya-loh-backend.appspot.com/o/images%2Fsanya.png?alt=media&token=72b9e86d-36b5-4e5a-9aca-69559477e80f';
export default {
  name: 'SanyaLoh',
  components: {MusicOptions},
  data() {
    return {
      clicked: false,
      audio: new Audio('https://firebasestorage.googleapis.com/v0/b/sanya-loh-backend.appspot.com/o/audios%2Fsanya-loh.mp3?alt=media&token=2ab9aab1-3534-4adf-9fd5-f13f3b68ead6'),
      turn: 0,
      activeSanyaImage: defaultSanyaSrc,
      activeItem: {
        id: 4,
        option_name: 'sanya_sosi',
        option_label: 'sanya blowjober',
      },
    }
  },
  watch: {
    activeItem(value) {
      if (value.sanya_img_src) {
        this.activeSanyaImage = value.sanya_img_src;
      } else {
        this.activeSanyaImage = defaultSanyaSrc;
      }
    },
    turn() {
      setTimeout(() => {
        if (this.clicked) {
          this.turn += 0.05
        }
      }, 1)
      this.sigmaStyle = {transform: 'rotate(' + this.turn + 'turn)'};
    }
  },
  computed: {
    sigmaStyle() {
      return {transform: 'rotate(' + this.turn + 'turn)'}
    },
    currentMusicName() {
      return this.clicked ? `Now playing: ${this.activeItem.option_label}` : `Now chosen: ${this.activeItem.option_label}`;
    }
  },
  methods: {
    audioReplace(audio, item) {
      this.audio = audio;
      this.activeItem = item;
    },
    musicStop() {
      this.audio.pause();
      this.clicked = false;
    },
    musicStart() {
      this.audio.play();
      this.clicked = true;
      this.turn += 0.1;
    },
    toggleAudio() {
      if (this.clicked === false) {
        this.audio.play();
        this.clicked = true;
        this.turn += 0.1;
      } else {
        this.audio.pause();
        this.clicked = false;
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.main-wrapper {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 5vw;
  justify-content: center;
}

.sanya-loh-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  &__music-info {
    background: linear-gradient(red, orange, yellow, green, blue, purple);
    border-radius: 30px;
    padding: 25px;

    h1 {
      font-family: "Sevillana", cursive;
      font-weight: 600;
      font-style: normal;
      color: white;
      margin: 0;
      text-align: center;
    }
  }

  h5 {
    color: white;
    font-weight: 600;
    font-size: 25px;
    font-family: "Overpass", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    margin: 0;
  }

  .sanya-loh-spinning {
    display: flex;
    justify-content: center;
    align-items: center;

    &-wrapper {
      background-image: url(data:image/jpeg;base64,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);
      background-repeat: no-repeat;
      background-size: cover;
    }

    button {
      border: none;
      background: none;
      color: white;
      font-weight: 600;
      font-size: 20px;
      font-family: "Great Vibes", cursive;
      font-style: normal;
      background: blue;
      border-radius: 100%;
      user-select: none;
    }
  }

  .you-agree-block {
    display: flex;
    align-items: center;
    gap: 5px;

    label {
      color: white;
    }
  }
}

@media (min-width: 1000px) {
  .sanya-loh-spinning {
    img {
      width: 530px;
      height: 530px;
    }
  }

  .sanya-loh-wrapper {
    align-items: baseline;
  }
}

@media (max-width: 1000px) {
  .sanya-loh-spinning {
    img {
      width: 500px;
      height: 500px;
    }
  }

  .sanya-loh__music-list {
    height: 170px;
  }

  .main-wrapper {
    display: grid;
    grid-template-columns: none;
    grid-template-rows: auto auto;
    gap: 20px;
  }

  .sanya-loh-wrapper {
    align-items: center;
  }

  .sanya-loh__music-wrapper {
    max-height: 250px;
    height: 170px;

    &.closed {
      height: fit-content;
    }
  }
}

@media (min-width: 500px) and (max-width: 700px) {
  .sanya-loh-spinning {
    img {
      width: 400px;
      height: 400px;
    }
  }
}

@media (max-width: 500px) {
  .sanya-loh-spinning {
    img {
      width: 300px;
      height: 300px;
    }
  }
}

@keyframes a {
  to {
    background-position: 0 -200%
  }
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
