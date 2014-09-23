describe('testing calendar directive', function () {
        var scope, element, compiled;

        beforeEach(module("calendar"));
        beforeEach(module("app/calendar.html"));

        beforeEach(inject((function ($compile, $rootScope) {
                scope = $rootScope;
                compiled = $compile(element)(scope);
            }));

            it('Make sure calendar is correct date', function () {
                scope.$apply(function () {
                    scope.currentDate = {
                        day: day,
                        monthNumber: 10,
                        month: 'October',
                        year: 2015,
                    };
                });

                expect(compiled.find('h2')
                    .text())
                    .toBe('October 2015');

                expect(compiled.find('.entry:first-child')
                    .text())
                    .toHaveCss('gray');

                expect(compiled.find('.entry:first-child')
                    .text())
                    .toBe('27');

                expect(compiled.find('.entry:last-child')
                    .text())
                    .toBe('31');


            });
        });
