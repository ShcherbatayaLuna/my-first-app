<template>
  <div id="app">
    <h2>{{ text }}</h2>
    <!-- <input type="text" v-model="text" > -->
    <!-- <input type="text" :value="text" @input="event => text = event.target.value"> -->
    <Container>
      <ApartmentFilterForm class="apartments-filter" @submit="logger"></ApartmentFilterForm>
    </Container>
    <ApartmentsList v-bind:items="apartments">
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem v-bind:key="apartment.id" :descr="apartment.descr" :rating="apartment.rating"
          :imgSrc="apartment.imgUrl" :price="apartment.price" @click.native="handleItemClick">
        </ApartmentsItem>
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import ApartmentsList from './components/apartments/ApartmentsList.vue';
import ApartmentsItem from './components/apartments/ApartmentsItem.vue';
import apartments from './components/apartments/apartments';
import ApartmentFilterForm from './components/apartments/ApartmentFilterForm.vue';
import Container from './components/shared/Container.vue';

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilterForm,
    Container
  },
  data() {
    return {
      apartments,
      text: '',
    }
  },
  // computed: {
  //   title() {
  //     return `Amount of clicks ${this.amountOfClicks}`
  //   }
  // },
  methods: {
    logger(value) {
      console.log(value, '---form value')
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
}

.apartments-filter {
  margin-bottom: 40px;
}
</style>
