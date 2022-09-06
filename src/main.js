import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faAnglesRight,
    faHouseUser,
    faGear,
    faBook,
    faPen,
} from "@fortawesome/free-solid-svg-icons";

library.add(faAnglesRight, faHouseUser, faGear, faBook, faPen);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
