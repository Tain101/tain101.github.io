websiteApp.controller('aboutController', function($scope, $http) {

    $http.get('./app/components/about/about.json')
        .then(function(data) {
            $scope.Paragraphs = data.data;
        });
});