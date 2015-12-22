/**
 * Created by zhangmingwen on 15/12/8.
 */
angular
    .module('todoApp',[])//创建程序模块
    .controller('toDoCtrl',['$scope',function($scope){
        var temp = localStorage.getItem('todoList');

        $scope.todoList = temp ? angular.fromJson(temp) : [];//存储所有todo

        //$scope.todoList = [];//存储所以todo

        //todo列表颜色
        $scope.colorOptions = [
            {name:'green',code:'list-group-item-success'},
            {name:'red',code:'list-group-item-danger'},
            {name:'blue',code:'list-group-item-info'},
            {name:'yellow',code:'list-group-item-warning'}
        ];
        /*
        $scope.todoList.color = $scope.colorOptions[0].name;//初始化颜色
        console.log($scope.todoList.color);
        //用不起:原因未知
        */

        //初始化
        $scope.createTodo = {
            content:'',//任务内容
            color:'list-group-item-info',//css样式名称
            isDo:'false',//是否完成
            team:'',//分组
            date:''
        };

        //添加todo任务
        $scope.addTodo = function(){
            $scope.todoList.push({
                content:$scope.createTodo.content,//获取提交任务内容
                color:$scope.createTodo.color,//获取提交的css样式名称
                isDo:'false',//是否完成
                team:$scope.createTodo.team,//分组
                date:getNowDate()
            });
            $scope.createTodo.content = '';//清空内容
            $scope.save();
            console.log($scope.todoList);

        };




        //删除
        <!--ng-click="todoList.splice($index,1)"点击删除当前条目 , ($index,1)循环遍历的索引值-->
        $scope.removeTask = function (todo) {
            $scope.todoList.splice($scope.todoList.indexOf(todo), 1);
            $scope.save();
        };

        //保存
        $scope.save = function () {
            localStorage.setItem('todoList', angular.toJson($scope.todoList));
        }

        //获取当前系统时间
        function getNowDate(){
            return new Date().toLocaleDateString()
        }



    }]);


