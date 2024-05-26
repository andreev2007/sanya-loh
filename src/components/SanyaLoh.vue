<template>
  <div class="sanya-loh__music-wrapper">
    <ul class="sanya-loh__music-list">
      <li class="sanya-loh__music-item">
        <img class="sanya-loh__music-img" src="../assets/sanya-loh__music-nigga-head-Photoroom.png-Photoroom.png"
             alt="nigga-music">
        <p class="sanya-loh__item-descr">
          nigga chan
        </p>
      </li>

      <li class="sanya-loh__music-item">
        <img class="sanya-loh__music-img" src="../assets/sanya-loh__music-nigga-head-second.png"
             alt="nigga-music">
        <p class="sanya-loh__item-descr">
          china credit gimn
        </p>
      </li>

      <li class="sanya-loh__music-item">
        <img class="sanya-loh__music-img" src="../assets/removal.ai_14df95bc-ee6f-4730-b27b-65221d9ee988-71324167---emoji---.png"
             alt="nigga-music">
        <p class="sanya-loh__item-descr">
          penis music
        </p>
      </li>
    </ul>
  </div>

  <div class="sanya-loh-wrapper">
    <div
        ref="sanya-loh-element"
        class="sanya-loh-spinning"
        :class="{'sanya-is-loh': clicked}"
        @click="toggleAudio"
        :style="sigmaStyle"
    >
      <img src="../assets/sanya.png">
    </div>
    <div class="info">
      <a class="download-button" href="../assets/gay_porn.zip" download="gay_porn.zip">СКАЧАТЬ</a>
      <h5>Все права защищены Даниилом Андреевом©</h5>
      <div class="you-agree-block">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFMmw2OZx7f8zb5Hd0FAk9T9d3mLRny6CjXi33ONDZw&s"
             width="20px" height="20px">
        <label>Используя этот вэбсайт вы соглашаетесь на обработку всех ваших персональных данных</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SanyaLoh',
  data() {
    return {
      clicked: false,
      audio: new Audio(require('../assets/sanya-loh.mp3')),
      turn: 0,
      turnSaved: 0,
    }
  },
  watch: {
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
    }
  },
  methods: {
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100..900;1,100..900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Sevillana&display=swap');

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

.sanya-loh__music-wrapper:hover .sanya-loh__music-img{
  transform: rotate(9999deg);
}

.sanya-loh__music-wrapper:hover .sanya-loh__music-img{
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
  padding: 0;
  list-style: none;
}

.sanya-loh__music-item:not(:last-child) {
  margin-bottom: 20px;
}

.sanya-loh__music-wrapper {
  width: 210px;
  height: 230px;
  background: linear-gradient(red, orange, yellow, green, blue, purple);
  border-radius: 30px;
  box-shadow: 2px 2px 10px black;
  overflow: scroll;
  padding: 30px;
}

.sanya-loh__item-descr:hover {
  text-shadow: 2px 0 blue, -2px 0 blue, 0 2px blue, 0 -2px blue,
  1px 1px blue, -1px -1px blue, 1px -1px blue, -1px 1px blue;

  color: red;
}

.sanya-loh-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5vh;

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

  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .download-button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: #0ec10e;
    height: 60px;
    width: 250px;
    cursor: pointer;
    font-size: 35px;
    color: white;
    border: none;
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
}

@media (max-width: 1000px) {
  .sanya-loh-spinning {
    img {
      width: 500px;
      height: 500px;
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
</style>
