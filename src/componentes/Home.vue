<template>
  <section class="src-components-home">
    <div id="header">
      <h1>The Great <br>
        <span id="colorDisplay">{{$store.state.pickedColor}} </span>
        <br>
        Guessing Game</h1>
    </div> 
    <Navigator />
  </section>

</template>

<script>
  import Navigator from './Navigator.vue'
  export default  {
    name: 'src-components-home',
    props: [],
    components: {
      Navigator
    },
    mounted () {
    },
    data () {
      return {
        color:''
      }
    },
    methods: {
    },
    computed: {
    }
}
</script>

<style scoped lang="css">
  .src-components-home {
  }
  #header {
	transition: all 0.3s;
	background: steelblue;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
  }
  #colorDisplay {
    font-size: 200%;
  }
</style> 