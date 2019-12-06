<template lang="pug">
  .wrapper
    header
      .navbar
        .container
          .navbar-content
            router-link.header-logo(to="/") MovieLib
            .button-burger
            .navbar-list__wrapper
              ul.navbar-list
                li.navbar-item(
                  v-for="link in linkMenu"
                  :key="link.title"
                )
                  router-link.navbar-link(
                    :to="link.url"
                  ) {{ link.title }}
    .content-wrapper
</template>

<script>
export default {
  data() {
    return {
      linkMenu: [
        { title: 'Home', url: '/' },
        { title: 'Login', url: 'login' },
        { title: 'Registration', url: '/registration' },
      ],
    };
  },
};
</script>

<style lang="scss">
@import './assets/reset.scss';

.navbar-link{
  display: block;
  height: 10px;
  width: 100px;
}
</style>
