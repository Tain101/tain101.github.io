var websiteApp = angular.module('websiteApp', ['ngRoute']);

websiteApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'mainController'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        })
        .when('/portfolio', {
            templateUrl: 'pages/portfolio.html',
            controller: 'portfolioController'
        });
});

websiteApp.controller('mainController', function($scope) {
    $scope.title = 'Taylor Premo';
    $scope.description = '-';
    $scope.link = [{
        'text': 'github',
        'link': 'https://github.com/Tain101'
    }];
});

websiteApp.controller('contactController', function($scope) {
    $scope.contactInfo = [{
        'email': 'tain.premo@gmail.com',
        'githup': 'https://github.com/Tain101'
    }];
});

websiteApp.controller('portfolioController', function($scope) {

    $scope.workExperience = [{
        'location': 'Iowa State University, Department of Computer Science, Ames, IA',
        'date': 'Summer 2014',
        'title': 'web devlopment',
        'description': [
            'Worked with a company rewriting their website to be mobile friendly and better designed'
        ],
        'experiences': [
            'Working with a 3rd party client - How to communicate technical ideas to non-techical people.',
            'Web development'
        ]
    }, {
        'location': '',
        'date': 'Summer 2013',
        'title': 'Web and server development',
        'description': [
            'Worked on maintaining and rewriting a homework management sytem.'
        ],
        'experiences': [
            'PHP',
            'Server management',
            'Code Rewriting'
        ]
    }];

    $scope.groupProjects = [{
        'title': 'AudioVisio:',
        'link': 'https://www.youtube.com/watch?v=CE_3zNcgYRQ',
        'repository': '',
        'description': [
            'A game developed my me and 3 others for a class. The idea is two players much navigate through various puzzles to complete levels.',
            'One person is the \'Audio\' player, as he cannot see objects as you would expect. Walls aren\'t visible to him, making it harder to navigate, but also allowing him to see more of the map.',
            'The other player is \'Visual\', he see\'s objects as expected. Allowing him to better understand the layout of the level.'
        ]
    }];

    $scope.soloProjects = [{
        'title': '2048',
        'link': 'https://tain101.github.io/2048/',
        'repository': 'https://github.com/tain101/2048/tree/gh-pages',
        'description': [
            'I am attempting to make a AI that learns 2048. This differs from my previous projects because the game has a defined scoring system, opposed to the rather binary scores from the previous. Currently the game can be played by a user, or the AI can run the game. The AI is to resource intensive to know fully if it is learning properly.'
        ]
    }, {
        'title': '2048',
        'link': 'https://tain101.github.io/2048/',
        'repository': 'https://github.com/tain101/2048/tree/gh-pages',
        'description': [
            'I am attempting to make a AI that learns 2048. This differs from my previous projects because the game has a defined scoring system, opposed to the rather binary scores from the previous. Currently the game can be played by a user, or the AI can run the game. The AI is to resource intensive to know fully if it is learning properly.'
        ]
    }, {
        'title': 'Checkers',
        'link': 'https://tain101.github.io/Checkers',
        'repository': 'https://github.com/tain101/Checkers/tree/gh-pages',
        'description': [
            'This was my second attempt at creating a genetic algorithms for a grid system. Originally I had planned to record moves and how long it takes to win/loose. Due to the potential randomness of games from start to end, it was impossible for the AI to make progress. Currently, each piece has it\'s own AI, and receives a score based on pieces taken, if it was kinged, and if the game was won.'
        ]
    }, {
        'title': 'Life',
        'link': 'https://tain101.github.io/Life',
        'repository': 'https://github.com/tain101/Life/tree/gh-pages',
        'description': [
            'This is an experiment in genetic algorithms. The idea was to create units that would need to eat, mate, and avoid obstacles, in order for the species to survive. They would learn to navigate the map based on the moves their parents have made. Unfortunately at the time I had virtually zero experience with javascript so the code was too resource heavy to coninue. I hope to rewrite it at some point.'
        ]
    }];
});