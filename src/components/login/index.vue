<template>
    <Form ref="form" @submit.prevent="handleSubmit">
        <CustomInput v-model="formData.email" name="email" :rules="emailRules" />
        <CustomInput v-model="formData.password" name="password" :rules="passwordRules" />
        <Button type="submit">Вход</Button>
    </Form>
</template>

<script>
import Form from '../shared/form';
import CustomInput from '../shared/CustomInput.vue';
import Button from '../shared/Button.vue';
import { emailValidation, passwordValidation, isRequired } from '../../utils/validationRules';

export default {
    name: 'LoginForm',
    components: {
        Form,
        CustomInput,
        Button
    },
    data() {
        return {
            formData: {
                email: '',
                password: ''
            }
        }
    },
    computed: {
        rules() {
            return {
                emailValidation,
                passwordValidation,
                isRequired
            }
        },
        emailRules() {
            return [this.rules.isRequired, this.rules.emailValidation];
        },
        passwordRules() {
            return [this.rules.isRequired, this.rules.passwordValidation];
        },
    },
    methods: {
        handleSubmit() {
            const isFormValid = this.$refs.form.validate()
            if (isFormValid) {
                console.log(this.formData)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    &__form {
        display: block;
        flex-direction: column;
    }

    &__title {
        text-align: center;
    }

    &__input {
        margin-bottom: 20px;
        width: 100%;
    }

    &__btn {
        margin-top: 15px;
        width: 100%;
    }
}
</style>