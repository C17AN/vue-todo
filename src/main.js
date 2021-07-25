import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "../src/assets/css/main.css";

library.add(faTrashAlt);

createApp(App)
  .component("fa", FontAwesomeIcon)
  .mount("#app");