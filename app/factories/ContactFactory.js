app.factory("bookStorage", function($q, $http, firebaseURL){

  var getAddressBook = function(){
    var book = [];
    return $q(function(resolve, reject){
      $http.get("https://ng-addressbook-jz.firebaseio.com/addresses.json")
        .success(function(bookObject){
          var addressBook = bookObject;
          Object.keys(addressBook).forEach(function(key){
            addressBook[key].id=key;
            book.push(addressBook[key]);
          });
          resolve(book);
        })
        .error(function(error){
          reject(error);
        });
    });
  };

  var deleteContact = function(contactID){
    return $q(function(resolve, reject){
      $http
        .delete("https://ng-addressbook-jz.firebaseio.com/addresses/" + contactID + ".json")
        .success(function(objectFromFirebase){
          resolve(objectFromFirebase);
        });
    });
  };

  var postNewContact = function(newContact){
    return $q(function(resolve, reject) {
      $http.post("https://ng-addressbook-jz.firebaseio.com/addresses.json",
        JSON.stringify({
          firstName: newContact.firstName,
          lastName: newContact.lastName,
          streetAdd: newContact.streetAdd,
          unit: newContact.unit,
          city: newContact.city,
          state: newContact.state,
          zip: newContact.zip,
          email: newContact.email,
          phone: newContact.phone
        })
      )
        .success(
          function(objectFromFirebase) {
            resolve(objectFromFirebase);
          }
        );
    });
  };

  var getSingleContact = function(contactID){
    return $q(function(resolve, reject){
      $http.get("https://ng-addressbook-jz.firebaseio.com/addresses/" + contactID + ".json")
        .success(function(bookObject){
          resolve(bookObject);
        })
        .error(function(error){
          reject(error);
        });
    });
  };

  var updateContact = function(contactID, newContact){
    return $q(function(resolve, reject) {
      $http.put("https://ng-addressbook-jz.firebaseio.com/addresses/" + contactID + ".json",
        JSON.stringify({
          firstName: newContact.firstName,
          lastName: newContact.lastName,
          streetAdd: newContact.streetAdd,
          unit: newContact.unit,
          city: newContact.city,
          state: newContact.state,
          zip: newContact.zip,
          email: newContact.email,
          phone: newContact.phone
        })
      )
        .success(function(objectFromFirebase) {
          resolve(objectFromFirebase);
          }
        );
    });
  };

  return {updateContact:updateContact, getSingleContact:getSingleContact, getAddressBook:getAddressBook, deleteContact:deleteContact, addNewContact:addNewContact};

});
