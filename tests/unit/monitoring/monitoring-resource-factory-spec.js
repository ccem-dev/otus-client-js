(function () {
  'use strict';

  describe('MonitoringResourceFactory', function () {

    var REST_PREFIX = 'http://localhost:8080/otus-rest/v01';
    var SUFFIX = '/monitoring';
    var ACTIVITIES_SX = '/activities';
    var EXAMS_SX = '/exams';
    var PROGRESS_SX = '/progress';
    var LABORATORY_SX = '/laboratory';
    var LABELS_SX = '/labels';
    var PARTICIPANT = '/participant';
    var CENTERS_SX = '/centers';
    var ACRONYM_SX = '/CISE';
    var CENTER_SX = '/RS';
    var PARAMETER_SX = '/1234567';
    var NOT_APPLY_SX = '/not-apply';
    var DELETE_NOT_APPLY_SX = '/not-apply';
    var DELETE = '/delete';

    var DATA = {
      'data': 'returnPromiseOK'
    };
    var DATA_CONFIRMATION = 'returnPromiseOK';
    var DATA_LIST = { 0: 'returnPromiseOK' };

    var ACRONYM_PARAMETER = {
      'acronym': 'CISE'
    };
    var CENTER_PARAMETER = {
      'center': 'RS'
    };

    var RN_PARAMETER = {
      'rn': '1234567'
    };

    var DELETE_PARANS = {
      'acronym': 'CISE',
      'rn': '1234567'
    };

    var METHOD_GET_VALUE = "GET";
    var METHOD_PUT_VALUE = "PUT";
    var METHOD_POST_VALUE = "POST";
    var METHOD_DELETE_VALUE = "DELETE";

    var factory, factoryResult, otusRestResourceContext, headerBuilderFactory;
    var httpBackend;

    beforeEach(function () {
      angular.mock.module('otus.client');
      angular.mock.inject(function (_$injector_) {
        factory = _$injector_.get('otus.client.MonitoringResourceFactory');
        otusRestResourceContext = _$injector_.get('OtusRestResourceContext');
        headerBuilderFactory = _$injector_.get('otus.client.HeaderBuilderFactory');
        spyOn(otusRestResourceContext, 'getRestPrefix').and.callThrough();
        spyOn(otusRestResourceContext, 'getSecurityToken');
        spyOn(headerBuilderFactory, 'create').and.callThrough();
        httpBackend = _$injector_.get('$httpBackend');
        httpBackend.when(METHOD_GET_VALUE, REST_PREFIX + SUFFIX).respond(200, DATA);
        httpBackend.when(METHOD_GET_VALUE, REST_PREFIX + SUFFIX + ACTIVITIES_SX).respond(200, DATA);
        httpBackend.when(METHOD_GET_VALUE, REST_PREFIX + SUFFIX + ACTIVITIES_SX + ACRONYM_SX).respond(200, DATA);
        httpBackend.when(METHOD_GET_VALUE, REST_PREFIX + SUFFIX + CENTERS_SX).respond(200, DATA);
        httpBackend.when(METHOD_GET_VALUE, REST_PREFIX + SUFFIX + ACTIVITIES_SX + PROGRESS_SX + CENTER_SX).respond(200, DATA);
        httpBackend.when(METHOD_GET_VALUE, REST_PREFIX + SUFFIX + ACTIVITIES_SX + PROGRESS_SX + PARTICIPANT + PARAMETER_SX).respond(200, DATA_LIST);
        httpBackend.when(METHOD_PUT_VALUE, REST_PREFIX + SUFFIX + ACTIVITIES_SX + PROGRESS_SX + NOT_APPLY_SX).respond(200, DATA);
        httpBackend.when(METHOD_DELETE_VALUE, REST_PREFIX + SUFFIX + ACTIVITIES_SX + PROGRESS_SX + DELETE_NOT_APPLY_SX + PARAMETER_SX + ACRONYM_SX).respond(200, DATA);
        httpBackend.when(METHOD_GET_VALUE, REST_PREFIX + SUFFIX + EXAMS_SX + PROGRESS_SX + PARTICIPANT + PARAMETER_SX).respond(200, DATA_LIST);
        httpBackend.when(METHOD_PUT_VALUE, REST_PREFIX + SUFFIX + EXAMS_SX + PROGRESS_SX + NOT_APPLY_SX).respond(200, DATA);
        httpBackend.when(METHOD_POST_VALUE, REST_PREFIX + SUFFIX + EXAMS_SX + PROGRESS_SX + DELETE_NOT_APPLY_SX + DELETE).respond(200, DATA);
        httpBackend.when(METHOD_GET_VALUE, REST_PREFIX + SUFFIX + LABORATORY_SX + PROGRESS_SX + CENTER_SX).respond(200, DATA);
        httpBackend.when(METHOD_GET_VALUE, REST_PREFIX + SUFFIX + LABORATORY_SX + PROGRESS_SX + LABELS_SX).respond(200, DATA);
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
        expect(factoryResult.listAcronyms).toBeDefined();
        expect(factoryResult.find).toBeDefined();
        expect(factoryResult.listCenters).toBeDefined();
        expect(factoryResult.getActivitiesProgressReport).toBeDefined();
        expect(factoryResult.getExamsFlagReport).toBeDefined();
        expect(factoryResult.getExamsFlagReportLabels).toBeDefined();
        expect(factoryResult.getStatusOfActivities).toBeDefined();
        expect(factoryResult.defineActivityWithDoesNotApplies).toBeDefined();
        expect(factoryResult.deleteNotAppliesOfActivity).toBeDefined();
        expect(factoryResult.getStatusOfExams).toBeDefined();
        expect(factoryResult.defineExamWithDoesNotApplies).toBeDefined();
        expect(factoryResult.deleteNotAppliesOfExam).toBeDefined();
      });

      describe('resourceMethods', function () {

        afterEach(function () {
          httpBackend.flush();
        });

        it('listMethod check', function () {
          var list = factoryResult.list();
          list.$promise.then(function (resultList) {
            expect(resultList.data).toEqual(DATA_CONFIRMATION);
          });
        });

        it('listAcronymsMethod check', function () {
          var listAcronyms = factoryResult.listAcronyms();
          listAcronyms.$promise.then(function (resultListAcronyms) {
            expect(resultListAcronyms.data).toEqual(DATA_CONFIRMATION);
          });
        });

        it('findMethod check', function () {
          var find = factoryResult.find(ACRONYM_PARAMETER);
          find.$promise.then(function (resultFind) {
            expect(resultFind.data).toEqual(DATA_CONFIRMATION);
          });
        });

        it('listCentersMethod check', function () {
          var listCenters = factoryResult.listCenters();
          listCenters.$promise.then(function (resultListCenters) {
            expect(resultListCenters.data).toEqual(DATA_CONFIRMATION);
          });
        });

        it('getActivitiesProgressReportMethod check', function () {
          var getActivitiesProgressReport = factoryResult.getActivitiesProgressReport(CENTER_PARAMETER);
          getActivitiesProgressReport.$promise.then(function (resultGetActivitiesProgressReport) {
            expect(resultGetActivitiesProgressReport.data).toEqual(DATA_CONFIRMATION);
          });
        });

        it('getExamsFlagReport check', function () {
          var getExamsFlagReport = factoryResult.getExamsFlagReport(CENTER_PARAMETER);
          getExamsFlagReport.$promise.then(function (resultGetExamsProgressReport) {
            expect(resultGetExamsProgressReport.data).toEqual(DATA_CONFIRMATION);
          });
        });

        it('getExamsFlagReportLabels check', function () {
          var examLabels = factoryResult.getExamsFlagReportLabels();
          examLabels.$promise.then(function (examLabel) {
            expect(examLabel.data).toEqual(DATA_CONFIRMATION);
          });
        });

        it('getStatusOfActivities check', function () {
          var getStatusOfActivities = factoryResult.getStatusOfActivities(RN_PARAMETER);
          getStatusOfActivities.$promise.then(function (resultList) {
            expect(resultList[0]).toEqual(DATA_CONFIRMATION);
          });
        });

        it('defineActivityWithDoesNotApplies check', function () {
          var defineActivityWithDoesNotApplies = factoryResult.defineActivityWithDoesNotApplies();
          defineActivityWithDoesNotApplies.$promise.then(function (resultDefineActivityWithDoesNotApplies) {
            expect(resultDefineActivityWithDoesNotApplies.data).toEqual(DATA_CONFIRMATION);
          });
        });

        it('deleteNotAppliesOfActivity check', function () {
          var deleteNotAppliesOfActivity = factoryResult.deleteNotAppliesOfActivity(DELETE_PARANS);
          deleteNotAppliesOfActivity.$promise.then(function (deleteNotAppliesOfActivity) {
            expect(deleteNotAppliesOfActivity.data).toEqual(DATA_CONFIRMATION);
          });
        });

        it('getStatusOfExams check', function () {
          var getStatusOfExams = factoryResult.getStatusOfExams(RN_PARAMETER);
          getStatusOfExams.$promise.then(function (resultList) {
            expect(resultList[0]).toEqual(DATA_CONFIRMATION);
          });
        });

        it('defineExamWithDoesNotApplies check', function () {
          var defineExamWithDoesNotApplies = factoryResult.defineExamWithDoesNotApplies();
          defineExamWithDoesNotApplies.$promise.then(function (resultDefineExamWithDoesNotApplies) {
            expect(resultDefineExamWithDoesNotApplies.data).toEqual(DATA_CONFIRMATION);
          });
        });

        it('deleteNotAppliesOfExam check', function () {
          var deleteNotAppliesOfExam = factoryResult.deleteNotAppliesOfExam();
          deleteNotAppliesOfExam.$promise.then(function (deleteNotAppliesOfExam) {
            expect(deleteNotAppliesOfExam.data).toEqual(DATA_CONFIRMATION);
          });
        });

      });
    });
  });
}());
