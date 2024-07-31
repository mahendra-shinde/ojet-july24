define(['../accUtils','ojs/ojcore', 'knockout', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojinputtext', 'ojs/ojformlayout', 'ojs/ojmodel'],
  function(accUtils, oj, ko) {
      function FormViewModel() {
          var self = this;
  
          self.custId = ko.observable("");
          self.email = ko.observable("");
          self.firstName = ko.observable("");
          self.lastName = ko.observable("");
  
          self.submitForm = function(event) {
              event.preventDefault();
  
              var customerData = {
                  custId: self.custId(),
                  email: self.email(),
                  firstName: self.firstName(),
                  lastName: self.lastName()
              };
  
              var CustomerModel = oj.Model.extend({
                  urlRoot: 'http://localhost:8080/api/customer' // replace with your REST API endpoint
              });
  
              var customer = new CustomerModel(customerData);
  
              customer.save(null, {
                  contentType: 'application/json',
                  success: function(model, response, options) {
                      console.log('Data submitted successfully', response);
                  },
                  error: function(model, xhr, options) {
                      console.error('Error submitting data', xhr.responseText);
                  }
              });
          };
      }
  
      return FormViewModel;
  });
  