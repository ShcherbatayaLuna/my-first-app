<template>
    <main class="homepage">
        <SectionWithHeaderSpacer>
            <Container>
                <ApartmentFilterForm class="apartments__filter" @submit="filter"></ApartmentFilterForm>
            </Container>
            <Container>
                <p v-if="!filteredApartments.length" class="apartments__not-found">Ничего не найдено</p>
                <ApartmentsList v-else v-bind:items="filteredApartments">
                    <template v-slot:apartment="{ apartment }">
                        <ApartmentsItem v-bind:key="apartment.id" :id='apartment.id' :descr="apartment.descr"
                            :rating="apartment.rating" :imgSrc="apartment.imgUrl" :price="apartment.price">
                        </ApartmentsItem>
                    </template>
                </ApartmentsList>
            </Container>
        </SectionWithHeaderSpacer>
    </main>
</template>
  
<script>
import ApartmentsList from '../components/apartments/ApartmentsList.vue';
import ApartmentsItem from '../components/apartments/ApartmentsItem.vue';
import apartments from '../components/apartments/apartments';
import ApartmentFilterForm from '../components/apartments/ApartmentFilterForm.vue';
import Container from '../components/shared/Container.vue';
// import { getApartmentsList } from '@/services/apartments.service';
import SectionWithHeaderSpacer from '@/components/shared/SectionWithHeaderSpacer.vue';

export default {
    name: 'App',
    components: {
        ApartmentsList,
        ApartmentsItem,
        ApartmentFilterForm,
        Container,
        SectionWithHeaderSpacer
    },
    data() {
        return {
            // apartments: '',
            text: '',
            filters: {
                city: '',
                price: 0
            }
        }
    },
    computed: {
        filteredApartments() {
            return this.filterByCityName(this.filterByPrice(apartments))
        }
    },
    // async created() {
    //     try {
    //         const { data } = await getApartmentsList();
    //         this.apartments = data;
    //     } catch (error) {
    //         console.error(error)
    //     }
    // },
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
.apartments {
    &__filter {
        margin-bottom: 40px;
    }

    &__not-found {
        font-size: 40px;
        text-align: center;
    }
}
</style>
  