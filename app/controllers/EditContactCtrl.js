app.controller("EditContactCtrl", function($scope, $location, $routeParams, addressbook){

  $scope.title = "Edit Contact";
  $scope.submitButtonText = "Update Contact";
  $scope.newContact = {};

  addressBook.getSingleContact($routeParams.contactID)
    .then(function successCallback(response){
      $scope.newContact=response;
    });

  $scope.addNewContact = function(){
    addressBook.updateItem($routeParams.contactID, $scope.newContact)
      .then(function successCallback(response) {
        console.log(response);
        $location.url("/book/list");
      });
  };

});

