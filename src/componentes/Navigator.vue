<template>
  <section class="src-components-navigator">
    <div id="navigator">
      <button id="reset" @click="restart()">{{ $store.state.button }}</button>
      <span id="message">{{ $store.state.message }}</span>
      <button id="easy" @click="easy()" :class="{ selected: !isHard }">easy</button>
      <button id="hard" @click="hard()" :class="{ selected: isHard }">hard</button>
    </div>
  </section>
</template>

<script>
import Square from './Square.vue'

export default {

  name: 'src-components-navigator',
  props: [],
  componentes: {
    Square
  },
  mounted() {
    this.init()
  },
  data() {
    return {
      colorCount: 6,
      squares: [],
      isHard: true,
      colors: '',
      pickedColor: '',
      restartButton: 'New Colors',
      message: ''
    }
  },
  methods: {
    easy() {
      if (this.isHard) {
        this.isHard = false;
        this.colorCount = 3
        for (let i = 0; i < this.colorCount; i++) {
          let auxSquare = this.squares[(i + 3)]
          auxSquare.style = { ...auxSquare.style, display: 'none' };
        }
        this.restart();
      }
    },
    hard() {
      if (!this.isHard) {
        this.isHard = true;
        this.colorCount = 6;
        for (let i = 0; i < this.colorCount; i++) {
          let auxSquare = this.squares[i]
          auxSquare.style = { ...auxSquare.style, display: 'block' };
        }
        this.restart();
      }
    },
    init() {
      this.$store.dispatch("setButton", "New Colors!");
       this.setAllColorsTo();
      }
    },
    setAllColorsTo() {
      this.$store.dispatch("setColors", this.createNewColors(this.colorCount));
      this.$store.dispatch(
        "setColor", this.$store.state.squares[this.PickColor()].style.backgroundColor
      );
    },
    restart() {
      this.$store.dispatch("setMessage", "");
      this.$store.dispatch("setButton", "New Colors!");
      document.querySelector("#header").style.backgroundColor = "steelblue";
      this.setColors();
    },

    setColors() {
      this.$store.dispatch("setColors", this.createNewColors(this.colorCount));
      this.$store.dispatch(
        "setPickedColor", this.$store.state.squares[this.PickColor()].style.backgroundColor
      );
    },
  

    PickColor() {
      let quantity;
      if (this.isHard) {
        quantity = 6;
      } else {
        quantity = 3;
      }
      return Math.floor(Math.random() * quantity);
    },
    createNewColors(numbers) {
      let arr = [];

      for (var i = 0; i < numbers; i++) {
        arr.push(this.createRandomStringColor());
      }
      return arr;
    },
    createRandomStringColor() {
      let newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")";
      return newColor;
    },
    randomInt() {
      return Math.floor(Math.random() * 256);
    },
  
  computed: {
  }
}


</script>

<style scoped lang="css">
#navigator {
  background: #ffffff;
  height: 29px;
  text-align: center;
  margin: -1;
  margin-top: -31px;
}

#message {
  color: black;
  display: inline-block;
  width: 20%;
}

button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
}

button:hover {
  color: white;
  background-color: steelblue;
}

.selected {
  background-color: steelblue;
  color: white;
}
</style>