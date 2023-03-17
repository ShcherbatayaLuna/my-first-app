<template>
    <form class="form" @submit.prevent="handleSubmit">
        <div class="form__box">
            <CustomSelect :items="cities" v-model="city" class="form__select"></CustomSelect>
            <CustomInput v-model="price" placeholder="Цена, от" class="form__input"></CustomInput>
        </div>
        <Button type="submit">Подбор жилья</Button>
    </form>
</template>

<script>
import CustomSelect from '../shared/CustomSelect.vue';
import CustomInput from '../shared/CustomInput.vue';
import Button from '../shared/Button.vue';

export default {
    name: 'ApartmentFilterForm',
    components: {
        CustomSelect,
        CustomInput,
        Button
    },
    data() {
        return {
            price: '',
            city: ''
        }
    },
    computed: {
        cities() {
            return [{ value: '', label: 'Город', selected: true }, 'Kyiv', 'Odesa', 'Poltava', 'Kharkiv', 'Dnipro', 'Lviv', 'Kherson', 'Mariupol']
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('submit', { city: this.city, price: this.price })
        }
    }
}
</script>

<style lang="scss" scoped>
.form {
    display: flex;
    justify-content: space-between;

    &__box {
        display: flex;
        width: 470px;
        margin-right: 30px;
    }

    &__select {
        margin-right: 30px;
    }
}
</style>