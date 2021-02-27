/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_createModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/createModal */ \"./src/modules/createModal.js\");\n\r\n\r\n(0,_modules_createModal__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\n\n//# sourceURL=webpack://shelter/./src/index.js?");

/***/ }),

/***/ "./src/modules/createModal.js":
/*!************************************!*\
  !*** ./src/modules/createModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalContent = document.querySelector('.modal__content');\r\nconst modalBtns = document.querySelectorAll('a.modal-btn');\r\n\r\nclass Modal {\r\n    constructor(title, description, textareaPlaceholder) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.textareaPlaceholder = textareaPlaceholder || [];\r\n    }\r\n\r\n    createModalElem(elemName, className, content) {\r\n        const elem = document.createElement(elemName);\r\n        elem.classList.add(className);\r\n        elem.innerHTML = content;\r\n        return elem\r\n    }\r\n\r\n    drawModal() {\r\n        const modalHeader = this.createModalElem(\r\n            `div`,\r\n\r\n            `modal__header`,\r\n\r\n            `<div class=\"modal__title\">\r\n                <div class=\"modal__title__text\">${this.title}</div>\r\n                <div class=\"modal__close\"></div>\r\n            </div>\r\n            <div class=\"modal__descriptions\">${this.description}</div>`\r\n        )\r\n\r\n        const modalFields = this.createModalElem(\r\n            `div`,\r\n\r\n            `modal__fields`,\r\n            \r\n            `<form method=\"GET\">\r\n                <p class=\"input input-name\">\r\n                    <label class=\"input-name__title\">Фамилия и имя</label>\r\n                    <input type=\"text\" name=\"login\" placeholder=\"Введите Ваше имя и фамилию\">\r\n                </p>\r\n                <p class=\"input input-phone\">\r\n                    <label class=\"input-name__title\">Номер телефона</label>\r\n                    <input type=\"text\" name=\"phone\" placeholder=\"Номер телефона\">\r\n                    <span class=\"input-name__description\">Обязательное поле для заполнения</span>    \r\n                </p>\r\n                <p class=\"input input-comments\">\r\n                    <label for=\"area-comments\">Замечания</label>\r\n                    <textarea name=\"comments\" id=\"area-comments\" cols=\"30\" rows=\"10\" placeholder=\"${this.textareaPlaceholder}\"></textarea>\r\n                </p>\r\n            </form>`\r\n        )\r\n\r\n        const modalContacts = this.createModalElem(\r\n            `div`,\r\n\r\n            `modal__contacts`,\r\n            \r\n            'Если у вас есть вопросы, можете позвонить нам:<br>+375 (33) 6237879  Лена<br>+375 (29) 7877791  Ольга<br>+375 (29) 5837015  Рита'\r\n        )\r\n\r\n        \r\n        const modalDescriptions = this.createModalElem(\r\n            `div`,\r\n\r\n            `modal__descriptions`,\r\n            \r\n            `Наши волонтеры будут активно искать будущий дом хвостику, пока вы помогаете нам с передержкой. Спасибо за помощь!`\r\n        )    \r\n\r\n        const modalBtns = this.createModalElem(\r\n            `div`,\r\n\r\n            `modal__btns`,\r\n            \r\n            `<a href=\"#\" id=\"modal-send\">Отправить</a>\r\n            <a href=\"#\" id=\"modal-cancel\">Отмена</a>`\r\n        )\r\n\r\n        if(this.title === 'Забрать на передержку') return modalContent.append(modalHeader, modalFields, modalContacts, modalDescriptions, modalBtns);\r\n        if(this.title === 'Кому и куда передать?') return modalContent.append(modalHeader, modalContacts);\r\n        if(this.title === 'Автопомощь') return modalContent.append(modalHeader, modalFields, modalBtns);\r\n        modalContent.append(modalHeader, modalFields, modalContacts, modalBtns);\r\n    }\r\n}\r\n\r\nconst modalWindow = () => {\r\n    modalBtns.forEach(item => item.addEventListener('click', e => {\r\n        e.preventDefault();\r\n        const {\r\n            target\r\n        } = e;\r\n        console.log(target.id);\r\n        document.querySelector('.modal__container').classList.remove('disable');\r\n        switch (target.id) {\r\n            case 'take-to-home-btn':\r\n                new Modal('Забрать домой',\r\n                        'Оставьте информацию о себе. Мы позвоним Вам и договоримся, когда вы сможете забрать себе питомца.',\r\n                        'Введите информацию, которая будет полезна нам')\r\n                    .drawModal()\r\n                break;\r\n            case 'take-on-time-btn':\r\n                new Modal(\r\n                    'Забрать на передержку',\r\n                    'Оставьте информацию о себе. Мы позвоним Вам и договоримся, когда вы сможете забрать себе питомца.',\r\n                    'Опишите, на какой срок вы смогли бы взять питомца на передержку')\r\n                    .drawModal()\r\n                break;\r\n            case 'where-send':\r\n                new Modal(\r\n                    'Кому и куда передать?',\r\n                    'Чтобы передать купленные вещи, свяжитесь с нашими волонтерами. Вы сможете договориться о времени и месте встречи.\\\r\n                    Если доставить сами не сможете - волонтеры вам помогут в доставке.')\r\n                    .drawModal()\r\n                break;\r\n            case 'autohelp-btn':\r\n                new Modal(\r\n                    'Автопомощь',\r\n                    'Отправьте нам заявку о том, что готовы помочь. Когда нам будет необходима помощь в транспортировке, мы позвоним вам.',\r\n                    'Опишите, как вы сможете нам помочь и удобное время для вас')\r\n                    .drawModal()\r\n                break;\r\n        }\r\n    }))\r\n\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindow);\n\n//# sourceURL=webpack://shelter/./src/modules/createModal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;