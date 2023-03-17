<template>
  <div :id="$style.app">
    <h2>{{ text }}</h2>
    <!-- <input type="text" v-model="text" > -->
    <!-- <input type="text" :value="text" @input="event => text = event.target.value"> -->
    <CustomSelect :items="['name', 'label', 'salary']"></CustomSelect>
    <CustomInput v-model="text"></CustomInput>
    <ApartmentsList v-bind:items="apartments">
      <template v-slot:title></template>
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
import CustomInput from './components/shared/CustomInput.vue';
import CustomSelect from './components/shared/CustomSelect.vue';

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    CustomInput,
    CustomSelect
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
    handleItemClick() {
      console.log('item click')
    }
  }
}
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
