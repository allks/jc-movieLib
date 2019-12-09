<template lang="pug">
  .wrapper
    header.header
      .navbar
        .container
          .navbar-content
            router-link.header-logo(to="/")
            .button-burger(
              @click="menuShow = !menuShow"
            )
            .navbar-list__wrapper(
              :class="{ active: menuShow }"
            )
              ul.navbar-list
                li.navbar-item(
                  v-for="link in linkMenu"
                  :key="link.title"
                  @click="menuShow = false"
                )
                  router-link.navbar-link(
                    :to="link.url"
                  ) {{ link.title }}
    router-view
</template>

<script>
export default {
  data() {
    return {
      menuShow: false,
      linkMenu: [
        { title: 'Home', url: '/' },
        { title: 'Login', url: '/login' },
        { title: 'Registration', url: '/registration' },
      ],
    };
  },
};
</script>

<style lang="scss">
@import './assets/styles/common/reset.scss';

.header{
  border-bottom: 1px solid #3d3d3d;
  height: 100px;
}

.navbar-content{
  display: flex;
}

.navbar-list{
  display: flex;
}

</style>
