/**
 * Created by zhangmingwen on 15/12/8.
 */
angular
    .module('todoApp',['ngStorage'])//创建程序模块
    .controller('toDoCtrl',['$scope',function(
        $scope
        //$localStorage,
        //$sessionStorage,
    ){
        $scope.todoList = [];//存储所以todo



        $scope.colorOptions = [//todo列表颜色
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

        $scope.createTodo = {//初始化颜色
            content:'',//任务内容
            color:'list-group-item-info',//css样式名称
            isDo:'false',//分组
            date:''
        }

        $scope.addTodo = function(){
            $scope.todoList.push({
                content:$scope.createTodo.content,//获取提交任务内容
                color:$scope.createTodo.color,//获取提交的css样式名称
                isDo:'false',//分组
                date:getNowDate()
            });

            $scope.createTodo.content = '';//清空内容
            console.log($scope.todoList);

        };



    }]);

function getNowDate(){//获取当前系统时间
    return new Date().toLocaleDateString()
}
