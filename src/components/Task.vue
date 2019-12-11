<template lang="pug">
  .content-wrapper
    section
      .container
        .task-list
          .filter
            .btn(
              @click="filter = 'active'"
            ) В процессе
            .btn(
              @click="filter = 'completed'"
            ) Просмотрено
            .btn(
              @click="filter = 'all'"
            ) Все
        .task-list
          .task-item(
            v-for="task in tasksFilter"
            :key="task.id"
            :class="{ completed: task.completed }"
          )
            .task-item__info
              span.task-item__label {{ task.whatWatch }}
              span.task-item__time Общее время: {{ task.time }}
              span.task-item__remove удалить
            .task-item__content
              .task-item__header
                input.task-item__checkbox(
                  type="checkbox"
                  v-model="task.completed"
                )
                span.task-item__title {{ task.title }}
              .task-item__body
                p.task-item__description {{ task.description }}
              .task-item__footer
                .tag-list
                  .tag-wrapper(
                    v-for="tag in task.tags"
                    :key="tag.title"
                  )
                    .tag
                      span.tag-title {{ tag.title }}
</template>

<script>
export default {
  data() {
    return {
      filter: 'active',
    };
  },
  computed: {
    tasksFilter() {
      if (this.filter === 'active') {
        return this.$store.getters.taskNotCompleted;
      } if (this.filter === 'completed') {
        return this.$store.getters.taskCompleted;
      } if (this.filter === 'all') {
        return this.$store.getters.tasks;
      }
      return this.filter === 'active';
    },
    tasks() {
      return this.$store.getters.tasks;
    },
  },
};
</script>

<style lang="scss" scoped>
.filter{
  display: flex;
}

.btn{
  width: 130px;
  height: 20px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
}

.task-list{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tag-list{
  display: flex;
  margin-bottom: 20px;
}

.tag{
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  height: 20px;
  line-height: 20px;
}

.task-item{
  border: 1px solid #ccc;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  width: 650px;
  &__info{
    display: flex;
  }
  &__label{
    background-color: #ccc;
    display: inline-block;
    min-width: 70px;
    height: 30px;
    border-radius: 5px;
    margin: 5px;
    padding: 0 5px;
    line-height: 30px;
    text-align: center;
  }
  &__time{
    line-height: 40px;
  }
  &__remove{
    margin: 10px;
    margin-left: auto;
    background-color: #b7504c;
    width: 70px;
    height: 25px;
    border-radius: 5px;
    text-align: center;
    line-height: 25px;
    font-size: 12px;
    color: #fff;
    cursor: pointer;
    &:hover{
      background-color: darken(#b7504c, 7);
    }
  }
  &__header{
    margin-bottom: 10px;
  }
  &__body{
    margin-left: 20px;
  }
  &.completed{
    .task-item__title,
    .task-item__description,
    .tag{
      text-decoration: line-through;
      color: #ccc;
    }
  }
}
</style>
