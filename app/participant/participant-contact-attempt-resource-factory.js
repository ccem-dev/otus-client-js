(function() {
    'use strict';

    angular
        .module('otus.client')
        .factory('otus.client.ParticipantContactAttemptResourceFactory', ParticipantContactAttemptResourceFactory);

    ParticipantContactAttemptResourceFactory.$inject = [
        '$resource',
        'OtusRestResourceContext',
        'otus.client.HeaderBuilderFactory'
    ];

    function ParticipantContactAttemptResourceFactory($resource, OtusRestResourceContext, HeaderBuilderFactory) {
        var SUFFIX = '/participant/participant-contact-attempt';

        var self = this;

        /* Public methods */
        self.create = create;

        function create() {
            var restPrefix = OtusRestResourceContext.getRestPrefix();
            var token = OtusRestResourceContext.getSecurityToken();
            var headers = HeaderBuilderFactory.create(token);

            return $resource({}, {}, {
                create: {
                    method: 'POST',
                    url: restPrefix + SUFFIX,
                    headers: headers.json,
                    data:{
                      'attemptJson': '@attemptJson'
                    }
                },
                delete: {
                    method: 'DELETE',
                    url: restPrefix + SUFFIX + "/:id",
                    headers: headers.json,
                    params:{
                        'id': '@id'
                    }
                },
                findByRnByContactTypeByPosition: {
                    method: 'GET',
                    url: restPrefix + SUFFIX + '/:rn/:contactType/:position',
                    headers: headers.json,
                    params:{
                      'rn': '@rn',
                      'contactType': '@contactType',
                      'position': '@position'
                    }
                },
                findAttemptConfigurationByObjectType: {
                  method: 'GET',
                  url: restPrefix + SUFFIX + '/attempt-configuration/:objectType',
                  headers: headers.json,
                  params:{
                    'objectType': '@objectType'
                  }
                },
                updateAttemptAddress: {
                  method: 'PUT',
                  url: restPrefix + SUFFIX + '/update-address/:rn/:contactType/:position',
                  headers: headers.json,
                  params:{
                    'rn': '@rn',
                    'contactType': '@contactType',
                    'position': '@position'
                  },
                  data: {
                    'addressJson': "@addressJson"
                  }
                },
                changeAttemptAddress: {
                  method: 'PUT',
                  url: restPrefix + SUFFIX + '/change-address/:rn/:contactType/:position',
                  headers: headers.json,
                  params:{
                    'rn': '@rn',
                    'contactType': '@contactType',
                    'position': '@position'
                  }
                }
            });
        }

        return self;
    }

}());
