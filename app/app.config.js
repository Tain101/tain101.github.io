websiteApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .when('', '/')
        .otherwise('/404');

    $stateProvider
        .state('home', {
            url: '/',

            views: {
                "headerView": {
                    controller: 'homeController',
                    templateUrl: 'app/shared/header/header.html'
                },
                "mainView": {
                    controller: 'homeController',
                    templateUrl: 'app/components/home/home.html'
                }
            }
        })
        .state('about', {
            url: '/about',

            views: {
                "headerView": {
                    controller: 'homeController',
                    templateUrl: 'app/shared/header/header.html'
                },
                "mainView": {
                    controller: 'homeController',
                    templateUrl: 'app/components/about/about.html'
                }
            }
        })
        .state('contact', {
            url: '/contact',

            views: {
                "headerView": {
                    controller: 'contactController',
                    templateUrl: 'app/shared/header/header.html'
                },
                "mainView": {
                    controller: 'contactController',
                    templateUrl: 'app/components/contact/contact.html'
                }
            }
        })
        .state('portfolio', {
            url: '/portfolio',

            views: {
                "headerView": {
                    controller: 'portfolioController',
                    templateUrl: 'app/shared/header/header.html'
                },
                "mainView": {
                    controller: 'portfolioController',
                    templateUrl: 'app/components/portfolio/portfolio.html'
                }
            }
        })
        .state('404', {
            url: '/404',

            views: {
                "headerView": {

                    controller: '404Controller',
                    templateUrl: 'app/shared/header/header.html'
                },
                "mainView": {
                    controller: '404Controller',
                    templateUrl: 'app/components/404/404.html'
                }
            }
        });
});