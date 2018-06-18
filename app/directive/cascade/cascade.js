
// <cascade firstValue="" secondValue="" threeValue=""></cascade>
angular.module("pd.cascade", [])
    .directive("cascade", function () {
        return {
            restrict: "E",
            replace: true,
            scope: {
                firstValue: "=?",
                secondValue: "=?",
                threeValue: "=?"
            },
            template: "<div><select ng-model='firstValue' ng-change='fristChange(this)' ng-options='item.Value as item.Text for item in firstSelect'></select><select ng-model='secondValue' ng-change='secondChange(this)' ng-options='item.Value as item.Text for item in secondSelect' ng-show='secondSelect.length>0'></select><select ng-model='threeValue' ng-options='item.Value as item.Text for item in threeSelect' ng-show='threeSelect.length>0'></select></div>",
            link: function (scope, elemnt, attr) {
                // todo layui render();
            },
            controller: function ($scope) {
                $scope.firstSelect = [];
                $scope.secondSelect = [];
                $scope.threeSelect = [];
                $scope.data = [{
                        Text: "北京",
                        Value: 1,
                        pid: 0
                    }, {
                        Text: "天安门",
                        Value: 10,
                        pid: 1
                    }, {
                        Text: "北京",
                        Value: 11,
                        pid: 1
                    },
                    {
                        Text: "上海",
                        Value: 2,
                        pid: 0
                    },
                    {
                        Text: "湖南",
                        Value: 3,
                        pid: 0
                    },
                    {
                        Text: "长沙",
                        Value: 4,
                        pid: 3
                    },
                    {
                        Text: "益阳",
                        Value: 5,
                        pid: 3
                    },
                    {
                        Text: "沅江",
                        Value: 6,
                        pid: 5
                    },
                    {
                        Text: "南县",
                        Value: 7,
                        pid: 5
                    }
                ];
                for (i = 0; i < $scope.data.length; i++) {
                    if ($scope.data[i].pid == 0) {
                        $scope.firstSelect.push($scope.data[i]);
                    }
                }

                $scope.fristChange = function (obj) {
                    $scope.secondSelect = [];
                    $scope.threeSelect = [];
                    fillData(obj.firstValue, $scope.secondSelect);
                };
                $scope.secondChange = function (obj) {
                    fillData(obj.secondValue, $scope.threeSelect);
                };

                function fillData(pid, fillData) {
                    for (i = 0; i < $scope.data.length; i++) {
                        if ($scope.data[i].pid == pid) {
                            fillData.push($scope.data[i]);
                        }
                    }
                }
            }
        };
    });