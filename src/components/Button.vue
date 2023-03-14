<template>
    <button v-bind:type="type" v-on="$listeners" :class="{ btn: true, 'btn--outlined': outlined }">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'BtnMain',
    props: {
        type: {
            type: String,
            default: 'button',
        },
        outlined: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang='scss' scoped>
.btn {
    display: inline-block;
    font-size: 18px;
    background: #ff662d;
    color: white;
    min-width: 220px;
    border: 1px solid transparent;
    padding: 8px 15px;
    cursor: pointer;

    &--outlined {
        background: none;
        border: 1px solid #ff662d;
        color: #ff662d;
    }
}
</style>