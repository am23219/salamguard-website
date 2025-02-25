// fontawesome.js
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faArrowDown,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Prevents Font Awesome from adding its default CSS

library.add(faArrowRight, faArrowDown, faTerminal);
