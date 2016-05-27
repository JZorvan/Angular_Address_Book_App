app.controller("AddressBookStorageCtrl", function($scope, $location, bookStorage){

  $scope.addresses = [];

  bookStorage.getAddressBook().then(function(addressBook){
    console.log("addressBook from promise", addressBook);
    $scope.addresses = addressBook;
  });

  $scope.deleteContact = function(contactID){
    console.log("contactID", contactID);
    bookStorage.deleteItem(contactID).then(function(response){
      bookStorage.getAddressBook().then(function(addressBook){
        $scope.addresses = addressBook;
      });
    });
  };

});
