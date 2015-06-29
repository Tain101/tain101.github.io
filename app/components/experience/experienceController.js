websiteApp.controller('experienceController', ['$scope', '$http', function($scope, $http) {

    $scope.title = 'Experience';

    $http.get('./app/components/experience/Education.json')
        .then(function(data) {
            $scope.Education = data.data[0];
        });

    $http.get('./app/components/experience/workExperience.json')
        .error(function(data, status, headers, config) {
            console.log(data, status, headers, config);
        })
        .then(function(data) {
            $scope.workExperience = data.data;
        });

    $http.get('./app/components/experience/schoolExperience.json')
        .then(function(data) {
            $scope.schoolExperience = data.data;
        });

    $http.get('./app/components/experience/soloProjects.json')
        .then(function(data) {
            $scope.soloProjects = data.data;
        });
}]);