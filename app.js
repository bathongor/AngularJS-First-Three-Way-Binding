    //INITIALIZE FIREBASE
    var config = {
            apiKey: "AIzaSyByiVZCx2lMwJerAGR6TkgLXhozKvEwrO8",
            authDomain: "silent-relic-219002.firebaseapp.com",
            databaseURL: "https://silent-relic-219002.firebaseio.com",
            projectId: "silent-relic-219002",
            storageBucket: "silent-relic-219002.appspot.com",
            messagingSenderId: "515739637546"
  	};
    firebase.initializeApp(config);

    //Create AngularJS Database Ref
            angular
                 .module('myModule',['firebase'])
                 .controller('myController',['$scope', '$firebaseObject', function($scope, $firebaseObject){
                        var ref = firebase.database().ref();
                        var obj = $firebaseObject(ref); 
                        obj.$bindTo($scope, 'data').then(function(){
                            console.log($scope.data);
                        });
  
                        $scope.incrementNumber = function(){
                            $scope.data.clickMe++;
                        }
                }]);
     
   
   




