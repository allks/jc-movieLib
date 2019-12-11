export default {
  state: {
    tasks: [
      {
        id: 1,
        title: 'Ex nostrud exercitation voluptate nulla ullamco amet exercitation consectetur ut.',
        description: 'Aliquip pariatur voluptate aute sunt sit velit enim. Tempor ex mollit laborum duis esse elit et minim occaecat ut consectetur ea exercitation. Laborum culpa et anim eiusmod in ex commodo deserunt exercitation. Ex culpa voluptate proident enim cupidatat eiusmod eiusmod enim ex magna eu et sint magna.',
        whatWatch: 'Фильм',
        completed: false,
        editing: false,
      },
      {
        id: 2,
        title: 'Excepteur quis eu sint cupidatat ut commodo ut Lorem dolore.',
        description: 'Amet est duis do ut aliquip exercitation amet enim non ullamco cupidatat aliqua minim sint. Aliquip et labore dolor labore in anim aute aliquip irure ut. Anim sit cupidatat exercitation non eu minim nostrud enim in officia ut aute. Aute enim aute in magna anim aliquip aliquip anim elit voluptate laborum. Consectetur laborum sint anim ullamco anim. Minim mollit reprehenderit sit veniam amet sit sit. Nisi nostrud magna aliquip labore cillum.',
        whatWatch: 'Сериал',
        completed: true,
        editing: false,
      },
    ],
  },
  mutations: {
    newTask(state, payload) {
      state.tasks.push(payload);
    },
  },
  actions: {
    newTask({ commit }, payload) {
      payload.id = Math.random(); // eslint-disable-line no-param-reassign
      commit('newTask', payload);
    },
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
    taskCompleted(state) {
      return state.tasks.filter(task => task.completed);
    },
    taskNotCompleted(state) {
      return state.tasks.filter(task => task.completed === false);
    },
  },
};
