angular.module("pd.dropdownTree", [])
    .directive("dropdownTree", function () {
        return {
            template: "<div><input type=text value={{column}}><ul class='ztree'></ul></div>",
            restrict: "E",
            replace: true,
            scope: {
                id: "@",
                column: "="
            },
            link: function (scope, element, attr) {
                element[0].children[1].id = "ztree" + scope.id;
                var setting = {};

                var zNodes =  [
                    {name:"test1", open:true, children:[
                       {name:"test1_1"}, {name:"test1_2"}]},
                    {name:"test2", open:true, children:[
                       {name:"test2_1"}, {name:"test2_2"}]}
                    ];

                $.fn.zTree.init($("#ztree" + scope.id), setting, zNodes);
            }
        };
    });