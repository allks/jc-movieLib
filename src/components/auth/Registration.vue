<template lang="pug">
  .content-wrapper
    section
      .container
        .auth
          .auth__banner
            h2.auth__title Banner
          .auth__form
            span.auth__title Registration
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
              .form-item(:class="{ errorInput: $v.repeatPassword.$error }")
                input(
                  v-model="repeatPassword"
                  type="password"
                  placeholder="repeat password"
                  :class="{ error: $v.repeatPassword.$error }"
                  @change="$v.repeatPassword.$touch()"
                )
                .error(v-if="!$v.repeatPassword.sameAsPassword") Пароли не совпадают
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
                span Есть аккаунт?
                  router-link(to="/login")  Жми сюда
</template>

<script>
import {
  required, email, minLength, sameAs,
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
    repeatPassword: {
      samePassword: sameAs('password'),
    },
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        console.log('submit!');
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
