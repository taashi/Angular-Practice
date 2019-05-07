// "use strict";

// angular.module('MyApp', ['angular-ladda'])
//   .controller('MainController', ['$scope', '$timeout', '$interval', '$http', function($scope, $timeout, $interval, $http) {
//     /**
//     Defined scope object for MainController
//     */
//     $scope.welcome = {
//       title: "Submit button with proress bar and loading indicator",
//       author: "Kunal Kamble"
//     };
//     $scope.button = {
//       title: 'Submit',
//       isLoading: false,
//       class: 'btn-primary',
//       click: function() {
//         $scope.button.isLoading = true; // start loading
//         $scope.button.title = 'Submitting';
//         $scope.button.isLoading = 0.1;
//         $scope.button.class = 'btn-danger';

//         $scope.number = 0.1; //lower amount is slower loading
//         $scope.total = 1;
//         $scope.renmaining = 1;
//         var updateCount = function (new_count) {
//           $scope.number = new_count;
//           if(!$scope.$$phase) {
//             $scope.$apply();
//           }
//         };
//         var dataStatus2 =  $interval(function() {
//           if (isNaN($scope.number)) {
//             $interval.cancel(dataStatus2);
//             $scope.number = 0.1;
//             $scope.renmaining = 1;
//             $scope.button.title = 'Submit';
//             $scope.button.class = 'btn-primary';
//           } else {
//             $scope.renmaining = $scope.total - $scope.number;
//             $scope.number = $scope.number + (0.5 * Math.pow($scope.total - Math.sqrt($scope.renmaining), 2));
//             $scope.button.isLoading = $scope.number;
//             if ($scope.number >= 1) {
//               $timeout(function() {
//                 $interval.cancel(dataStatus2);
//                 $scope.button.class = 'btn-success';
//                 $scope.button.title = 'Submitted';
//                 $scope.number = 1;
//               }, 100);
              
//               $timeout(function() {
//                 $scope.button.isLoading = false; // stop loading
//                 $scope.button.class = 'btn-primary';
//                 $scope.button.title = 'Submit';
//               }, 1500);
//             }
//             updateCount($scope.number);
//           }
//         }, 100);
//       }
//     }
//     $scope.clickBtn = function() {
//       $scope.loading = true; // start loading
//       $timeout(function() {
//         $scope.loading = false; // stop loading
//       }, 2000);
//     }
//   }]);

// /*! angular-ladda 0.3.4 */
// ! function(e, n) {
//   "use strict";
//   if ("function" == typeof define && define.amd) define(["angular", "ladda"], n);
//   else {
//     if ("undefined" == typeof module || "object" != typeof module.exports) return n(e.angular, e.Ladda);
//     module.exports = n(window.angular || require("angular"), require("ladda"))
//   }
// }(this, function(e, n) {
//   "use strict";
//   var t = "angular-ladda";
//   return e.module(t, []).provider("ladda", function() {
//     var n = {
//       style: "zoom-in"
//     };
//     return {
//       setOption: function(t) {
//         e.extend(n, t)
//       },
//       $get: function() {
//         return n
//       }
//     }
//   }).directive("ladda", ["ladda", function(t) {
//     return {
//       restrict: "A",
//       priority: -1,
//       link: function(a, r, d) {
//         if (r.addClass("ladda-button"), e.isUndefined(r.attr("data-style")) && r.attr("data-style", t.style || "zoom-in"), e.isUndefined(r.attr("data-spinner-size")) && t.spinnerSize && r.attr("data-spinner-size", t.spinnerSize), e.isUndefined(r.attr("data-spinner-color")) && t.spinnerColor && r.attr("data-spinner-color", t.spinnerColor), !r[0].querySelector(".ladda-label")) {
//           var i = document.createElement("span");
//           i.className = "ladda-label", e.element(i).append(r.contents()), r.append(i)
//         }
//         var o = n.create(r[0]);
//         a.$watch(d.ladda, function(n) {
//           return n || e.isNumber(n) ? (o.isLoading() || o.start(), void(e.isNumber(n) && o.setProgress(n))) : (o.stop(), void(d.ngDisabled && r.attr("disabled", a.$eval(d.ngDisabled))))
//         }), a.$on("$destroy", function() {
//           o.remove()
//         })
//       }
//     }
//   }]), t
// });