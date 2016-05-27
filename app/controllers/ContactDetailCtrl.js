app.controller("ContactDetailCtrl", function($scope, $routeParams, addressBook){

  $scope.addresses = [];
  $scope.selectedContact = {};
  console.log($routeParams.contactID);

  bookStorage.getAddressBook().then(function(addressBook){
    console.log("addressBook from promise", addressBook);
    $scope.addresses = addressBook;

    $scope.selectedContact = $scope.addresses.filter(function(contact){
      return contact.id === $routeParams.contactID;
    })[0];

  });

});
