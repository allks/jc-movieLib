<template lang="pug">
  .wrapper
    header.header
      .navbar
        .container
          .navbar-content
            router-link.header-logo(to="/") MovieLib
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

body{
  font-family: Arial, serif;
}

.header{
  border-bottom: 1px solid #3d3d3d;
}

.navbar-content{
  display: flex;
  height: 60px;
  justify-content: space-between;
}

.header-logo{
  width: 250px;
  line-height: 60px;
  text-align: center;
  text-decoration: none;
  font-size: 25px;
}

.navbar-list{
  display: flex;
  height: 60px;
  line-height: 60px;
}

.navbar-item{
  margin: 0 20px;
}

</style>
