/**
 * Created by zhangmingwen on 15/12/8.
 */
angular
    .module('todoApp',[])//创建程序模块
    .controller('toDoCtrl',['$scope',function($scope){
        $scope.todoList = [];
        $scope.add = function(){
            $scope.todoList.push({
                content:$scope.content,//获取提交文字内容
                color:$scope.color,//获取提交的css样式名称
            });
            $scope.content = '';//清空form
        };
    }]);
