import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createStore } from "vuex";

import "../src/assets/css/main.css";
const store = createStore({
  state() {
    return {
      taskList: [],
    };
  },
  mutations: {
    addTask(state, payload) {
      state.taskList = [...state.taskList, payload.task];
    },
    removeTask(state, payload) {
      state.taskList = state.taskList.filter((task) => task.id !== payload.id);
      console.log(payload.id, state.taskList);
    },
  },
});
const app = createApp(App);
library.add(faTrashAlt);

app
  .use(store)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
