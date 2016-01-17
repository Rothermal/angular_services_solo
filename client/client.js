/**
 * Created by JFCS on 1/15/16.
 */
console.log('gruntcheck');

var app = angular.module("thetaApp",[]);

app.controller('MainController',['$scope','thetaServices','$sce',function($scope,thetaServices,$sce){
    $scope.test = thetaServices;
    //$scope.data = DataService.data;
    //DataService.makeCall();
    $scope.symbol=$sce.trustAsHtml(thetaServices.theta.Symbol);
}]);

app.factory('thetaServices',function(){


    var theta ={ name: 'Theta',
                numStudents:22,
                spiritAnimal:'Wolverine',
                School:'Prime Digital Academy',
                location:{state:'MN',city:'Bloomington'},
                country:'Usa',
                language: function(){
                return  'Javascript';
                },
                Symbol: '&Theta;',
                TakingShortcuts: "I am all out of ideas",

                stuff:["things","blarg",'kittyfoo']

    };
    return {
        theta:theta
    }

});

//
// app.factory('DataService',['$http',function($http){
//
//     var data = {};
//
//     var makeCall=function(){
//         $http.get('/getMyThing').then(function(response){
//            data.results = response.data;
//         });
//         return {
//             makeCall:makeCall,
//             data:data
//         }
//     }
// }]);