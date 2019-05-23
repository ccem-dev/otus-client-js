!function(){"use strict";angular.module("otus.client",["ngResource"])}(),function(){"use strict";function UrlParser(){function parser(url){var parserElement=document.createElement("a");return parserElement.href=url,parserElement}this.parser=parser}angular.module("otus.client").service("UrlParser",UrlParser)}(),function(){"use strict";function ActivityResourceFactory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{create:{method:"POST",url:restPrefix+SUFFIX,headers:headers.json,params:{id:"@id",rn:"@rn"}},update:{method:"PUT",url:restPrefix+SUFFIX+"/:id",headers:headers.json,data:{activity:"@activity"},params:{id:"@id",rn:"@rn"}},listAll:{method:"GET",url:restPrefix+SUFFIX,headers:headers.json,params:{rn:"@rn"}},getById:{method:"GET",url:restPrefix+SUFFIX+"/:id",headers:headers.json,params:{id:"@id",rn:"@rn"}},addActivityRevision:{method:"POST",url:restPrefix+SUFFIX+"/revision",headers:headers.json,data:{activityRevision:"@activityRevision"}},getActivityRevisions:{method:"GET",url:restPrefix+SUFFIX+"/revision/:id",headers:headers.json,params:{id:"@id"}},deleteById:{method:"PUT",url:restPrefix+SUFFIX+"/:id",headers:headers.json,data:{activity:"@activity"},params:{id:"@id",rn:"@rn"}},updateCheckerActivity:{method:"PUT",url:restPrefix+SUFFIX+UPDATE_CHECKER,headers:headers.json,data:{checkerUpdated:"@checkerUpdated"}}})}var SUFFIX="/participants/:rn/activities",UPDATE_CHECKER="/update-checker-activity",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.ActivityResourceFactory",ActivityResourceFactory),ActivityResourceFactory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function factory(){function create(token){return new Headers(token)}var self=this;return self.create=create,self}function Headers(token){function setContentType(contentType){self.json["Content-type"]=contentType}var self=this;self.setContentType=setContentType,self.json={Authorization:"Bearer "+token}}angular.module("otus.client").factory("otus.client.HeaderBuilderFactory",factory)}(),function(){"use strict";function OtusRestResourceContext($window,UrlParser){function init(){HOSTNAME="http://"+$window.location.hostname+":8080",CONTEXT="/otus-rest",VERSION="/v01"}function hasToken(){return!!$window.sessionStorage[TOKEN_USER_NAME]}function reset(){HOSTNAME=""}function removeSecurityToken(){delete $window.sessionStorage[TOKEN_USER_NAME]}function setUrl(url){var parser=UrlParser.parser(url);HOSTNAME=parser.origin}function setHostname(hostname){HOSTNAME=hostname}function setContext(context){CONTEXT="/"+context}function setVersion(version){VERSION="/"+version}function getRestPrefix(){return HOSTNAME+CONTEXT+VERSION}function getHostName(){return HOSTNAME}function getContext(){return CONTEXT}function getVersion(){return VERSION}function setSecurityToken(securityToken){$window.sessionStorage[TOKEN_USER_NAME]=securityToken}function getSecurityToken(){return $window.sessionStorage[TOKEN_USER_NAME]}var HOSTNAME,CONTEXT,VERSION,self=this,TOKEN_USER_NAME="outk";self.setUrl=setUrl,self.setHostname=setHostname,self.setContext=setContext,self.setVersion=setVersion,self.setSecurityToken=setSecurityToken,self.getRestPrefix=getRestPrefix,self.getHostName=getHostName,self.getContext=getContext,self.getVersion=getVersion,self.getSecurityToken=getSecurityToken,self.removeSecurityToken=removeSecurityToken,self.init=init,self.reset=reset,self.hasToken=hasToken,self.init()}angular.module("otus.client").service("OtusRestResourceContext",OtusRestResourceContext),OtusRestResourceContext.$inject=["$window","UrlParser"]}(),function(){"use strict";function OtusRestResourceService(OtusInstallerResourceFactory,OtusAuthenticatorResourceFactory,OtusFieldCenterResourceFactory,OtusRestResourceContext,UserResourceFactory,OtusProjectConfigurationResourceFactory,OtusConfigurationResourceFactory,SurveyResourceFactory,SurveyGroupResourceFactory,ActivityResourceFactory,ActivityConfigurationResourceFactory,DataExtractionResourceFactory,ParticipantResourceFactory,LaboratoryParticipantResourceFactory,LaboratoryConfigurationResourceFactory,DatasourceResourceFactory,UploadResourceFactory,SampleTransport,ExamLot,ExamUpload,ReportResourceFactory,OtusMonitoringResourceFactory,OtusLaboratoryMonitoringResourceFactory,PasswordResetResourceFactory,PermissionConfigurationResourceFactory,UserPermissionResourceFactory,ActivityImportationResourceFactory){function isLogged(){return OtusRestResourceContext.hasToken()}function resetConnectionData(){OtusRestResourceContext.reset()}function initDefaultConnectionData(){OtusRestResourceContext.init()}function removeSecurityToken(){OtusRestResourceContext.removeSecurityToken()}function setUrl(url){OtusRestResourceContext.setUrl(url)}function setSecurityToken(token){OtusRestResourceContext.setSecurityToken(token)}function getOtusInstallerResource(){return OtusInstallerResourceFactory.create()}function getOtusAuthenticatorResource(){return OtusAuthenticatorResourceFactory.create()}function getOtusFieldCenterResource(){return OtusFieldCenterResourceFactory.create()}function getUserResource(){return UserResourceFactory.create()}function getProjectConfigurationResource(){return OtusProjectConfigurationResourceFactory.create()}function getConfigurationResource(){return OtusConfigurationResourceFactory.create()}function getSurveyResource(){return SurveyResourceFactory.create()}function getSurveyGroupResource(){return SurveyGroupResourceFactory.create()}function getActivityResource(){return ActivityResourceFactory.create()}function getActivityImportationResource(){return ActivityImportationResourceFactory.create()}function getActivityConfigurationResource(){return ActivityConfigurationResourceFactory.create()}function getExtractionResource(){return DataExtractionResourceFactory.create()}function getParticipantResource(){return ParticipantResourceFactory.create()}function getLaboratoryParticipantResource(){return LaboratoryParticipantResourceFactory.create()}function getLaboratoryConfigurationResource(){return LaboratoryConfigurationResourceFactory.create()}function getDatasourceResourceFactory(){return DatasourceResourceFactory.create()}function getFileUploadResourceFactory(){return UploadResourceFactory.create()}function getSampleTransport(){return SampleTransport.create()}function getExamLotResource(){return ExamLot.create()}function getExamUploadResource(){return ExamUpload.create()}function getReportResourceFactory(){return ReportResourceFactory.create()}function getOtusMonitoringResource(){return OtusMonitoringResourceFactory.create()}function getOtusLaboratoryMonitoringResource(){return OtusLaboratoryMonitoringResourceFactory.create()}function getPasswordResetResource(){return PasswordResetResourceFactory.create()}function getPermissionConfigurationResource(){return PermissionConfigurationResourceFactory.create()}function getUserPermissionResource(){return UserPermissionResourceFactory.create()}var self=this;self.resetConnectionData=resetConnectionData,self.initDefaultConnectionData=initDefaultConnectionData,self.removeSecurityToken=removeSecurityToken,self.setUrl=setUrl,self.setSecurityToken=setSecurityToken,self.getOtusInstallerResource=getOtusInstallerResource,self.getOtusAuthenticatorResource=getOtusAuthenticatorResource,self.getOtusFieldCenterResource=getOtusFieldCenterResource,self.getUserResource=getUserResource,self.getProjectConfigurationResource=getProjectConfigurationResource,self.getConfigurationResource=getConfigurationResource,self.getSurveyResource=getSurveyResource,self.getSurveyGroupResource=getSurveyGroupResource,self.getActivityResource=getActivityResource,self.getActivityConfigurationResource=getActivityConfigurationResource,self.getExtractionResource=getExtractionResource,self.getParticipantResource=getParticipantResource,self.getLaboratoryParticipantResource=getLaboratoryParticipantResource,self.getLaboratoryConfigurationResource=getLaboratoryConfigurationResource,self.getDatasourceResourceFactory=getDatasourceResourceFactory,self.getFileUploadResourceFactory=getFileUploadResourceFactory,self.getSampleTransport=getSampleTransport,self.getExamLotResource=getExamLotResource,self.getExamUploadResource=getExamUploadResource,self.isLogged=isLogged,self.getReportResourceFactory=getReportResourceFactory,self.getOtusMonitoringResource=getOtusMonitoringResource,self.getOtusLaboratoryMonitoringResource=getOtusLaboratoryMonitoringResource,self.getPasswordResetResource=getPasswordResetResource,self.getPermissionConfigurationResource=getPermissionConfigurationResource,self.getUserPermissionResource=getUserPermissionResource,self.getActivityImportationResource=getActivityImportationResource}angular.module("otus.client").service("OtusRestResourceService",OtusRestResourceService),OtusRestResourceService.$inject=["OtusInstallerResourceFactory","OtusAuthenticatorResourceFactory","OtusFieldCenterResourceFactory","OtusRestResourceContext","otus.client.UserResourceFactory","otusjs.otus.client.OtusProjectConfigurationResourceFactory","otusjs.otus.client.OtusConfigurationResourceFactory","otus.client.SurveyResourceFactory","otus.client.SurveyGroupResourceFactory","otus.client.ActivityResourceFactory","otus.client.ActivityConfigurationResourceFactory","otus.client.DataExtractionResourceFactory","otus.client.ParticipantResourceFactory","otus.client.LaboratoryParticipantResourceFactory","otus.client.LaboratoryConfigurationResourceFactory","otus.client.DatasourceResourceFactory","otus.client.UploadResourceFactory","otus.client.SampleTransport","otus.client.ExamLot","otus.client.ExamUpload","otus.client.ReportResourceFactory","otus.client.MonitoringResourceFactory","otus.client.LaboratoryMonitoringResourceFactory","otus.client.PasswordResetResourceFactory","otus.client.PermissionConfigurationResourceFactory","otus.client.UserPermissionResourceFactory","otus.client.ActivityImportationResourceFactory"]}(),function(){"use strict";function Factory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token),headersPublishTemplate=HeaderBuilderFactory.create(token);headersPublishTemplate.setContentType("application/json; charset=utf-8");var config={getSurveys:{method:"GET",url:restPrefix+SUFFIX+"/surveys",headers:headers.json},getAllSurveys:{method:"GET",url:restPrefix+SUFFIX+"/surveys/all",headers:headers.json},updateSurveyTemplateType:{method:"PUT",url:restPrefix+SUFFIX+"/surveys/:acronym/type",data:{newSurveyFormType:"@newSurveyFormType"},headers:headers.json,params:{acronym:"@acronym"}},publishTemplate:{method:"POST",url:restPrefix+SUFFIX+"/publish/template",headers:headersPublishTemplate.json},deleteSurveyTemplate:{method:"DELETE",url:restPrefix+SUFFIX+"/surveys/:acronym",headers:headers.json}};return $resource({},{},config)}var SUFFIX="/configuration",self=this;return self.create=create,self}angular.module("otus.client").factory("otusjs.otus.client.OtusConfigurationResourceFactory",Factory),Factory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function DatasourceResourceFactory($http,OtusRestResourceContext,HeaderBuilderFactory){function create(){return new HttpFileUpload($http,OtusRestResourceContext,HeaderBuilderFactory)}var self=this;return self.create=create,self}function HttpFileUpload($http,OtusRestResourceContext,HeaderBuilderFactory){function create(formData){return _headers.setContentType(void 0),$http({method:"POST",url:_restPrefix+SUFFIX,data:formData,headers:_headers.json,transformRequest:angular.identity})}function update(formData){return _headers.setContentType(void 0),$http({method:"PUT",url:_restPrefix+SUFFIX,data:formData,headers:_headers.json,transformRequest:angular.identity})}function list(){return $http({method:"GET",url:_restPrefix+SUFFIX,headers:_headers.json})}function getByID(id){return $http({method:"GET",url:_restPrefix+SUFFIX+"/"+id,headers:_headers.json})}var _restPrefix,_token,_headers,SUFFIX="/configuration/datasources",self=this;return self.create=create,self.update=update,self.list=list,self.getByID=getByID,function(){_restPrefix=OtusRestResourceContext.getRestPrefix(),_token=OtusRestResourceContext.getSecurityToken(),_headers=HeaderBuilderFactory.create(_token)}(),self}angular.module("otus.client").factory("otus.client.DatasourceResourceFactory",DatasourceResourceFactory),DatasourceResourceFactory.$inject=["$http","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function OtusFieldCenterResourceFactory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{getAll:{method:"GET",url:restPrefix+SUFFIX+"/list",headers:headers.json},create:{method:"POST",url:restPrefix+SUFFIX,headers:headers.json},update:{method:"POST",url:restPrefix+SUFFIX+"/update",headers:headers.json}})}var SUFFIX="/center",self=this;return self.create=create,self}angular.module("otus.client").factory("OtusFieldCenterResourceFactory",OtusFieldCenterResourceFactory),OtusFieldCenterResourceFactory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function OtusInstallerResourceFactory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{ready:{method:"GET",url:restPrefix+SUFFIX+"/ready",headers:headers.json},config:{method:"POST",url:restPrefix+SUFFIX,headers:headers.json},validationEmail:{method:"POST",url:restPrefix+SUFFIX+"/validation/email",headers:headers.json}})}var SUFFIX="/installer",self=this;return self.create=create,self}angular.module("otus.client").factory("OtusInstallerResourceFactory",OtusInstallerResourceFactory),OtusInstallerResourceFactory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function MonitoringResourceFactory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{list:{method:"GET",url:restPrefix+SUFFIX,headers:headers.json},listAcronyms:{method:"GET",url:restPrefix+SUFFIX+"/activities",headers:headers.json},find:{method:"GET",url:restPrefix+SUFFIX+"/activities/:acronym",headers:headers.json,params:{acronym:"@acronym"}},listCenters:{method:"GET",url:restPrefix+SUFFIX+"/centers",headers:headers.json},getActivitiesProgressReport:{method:"GET",url:restPrefix+SUFFIX+"/activities/progress/:center",headers:headers.json,params:{center:"@center"}},getExamsFlagReport:{method:"GET",url:restPrefix+SUFFIX+"/laboratory/progress/:center",headers:headers.json,params:{center:"@center"}},getExamsFlagReportLabels:{method:"GET",url:restPrefix+SUFFIX+"/laboratory/progress/:center/labels",headers:headers.json,params:{center:"@center"}},getStatusOfActivities:{method:"GET",url:restPrefix+SUFFIX+"/activities/progress/participant/:rn",headers:headers.json,params:{rn:"@rn"}},defineActivityWithDoesNotApplies:{method:"PUT",url:restPrefix+SUFFIX+"/activities/progress/not-apply",headers:headers.json,data:{data:"@data"}},deleteNotAppliesOfActivity:{method:"DELETE",url:restPrefix+SUFFIX+"/activities/progress/not-apply/:rn/:acronym",headers:headers.json,params:{rn:"@rn",acronym:"@acronym"}},getStatusOfExams:{method:"GET",url:restPrefix+SUFFIX+"/exams/progress/participant/:rn",headers:headers.json,params:{rn:"@rn"}},defineExamWithDoesNotApplies:{method:"PUT",url:restPrefix+SUFFIX+"/exams/progress/not-apply",headers:headers.json,data:{data:"@data"}},deleteNotAppliesOfExam:{method:"POST",url:restPrefix+SUFFIX+"/exams/progress/not-apply/delete",headers:headers.json,data:{data:"@data"}}})}var SUFFIX="/monitoring",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.MonitoringResourceFactory",MonitoringResourceFactory),MonitoringResourceFactory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function ParticipantResourceFactory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{list:{method:"GET",url:restPrefix+SUFFIX,headers:headers.json},create:{method:"POST",url:restPrefix+SUFFIX,headers:headers.json,data:{participantJson:"@participantJson"}},getByRecruitmentNumber:{method:"GET",url:restPrefix+SUFFIX+"/:rn",headers:headers.json,params:{rn:"@rn"}}})}var SUFFIX="/participants",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.ParticipantResourceFactory",ParticipantResourceFactory),ParticipantResourceFactory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function OtusAuthenticatorResourceFactory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{authenticate:{method:"POST",url:restPrefix+SUFFIX,headers:headers.json},invalidate:{method:"POST",url:restPrefix+SUFFIX+"/invalidate",headers:headers.json},authenticateProject:{method:"POST",url:restPrefix+SUFFIX+"/project",headers:headers.json}})}var SUFFIX="/authentication",self=this;return self.create=create,self}angular.module("otus.client").factory("OtusAuthenticatorResourceFactory",OtusAuthenticatorResourceFactory),OtusAuthenticatorResourceFactory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function PasswordResetResourceFactory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{requestRecovery:{method:"POST",url:restPrefix+SUFFIX,headers:headers.json,data:{email:"@email",url:"@url"}},validationToken:{method:"GET",url:restPrefix+SUFFIX+"/validate/:token",headers:headers.json,params:{token:"@token"}},updatePassword:{method:"PUT",url:restPrefix+SUFFIX,headers:headers.json,data:{token:"@token",password:"@password"}}})}var SUFFIX="/user/password-reset",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.PasswordResetResourceFactory",PasswordResetResourceFactory),PasswordResetResourceFactory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function ReportResourceFactory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{create:{method:"POST",url:restPrefix+SUFFIX,headers:headers.json,data:{reportTemplate:"@reportTemplate"}},listAll:{method:"GET",url:restPrefix+SUFFIX,headers:headers.json},getById:{method:"GET",url:restPrefix+SUFFIX+"/:id",headers:headers.json,params:{id:"@id"}},update:{method:"PUT",url:restPrefix+SUFFIX,headers:headers.json,data:{reportTemplate:"@reportTemplate"}},remove:{method:"DELETE",url:restPrefix+SUFFIX+"/:id",headers:headers.json,params:{id:"@id"}},list:{method:"GET",url:restPrefix+SUFFIX+"/participant/list/:rn",headers:headers.json,params:{rn:"@rn"}},getByRecruitmentNumber:{method:"GET",url:restPrefix+SUFFIX+"/participant/:rn/:id",headers:headers.json,params:{rn:"@rn",id:"@id"}}})}var SUFFIX="/report",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.ReportResourceFactory",ReportResourceFactory),ReportResourceFactory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function SurveyGroupResourceFactory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{addNewSurveyGroup:{method:"POST",url:restPrefix+SUFFIX+"/new-group",headers:headers.json,data:{surveyGroupJson:"@surveyGroupJson"}},getListOfSurveyGroups:{method:"GET",url:restPrefix+SUFFIX+"/groups",headers:headers.json},updateSurveyGroupName:{method:"PUT",url:restPrefix+SUFFIX+"/update-group-name",headers:headers.json,data:{updateSurveyGroupNameDto:"@updateSurveyGroupNameDto"}},updateSurveyGroupAcronyms:{method:"PUT",url:restPrefix+SUFFIX+"/update-group",headers:headers.json,data:{surveyGroupJson:"@surveyGroupJson"}},deleteSurveyGroup:{method:"POST",url:restPrefix+SUFFIX+"/delete-group",headers:headers.json,data:{updateSurveyGroupNameDto:"@updateSurveyGroupNameDto"}},getSurveyGroupsByUser:{method:"GET",url:restPrefix+SUFFIX+"/groups-by-user",headers:headers.json}})}var SUFFIX="/survey",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.SurveyGroupResourceFactory",SurveyGroupResourceFactory),SurveyGroupResourceFactory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function SurveyResourceFactory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{list:{method:"GET",url:restPrefix+SUFFIX+"/list",headers:headers.json},listAll:{method:"GET",url:restPrefix+SUFFIX+"/list/all",headers:headers.json}})}var SUFFIX="/survey",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.SurveyResourceFactory",SurveyResourceFactory),SurveyResourceFactory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function UploadResourceFactory($http,OtusRestResourceContext,HeaderBuilderFactory){function create(){return new HttpFileUpload($http,OtusRestResourceContext,HeaderBuilderFactory)}var self=this;return self.create=create,self}function HttpFileUpload($http,OtusRestResourceContext,HeaderBuilderFactory){function post(formData,canceler){return _headers.setContentType(void 0),$http({method:"POST",url:_restPrefix+SUFFIX,data:formData,headers:_headers.json,timeout:canceler.promise,transformRequest:angular.identity})}function getByOID(oid){return $http({method:"POST",url:_restPrefix+SUFFIX,data:oid,responseType:"arraybuffer",headers:_headers.json})}function deleteByOID(oid){return $http({method:"DELETE",url:_restPrefix+SUFFIX+"/"+oid,headers:_headers.json})}var _restPrefix,_token,_headers,self=this,SUFFIX="/upload";return self.post=post,self.getByOID=getByOID,self.deleteByOID=deleteByOID,function(){_restPrefix=OtusRestResourceContext.getRestPrefix(),_token=OtusRestResourceContext.getSecurityToken(),_headers=HeaderBuilderFactory.create(_token)}(),self}angular.module("otus.client").factory("otus.client.UploadResourceFactory",UploadResourceFactory),UploadResourceFactory.$inject=["$http","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function PermissionConfigurationResourceFactory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{create:{method:"POST",url:restPrefix+SUFFIX,headers:headers.json,data:{permissionData:"@permissionData"}},getAll:{method:"GET",url:restPrefix+SUFFIX,headers:headers.json},update:{method:"PUT",url:restPrefix+SUFFIX,headers:headers.json,data:{permissionData:"@permissionData"}}})}var SUFFIX="/permission",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.PermissionConfigurationResourceFactory",PermissionConfigurationResourceFactory),PermissionConfigurationResourceFactory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function UserResourceFactory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{create:{method:"POST",url:restPrefix+SUFFIX+"/signup",headers:headers.json},logged:{method:"GET",url:restPrefix+SUFFIX,headers:headers.json},list:{method:"GET",url:restPrefix+SUFFIX+"/list",headers:headers.json},enable:{method:"POST",url:restPrefix+SUFFIX+"/enable",headers:headers.json},disable:{method:"POST",url:restPrefix+SUFFIX+"/disable",headers:headers.json},updateFieldCenter:{method:"POST",url:restPrefix+SUFFIX+"/field-center",headers:headers.json}})}var SUFFIX="/user",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.UserResourceFactory",UserResourceFactory),UserResourceFactory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function DataExtractionResourceFactory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{extractionToken:{method:"GET",url:restPrefix+SUFFIX+"/extraction-token",headers:headers.json},listExtractionIps:{method:"GET",url:restPrefix+SUFFIX+"/list-ips",headers:headers.json},updateExtractionIps:{method:"POST",url:restPrefix+SUFFIX+"/enable-ips",headers:headers.json},enableExtraction:{method:"POST",url:restPrefix+SUFFIX+"/enable",headers:headers.json},disableExtraction:{method:"POST",url:restPrefix+SUFFIX+"/disable",headers:headers.json}})}var SUFFIX="/data-extraction",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.DataExtractionResourceFactory",DataExtractionResourceFactory),DataExtractionResourceFactory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function ActivityConfigurationResourceFactory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{listAll:{method:"GET",url:restPrefix+SUFFIX+"/categories",headers:headers.json},getById:{method:"GET",url:restPrefix+SUFFIX+"/categories/:id",headers:headers.json,params:{id:"@id"}},create:{method:"POST",url:restPrefix+SUFFIX+"/categories",headers:headers.json,data:{activityCategory:"@activityCategory"}},delete:{method:"DELETE",url:restPrefix+SUFFIX+"/categories/:id",headers:headers.json,params:{id:"@id"}},update:{method:"PUT",url:restPrefix+SUFFIX+"/categories",headers:headers.json,data:{activityCategory:"@activityCategory"}},setDefault:{method:"PUT",url:restPrefix+SUFFIX+"/categories/default/:id",headers:headers.json,params:{id:"@id"}}})}var SUFFIX="/activities/configuration",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.ActivityConfigurationResourceFactory",ActivityConfigurationResourceFactory),ActivityConfigurationResourceFactory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function ActivityImportationResourceFactory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{importActivities:{method:"PUT",url:restPrefix+SUFFIX+"/:acronym/:version",headers:headers.json,data:{surveyActivities:"@surveyActivities"},params:{acronym:"@acronym",version:"@version"}}})}var SUFFIX="/activities/import",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.ActivityImportationResourceFactory",ActivityImportationResourceFactory),ActivityImportationResourceFactory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function Factory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);HeaderBuilderFactory.create(token).setContentType("application/json; charset=utf-8");var config={allowNewParticipants:{method:"PUT",url:restPrefix+SUFFIX+"/participant/registration/:permission",headers:headers.json,params:{permission:"@permission"}},autoGenerateRecruitmentNumber:{method:"PUT",url:restPrefix+SUFFIX+"/participant/autoGenerateRecruitmentNumber/:permission",headers:headers.json,params:{permission:"@permission"}},getProjectConfiguration:{method:"GET",url:restPrefix+SUFFIX,headers:headers.json},getVisualIdentity:{method:"GET",url:restPrefix+SUFFIX+"/visual-identity",headers:headers.json},updateVisualIdentity:{method:"POST",url:restPrefix+SUFFIX+"/visual-identity",headers:headers.json}};return $resource({},{},config)}var SUFFIX="/configuration/project",self=this;return self.create=create,self}angular.module("otus.client").factory("otusjs.otus.client.OtusProjectConfigurationResourceFactory",Factory),Factory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function LaboratoryConfigurationResourceFactory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{getDescriptors:{method:"GET",url:restPrefix+SUFFIX+"/descriptor",headers:headers.json},getAliquotConfiguration:{method:"GET",url:restPrefix+SUFFIX+"/aliquot-configuration",headers:headers.json},getAliquotDescriptors:{method:"GET",url:restPrefix+SUFFIX+"/aliquot-descriptors",headers:headers.json}})}var SUFFIX="/laboratory-configuration",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.LaboratoryConfigurationResourceFactory",LaboratoryConfigurationResourceFactory),LaboratoryConfigurationResourceFactory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function LaboratoryParticipantResourceFactory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{initialize:{method:"POST",url:restPrefix+SUFFIX+"/initialize/:rn",headers:headers.json,params:{rn:"@rn"}},getLaboratory:{method:"GET",url:restPrefix+SUFFIX+"/:rn",headers:headers.json,params:{rn:"@rn"}},update:{method:"PUT",url:restPrefix+SUFFIX+"/:rn",headers:headers.json,data:{laboratory:"@laboratory"},params:{rn:"@rn"}},updateTubeCollectionData:{method:"PUT",
url:restPrefix+SUFFIX+"/tube-collection-data/:rn",headers:headers.json,data:{tubes:"@tubes"},params:{rn:"@rn"}},deleteAliquot:{method:"DELETE",url:restPrefix+SUFFIX+"/aliquot/:code",headers:headers.json,params:{code:"@code"}},updateAliquots:{method:"PUT",url:restPrefix+SUFFIX+"/:rn/tubes/aliquots",headers:headers.json,data:{updateAliquotsDTO:"@updateAliquotsDTO"},params:{rn:"@rn"}}})}var SUFFIX="/laboratory-participant",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.LaboratoryParticipantResourceFactory",LaboratoryParticipantResourceFactory),LaboratoryParticipantResourceFactory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function LaboratoryMonitoringResourceFactory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{getDataOfPendingResultsByAliquots:{method:"GET",url:restPrefix+SUFFIX+"/pending/:center",headers:headers.json,params:{center:"@center"}},getDataQuantitativeByTypeOfAliquots:{method:"GET",url:restPrefix+SUFFIX+"/quantitative/:center",headers:headers.json,params:{center:"@center"}},getDataOrphanByExams:{method:"GET",url:restPrefix+SUFFIX+"/orphan",headers:headers.json},getDataOfStorageByAliquots:{method:"GET",url:restPrefix+SUFFIX+"/storage/:center",headers:headers.json,params:{center:"@center"}},getDataByExam:{method:"GET",url:restPrefix+SUFFIX+"/exam/:center",headers:headers.json,params:{center:"@center"}},getDataToCSVOfPendingResultsByAliquots:{method:"GET",url:restPrefix+SUFFIX+"/pending/csv/:center",headers:headers.json,params:{center:"@center"}},getDataToCSVOfOrphansByExam:{method:"GET",url:restPrefix+SUFFIX+"/orphan/csv",headers:headers.json}})}var SUFFIX="/monitoring/laboratory",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.LaboratoryMonitoringResourceFactory",LaboratoryMonitoringResourceFactory),LaboratoryMonitoringResourceFactory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function UserPermissionResourceFactory($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{savePermission:{method:"POST",url:restPrefix+SUFFIX+"/save",headers:headers.json,data:{permissionJson:"@permissionJson"}},getAll:{method:"GET",url:restPrefix+SUFFIX+"/:email",headers:headers.json,params:{email:"@email"}}})}var SUFFIX="/permission/user",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.UserPermissionResourceFactory",UserPermissionResourceFactory),UserPermissionResourceFactory.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function ExamLot($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{getLotAliquots:{method:"GET",url:restPrefix+SUFFIX+"/aliquots/:lotId",headers:headers.json,params:{lotId:"@lotId"}},getAliquotsByCenter:{method:"GET",url:restPrefix+SUFFIX+"/aliquots/:center",headers:headers.json,params:{center:"@center"}},getAliquot:{method:"POST",url:restPrefix+SUFFIX+"/aliquot",headers:headers.json,data:{examLotAliquotFilter:"@examLotAliquotFilter"}},getAvailableExams:{method:"GET",url:restPrefix+SUFFIX+"/available-exams/:center",headers:headers.json,params:{center:"@center"}},getLots:{method:"GET",url:restPrefix+SUFFIX+"/center-lots/:acronym",headers:headers.json,params:{acronym:"@acronym"}},createLot:{method:"POST",url:restPrefix+SUFFIX,headers:headers.json,data:{sampleLot:"@sampleLot"}},updateLot:{method:"PUT",url:restPrefix+SUFFIX,headers:headers.json,data:{sampleLot:"@sampleLot"}},deleteLot:{method:"DELETE",url:restPrefix+SUFFIX+"/:id",headers:headers.json,params:{id:"@id"}}})}var SUFFIX="/laboratory-project/exam-lot",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.ExamLot",ExamLot),ExamLot.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function ExamUpload($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{listAll:{method:"GET",url:restPrefix+SUFFIX,headers:headers.json},create:{method:"POST",url:restPrefix+SUFFIX,headers:headers.json,data:{examUploadJson:"@examUploadJson"}},delete:{method:"DELETE",url:restPrefix+SUFFIX+"/:id",headers:headers.json,params:{id:"@id"}},getById:{method:"GET",url:restPrefix+SUFFIX+"/results/:id",headers:headers.json,params:{id:"@id"}}})}var SUFFIX="/exam-upload",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.ExamUpload",ExamUpload),ExamUpload.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}(),function(){"use strict";function SampleTransport($resource,OtusRestResourceContext,HeaderBuilderFactory){function create(){var restPrefix=OtusRestResourceContext.getRestPrefix(),token=OtusRestResourceContext.getSecurityToken(),headers=HeaderBuilderFactory.create(token);return $resource({},{},{getAliquotsByPeriod:{method:"POST",url:restPrefix+SUFFIX+"/aliquots",headers:headers.json,data:{lotAliquot:"@lotAliquot"}},getAliquot:{method:"POST",url:restPrefix+SUFFIX+"/aliquot",headers:headers.json,data:{lotAliquot:"@lotAliquot"}},getLots:{method:"GET",url:restPrefix+SUFFIX+"/lots",headers:headers.json},createLot:{method:"POST",url:restPrefix+SUFFIX+"/lot",headers:headers.json,data:{sampleLot:"@sampleLot"}},updateLot:{method:"PUT",url:restPrefix+SUFFIX+"/lot",headers:headers.json,data:{sampleLot:"@sampleLot"}},deleteLot:{method:"DELETE",url:restPrefix+SUFFIX+"/lot/:id",headers:headers.json,params:{id:"@id"}}})}var SUFFIX="/laboratory-project/transportation",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.SampleTransport",SampleTransport),SampleTransport.$inject=["$resource","OtusRestResourceContext","otus.client.HeaderBuilderFactory"]}();