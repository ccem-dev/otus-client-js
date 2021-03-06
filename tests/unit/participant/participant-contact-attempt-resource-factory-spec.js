(function () {
  'use strict';

  describe('ParticipantContactAttemptResourceFactory', function () {

    var METHOD_GET_VALUE = 'GET';
    var METHOD_POST_VALUE = 'POST';
    var METHOD_PUT_VALUE = 'PUT';
    var METHOD_DELETE_VALUE = 'DELETE';

    var PREFIX = 'http://localhost:8080/otus-rest/v01/participant/participant-contact-attempt';
    var METADATA_ADDRESS = 'AddressMetadata'
    var RN = '1234567';
    var CONTACT_TYPE = 'address';
    var POSITION = 'main';
    var FIND_METADATA_ATTEMPT_SUFFIX = '/attempt-configuration/' + METADATA_ADDRESS;
    var GET_BY_RN_BY_CONTACTYPE_BY_POSITION_SUFFIX = '/'+ RN + '/' + CONTACT_TYPE + '/' + POSITION;
    var UPDATE_ADDRESS_SUFFIX = '/update-address' + GET_BY_RN_BY_CONTACTYPE_BY_POSITION_SUFFIX;
    var CHANGE_ADDRESS_SUFFIX = '/update-address' + GET_BY_RN_BY_CONTACTYPE_BY_POSITION_SUFFIX;
    var ID = '5efd';
    var ID_SUFFIX = '/'+ID;
    var ID_PARAMETER = { "id" : ID };
    var RN_CONTACTTYPE_POSITION_PARAMETER = {'rn': RN, 'contactType': CONTACT_TYPE, 'position': POSITION};
    var OBJTYPE_PARAMETER = {'objectType': METADATA_ADDRESS}
    var DTO_JSON_DATA = {};
    var DATA_CONFIRMATION = 'returnPromiseOK';
    var DATA = {'data': DATA_CONFIRMATION};

    var factory, factoryResult, otusRestResourceContext, headerBuilderFactory;
    var httpBackend;

    beforeEach(function () {
      angular.mock.module('otus.client');
      angular.mock.inject(function (_$injector_) {
        factory = _$injector_.get('otus.client.ParticipantContactAttemptResourceFactory');
        otusRestResourceContext = _$injector_.get('OtusRestResourceContext');
        headerBuilderFactory = _$injector_.get('otus.client.HeaderBuilderFactory');
        spyOn(otusRestResourceContext, 'getRestPrefix').and.callThrough();
        spyOn(otusRestResourceContext, 'getSecurityToken');
        spyOn(headerBuilderFactory, 'create').and.callThrough();
        httpBackend = _$injector_.get('$httpBackend');
        httpBackend.when(METHOD_POST_VALUE, PREFIX).respond(200, DATA);
        httpBackend.when(METHOD_DELETE_VALUE, PREFIX + ID_SUFFIX).respond(200, DATA);
        httpBackend.when(METHOD_GET_VALUE, PREFIX + GET_BY_RN_BY_CONTACTYPE_BY_POSITION_SUFFIX).respond(200, DATA);
        httpBackend.when(METHOD_GET_VALUE, PREFIX + FIND_METADATA_ATTEMPT_SUFFIX).respond(200, DATA);
        httpBackend.when(METHOD_POST_VALUE, PREFIX + UPDATE_ADDRESS_SUFFIX).respond(200, DATA);
        httpBackend.when(METHOD_POST_VALUE, PREFIX + CHANGE_ADDRESS_SUFFIX).respond(200, DATA);
      });
    });

    it('factoryExistence check', function () {
      expect(factory).toBeDefined();
    });

    describe('factoryInstance', function () {

      it('createMethodExistence check', function () {
        expect(factory.create).toBeDefined();
      });

      beforeEach(function () {
        factoryResult = factory.create();
      });

      it('internalCalls check', function () {
        expect(otusRestResourceContext.getRestPrefix).toHaveBeenCalledTimes(1);
        expect(otusRestResourceContext.getSecurityToken).toHaveBeenCalledTimes(1);
        expect(headerBuilderFactory.create).toHaveBeenCalledTimes(1);
      });

      it('methodFactoryExistence check', function () {
        expect(factoryResult.create).toBeDefined();
        expect(factoryResult.delete).toBeDefined();
        expect(factoryResult.findAttemptConfigurationByObjectType).toBeDefined();
        expect(factoryResult.findByRnByContactTypeByPosition).toBeDefined();
        expect(factoryResult.updateAttemptAddress).toBeDefined();
        expect(factoryResult.changeAttemptAddress).toBeDefined();
      });

      describe('resourceMethods', function () {

        afterEach(function () {
          httpBackend.flush();
        });

        it('create check', function () {
          factoryResult.create(DTO_JSON_DATA)
            .$promise.then(function (resultCreate) {
              expect(resultCreate.data).toEqual(DATA_CONFIRMATION);
            });
        });

        it('delete check', function () {
          factoryResult.delete(ID_PARAMETER)
            .$promise.then(function (result) {
              expect(result.data).toEqual(DATA_CONFIRMATION);
            });
        });

        it('findMetadataAttemptByObjectType check', function () {
          factoryResult.findAttemptConfigurationByObjectType(OBJTYPE_PARAMETER)
            .$promise.then(function (result) {
              expect(result.data).toEqual(DATA_CONFIRMATION);
            });
        });

        it('findByRnByContactTypeByPosition check', function () {
          factoryResult.findByRnByContactTypeByPosition(RN_CONTACTTYPE_POSITION_PARAMETER)
            .$promise.then(function (result) {
              expect(result.data).toEqual(DATA_CONFIRMATION);
            });
        });

      });
    });
  });

}());