<template lang="pug">
  .content-wrapper
    section
      .container
        h1 Home
    section
      .container
        .task-list
          .task-item(
            v-for="task in tasks"
            :key="task.id"
            :class="{ completed: task.completed }"
          )
            .task-item__info
              span.task-item__label {{ task.whatWatch }}
              span Total Time:
              span.task-item__remove
            .task-item__content
              input.task-item__checkbox(
                type="checkbox"
                v-model="task.completed"
              )
              span.task-item__title {{ task.title }}
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: 'GrowthBsters: Hooked on Growth',
          description: 'I directed this documentary',
          whatWatch: 'Film',
          completed: false,
          editing: false,
        },
        {
          id: 2,
          title: 'Game of thrones',
          description: 'Best serials',
          whatWatch: 'Serial',
          completed: false,
          editing: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
