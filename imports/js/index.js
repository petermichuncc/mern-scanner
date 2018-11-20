console.log("loaded the index in js folder")

import store from "../js/store/index";
import { addArticle } from "../js/actions/index";
window.store = store;
window.addArticle = addArticle;
