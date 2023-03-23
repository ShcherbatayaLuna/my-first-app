<template>
    <main class="homepage">
        <Container>
            <ApartmentFilterForm class="apartments-filter" @submit="filter"></ApartmentFilterForm>
        </Container>
        <Container>
            <p v-if="!filteredApartments.length">Ничего не найдено</p>
            <ApartmentsList v-else v-bind:items="filteredApartments">
                <template v-slot:apartment="{ apartment }">
                    <ApartmentsItem v-bind:key="apartment.id" :id='apartment.id' :descr="apartment.descr"
                        :rating="apartment.rating" :imgSrc="apartment.imgUrl" :price="apartment.price">
                    </ApartmentsItem>
                </template>
            </ApartmentsList>
        </Container>
    </main>
</template>
  
<script>
import ApartmentsList from '../components/apartments/ApartmentsList.vue';
import ApartmentsItem from '../components/apartments/ApartmentsItem.vue';
import apartments from '../components/apartments/apartments';
import ApartmentFilterForm from '../components/apartments/ApartmentFilterForm.vue';
import Container from '../components/shared/Container.vue';

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
            filters: {
                city: '',
                price: 0
            }
        }
    },
    computed: {
        filteredApartments() {
            return this.filterByCityName(this.filterByPrice(this.apartments))
        }
    },
    methods: {
        filter({ city, price }) {
            this.filters.city = city,
                this.filters.price = price
        },
        filterByCityName(apartments) {
            if (!this.filters.city) return apartments
            return apartments.filter(apartment => {
                return apartment.location.city === this.filters.city
            })
        },
        filterByPrice(apartments) {
            if (!this.filters.price) return apartments
            return apartments.filter(apartment => {
                return apartment.price >= this.filters.price
            })
        }
    }
}
</script>
  
<style lang="scss" scoped>
/* #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.content {
    flex-grow: 1;
    padding-top: 120px;
} */

.apartments-filter {
    margin-bottom: 40px;
}
</style>
  