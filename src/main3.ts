// ES6
import { format, cancel, register } from "timeago.js";

alert(format(1556660352739));



import trim from "lodash-es/trim";
import toUpper from "lodash-es/toUpper";
import lowerCase from "lodash-es/lowerCase";
import jion from "lodash-es/join";
import reverse from "lodash-es/reverse";
import find from "lodash-es/find";
import reduce from "lodash-es/reduce";
import cloneDeep from "lodash-es/cloneDeep";
import sortedUniq from "lodash-es/sortedUniq";
import assign from "lodash-es/assign";
import times from "lodash-es/times";
import map from "lodash-es/map";
import keyBy from "lodash-es/keyBy";
import debounce from "lodash-es/debounce";
import filter from "lodash-es/filter";
import includes from "lodash-es/includes";

import "./style.scss";
/*
function validateEmail() {
  // Validate email here and show error message if not valid
}

var emailInput = document.getElementById("email-field");
emailInput.addEventListener("keyup", debounce(validateEmail, 500));
*/
let x = `Hello     `;
alert(x + `James`);
alert(trim(x) + `James`);
alert(toUpper(trim(x)));
alert(jion(["Another", "module", "loaded!"], lowerCase("James")));