(function () {
    'use strict';

    angular
        .module('otus.client')
        .factory('otus.client.PasswordResetResourceFactory', PasswordResetResourceFactory);

    PasswordResetResourceFactory.$inject = [
        '$resource',
        'OtusRestResourceContext',
        'otus.client.HeaderBuilderFactory'
    ];

    function PasswordResetResourceFactory($resource, OtusRestResourceContext, HeaderBuilderFactory) {
        var SUFFIX = '/user/password-reset';

        var self = this;
        self.create = create;

        function create() {
            var restPrefix = OtusRestResourceContext.getRestPrefix();
            var token = OtusRestResourceContext.getSecurityToken();
            var headers = HeaderBuilderFactory.create(token);

            return $resource({}, {}, {
                requestRecovery: {
                    method: 'POST',
                    url: restPrefix + SUFFIX,
                    headers: headers.json,
                    data: {
                        'email': '@email',
                        'url': '@url'
                    }
                },

                validationToken: {
                    method: 'GET',
                    url: restPrefix + SUFFIX + '/validate/:token',
                    headers: headers.json,
                    params: {
                        'token': '@token'
                    }
                },

                updatePassword: {
                    method: 'PUT',
                    url: restPrefix + SUFFIX,
                    headers: headers.json,
                    data: {
                        'token': '@token',
                        'password': '@password'
                    }
                }
            });
        }
        return self;
    }
}());
