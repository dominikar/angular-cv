angular.module('AngularCV', [])
    .controller('AngularCvController', function ($scope) {
        $scope.cv = {
            "firstName": "Dominika",
            "lastName": "Rusinska",
            "email": "dominikarusinska@gmail.com",
            "img": "img/dominikar.jpg",
            "githubLogin": "dominikar",
            "skills": [
                "Adobe Photoshop",
                "Adobe Illustrator",
                "HTML5",
                "CSS3",
                "jQuery (basic)",
                "Javascript (basic)",
                "Bootstrap"
            ],
            "education": [
                {
                    "university": "Polish-Japanese Academy of Information Technology",
                    "field": "New Media Arts (Graphic Design)",
                    "from": "2015",
                    "to": "2018"
                }
            ],
            "volunteering": [
                {
                    "name": "DKMS",
                    "description": "Registering potential blood stem cell donors",
                    "year": "2015"
                }
            ],
            "languages": [
                {
                    "name": "Polish",
                    "level": "native"
                },
                {
                    "name": "English",
                    "level": "intermediate"
                }
            ],
            "interests": [
                "fashion design",
                "itd"
            ]
        };
    });
