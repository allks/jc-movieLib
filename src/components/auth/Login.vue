<template lang="pug">
  .content-wrapper
    section
      .container
        .auth
          .auth__banner
            h2.auth__title Banner
          .auth__form
            span.auth__title Login
            form(@submit.prevent="onSubmit")
              .form-item(:class="{ errorInput: $v.email.$error }")
                input(
                  v-model="email"
                  type="email"
                  placeholder="Email"
                  :class="{ error: $v.email.$error }"
                  @change="$v.email.$touch()"
                )
                .error(v-if="!$v.email.required") Поле, обязательное для заполнения
                .error(v-if="!$v.email.email") Некорректный адрес
              .form-item(:class="{ errorInput: $v.password.$error }")
                input(
                  v-model="password"
                  type="password"
                  placeholder="password"
                  :class="{ error: $v.password.$error }"
                  @change="$v.password.$touch()"
                )
                .error(v-if="!$v.password.required") Поле, обязательное для заполнения
                .error(v-if="!$v.password.minLength")
                  | Пароль должен содержать {{ $v.password.$params.minLength.min }} знаков
              .buttons-list
                button.btn(
                  type="submit"
                  :disabled="submitStatus === 'PENDING'"
                ) Огонь
              .buttons-list
                p(v-if="submitStatus === 'OK'") OK
                p(v-if="submitStatus === 'ERROR'") ERROR
                p(v-if="submitStatus === 'PENDING'") PENDING
              .button-list
                span Нужен аккаунт?
                  router-link(to="/registration")  Жми сюда
</template>

<script>
import {
  required, email, minLength,
} from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      email: '',
      password: '',
      repeatPassword: '',
      submitStatus: null,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        console.log('login!');
        const user = {
          email: this.email,
          password: this.password,
        };
        console.log(user);
        this.submitStatus = 'PENDING';
        setTimeout(() => {
          this.submitStatus = 'OK';
        }, 500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.auth{
  display: flex;
}
input{
  height: 30px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  &.error{
    border-color: #b7504c;
  }
}

.auth__banner,
.auth__form{
  width: 50%;;
}

.form-item{
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  .error{
    display: none
  }
  &.errorInput{
    .error{
      display: block;
      margin-left: 10px;
      font-size: 13px;
      color: #b7504c;
    }
  }
}

</style>
