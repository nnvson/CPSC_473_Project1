(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function(fn) {
    console.log("Setting submit handler for form");
    this.$formElement.on("submit", function(event) {
      event.preventDefault();
      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + " is " + item.value);
      });
      console.log(data);
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };

  FormHandler.prototype.addInputHandler = function(fn) {
    console.log("Setting input handler for form");
    this.$formElement.on("input", "[name=emailAddress]", function(event) {
      var emailAddress = event.target.value;
      //console.log(fn(emailAddress));
      var message = "";
      if (fn(emailAddress)){
        $(event.target).setCustomValidity("");
      } else {
        message = emailAddress + " is not an authorized email address!";
        $(event.target).setCustomValidity(message);
      }
    });
  };

  FormHandler.prototype.addValidateHandler = function() {
    console.log("Setting validate handler for form");
    this.$formElement.on("submit", function(event) {
      event.preventDefault();
      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + " is " + item.value);
      });
      console.log(data);
      var dataArr = Object.values(data);
      var modalDialog;

      //check passwords matched
      if (data["pw-1"] != data["pw-2"]) {
        modalDialog = "<p>Password not matched. Please re-enter password.</p>";
        $(modalDialog).modal();
        return;
      }
      //check required fields
      var i = 0;
      while (i < dataArr.length) {
        if (dataArr[i] == "") {
          modalDialog = "<p>Required fields must be filled.</p>";
          $(modalDialog).modal();
          return;
        }
        i++;
      }
      modalDialog = "<p>Welcome to About Me, " + data["user-name"] + "</p>";
      $(modalDialog).modal();
      this.reset;
      //code for backend to save information to DB
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;

})(window);
