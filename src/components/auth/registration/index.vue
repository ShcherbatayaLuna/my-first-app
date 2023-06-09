<template>
    <AuthContainer>
        <MainTitle class="registration__title">Регистрация</MainTitle>
        <Form ref="form" class="registration__form" @submit.prevent="handleSubmit">
            <CustomInput v-model="formData.name" name="name" placeholder="Name" autocomplete="username" :rules="nameRules"
                class="registration__input" />
            <CustomInput v-model="formData.email" name="email" placeholder="Email" autocomplete="email" :rules="emailRules"
                class="registration__input" />
            <CustomInput v-model="formData.password" name="password" placeholder="Password" autocomplete="current password"
                type="password" :rules="passwordRules" class="registration__input" />
            <CustomInput v-model="formData.confirmPassword" name="confirmPassword" placeholder="Confirm password"
                autocomplete="current password" type="password" :rules="confirmPassword" class="registration__input" />
            <Button type="submit" :loading="loading" class="registration__btn">Вход</Button>
        </Form>
    </AuthContainer>
</template>

<script>
import Form from '../../shared/form';
import CustomInput from '../../shared/CustomInput.vue';
import Button from '../../shared/Button.vue';
import AuthContainer from '../AuthContainer.vue';
import MainTitle from '@/components/shared/MainTitle.vue';
import { emailValidation, passwordValidation, isRequired } from '@/utils/validationRules';
import { mapActions } from 'vuex';

export default {
    name: 'RegistrationForm',
    components: {
        Form,
        CustomInput,
        Button,
        AuthContainer,
        MainTitle
    },
    data() {
        return {
            loading: false,
            formData: {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
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
        nameRules() {
            return [this.rules.isRequired];
        },
        emailRules() {
            return [this.rules.isRequired, this.rules.emailValidation];
        },
        passwordRules() {
            return [this.rules.isRequired, this.rules.passwordValidation];
        },
        confirmPassword() {
            return [(val) => ({
                hasPassed: val === this.formData.password,
                message: 'Пароли не совпадают'
            })]
        }
    },
    methods: {
        ...mapActions('auth', ['registration']),
        async handleSubmit() {
            const { form } = this.$refs
            const isFormValid = form.validate()

            if (isFormValid) {
                try {
                    this.loading = true;

                    await this.registration(this.formData);

                    this.$router.push({ name: 'homepage' })
                    form.reset();
                } catch (error) {
                    this.$notify({
                        type: 'error',
                        title: 'Произошла ошибка',
                        text: error.message
                    })
                } finally {
                    this.loading = false;
                }

            }
        }
    }
}
</script>

<style lang="scss" scoped>
.registration {
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