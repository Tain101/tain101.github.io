websiteApp.controller('portfolioController', ['$scope', '$http', function($scope, $http) {

    $scope.title = 'Portfolio';

    $http.get('./app/components/portfolio/workExperience.json')
        .then(function(data) {
            $scope.workExperience = data.data;
        });

    $http.get('./app/components/portfolio/groupProjects.json')
        .then(function(data) {
            $scope.groupProjects = data.data;
        });

    $http.get('./app/components/portfolio/soloProjects.json')
        .then(function(data) {
            $scope.soloProjects = data.data;
        });
}]);