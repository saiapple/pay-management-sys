angular.module('IOne').service('AuthenticationService', function (Base64, $window, $http, $cookieStore, $rootScope, Constant) {
    this.Login = function (username, password, successCallback, errorCallback) {
        $rootScope.adapterInfo = {};

        $http.get('/application.yaml').success(function (response, status) {
            try {
                var data = new String(response);
                  var doc =  jsyaml.safeLoadAll(data, function(result){
                console.log(result.i1['i1-server'].url);
 
  

            $rootScope.adapterInfo = result.i1;
            Constant.BACKEND_BASE = $rootScope.adapterInfo['i1-server'].url;
            $http.post(Constant.BACKEND_BASE + '/auth/login', {
                userName: username,
                password: password
            }).success(function (loginResponse) {
                successCallback(loginResponse)
            }).error(function () {
                errorCallback()
            });
             });
} catch (e) {
  console.log(e);
}
        }).error(function (response, status) {
            if (response == null) {
                alert("[" + (status + '') + "]Connect Server Fail");
            } else {
                alert("[" + (status + '') + "]" + response.message);
            }
        });
    };

    this.Logout = function () {
        return $http.post(Constant.BACKEND_BASE + '/auth/logout');
    };

    this.setUrlInfo = function (){
        $rootScope.adapterInfo = {};
        $http.get('/application.yaml').success(function (response, status) {
        try {
            var data = new String(response);
             var doc =  jsyaml.safeLoadAll(data, function(result){
                console.log(result.i1['i1-server'].url);
                $rootScope.adapterInfo = result.i1;
                Constant.BACKEND_BASE = $rootScope.adapterInfo['i1-server'].url;
              });
        } catch (e) {
          console.log(e);
        }
        });
     };

    this.setOAuthAccessToken = function (accessToken){
        this.setUrlInfo();
        $http.defaults.headers.common['Authorization'] = 'bearer ' + accessToken;
         $http.get('http://localhost:8082/users/me').then(function(response) {
            $rootScope.globals = {
                     currentUser: {
                         username: response.data.principal.username,
                         principal: response.data.principal
                     },
                     accessToken : accessToken,
                     adapterInfo: {}
             };
             $rootScope.globals.adapterInfo = $rootScope.adapterInfo;
             $cookieStore.put(GLOBAL_COOKIE, $rootScope.globals);
             $cookieStore.put(DISPLAY_NAME_COOKIE, response.data.principal.realName);
             $cookieStore.put(DISPLAY_TYPE_COOKIE, response.data.principal.user.type);
             $window.location.href = '/';
         });
    }

    this.SetCredentials = function (username, password, userUuid, loginResponse) {
        var authdata = Base64.encode(username + ':' + password);

        $rootScope.globals = {
            currentUser: {
                username: username,
                authdata: authdata,
                userUuid: userUuid
            },
            adapterInfo: {}
        };
        $rootScope.globals.adapterInfo = $rootScope.adapterInfo;
        $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
        $cookieStore.put(GLOBAL_COOKIE, $rootScope.globals);
        $cookieStore.put(DISPLAY_NAME_COOKIE, loginResponse.userName);
        $cookieStore.put(DISPLAY_TYPE_COOKIE, loginResponse.type);
    };

    this.ClearCredentials = function () {
        $rootScope.globals = {};
        $cookieStore.remove(GLOBAL_COOKIE);
        $cookieStore.remove(DISPLAY_NAME_COOKIE);
        $cookieStore.remove(DISPLAY_TYPE_COOKIE);
        $http.defaults.headers.common.Authorization = 'Basic';
    };
});

angular.module('IOne').service('Base64', function () {
    var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3 = "";
        var enc1, enc2, enc3, enc4 = "";
        var i = 0;

        do {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
            keyStr.charAt(enc1) +
            keyStr.charAt(enc2) +
            keyStr.charAt(enc3) +
            keyStr.charAt(enc4);
            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";
        } while (i < input.length);

        return output;
    };

    this.decode = function (input) {
        var output = "";
        var chr1, chr2, chr3 = "";
        var enc1, enc2, enc3, enc4 = "";
        var i = 0;

        // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
        var base64test = /[^A-Za-z0-9\+\/\=]/g;
        if (base64test.exec(input)) {
            window.alert("There were invalid base64 characters in the input text.\n" +
            "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
            "Expect errors in decoding.");
        }
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        do {
            enc1 = keyStr.indexOf(input.charAt(i++));
            enc2 = keyStr.indexOf(input.charAt(i++));
            enc3 = keyStr.indexOf(input.charAt(i++));
            enc4 = keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";

        } while (i < input.length);

        return output;
    }
});