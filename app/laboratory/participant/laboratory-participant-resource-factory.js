(function() {
  'use strict';

  angular
    .module('otus.client')
    .factory('otus.client.LaboratoryParticipantResourceFactory', LaboratoryParticipantResourceFactory);

  LaboratoryParticipantResourceFactory.$inject = [
    '$resource',
    'OtusRestResourceContext',
    'otus.client.HeaderBuilderFactory'
  ];

  function LaboratoryParticipantResourceFactory($resource, OtusRestResourceContext, HeaderBuilderFactory) {
    var SUFFIX = '/laboratory-participant';

    var self = this;

    /* Public methods */
    self.create = create;

    function create() {
      var restPrefix = OtusRestResourceContext.getRestPrefix();
      var token = OtusRestResourceContext.getSecurityToken();
      var headers = HeaderBuilderFactory.create(token);

      return $resource({}, {}, {
        initialize: {
          method: 'POST',
          url: restPrefix + SUFFIX + '/initialize/:rn',
          headers: headers.json,
          params: {
            'rn': '@rn'
          }
        },
        getLaboratory: {
          method: 'GET',
          url: restPrefix + SUFFIX + '/:rn',
          headers: headers.json,
          params: {
            'rn': '@rn'
          }
        },
        getLaboratoryByTube: {
          method: 'GET',
          url: restPrefix + SUFFIX + '/by-tube' + '/:tubeCode',
          headers: headers.json,
          params: {
            'tubeCode': '@tubeCode'
          }
        },
        update: {
          method: 'PUT',
          url: restPrefix + SUFFIX + '/:rn',
          headers: headers.json,
          data: {
            'laboratory': '@laboratory'
          },
          params: {
            'rn': '@rn'
          }
        },
        updateTubeCollectionData: {
          method: 'PUT',
          url: restPrefix + SUFFIX + '/tube-collection-data/:rn',
          headers: headers.json,
          data: {
              'tubes': '@tubes'
          },
          params: {
              'rn': '@rn'
          }
        },
        deleteAliquot: {
          method: 'DELETE',
          url: restPrefix + SUFFIX + '/aliquot/:code',
          headers: headers.json,
          params: {
            'code' : '@code'
          }
        },
        updateAliquots: {
          method: 'PUT',
          url: restPrefix + SUFFIX + '/:rn/tubes/aliquots',
          headers: headers.json,
          data: {
            'updateAliquotsDTO': '@updateAliquotsDTO'
          },
          params: {
            'rn': '@rn'
          }
        },
        convertStorageAliquot: {
          method: 'PUT',
          url: restPrefix + SUFFIX + '/convert-aliquot-role',
          headers: headers.json,
          data: {
            'convertedAliquot': '@convertedAliquot'
          }
        },
        updateTubeCustomMetadata: {
          method: 'PUT',
          url: restPrefix + SUFFIX + '/tube/custom-metadata',
          headers: headers.json,
          data: {
            'tube': '@tube'
          }
        }
      });
    }
    return self;
  }

}());
