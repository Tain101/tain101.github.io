websiteApp.controller('contactController', function($scope, $http) {
    $scope.title = 'Contact Information';

    $http.get('./app/components/contact/contact.json')
        .then(function(data) {
            $scope.contactInfo = data.data;
        });
});