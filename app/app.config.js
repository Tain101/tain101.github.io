websiteApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .otherwise('/404');

    $stateProvider
        .state('root', {
            url: '',

            views: {
                "headerView": {
                    templateUrl: 'app/shared/header/header.html'
                },
                "navView": {
                    templateUrl: 'app/shared/nav/nav.html'
                },
                "mainView": {
                    templateUrl: 'app/components/home/home.html'
                },
                "footerView": {
                    templateUrl: 'app/shared/footer/footer.html'
                }
            }
        })
        .state('root.home', {
            url: '/',

            views: {
                "headerView@": {
                    controller: 'homeController',
                    templateUrl: 'app/shared/header/header.html'
                },
                "mainView@": {
                    controller: 'homeController',
                    templateUrl: 'app/components/home/home.html'
                }
            }
        })
        .state('root.about', {
            url: '/about',

            views: {
                "headerView@": {
                    controller: 'aboutController',
                    templateUrl: 'app/shared/header/header.html'
                },
                "mainView@": {
                    controller: 'aboutController',
                    templateUrl: 'app/components/about/about.html'
                }
            }
        })
        .state('root.contact', {
            url: '/contact',

            views: {
                "headerView@": {
                    controller: 'contactController',
                    templateUrl: 'app/shared/header/header.html'
                },
                "mainView@": {
                    controller: 'contactController',
                    templateUrl: 'app/components/contact/contact.html'
                }
            }
        })
        .state('root.portfolio', {
            url: '/portfolio',

            views: {
                "headerView@": {
                    controller: 'portfolioController',
                    templateUrl: 'app/shared/header/header.html'
                },
                "mainView@": {
                    controller: 'portfolioController',
                    templateUrl: 'app/components/portfolio/portfolio.html'
                }
            }
        })
        .state('404', {
            url: '/404',

            views: {
                "headerView@": {

                    controller: '404Controller',
                    templateUrl: 'app/shared/header/header.html'
                },
                "mainView@": {
                    controller: '404Controller',
                    templateUrl: 'app/components/404/404.html'
                }
            }
        });
});