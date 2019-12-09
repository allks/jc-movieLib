<template lang="pug">
  .content-wrapper
    section
      .container
        h1 Home
        input(
          type="text"
          placeholder="Что нового?"
          v-model="taskTitle"
          @keyup.enter="newTask"
        )
        textarea(
          type="text"
          v-model="taskDescription"
          @keyup.enter="newTask"
        )
        .option-list
          input.what-watch(
            type="radio"
            id="radioFilm"
            value="Film"
            v-model="whatWatch"
          )
          label(
            for="radioFilm"
          ) Film
          input.what-watch(
            type="radio"
            id="radioSerial"
            value="Serial"
            v-model="whatWatch"
          )
          label(
            for="radioSerial"
          ) Serial
        .total-time
          .total-time__film(
            v-if="whatWatch === 'Film'"
          )
            span Total Film Times
          .totla-time__serial(
            v-if="whatWatch === 'Serial'"
          )
            span Total Serial Times
        .tag-list
          .tag
            span.tag-title TAG
            span.button-close x
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
              span.task-item__remove x
            .task-item__content
              .task-item__header
                input.task-item__checkbox(
                  type="checkbox"
                  v-model="task.completed"
                )
                span.task-item__title {{ task.title }}
              .task-item__body
                p.task-item__description {{ task.description }}
</template>

<script>
export default {
  data() {
    return {
      taskTitle: '',
      taskDescription: '',
      taskId: 3,
      whatWatch: 'Film',
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
  methods: {
    newTask() {
      if (this.taskTitle === '') {
        return;
      }
      this.tasks.push({
        id: this.taskId,
        title: this.taskTitle,
        description: this.taskDescription,
        whatWatch: this.whatWatch,
        completed: false,
        editing: false,
      });
      this.taskId += 1;
      this.taskTitle = '';
      this.taskDescription = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.task-item{
  border: 1px solid #ccc;
  margin: 20px;
}
</style>
