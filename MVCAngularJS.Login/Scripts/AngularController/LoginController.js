angular.module('MyApp')
.controller('LoginController', function ($scope, LoginService) {
    $scope.IsLogedIn = false;
    $scope.Message = '';
    $scope.Submitted = false;
    $scope.IsFormValid = false;

    $scope.LoginData = {
        UserName: '',
        Password: ''
    };

    $scope.$watch('f1.$valid', function (newVal) {
        $scope.IsFormValid = newVal;
    });

    $scope.Login = function () {
        $scope.Submitted = true;
        if ($scope.IsFormValid) {
            LoginService.GetUser($scope.LoginData).then(function (d) {
                if (d.data.UserName != null) {
                    $scope.IsLogedIn = true;
                    $scope.Message = "Başarıyla giriş yaptınız " + d.data.FullName;

                }
                else {
                    alert('kullanıcı bulunamadı!');
                }
            });
        }
    };

})
.factory('LoginService', function ($http) {
    var fac = {};
    fac.GetUser = function (d) {
        return $http({
            url: '/Data/UserLogin',
            method: 'POST',
            data: JSON.stringify(d),
            headers: { 'content-type': 'application/json' }
        });
    };
    return fac;
});