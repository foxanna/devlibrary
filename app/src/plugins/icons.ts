/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Vue from "vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faCode,
  faCodeBranch,
  faSearch,
  faExternalLinkAlt,
  faCaretDown,
  faCaretUp,
  faAngleLeft,
  faAngleRight,
  faTimesCircle,
  faUser,
  faTimes,
  faBars,
  faClipboardList,
  faExclamationCircle,
  faFilter,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";

library.add(
  faStar,
  faCode,
  faCodeBranch,
  faSearch,
  faExternalLinkAlt,
  faCaretDown,
  faCaretUp,
  faAngleLeft,
  faAngleRight,
  faTimesCircle,
  faUser,
  faBookmark,
  faTimes,
  faBars,
  faClipboardList,
  faExclamationCircle,
  faFilter,
  faChevronDown,

  faGithub,
  faMedium
);
