<template>
    <div class="orders-list">
        <p v-if="!items.length">Заказов нет</p>
        <template v-else>
            <OrdersItem v-for="order in items" :key="order.id" :order="order.apartment" :title="order.title"
                :price="order.price" :location="order.location" :imgUrl="order.imgUrl" />
        </template>
    </div>
</template>

<script>
import OrdersItem from './OrdersItem.vue';

export default {
    name: 'OrdersList',
    components: {
        OrdersItem
    },
    props: {
        items: {
            type: Array,
            default: () => []
            // required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.orders-list {
    margin-top: 20px;
}
</style>