(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-wrapper\">\n  <!-- header-area start -->\n  <app-header></app-header>\n  <!-- Header-area end -->\n\n  <!-- Hero Slider start -->\n  <router-outlet></router-outlet>\n  <!-- Screenshot Area End -->\n\n\n  <!-- Download Area Start  -->\n  <app-footer></app-footer>\n  <!-- Footer Area End -->\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editteacher/editteacher.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editteacher/editteacher.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"hero-slider hero-slider-bg-1\" id=\"slider\">\n    <div class=\"single-slide slider-mockup\">\n        <!-- Hero Content One Start -->\n        \n    </div>\n</div>\n<div id=\"about\" class=\"about-area-one bg-about section-ptb\">\n    <div class=\"animate-section\">\n        <div class=\"icon-one\" style=\"background-image:url(assets/images/icon/shep_01.png)\"></div>\n        <div class=\"icon-two\" style=\"background-image:url(assets/images/icon/shep_02.png)\"></div>\n        <div class=\"icon-three\" style=\"background-image:url(assets/images/icon/shep_03.png)\"></div>\n    </div>\n\n    <div class=\"container\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-md-8 offset-md-2\">\n                <h1 class=\"text-center\">Edit Teachers</h1>\n                <!-- <pre>{{ teacher | json }}</pre> -->\n                <div class=\"form-group\">\n                    <label>Name</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"teacher.name\" />\n                </div>\n                <div class=\"form-group\">\n                    <label>Age</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"teacher.age\" />\n                </div>\n                <div class=\"form-group\">\n                    <label>City</label>\n                    <select class=\"form-control\" [(ngModel)]=\"teacher.city\">\n                        <option value=\"\">Select</option>\n                        <option value=\"indore\">indore</option>\n                        <option value=\"ujjain\">ujjain</option>\n                        <option value=\"bhopal\">bhopal</option>\n                        <option value=\"delhi\">delhi</option>\n\n\n                    </select>\n                </div>\n                \n                <!-- <a class=\"btn btn-primary\" (click)=\"update()\">Update</a> -->\n            </div>\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"update()\">Update</button>\n            \n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"hero-slider hero-slider-bg-1\" id=\"slider\">\n    <div class=\"single-slide slider-mockup\">\n        <!-- Hero Content One Start -->\n        <div class=\"hero-content-one container\">\n            <div class=\"row align-items-center\">\n                <div class=\"col-lg-6 col-md-8\">\n                    <div class=\"slider-text-info\">\n                        <h1>Carroll an Awesome <br>Travel App.</h1>\n                        <p>It is a long established fact that a reader will be distracted by the readable content of a\n                            page when\n                            looking at its layout.</p>\n                        <div class=\"slider-button\">\n                            <a href=\"#\" class=\" slider-btn uppercase\"><span><i class=\"fa fa-apple\"></i>Apple\n                                    store</span></a>\n                            <a href=\"#\" class=\"slider-btn uppercase\"><span><i class=\"fa fa-send-o\"></i>Google\n                                    play</span></a>\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"col-lg-3 offset-lg-1 col-md-4 text-center\">\n                    <div class=\"slider-inner-imge-2 banner-right\">\n                        <img src=\"assets/images/slider/inner-1.png\" alt=\"\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- Hero Content One End -->\n    </div>\n</div>\n<!-- Hero Slider end -->\n\n<!-- About Area Start -->\n<div id=\"about\" class=\"about-area-one bg-about section-ptb\">\n    <div class=\"animate-section\">\n        <div class=\"icon-one\" style=\"background-image:url(assets/images/icon/shep_01.png)\"></div>\n        <div class=\"icon-two\" style=\"background-image:url(assets/images/icon/shep_02.png)\"></div>\n        <div class=\"icon-three\" style=\"background-image:url(assets/images/icon/shep_03.png)\"></div>\n    </div>\n\n    <div class=\"container\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"about-image text-center wow fadeInLeft\" data-wow-duration=\"1s\">\n                    <img src=\"assets/images/about/01.png\" alt=\"\">\n                </div>\n            </div>\n            <div class=\"col-lg-6 \">\n                <div class=\"about-content\">\n                    <div class=\"about-title\">\n                        <h2>About Acrroll</h2>\n                    </div>\n                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered\n                        alteration\n                        in some form, by injected azer duskam by lewoj yrawtap ariations </p>\n                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered\n                        alteration\n                        in some form, by injected</p>\n                    <ul>\n                        <li> <i class=\"ion-checkmark-round\"></i> Many variations of passages of majority by the suffered\n                        </li>\n                        <li><i class=\"ion-checkmark-round\"></i> Variations of passages of majority app</li>\n                    </ul>\n                    <div class=\"about-btn\">\n                        <a href=\"#\" class=\"button\">Know More</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- About Area End -->\n\n<!-- Service Area Start  -->\n<div id=\"feature\" class=\"service-area section-pb\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-7 ml-auto mr-auto\">\n                <div class=\"section-title\">\n                    <h2>Our App Feature</h2>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat, accusamus! Consequatur\n                        suscipit\n                        numquam cumque.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n\n            <div class=\"col-lg-4 col-md-6\">\n                <!-- Single Service Start -->\n                <div class=\"single-service mt--30  wow fadeInLeft\" data-wow-duration=\"0.7s\">\n                    <div class=\"service-icon\">\n                        <img src=\"assets/images/icon/feature-01.png\" alt=\"\">\n                    </div>\n                    <div class=\"service-text\">\n                        <h3>Usability</h3>\n                        <p>Sometimes the simplest things are the hardest to find. So we created a new line for everyday\n                            life.</p>\n                    </div>\n                </div>\n                <!-- Single Service End -->\n            </div>\n\n            <div class=\"col-lg-4 col-md-6\">\n                <!-- Single Service Start -->\n                <div class=\"single-service mt--30\">\n                    <div class=\"service-icon\">\n                        <img src=\"assets/images/icon/feature-02.png\" alt=\"\">\n                    </div>\n                    <div class=\"service-text\">\n                        <h3>Parallax Effect</h3>\n                        <p>Sometimes the simplest things are the hardest to find. So we created a new line for everyday\n                            life.</p>\n                    </div>\n                </div>\n                <!-- Single Service End -->\n            </div>\n\n            <div class=\"col-lg-4 col-md-6\">\n                <!-- Single Service Start -->\n                <div class=\"single-service mt--30 wow fadeInRight\" data-wow-duration=\"0.7s\">\n                    <div class=\"service-icon\">\n                        <img src=\"assets/images/icon/feature-03.png\" alt=\"\">\n                    </div>\n                    <div class=\"service-text\">\n                        <h3>Unlimites Colors</h3>\n                        <p>Sometimes the simplest things are the hardest to find. So we created a new line for everyday\n                            life.</p>\n                    </div>\n                </div>\n                <!-- Single Service End -->\n            </div>\n\n        </div>\n    </div>\n</div>\n<!-- Service Area End -->\n\n<!-- Video Area Start -->\n<div class=\"video-area theme-bg video-banner-overlay\">\n    <div class=\"video-info text-center\">\n        <div class=\"vedio-popup-btn wow pulse\" data-wow-duration=\"1s\">\n            <a href=\"http://www.youtube.com/watch?v=0O2aH4XLbto\" class=\"popup-youtube\"> <img\n                    src=\"assets/images/icon/iconroject.png\" alt=\"\"> </a>\n        </div>\n        <h3 class=\"video-title text-white\">Video presentation</h3>\n    </div>\n</div>\n<!-- Video Area End -->\n\n<!-- Project Count Area Start -->\n<div class=\"project-count-area\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"project-count-inner project-bg wow fadeInBottom\" data-wow-duration=\"1s\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-3 col-sm-6\">\n                            <!-- counter start -->\n                            <div class=\"counter text-center\">\n                                <h3 class=\"counter-active\">241</h3>\n                                <p>APP Downloads</p>\n                            </div>\n                            <!-- counter end -->\n                        </div>\n                        <div class=\"col-lg-3 col-sm-6\">\n                            <!-- counter start -->\n                            <div class=\"counter text-center\">\n                                <h3 class=\"counter-active\">531</h3>\n                                <p>Happy Clients</p>\n                            </div>\n                            <!-- counter end -->\n                        </div>\n                        <div class=\"col-lg-3 col-sm-6\">\n                            <!-- counter start -->\n                            <div class=\"counter text-center\">\n                                <h3 class=\"counter-active\">171</h3>\n                                <p>Total App Rates</p>\n                            </div>\n                            <!-- counter end -->\n                        </div>\n                        <div class=\"col-lg-3 col-sm-6\">\n                            <!-- counter start -->\n                            <div class=\"counter text-center\">\n                                <h3 class=\"counter-active\">331</h3>\n                                <p>Awrds Winned</p>\n                            </div>\n                            <!-- counter start -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Project Count Area End -->\n\n<!-- Pricing Packages Start -->\n<div id=\"pricing\" class=\"priceing-package-area section-ptb\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-7 ml-auto mr-auto\">\n                <div class=\"section-title pb--50\">\n                    <h2>OUR Pricing Table</h2>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat, accusamus! Consequatur\n                        suscipit\n                        numquam cumque.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row no-gutters ext-plr-30\">\n            <div class=\"col-lg-4 col-md-6 order-lg-1 order-1\">\n                <!-- single-priceing Start -->\n                <div class=\"single-priceing text-center\">\n                    <div class=\"table-header\">\n                        <h5>Basic Plan</h5>\n                        <h3>$49.00</h3>\n                    </div>\n                    <ul class=\"pricing-list\">\n                        <li>Marketing Metup</li>\n                        <li class=\"not\">Free Coffy.</li>\n                        <li>Support Papers</li>\n                        <li class=\"not\">Policy System</li>\n                        <li class=\"not\">One Time Support</li>\n                        <li></li>\n                    </ul>\n                    <div class=\"chose-btn\">\n                        <a href=\"#\" class=\"btn choose-button\">Choose Now </a>\n                    </div>\n                </div>\n                <!-- single-priceing End -->\n            </div>\n            <div class=\"col-lg-4 col-md-6 ml-auto mr-auto order-lg-2 order-3\">\n                <!-- single-priceing Start -->\n                <div class=\"single-priceing text-center active\">\n                    <div class=\"table-header\">\n                        <h5>Basic Plan</h5>\n                        <h3>$99.00</h3>\n                    </div>\n                    <ul class=\"pricing-list\">\n                        <li>Marketing Metup</li>\n                        <li>Free Coffy.</li>\n                        <li>Support Papers</li>\n                        <li>Policy System</li>\n                        <li>One Time Support</li>\n                        <li></li>\n                    </ul>\n                    <div class=\"chose-btn\">\n                        <a href=\"#\" class=\"btn choose-button\">Choose Now </a>\n                    </div>\n                </div>\n                <!-- single-priceing End -->\n            </div>\n            <div class=\"col-lg-4 col-md-6 order-lg-3 order-2\">\n                <!-- single-priceing Start -->\n                <div class=\"single-priceing last text-center\">\n                    <div class=\"table-header\">\n                        <h5>Basic Plan</h5>\n                        <h3>$60.00</h3>\n                    </div>\n                    <ul class=\"pricing-list\">\n                        <li>Marketing Metup</li>\n                        <li>Free Coffy.</li>\n                        <li>Support Papers</li>\n                        <li class=\"not\">Policy System</li>\n                        <li class=\"not\">One Time Support</li>\n                        <li></li>\n                    </ul>\n                    <div class=\"chose-btn\">\n                        <a href=\"#\" class=\"btn choose-button\">Choose Now </a>\n                    </div>\n                </div>\n                <!-- single-priceing End -->\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Pricing Packages End -->\n\n<!-- Testimonial Area Start -->\n<div id=\"testimonial\" class=\"testimonial-area section-ptb bg-testimonial\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-8 ml-auto mr-auto\">\n                <div class=\"testimonial-content testimonial-active\">\n                    <!-- single-testimonial start -->\n                    <div class=\"single-testimonial\">\n                        <div class=\"client-image\">\n                            <img src=\"assets/images/review/03.jpg\" alt=\"\">\n                        </div>\n                        <div class=\"client-rating\">\n                            <ul class=\"d-flex\">\n                                <li><a href=\"#\"><i class=\"fa fa-star\"></i></a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-star\"></i></a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-star\"></i></a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-star\"></i></a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-star-o\"></i></a></li>\n                            </ul>\n                        </div>\n                        <div class=\"testimonial-text\">\n                            <p class=\"client-texe-dec\">Aenean sollicitudin, lorem quis bibendum auctor This is\n                                Photoshop's version\n                                of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. , nisi elit consequat\n                                ipsum, nec sagittis\n                                sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>\n                            <div class=\"test-author\">\n                                <h3>Mickel Harice </h3>\n                                <p>CEO - of Teritech</p>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- single-testimonial end -->\n                    <!-- single-testimonial start -->\n                    <div class=\"single-testimonial\">\n                        <div class=\"client-image\">\n                            <img src=\"assets/images/review/01.jpg\" alt=\"\">\n                        </div>\n                        <div class=\"client-rating\">\n                            <ul class=\"d-flex\">\n                                <li><a href=\"#\"><i class=\"fa fa-star\"></i></a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-star\"></i></a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-star\"></i></a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-star\"></i></a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-star-o\"></i></a></li>\n                            </ul>\n                        </div>\n                        <div class=\"testimonial-text\">\n                            <p class=\"client-texe-dec\">Aenean sollicitudin, lorem quis bibendum auctor This is\n                                Photoshop's version\n                                of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. , nisi elit consequat\n                                ipsum, nec sagittis\n                                sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>\n                            <div class=\"test-author\">\n                                <h3>Mickel Harice </h3>\n                                <p>CEO - of Teritech</p>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- single-testimonial end -->\n                    <!-- single-testimonial start -->\n                    <div class=\"single-testimonial\">\n                        <div class=\"client-image\">\n                            <img src=\"assets/images/review/02.jpg\" alt=\"\">\n                        </div>\n                        <div class=\"client-rating\">\n                            <ul class=\"d-flex\">\n                                <li><a href=\"#\"><i class=\"fa fa-star\"></i></a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-star\"></i></a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-star\"></i></a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-star\"></i></a></li>\n                                <li><a href=\"#\"><i class=\"fa fa-star-o\"></i></a></li>\n                            </ul>\n                        </div>\n                        <div class=\"testimonial-text\">\n                            <p class=\"client-texe-dec\">Aenean sollicitudin, lorem quis bibendum auctor This is\n                                Photoshop's version\n                                of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. , nisi elit consequat\n                                ipsum, nec sagittis\n                                sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>\n                            <div class=\"test-author\">\n                                <h3>Mickel Harice </h3>\n                                <p>CEO - of Teritech</p>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- single-testimonial end -->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Testimonial Area End -->\n\n<!-- Screenshot Area Start -->\n<div id=\"screnshot\" class=\"screnshot-area section-ptb\">\n    <div class=\"container-1470\">\n        <div class=\"row\">\n            <div class=\"col-lg-7 ml-auto mr-auto\">\n                <div class=\"section-title\">\n                    <h2>APP Screenshots</h2>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat, accusamus! Consequatur\n                        suscipit\n                        numquam cumque.</p>\n                </div>\n            </div>\n        </div>\n        <!-- Screnshot Content Two Start-->\n        <div class=\"screnshot-content-three\">\n\n            <div class=\"screen-mobile-image\"> </div>\n\n            <div class=\"row screenshot-center-active\">\n                <div class=\"col-lg-3\">\n                    <!-- Singel Screenshot Start -->\n                    <div class=\"singel-screenshot\">\n                        <img src=\"assets/images/screenshot/01.png\" alt=\"\">\n                    </div>\n                    <!-- Singel Screenshot End -->\n                </div>\n                <div class=\"col-lg-3\">\n                    <!-- Singel Screenshot Start -->\n                    <div class=\"singel-screenshot\">\n                        <img src=\"assets/images/screenshot/02.png\" alt=\"\">\n                    </div>\n                    <!-- Singel Screenshot End -->\n                </div>\n                <div class=\"col-lg-3\">\n                    <!-- Singel Screenshot Start -->\n                    <div class=\"singel-screenshot\">\n                        <img src=\"assets/images/screenshot/02.png\" alt=\"\">\n                    </div>\n                    <!-- Singel Screenshot End -->\n                </div>\n                <div class=\"col-lg-3\">\n                    <!-- Singel Screenshot Start -->\n                    <div class=\"singel-screenshot\">\n                        <img src=\"assets/images/screenshot/03.png\" alt=\"\">\n                    </div>\n                    <!-- Singel Screenshot End -->\n                </div>\n                <div class=\"col-lg-3\">\n                    <!-- Singel Screenshot Start -->\n                    <div class=\"singel-screenshot\">\n                        <img src=\"assets/images/screenshot/04.png\" alt=\"\">\n                    </div>\n                    <!-- Singel Screenshot End -->\n                </div>\n                <div class=\"col-lg-3\">\n                    <!-- Singel Screenshot Start -->\n                    <div class=\"singel-screenshot\">\n                        <img src=\"assets/images/screenshot/03.png\" alt=\"\">\n                    </div>\n                    <!-- Singel Screenshot End -->\n                </div>\n            </div>\n        </div>\n        <!-- Screnshot Content Two End-->\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/teacher/teacher.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/teacher/teacher.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"hero-slider hero-slider-bg-1\" id=\"slider\">\n    <div class=\"single-slide slider-mockup\">\n        <!-- Hero Content One Start -->\n        <div class=\"hero-content-one container\">\n            </div>\n    </div>\n</div>\n<div id=\"about\" class=\"about-area-one bg-about section-ptb\">\n    <div class=\"animate-section\">\n        <div class=\"icon-one\" style=\"background-image:url(assets/images/icon/shep_01.png)\"></div>\n        <div class=\"icon-two\" style=\"background-image:url(assets/images/icon/shep_02.png)\"></div>\n        <div class=\"icon-three\" style=\"background-image:url(assets/images/icon/shep_03.png)\"></div>\n    </div>\n\n    <div class=\"container\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-md-8 offset-md-2\">\n                <h1 class=\"text-center\">Teachers</h1>\n                <!-- <pre>{{ teacher | json }}</pre> -->\n                <table class=\"table table-dark table-bordered\">\n                    <tr>\n                        <th>S.No.</th>\n                        <th>Name</th>\n                        <th>Age</th>\n                        <th>City</th>\n                        <th>Delete</th>\n                        <th>Edit</th>\n                    </tr>\n                    <tr *ngFor=\"let t of teachers; let n = index\">\n                        <td>{{ n+1 }}</td>\n                        <td>{{ t.name }}</td>\n                        <td>{{ t.age }}</td>\n                        <td>{{ t.city }}</td>\n                        <td><button class=\"btn btn-danger\" data-target=\"#delModal\" data-toggle=\"modal\" (click)='askDelete(t)'>Delete</button></td>\n                        <td><a routerLink=\"edit/{{ t._id }}\" class=\"btn btn-info\">Edit</a></td>\n                    </tr>\n                </table>\n            </div>            \n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"delModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h2>Delete Teacher</h2>\n            </div>\n            <div class=\"modal-body\">\n                <p>Are You sure want to delete <strong *ngIf=\"teacher\">{{ teacher.name }}</strong></p>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-dark\" data-dismiss=\"modal\" (click)=\"delete()\">Delete</button>\n                <button class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"download-area  download-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-7 ml-auto mr-auto\">\n                <div class=\"section-title text-black\">\n                    <h2>Download our app</h2>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat, accusamus! Consequatur\n                        suscipit\n                        numquam cumque.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"download-buttons text-center\">\n                    <a href=\"#\" class=\"button\"> <i class=\"fa fa-apple\"></i> APP STORE</a>\n                    <a href=\"#\" class=\"button\"><i class=\"fa fa-android\"></i>PLAY STORE</a>\n                    <a href=\"#\" class=\"button\"><i class=\"fa fa-windows\"></i>PLAY STORE</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Download Area End  -->\n\n<!-- Contact Area Start -->\n<div id=\"contact\" class=\"contact-area\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"contact-info-container wow fadeInBottom\" data-wow-duration=\"1s\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-6\">\n                            <div class=\"contact-title\">\n                                <h2>Contact Us</h2>\n                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit dolores ad\n                                    molestiae rem\n                                    repudiandae modi, quisquam illum hic euorem ipsum dolor sit amet, consectetur\n                                    adipisicing elit.\n                                    Iusto sit accusamus</p>\n                            </div>\n                            <div class=\"contact-address\">\n                                <ul>\n                                    <li><i class=\"fa fa-phone\"></i> <span class=\"information\">(977) 324 644 676 / (800)\n                                            123 456\n                                            789</span></li>\n                                    <li><i class=\"fa fa-envelope-o\"></i> <span class=\"information\"><a\n                                                href=\"#\">admin@power-boosts.com</a></span></li>\n                                    <li><i class=\"fa fa-map-o\"></i> <span class=\"information\">No 40 Baria Sreet 133/2\n                                            New York City,\n                                            NY,<br> United States</span></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-6\">\n                            <form class=\"contact-form-area\" action=\"mail.php\" method=\"post\" id=\"contact-form\">\n                                <div class=\"row contact-form\">\n                                    <div class=\"form-group col-md-12\">\n                                        <input name=\"name\" class=\"form-control\" placeholder=\"Name\" type=\"text\"\n                                            id=\"name\">\n                                    </div>\n                                    <div class=\"form-group col-md-12\">\n                                        <input name=\"email\" class=\"form-control\" placeholder=\"Email\" type=\"email\"\n                                            id=\"email\">\n                                    </div>\n                                    <div class=\"form-group col-md-12\">\n                                        <input name=\"subject\" class=\"form-control\" placeholder=\"Subject\" type=\"text\"\n                                            id=\"subject\">\n                                    </div>\n                                    <div class=\"form-group col-md-12\">\n                                        <textarea name=\"message\" class=\"yourmessage form-control\"\n                                            placeholder=\"Message\"></textarea>\n                                    </div>\n                                    <div class=\"submit-form form-group col-sm-12\">\n                                        <button class=\"button submit-btn\" type=\"submit\"><span>Submit</span></button>\n                                        <p class=\"form-messege\"></p>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Contact Area End -->\n\n<!-- Footer Area Start -->\n<footer class=\"footer-area\">\n    <div class=\"footer-content-area\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"footer-content\">\n                        <div class=\"footer-logo\">\n                            <a href=\"index.html\"><img src=\"assets/images/logo/logo.png\" alt=\"\"></a>\n                        </div>\n                        <p>Copyright © 2019 HasTech. All Rights Reserved</p>\n                        <div class=\"social-link\">\n                            <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n                            <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n                            <a href=\"#\"><i class=\"fa fa-instagram\"></i></a>\n                            <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header header-sticky\">\n    <!-- header-top start -->\n    <div id=\"main-menu\" class=\"header-top inner-header\">\n        <div class=\"container\">\n            <div class=\"row header-top-inner\">\n                <div class=\"col-lg-4\">\n                    <div class=\"logo\">\n                        <a href=\"index.html\"><img src=\"assets/images/logo/logo-2.png\" alt=\"\"></a>\n                    </div>\n                </div>\n                <div class=\"col-lg-8\">\n                    <div class=\"main-menu\">\n                        <nav class=\"main-navigation\">\n                            <ul>\n                                <li class=\"active\"><a routerLink=\"\">Home</a></li>\n                                <li class=\"smooth-scroll\"><a href=\"#about\">About</a></li>\n                                <li><a href=\"#feature\">Feature</a></li>\n                                <li><a href=\"#pricing\">Pricing</a></li>\n                                <li><a href=\"#testimonial\">Clients</a></li>\n                                <li><a href=\"#screnshot\">screenshot</a></li>\n                                <li><a href=\"#contact\">Contact</a></li>\n                                <li><a routerLink=\"teacher\">Teacher</a></li>\n                            </ul>\n                        </nav>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <!-- mobile-menu start -->\n                    <div class=\"mobile-menu d-block d-lg-none\"></div>\n                    <!-- mobile-menu end -->\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Header-top end -->\n</header>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/teacher/teacher.component */ "./src/app/pages/teacher/teacher.component.ts");
/* harmony import */ var _pages_editteacher_editteacher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/editteacher/editteacher.component */ "./src/app/pages/editteacher/editteacher.component.ts");






