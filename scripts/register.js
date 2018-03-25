(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-signup='form']";
  var SERVER_URL = "http://localhost:2403/aboutmeusers";
  var App = window.App;
  var Userreg = App.Userreg;
  var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;

  var remoteDS = new RemoteDataStore(SERVER_URL);
  var newRegSession = new Userreg("reg_111", remoteDS);

  window.newRegSession = newRegSession;

  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addValidateHandler();

  formHandler.addSubmitHandler(function(data) {
    newRegSession.registerNew.call(newRegSession, data);
  });

  console.log(formHandler);

})(window);
