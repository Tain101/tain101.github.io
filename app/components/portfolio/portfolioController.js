websiteApp.controller('portfolioController', ['$scope', '$http', function($scope, $http) {

    $scope.title = 'Portfolio';

    $http.get('./app/components/portfolio/Education.json')
        .then(function(data) {
            $scope.Education = data.data[0];
        });

    $http.get('./app/components/portfolio/workExperience.json')
        .error(function(data, status, headers, config) {
            console.log(data, status, headers, config);
        })
        .then(function(data) {
            $scope.workExperience = data.data;
        });

    $http.get('./app/components/portfolio/schoolExperience.json')
        .then(function(data) {
            $scope.schoolExperience = data.data;
        });

    $http.get('./app/components/portfolio/soloProjects.json')
        .then(function(data) {
            $scope.soloProjects = data.data;
        });
}]);