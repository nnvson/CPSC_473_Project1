(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-signup='form']";
  var App = window.App;
  var FormHandler = App.FormHandler;
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addValidateHandler();

  console.log(formHandler);
})(window);
