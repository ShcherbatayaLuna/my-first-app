<template>
    <main class="apartment-page">
        <Container>
            <div class="apartment-page__content">
                <ApartmentsMainInfo :apartment="apartment" />
                <ApartmentOwner class="apartment-page__owner" :owner="apartment.owner" />
            </div>
        </Container>
    </main>
</template>

<script>
import Container from '../components/shared/Container.vue';
import apartments from '../components/apartments/apartments';
import ApartmentsMainInfo from '../components/apartments/ApartmentsMainInfo.vue';
import ApartmentOwner from '../components/apartments/ApartmentOwner.vue';

export default {
    name: 'ApartmentPage',
    components: {
        Container,
        ApartmentsMainInfo,
        ApartmentOwner
    },
    computed: {
        apartment() {
            return apartments.find(apartment => apartment.id === this.$route.params.id)
        }
    },
    mounted() {
        console.log(this.apartment)
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

    &__owner {
        max-width: 350px;
        margin-left: 30px;
    }
}
</style>