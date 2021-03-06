(function () {
    'use strict';

    describe('ActivityConfigurationResourceFactory', function () {

        var REST_PREFIX = 'http://localhost:8080/otus-rest/v01';
        var SUFFIX = '/activities/configuration';        
        var CAT_SX = '/categories';
        var DEFAULT_SX = '/default'
        var ID_SX = '/1234567';        
        var DATA = {'data': 'returnPromiseOK'};
        var DATA_CONFIRMATION = 'returnPromiseOK';        
        var ID_PARAMETER = {'id': 1234567};        
        var METHOD_GET_VALUE = "GET";
        var METHOD_POST_VALUE = "POST";
        var METHOD_DELETE_VALUE = "DELETE";
        var METHOD_PUT_VALUE = "PUT";

        var factory, factoryResult, otusRestResourceContext, headerBuilderFactory;
        var httpBackend;

        beforeEach(function () {
            angular.mock.module('otus.client');
            angular.mock.inject(function (_$injector_) {
                factory = _$injector_.get('otus.client.ActivityConfigurationResourceFactory');
                otusRestResourceContext = _$injector_.get('OtusRestResourceContext');
                headerBuilderFactory = _$injector_.get('otus.client.HeaderBuilderFactory');
                spyOn(otusRestResourceContext, 'getRestPrefix').and.callThrough();
                spyOn(otusRestResourceContext, 'getSecurityToken');
                spyOn(headerBuilderFactory, 'create').and.callThrough();
                httpBackend = _$injector_.get('$httpBackend');
                httpBackend.when(METHOD_GET_VALUE, REST_PREFIX + SUFFIX + CAT_SX).respond(200, DATA);
                httpBackend.when(METHOD_GET_VALUE, REST_PREFIX + SUFFIX + CAT_SX + ID_SX).respond(200, DATA);
                httpBackend.when(METHOD_POST_VALUE, REST_PREFIX + SUFFIX + CAT_SX).respond(200, DATA);
                httpBackend.when(METHOD_DELETE_VALUE, REST_PREFIX + SUFFIX + CAT_SX + ID_SX).respond(200, DATA);
                httpBackend.when(METHOD_PUT_VALUE, REST_PREFIX + SUFFIX + CAT_SX).respond(200, DATA);
                httpBackend.when(METHOD_PUT_VALUE, REST_PREFIX + SUFFIX + CAT_SX + DEFAULT_SX + ID_SX).respond(200, DATA);
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
                expect(factoryResult.listAll).toBeDefined();
                expect(factoryResult.getById).toBeDefined();
                expect(factoryResult.create).toBeDefined();
                expect(factoryResult.delete).toBeDefined();
                expect(factoryResult.update).toBeDefined();
                expect(factoryResult.setDefault).toBeDefined();
            });

            describe('resourceMethods', function () {

                afterEach(function () {
                    httpBackend.flush();
                });

                it('listAllMethod check', function () {
                    var listAll = factoryResult.listAll();
                    listAll.$promise.then(function (resultListAll) {
                        expect(resultListAll.data).toEqual(DATA_CONFIRMATION);
                    });
                });

                it('getByIdMethod check', function () {
                    var getById = factoryResult.getById(ID_PARAMETER);
                    getById.$promise.then(function (resultGetById) {
                        expect(resultGetById.data).toEqual(DATA_CONFIRMATION);
                    });
                });

                it('createMethod check', function () {
                    var create = factoryResult.create();
                    create.$promise.then(function (resultCreate) {
                        expect(resultCreate.data).toEqual(DATA_CONFIRMATION);
                    });
                });
                
                it('deleteMethod check', function () {
                    var delet = factoryResult.delete(ID_PARAMETER);
                    delet.$promise.then(function (resultDelete) {
                        expect(resultDelete.data).toEqual(DATA_CONFIRMATION);
                    });
                });

                it('updateMethod check', function () {
                    var update = factoryResult.update();
                    update.$promise.then(function (resultUpdate) {
                        expect(resultUpdate.data).toEqual(DATA_CONFIRMATION);
                    });
                });

                it('setDefaultMethod check', function () {
                    var setDefault = factoryResult.setDefault(ID_PARAMETER);
                    setDefault.$promise.then(function (resultSetDefault) {
                        expect(resultSetDefault.data).toEqual(DATA_CONFIRMATION);
                    });
                });
            });
        });
    });

}());