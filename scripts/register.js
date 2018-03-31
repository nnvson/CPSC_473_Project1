(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-signup='form']";
  var SERVER_URL = "http://localhost:2403/aboutmeusers";
  var App = window.App;
  var Userreg = App.Userreg;
  //var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;

  var remoteDS = new RemoteDataStore(SERVER_URL);
  var newRegSession = new Userreg("dummy_regID", remoteDS);

  window.newRegSession = newRegSession;

  var formHandler = new FormHandler(FORM_SELECTOR);

  //formHandler.addValidateHandler();

  formHandler.addSubmitHandler(function(data) {
    var modalDialog;
    //check passwords matched
    if (data["password"] != data["password2"]) {
      modalDialog = "<p>Password not matched. Please re-enter password.</p>";
      $(modalDialog).modal();
      return;
    }
    //password matched
    newRegSession.registerNew.call(newRegSession, data);
    modalDialog = "<p>Welcome to About Me, " + data["username"] + "</p>";
    $(modalDialog).modal();

  });

  console.log(formHandler);

})(window);
