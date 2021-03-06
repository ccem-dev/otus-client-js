(function () {
  'use strict';

  describe('ParticipantResourceFactory', function () {

    var REST_PREFIX = 'http://localhost:8080/otus-rest/v01';
    var PARTICIPANT_SX = '/participants';
    var RN_SX = '/1234567';
    var UPDATE_SX = '/update';
    var EDIT_EMAIL_SX = '/edit';
    var REMOVE_EMAIL_SX = '/remove/email';
    var GET_EMAIL_SX = '/email';
    var RN_PARAMETER = {'rn': '1234567'};
    var DATA = {'data': 'returnPromiseOK'};
    var DATA_LIST = {0: 'returnPromiseOK'};
    var DATA_CONFIRMATION = 'returnPromiseOK';
    var METHOD_GET_VALUE = "GET";
    var METHOD_POST_VALUE = "POST";
    var METHOD_PUT_VALUE = "PUT";

    var factory, factoryResult, otusRestResourceContext, headerBuilderFactory;
    var httpBackend;

    beforeEach(function () {
      angular.mock.module('otus.client');
      angular.mock.inject(function (_$injector_) {
        factory = _$injector_.get('otus.client.ParticipantResourceFactory');
        otusRestResourceContext = _$injector_.get('OtusRestResourceContext');
        headerBuilderFactory = _$injector_.get('otus.client.HeaderBuilderFactory');
        spyOn(otusRestResourceContext, 'getRestPrefix').and.callThrough();
        spyOn(otusRestResourceContext, 'getSecurityToken');
        spyOn(headerBuilderFactory, 'create').and.callThrough();
        httpBackend = _$injector_.get('$httpBackend');
        httpBackend.when(METHOD_GET_VALUE, REST_PREFIX + PARTICIPANT_SX).respond(200, DATA_LIST);
        httpBackend.when(METHOD_GET_VALUE, REST_PREFIX + PARTICIPANT_SX + RN_SX).respond(200, DATA);
        httpBackend.when(METHOD_GET_VALUE, REST_PREFIX + PARTICIPANT_SX + GET_EMAIL_SX).respond(200, DATA);
        httpBackend.when(METHOD_POST_VALUE, REST_PREFIX + PARTICIPANT_SX).respond(200, DATA);
        httpBackend.when(METHOD_PUT_VALUE, REST_PREFIX + PARTICIPANT_SX + UPDATE_SX).respond(200, DATA);
        httpBackend.when(METHOD_PUT_VALUE, REST_PREFIX + PARTICIPANT_SX + EDIT_EMAIL_SX).respond(200, DATA);
        httpBackend.when(METHOD_PUT_VALUE, REST_PREFIX + PARTICIPANT_SX + REMOVE_EMAIL_SX).respond(200, DATA);
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
        expect(factoryResult.list).toBeDefined();
        expect(factoryResult.getByRecruitmentNumber).toBeDefined();
        expect(factoryResult.create).toBeDefined();
        expect(factoryResult.editEmail).toBeDefined();
        expect(factoryResult.removeEmailByParticipantId).toBeDefined();
        expect(factoryResult.getEmailByParticipantId).toBeDefined();
      });

      describe('resourceMethods', function () {

        afterEach(function () {
          httpBackend.flush();
        });

        it('listMethod check', function () {
          var list = factoryResult.list();
          list.$promise.then(function (resultList) {
            expect(resultList[0]).toEqual(DATA_CONFIRMATION);
          });
        });

        it('create check', function () {
          var create = factoryResult.create();
          create.$promise.then(function (resultCreate) {
            expect(resultCreate.data).toEqual(DATA_CONFIRMATION);
          });
        });

        it('update check', function () {
          var update = factoryResult.update();
          update.$promise.then(function (resultUpdate) {
            expect(resultUpdate.data).toEqual(DATA_CONFIRMATION);
          });
        });

        it('getByRecruitmentNumberMethod check', function () {
          var getByRecruitmentNumber = factoryResult.getByRecruitmentNumber(RN_PARAMETER);
          getByRecruitmentNumber.$promise.then(function (resultgetByRecruitmentNumber) {
            expect(resultgetByRecruitmentNumber.data).toEqual(DATA_CONFIRMATION);
          });
        });

        it('editEmail check', function () {
          var editEmail = factoryResult.editEmail();
          editEmail.$promise.then(function (resultUpdate) {
            expect(resultUpdate.data).toEqual(DATA_CONFIRMATION);
          });
        });

        it('removeEmailByParticipantId check', function () {
          var removeEmailByParticipantId = factoryResult.removeEmailByParticipantId();
          removeEmailByParticipantId.$promise.then(function (resultUpdate) {
            expect(resultUpdate.data).toEqual(DATA_CONFIRMATION);
          });
        });

        it('getEmailByParticipantId check', function () {
          var getEmailByParticipantId = factoryResult.getEmailByParticipantId();
          getEmailByParticipantId.$promise.then(function (resultGet) {
            expect(resultGet.data).toEqual(DATA_CONFIRMATION);
          });
        });


      });
    });
  });

}());