const routes = [
    {
        path: "",
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "teacher",
        component: _pages_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_4__["TeacherComponent"]
    },
    {
        path: "teacher/edit/:id",
        component: _pages_editteacher_editteacher_component__WEBPACK_IMPORTED_MODULE_5__["EditteacherComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'finaleAngular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _pages_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/teacher/teacher.component */ "./src/app/pages/teacher/teacher.component.ts");
/* harmony import */ var _pages_editteacher_editteacher_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/editteacher/editteacher.component */ "./src/app/pages/editteacher/editteacher.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _pages_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_10__["TeacherComponent"],
            _pages_editteacher_editteacher_component__WEBPACK_IMPORTED_MODULE_11__["EditteacherComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/pages/editteacher/editteacher.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/editteacher/editteacher.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXR0ZWFjaGVyL2VkaXR0ZWFjaGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/editteacher/editteacher.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/editteacher/editteacher.component.ts ***!
  \************************************************************/
/*! exports provided: EditteacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditteacherComponent", function() { return EditteacherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_teacher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/teacher.service */ "./src/app/services/teacher.service.ts");




let EditteacherComponent = class EditteacherComponent {
    constructor(_actRoute, _teacher, _router) {
        this._actRoute = _actRoute;
        this._teacher = _teacher;
        this._router = _router;
        this.teacher = {
            _id: "",
            name: "",
            age: null,
            city: ""
        };
        _actRoute.paramMap.subscribe(params => {
            // console.log(params);
            let id = params.get("id");
            _teacher.getTeacher(id).subscribe(res => {
                // console.log(res);
                this.teacher = res;
            });
        });
    }
    ngOnInit() {
    }
    update() {
        // alert();
        this._teacher.update(this.teacher).subscribe(res => {
            if (res) {
                this._router.navigate(["/teacher"]);
            }
            // console.log(res);
        });
    }
};
EditteacherComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_teacher_service__WEBPACK_IMPORTED_MODULE_3__["TeacherService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EditteacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editteacher',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editteacher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editteacher/editteacher.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editteacher.component.scss */ "./src/app/pages/editteacher/editteacher.component.scss")).default]
    })
], EditteacherComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/teacher/teacher.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/teacher/teacher.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYWNoZXIvdGVhY2hlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/teacher/teacher.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/teacher/teacher.component.ts ***!
  \****************************************************/
/*! exports provided: TeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherComponent", function() { return TeacherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_teacher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/teacher.service */ "./src/app/services/teacher.service.ts");



