<template>
    <main class="apartment-page">
        <SectionWithHeaderSpacer>
            <Container>
                <div v-if="apartment" class="apartment-page__content">
                    <ApartmentsMainInfo :apartment="apartment" />
                    <div class="apartment-page__additional-info">
                        <ApartmentOwner :owner="apartment.owner" />
                        <Reviews :reviews="reviewsList" />
                    </div>
                </div>
            </Container>
        </SectionWithHeaderSpacer>
    </main>
</template>

<script>
import Container from '../components/shared/Container.vue';
// import apartments from '../components/apartments/apartments';
import ApartmentsMainInfo from '../components/apartments/ApartmentsMainInfo.vue';
import ApartmentOwner from '../components/apartments/ApartmentOwner.vue';
import Reviews from '../components/reviews';
import reviewsList from '../components/reviews/reviews.json';
import { getApartmentById } from '@/services/apartments.service';
import SectionWithHeaderSpacer from '@/components/shared/SectionWithHeaderSpacer.vue';


export default {
    name: 'ApartmentPage',
    components: {
        Container,
        ApartmentsMainInfo,
        ApartmentOwner,
        Reviews,
        SectionWithHeaderSpacer
    },
    data() {
        return {
            apartment: null
        }
    },
    computed: {
        reviewsList() {
            return reviewsList
        },
        // apartment() {
        //     return apartments.find(apartment => apartment.id === this.$route.params.id)
        // }
    },
    async created() {
        try {
            const id = this.$route.params
            const { data } = await getApartmentById(id)
            this.apartment = data
        } catch (error) {
            console.error(error)
        }
    }
}
</script>

<style lang="scss" scoped>
.apartment-page {
    padding-bottom: 55px;

    &__content {
        display: flex;
        align-items: flex-start;
    }

    &__additional-info {
        margin-left: 30px;
        max-width: 350px;
        flex-grow: 0;
        flex-shrink: 1;
    }
}
</style>