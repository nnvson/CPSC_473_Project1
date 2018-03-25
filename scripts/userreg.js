(function(window) {
  "use strict";
  var App = window.App || {};

  function Userreg(regId, db) {
    this.regId = regId;
    this.db = db;
  }
  Userreg.prototype.registerNew = function(newReg) {
    console.log("Register for " + newReg.user_name);
    this.db.add(newReg.user_name, newReg);
  };

  App.Userreg = Userreg;
  window.App = App;
})(window);
