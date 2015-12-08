/**
 * Created by zhangmingwen on 15/12/8.
 */
angular
    .module('todoApp',[])//创建程序模块
    .controller('toDoCtrl',['$scope',function($scope){
        $scope.todoList = [];
        $scope.add = function(){
            $scope.todoList.push($scope.content);//获取提交内容
            $scope.content = '';//清空form
        };
    }]);
