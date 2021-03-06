(function () {
    'use strict';

    describe('ExamLot', function () {

        var REST_PREFIX = 'http://localhost:8080/otus-rest/v01';
        var SUFFIX = '/laboratory-project/exam-lot';
        var ALIQUOTS_SX = '/aliquots';
        var ALIQUOT_SX = '/aliquot';
        var CENTER_LOTS_SX = '/center-lots';
        var CENTER_SX = '/SP';
        var AVAILABLE_EXAMS_SX = '/available-exams';
        var ID_SX = '/1234567';
        var DATA = {'data': 'returnPromiseOK'};
        var DATA_CONFIRMATION = 'returnPromiseOK';
        var RN_PARAMETER = {'id': 1234567};
        var CENTER_PARAMETER = {'center': 'SP'};
        var ACRONYM = {'acronym': 'SP'};
        var METHOD_GET_VALUE = "GET";
        var METHOD_POST_VALUE = "POST";
        var METHOD_PUT_VALUE = "PUT";
        var METHOD_DELETE_VALUE = "DELETE";

        var factory, factoryResult, otusRestResourceContext, headerBuilderFactory;
        var httpBackend;

        beforeEach(function () {
            angular.mock.module('otus.client');
            angular.mock.inject(function (_$injector_) {
                factory = _$injector_.get('otus.client.ExamLot');
                otusRestResourceContext = _$injector_.get('OtusRestResourceContext');
                headerBuilderFactory = _$injector_.get('otus.client.HeaderBuilderFactory');
                spyOn(otusRestResourceContext, 'getRestPrefix').and.callThrough();
                spyOn(otusRestResourceContext, 'getSecurityToken');
                spyOn(headerBuilderFactory, 'create').and.callThrough();
                httpBackend = _$injector_.get('$httpBackend');
                httpBackend.when(METHOD_GET_VALUE, REST_PREFIX + SUFFIX + ALIQUOTS_SX).respond(200, DATA);
                httpBackend.when(METHOD_GET_VALUE, REST_PREFIX + SUFFIX + ALIQUOTS_SX + CENTER_SX).respond(200, DATA);
                httpBackend.when(METHOD_GET_VALUE, REST_PREFIX + SUFFIX + AVAILABLE_EXAMS_SX + CENTER_SX).respond(200, DATA);
                httpBackend.when(METHOD_GET_VALUE, REST_PREFIX + SUFFIX + CENTER_LOTS_SX + CENTER_SX).respond(200, DATA);
                httpBackend.when(METHOD_POST_VALUE, REST_PREFIX + SUFFIX + ALIQUOT_SX).respond(200, DATA);
                httpBackend.when(METHOD_GET_VALUE, REST_PREFIX + SUFFIX).respond(200, DATA);
                httpBackend.when(METHOD_POST_VALUE, REST_PREFIX + SUFFIX).respond(200, DATA);
                httpBackend.when(METHOD_PUT_VALUE, REST_PREFIX + SUFFIX).respond(200, DATA);
                httpBackend.when(METHOD_DELETE_VALUE, REST_PREFIX + SUFFIX + ID_SX).respond(200, DATA);                
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
                expect(factoryResult.getLotAliquots).toBeDefined();
                expect(factoryResult.getAliquotsByCenter).toBeDefined();
                expect(factoryResult.getAliquot).toBeDefined();
                expect(factoryResult.getAvailableExams).toBeDefined();
                expect(factoryResult.getLots).toBeDefined();
                expect(factoryResult.createLot).toBeDefined();
                expect(factoryResult.updateLot).toBeDefined();
                expect(factoryResult.deleteLot).toBeDefined();
            });

            describe('resourceMethods', function () {

                afterEach(function () {
                    httpBackend.flush();
                });

                it('getLotAliquots check', function () {
                    var getAliquots = factoryResult.getLotAliquots();
                    getAliquots.$promise.then(function (resultGetAliquots) {
                        expect(resultGetAliquots.data).toEqual(DATA_CONFIRMATION);
                    });
                });

                it('getAliquotsByCenterMethod check', function () {
                    var getAliquotsByCenter = factoryResult.getAliquotsByCenter(CENTER_PARAMETER);
                    getAliquotsByCenter.$promise.then(function (resultgGetAliquotsByCenter) {
                        expect(resultgGetAliquotsByCenter.data).toEqual(DATA_CONFIRMATION);
                    });
                });

                it('getAliquotMethod check', function () {
                  var getAliquotsByCenter = factoryResult.getAliquot();
                  getAliquotsByCenter.$promise.then(function (resultGetAliquot) {
                    expect(resultGetAliquot.data).toEqual(DATA_CONFIRMATION);
                  });
                });

                it('getAvailableExamsMethod check', function () {
                    var getAvailableExams = factoryResult.getAvailableExams(CENTER_PARAMETER);
                    getAvailableExams.$promise.then(function (resultGetAvailableExams) {
                        expect(resultGetAvailableExams.data).toEqual(DATA_CONFIRMATION);
                    });
                });

                it('getLotsMethod check', function () {
                    var getLots = factoryResult.getLots(ACRONYM);
                    getLots.$promise.then(function (resultGetLots) {
                        expect(resultGetLots.data).toEqual(DATA_CONFIRMATION);
                    });
                });

                it('createLotMethod check', function () {
                    var createLot = factoryResult.createLot();
                    createLot.$promise.then(function (resultCreateLot) {
                        expect(resultCreateLot.data).toEqual(DATA_CONFIRMATION);
                    });
                });

                it('updateLotMethod check', function () {
                    var updateLot = factoryResult.updateLot();
                    updateLot.$promise.then(function (resultUpdateLot) {
                        expect(resultUpdateLot.data).toEqual(DATA_CONFIRMATION);
                    });
                });

                it('deleteLotMethod check', function () {
                    var deleteLot = factoryResult.deleteLot(RN_PARAMETER);
                    deleteLot.$promise.then(function (resultDeleteLot) {
                        expect(resultDeleteLot.data).toEqual(DATA_CONFIRMATION);
                    });
                });
            });
        });
    });

}());