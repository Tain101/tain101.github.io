angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('home', {
                url: '/',

                views: {
                    'headerView': {
                        controller: 'mainController',
                        templateUrl: 'pages/header.html'
                    },
                    'mainView': {
                        controller: 'mainController',
                        templateUrl: 'pages/home.html'
                    }
                }
            })
            .state('about', {
                url: '/about',

                views: {
                    'headerView': {
                        controller: 'mainController',
                        templateUrl: 'pages/header.html'
                    },
                    'mainView': {
                        controller: 'mainController',
                        templateUrl: 'pages/about.html'
                    }
                }
            })
            .state('contact', {
                url: '/contact',

                views: {
                    'headerView': {
                        controller: 'contactController',
                        templateUrl: 'pages/header.html'
                    },
                    'mainView': {
                        controller: 'contactController',
                        templateUrl: 'pages/contact.html'
                    }
                }
            })
            .state('portfolio', {
                url: '/portfolio',

                views: {
                    'headerView': {
                        controller: 'portfolioController',
                        templateUrl: 'pages/header.html'
                    },
                    'mainView': {
                        controller: 'portfolioController',
                        templateUrl: 'pages/portfolio.html'
                    }
                }
            })
            .state('404', {
                url: '/404',

                views: {
                    'headerView': {

                        controller: '404Controller',
                        templateUrl: 'pages/header.html'
                    },
                    'mainView': {
                        controller: '404Controller',
                        templateUrl: 'pages/404.html'
                    }
                }
            });
    });