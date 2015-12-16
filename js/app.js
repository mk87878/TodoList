/**
 * Created by zhangmingwen on 15/12/8.
 */
(function(angular, undefined) {'use strict';
angular
    .module('todoApp',[])//创建程序模块
    .value('todoList',[])
    .controller['addCtrl',addCtrl]
    .controller['listCtrl',listCtrl]
    .service('taskService',tasksService)
;
function addCtrl($scope, todoList){
    $scope.addTodo = addTodo;
    function addTodo(){
        $scope.todoList.push({
            content:$scope.content,//获取提交任务内容
            color:$scope.color,//获取提交的css样式名称
            team:0,//分组
            date:getNowDate(),
        });
        $scope.content = '';//清空内容
    };
}

function listCtrl($scope, tasksService){
    $scope.todo = tasksService.todo;


}

function tasksService(todoList){
    var tasksService = {
        colorOptions:getAllColorOptions,
        addTodo:addTodo,
        todo:[],
    };


    function getAllColorOptions() {
        return [
            {name:'信息', code: 'info'},
            {name:'危险', code: 'danger'}
        ];
    };
    function addTodo(todoData){

    }

}






    .controller('toDoCtrl',['$scope',function($scope){

        $scope.todoList = [];
        $scope.teamList = [
            {team:0},
        ];

        $scope.add = function(){
            $scope.todoList.push({
                content:$scope.content,//获取提交任务内容
                color:$scope.color,//获取提交的css样式名称
                team:0,//分组
                date:getNowDate(),
            });
            $scope.content = '';//清空内容
        };

        $scope.addTeam = function(){
            $scope.teamList.push({
                team:$scope.team,//分组
            });
            $scope.content = '';//清空内容
        };


    }]);

function getNowDate(){//获取当前系统时间
    return new Date().toLocaleDateString()
}


})(window.angular);
