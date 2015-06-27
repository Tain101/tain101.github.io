websiteApp.controller('404Controller', func404Controller);

function func404Controller($scope) {
    $scope.title = '404';
    $scope.message = 'Oh no! It looks like you might be lost.';
    $scope.link = 'home';
}