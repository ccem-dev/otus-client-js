(function() {
  'use strict';

  angular
    .module('otus.client')
    .factory('otus.client.ExamUpload', ExamUpload);

  ExamUpload.$inject = [
    '$resource',
    'OtusRestResourceContext',
    'otus.client.HeaderBuilderFactory'
  ];

  function ExamUpload($resource, OtusRestResourceContext, HeaderBuilderFactory) {
    var SUFFIX = '/exam-upload';

    var self = this;

    /* Public methods */
    self.create = create;

    function create() {
      var restPrefix = OtusRestResourceContext.getRestPrefix();
      var token = OtusRestResourceContext.getSecurityToken();
      var headers = HeaderBuilderFactory.create(token);

      return $resource({}, {}, {
        listAll: {
          method: 'GET',
          url: restPrefix + SUFFIX,
          headers: headers.json
        },
        create: {
          method: 'POST',
          url: restPrefix + SUFFIX,
          headers: headers.json,
          data: {
            'examUploadJson': '@examUploadJson'
          }
        },
        delete: {
          method: 'DELETE',
          url: restPrefix + SUFFIX + '/:id',
          headers: headers.json,
          params: {
            'id': '@id'
          }
        },
        getById: {
          method: 'GET',
          url: restPrefix + SUFFIX + '/results/:id',
          headers: headers.json,
          params: {
            'id': '@id'
          }
        }
      });
    }
    return self;
  }

}());
