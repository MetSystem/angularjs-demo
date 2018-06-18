angular.module("hello",[])
.directive("hello",function(){
    return {
        restrict:"EACM",
        scope:{
            firstName:"=",
            lastName:"@",
            sayHello:"&"
        },
        transclude:true,
        template:"<div ng-click='sayHello();'>hello {{firstName}}<div ng-transclude></div> {{lastName}}</div>"
    }
});