let TeacherComponent = class TeacherComponent {
    constructor(_teacher) {
        this._teacher = _teacher;
    }
    ngOnInit() {
        this._teacher.getAll().subscribe(res => {
            this.teachers = res;
        });
    }
    askDelete(obj) {
        this.teacher = obj;
    }
    delete() {
        this._teacher.delete(this.teacher).subscribe(res => {
            // console.log(res);
            if (res) {
                let n = this.teachers.indexOf(this.teacher);
                this.teachers.splice(n, 1);
            }
        });
        // console.log(this.teacher);
    }
};
TeacherComponent.ctorParameters = () => [
    { type: _services_teacher_service__WEBPACK_IMPORTED_MODULE_2__["TeacherService"] }
];
TeacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teacher',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./teacher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/teacher/teacher.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./teacher.component.scss */ "./src/app/pages/teacher/teacher.component.scss")).default]
    })
], TeacherComponent);



/***/ }),

/***/ "./src/app/services/teacher.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/teacher.service.ts ***!
  \*********************************************/
/*! exports provided: TeacherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherService", function() { return TeacherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let TeacherService = class TeacherService {
    constructor(_http) {
        this._http = _http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].domain + "api/teacher";
    }
    getAll() {
        return this._http.get(this.url);
    }
    getTeacher(id) {
        return this._http.get(this.url + "/" + id);
    }
    insert(obj) {
        return this._http.post(this.url, obj);
    }
    update(obj) {
        return this._http.put(this.url + "/" + obj._id, obj);
    }
    delete(obj) {
        return this._http.delete(this.url + "/" + obj._id);
    }
};
TeacherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TeacherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TeacherService);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    domain: "http://localhost:3000/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular_batch\finaleAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map