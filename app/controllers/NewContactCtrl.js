app.controller("NewContactCtrl", function($scope, $location, addressBook){

  $scope.title = "New Contact";
  $scope.submitButtonText = "Add New Contact";
  $scope.newContact = {
    firstName: "",
    lastName: "",
    streetAdd: "",
    unit: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: ""
  };

  $scope.addNewContact = function(){
    addressBook.postNewContact($scope.newContact)
      .then(function successCallback(response) {
        console.log(response);
        $location.url("/book/list");
      });
  };

});
