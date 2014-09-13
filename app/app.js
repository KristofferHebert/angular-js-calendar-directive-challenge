angular.module('calendarDemoApp', [])
    .controller('mainCtrl', ['$scope',
        function ($scope) {

        }
    ])
    .directive('calendar', [

        function () {
            return {
                restrict: 'E',
                templateUrl: 'calendar.html',
                controller: function ($scope) {
                    var today = new Date(),
                        day = today.getDay(),
                        year = today.getFullYear(),
                        monthNumber = today.getMonth(),
                        month;

                    $scope.months = [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December'
                    ];

                    $scope.days = [
                        'Sunday',
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                    ];

                    month = $scope.months[monthNumber];
                    $scope.currentDate = {
                        day: day,
                        monthNumber: monthNumber,
                        month: month,
                        year: year,
                    };

                    $scope.years = function () {
                        var beginning = $scope.currentDate.year - 20,
                            end = beginning + 40,
                            years = [];
                        while (beginning <= end) {
                            beginning++;
                            years.push(beginning);
                        }
                        return years;
                    };
                    $scope.setRange = function () {
                        parseInt($scope.currentDate.monthNumber, 10);
                        return $scope.daysinmonth = CalendarRange.getMonthlyRange(new Date($scope.currentDate.year, $scope.currentDate.monthNumber));
                    };
                    $scope.setBg = function (value) {
                        var cleanValue = parseInt(value, 10);
                        return (cleanValue !== $scope.currentDate.monthNumber);
                    };
                    $scope.$watchCollection('currentDate', function () {
                        $scope.setRange();

                    });

                    $scope.setRange();
                }
            };
        }
    ]);
