<template>
  <section class="src-components-square">
    <div id="container">
      <div class="square" v-for="cuadrado in cuadrados" :style="cuadrado.style" :key="cuadrado.id" @click="consultar(cuadrado.style)"></div>
    </div>
  </section>
</template>

<script>
  export default  {
    name: 'src-components-square',
    props: ['cuadrados', 'color'],
    mounted () {
    },
    data () {
      return {
        menssage: ''
      }
    },
    methods: {
      consultar(squareStyle){
        let { backgroundColor } = squareStyle
        if ( backgroundColor === this.color) {
              this.menssage = "You Picked Right!"
              this.sendMessage()
              this.setAllColorsTo(this.color);
              this.$emit('button', "Play Again!")
              document.querySelector('#header').style.backgroundColor = this.color
            } else {
              this.menssage = "Try Again!";
              this.sendMessage()
              squareStyle.backgroundColor = "#232323"
            }
      },
      setAllColorsTo(color) {
        this.cuadrados.forEach((e) => e.style= { ...e.style, backgroundColor:color})
      },
      sendMessage(){
        this.$emit('message', this.menssage)
      }
    },
    computed: {
    }
}
</script>

<style scoped lang="css">
  .src-components-square {
  }
  .square {
	width: 30%;
	background: blue;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 10%;
	transition: background 0.8s;
	-webkit-transition: background 0.8s;
	-moz-transition: background 0.8s;
}
  #container {
    margin: 20px auto;
    max-width: 600px;
  }
</style>