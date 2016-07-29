<<<<<<< HEAD
!function(){"use strict";angular.module("otus.client",["ngResource"])}(),function(){"use strict";function UrlParser(){function parser(url){var parserElement=document.createElement("a");return parserElement.href=url,parserElement}var self=this;self.parser=parser}angular.module("otus.client").service("UrlParser",UrlParser)}(),function(){"use strict";function OtusRestResourceContext($window,UrlParser){function init(){HOSTNAME="http://"+$window.location.hostname,CONTEXT="/otus-rest",VERSION="/v01"}function reset(){HOSTNAME=""}function removeSecurityToken(){delete $window.sessionStorage[TOKEN_USER_NAME]}function removeSecurityProjectToken(){delete $window.sessionStorage[TOKEN_PROJECT_NAME]}function setUrl(url){var parser=UrlParser.parser(url);HOSTNAME=parser.origin}function setHostname(hostname){HOSTNAME=hostname}function setContext(context){CONTEXT="/"+context}function setVersion(version){VERSION="/"+version}function getRestPrefix(){return HOSTNAME+CONTEXT+VERSION}function setSecurityToken(securityToken){$window.sessionStorage[TOKEN_USER_NAME]=securityToken}function setSecurityProjectToken(securityProjectToken){$window.sessionStorage[TOKEN_PROJECT_NAME]=securityProjectToken}function getSecurityProjectToken(){return $window.sessionStorage[TOKEN_PROJECT_NAME]}function getSecurityToken(){return $window.sessionStorage[TOKEN_USER_NAME]}var HOSTNAME,CONTEXT,VERSION,self=this,TOKEN_USER_NAME="outk",TOKEN_PROJECT_NAME="optk";self.setUrl=setUrl,self.setHostname=setHostname,self.setContext=setContext,self.setVersion=setVersion,self.setSecurityToken=setSecurityToken,self.setSecurityProjectToken=setSecurityProjectToken,self.getRestPrefix=getRestPrefix,self.getSecurityToken=getSecurityToken,self.getSecurityProjectToken=getSecurityProjectToken,self.removeSecurityProjectToken=removeSecurityProjectToken,self.removeSecurityToken=removeSecurityToken,self.init=init,self.reset=reset,self.init()}angular.module("otus.client").service("OtusRestResourceContext",OtusRestResourceContext),OtusRestResourceContext.$inject=["$window","UrlParser"]}(),function(){"use strict";function OtusRestResourceService(OtusInstallerResourceFactory,OtusAuthenticatorResourceFactory,OtusFieldCenterResourceFactory,OtusRestResourceContext,UserResourceFactory){function resetConnectionData(){OtusRestResourceContext.reset()}function initDefaultConnectionData(){OtusRestResourceContext.init()}function removeSecurityProjectToken(){OtusRestResourceContext.removeSecurityProjectToken()}function removeSecurityToken(){OtusRestResourceContext.removeSecurityToken()}function setUrl(url){OtusRestResourceContext.setUrl(url)}function setSecurityProjectToken(token){OtusRestResourceContext.setSecurityProjectToken(token)}function setSecurityToken(token){OtusRestResourceContext.setSecurityToken(token)}function getOtusInstallerResource(){return OtusInstallerResourceFactory.create()}function getOtusAuthenticatorResource(){return OtusAuthenticatorResourceFactory.create()}function getOtusFieldCenterResource(){return OtusFieldCenterResourceFactory.create()}function getUserResource(){return UserResourceFactory.create()}var self=this;self.resetConnectionData=resetConnectionData,self.initDefaultConnectionData=initDefaultConnectionData,self.removeSecurityProjectToken=removeSecurityProjectToken,self.removeSecurityToken=removeSecurityToken,self.setUrl=setUrl,self.setSecurityProjectToken=setSecurityProjectToken,self.setSecurityToken=setSecurityToken,self.getOtusInstallerResource=getOtusInstallerResource,self.getOtusAuthenticatorResource=getOtusAuthenticatorResource,self.getOtusFieldCenterResource=getOtusFieldCenterResource,self.getUserResource=getUserResource}angular.module("otus.client").service("OtusRestResourceService",OtusRestResourceService),OtusRestResourceService.$inject=["OtusInstallerResourceFactory","OtusAuthenticatorResourceFactory","OtusFieldCenterResourceFactory","OtusRestResourceContext","otus.client.UserResourceFactory"]}(),function(){"use strict";function OtusAuthenticatorResourceFactory($resource,OtusRestResourceContext){function create(){return $resource({},{},{authenticate:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX,headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityToken()}},invalidate:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX+"/invalidate",headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityToken()}},authenticateProject:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX+"/project",headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityProjectToken()}}})}var SUFFIX="/authentication",self=this;return self.create=create,self}angular.module("otus.client").factory("OtusAuthenticatorResourceFactory",OtusAuthenticatorResourceFactory),OtusAuthenticatorResourceFactory.$inject=["$resource","OtusRestResourceContext"]}(),function(){"use strict";function OtusFieldCenterResourceFactory($resource,OtusRestResourceContext){function create(){return $resource({},{},{getAll:{method:"GET",url:OtusRestResourceContext.getRestPrefix()+SUFFIX,headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityProjectToken()}},create:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX,headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityProjectToken()}},update:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX+"/update",headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityProjectToken()}}})}var SUFFIX="/center",self=this;return self.create=create,self}angular.module("otus.client").factory("OtusFieldCenterResourceFactory",OtusFieldCenterResourceFactory),OtusFieldCenterResourceFactory.$inject=["$resource","OtusRestResourceContext"]}(),function(){"use strict";function OtusInstallerResourceFactory($resource,OtusRestResourceContext){function create(){return $resource({},{},{ready:{method:"GET",url:OtusRestResourceContext.getRestPrefix()+SUFFIX+"/ready"},config:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX+"/config"},validation:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX+"/validation"}})}var SUFFIX="/installer",self=this;return self.create=create,self}angular.module("otus.client").factory("OtusInstallerResourceFactory",OtusInstallerResourceFactory),OtusInstallerResourceFactory.$inject=["$resource","OtusRestResourceContext"]}(),function(){"use strict";function UserResourceFactory($resource,OtusRestResourceContext){function create(){return $resource({},{},{create:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX+"/signup",headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityToken()}}})}var SUFFIX="/user",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.UserResourceFactory",UserResourceFactory),UserResourceFactory.$inject=["$resource","OtusRestResourceContext"]}();
||||||| merged common ancestors
!function(){"use strict";angular.module("otus.client",["ngResource"])}(),function(){"use strict";function UrlParser(){function parser(url){var parserElement=document.createElement("a");return parserElement.href=url,parserElement}var self=this;self.parser=parser}angular.module("otus.client").service("UrlParser",UrlParser)}(),function(){"use strict";function OtusRestResourceContext($window,UrlParser){function init(){HOSTNAME="http://"+$window.location.hostname,CONTEXT="/otus-rest",VERSION="/v01"}function reset(){HOSTNAME=""}function removeSecurityToken(){delete $window.sessionStorage[TOKEN_USER_NAME]}function removeSecurityProjectToken(){delete $window.sessionStorage[TOKEN_PROJECT_NAME]}function setUrl(url){var parser=UrlParser.parser(url);HOSTNAME=parser.origin}function setHostname(hostname){HOSTNAME=hostname}function setContext(context){CONTEXT="/"+context}function setVersion(version){VERSION="/"+version}function getRestPrefix(){return HOSTNAME+CONTEXT+VERSION}function setSecurityToken(securityToken){$window.sessionStorage[TOKEN_USER_NAME]=securityToken}function setSecurityProjectToken(securityProjectToken){$window.sessionStorage[TOKEN_PROJECT_NAME]=securityProjectToken}function getSecurityProjectToken(){return $window.sessionStorage[TOKEN_PROJECT_NAME]}function getSecurityToken(){return $window.sessionStorage[TOKEN_USER_NAME]}var HOSTNAME,CONTEXT,VERSION,self=this,TOKEN_USER_NAME="outk",TOKEN_PROJECT_NAME="optk";self.setUrl=setUrl,self.setHostname=setHostname,self.setContext=setContext,self.setVersion=setVersion,self.setSecurityToken=setSecurityToken,self.setSecurityProjectToken=setSecurityProjectToken,self.getRestPrefix=getRestPrefix,self.getSecurityToken=getSecurityToken,self.getSecurityProjectToken=getSecurityProjectToken,self.removeSecurityProjectToken=removeSecurityProjectToken,self.removeSecurityToken=removeSecurityToken,self.init=init,self.reset=reset,self.init()}angular.module("otus.client").service("OtusRestResourceContext",OtusRestResourceContext),OtusRestResourceContext.$inject=["$window","UrlParser"]}(),function(){"use strict";function OtusRestResourceService(OtusInstallerResourceFactory,OtusAuthenticatorResourceFactory,OtusFieldCenterResourceFactory,OtusRestResourceContext,UserResourceFactory){function resetConnectionData(){OtusRestResourceContext.reset()}function initDefaultConnectionData(){OtusRestResourceContext.init()}function removeSecurityProjectToken(){OtusRestResourceContext.removeSecurityProjectToken()}function removeSecurityToken(){OtusRestResourceContext.removeSecurityToken()}function setUrl(url){OtusRestResourceContext.setUrl(url)}function setSecurityProjectToken(token){OtusRestResourceContext.setSecurityProjectToken(token)}function setSecurityToken(token){OtusRestResourceContext.setSecurityToken(token)}function getOtusInstallerResource(){return OtusInstallerResourceFactory.create()}function getOtusAuthenticatorResource(){return OtusAuthenticatorResourceFactory.create()}function getOtusFieldCenterResource(){return OtusFieldCenterResourceFactory.create()}function getUserResource(){return UserResourceFactory.create()}var self=this;self.resetConnectionData=resetConnectionData,self.initDefaultConnectionData=initDefaultConnectionData,self.removeSecurityProjectToken=removeSecurityProjectToken,self.removeSecurityToken=removeSecurityToken,self.setUrl=setUrl,self.setSecurityProjectToken=setSecurityProjectToken,self.setSecurityToken=setSecurityToken,self.getOtusInstallerResource=getOtusInstallerResource,self.getOtusAuthenticatorResource=getOtusAuthenticatorResource,self.getOtusFieldCenterResource=getOtusFieldCenterResource,self.getUserResource=getUserResource}angular.module("otus.client").service("OtusRestResourceService",OtusRestResourceService),OtusRestResourceService.$inject=["OtusInstallerResourceFactory","OtusAuthenticatorResourceFactory","OtusFieldCenterResourceFactory","OtusRestResourceContext","otus.client.UserResourceFactory"]}(),function(){"use strict";function OtusAuthenticatorResourceFactory($resource,OtusRestResourceContext){function create(){return $resource({},{},{authenticate:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX,headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityToken()}},invalidate:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX+"/invalidate",headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityToken()}},authenticateProject:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX+"/project",headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityProjectToken()}}})}var SUFFIX="/authentication",self=this;return self.create=create,self}angular.module("otus.client").factory("OtusAuthenticatorResourceFactory",OtusAuthenticatorResourceFactory),OtusAuthenticatorResourceFactory.$inject=["$resource","OtusRestResourceContext"]}(),function(){"use strict";function OtusFieldCenterResourceFactory($resource,OtusRestResourceContext){function create(){return $resource({},{},{getAll:{method:"GET",url:OtusRestResourceContext.getRestPrefix()+SUFFIX,headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityProjectToken()}},create:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX,headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityProjectToken()}},update:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX+"/update",headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityProjectToken()}}})}var SUFFIX="/center",self=this;return self.create=create,self}angular.module("otus.client").factory("OtusFieldCenterResourceFactory",OtusFieldCenterResourceFactory),OtusFieldCenterResourceFactory.$inject=["$resource","OtusRestResourceContext"]}(),function(){"use strict";function OtusInstallerResourceFactory($resource,OtusRestResourceContext){function create(){return $resource({},{},{ready:{method:"GET",url:OtusRestResourceContext.getRestPrefix()+SUFFIX+"/ready"},config:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX+"/config"}})}var SUFFIX="/installer",self=this;return self.create=create,self}angular.module("otus.client").factory("OtusInstallerResourceFactory",OtusInstallerResourceFactory),OtusInstallerResourceFactory.$inject=["$resource","OtusRestResourceContext"]}(),function(){"use strict";function UserResourceFactory($resource,OtusRestResourceContext){function create(){return $resource({},{},{create:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX,headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityToken()}}})}var SUFFIX="/user",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.UserResourceFactory",UserResourceFactory),UserResourceFactory.$inject=["$resource","OtusRestResourceContext"]}();
=======
!function(){"use strict";angular.module("otus.client",["ngResource"])}(),function(){"use strict";function UrlParser(){function parser(url){var parserElement=document.createElement("a");return parserElement.href=url,parserElement}var self=this;self.parser=parser}angular.module("otus.client").service("UrlParser",UrlParser)}(),function(){"use strict";function OtusRestResourceContext($window,UrlParser){function init(){HOSTNAME="http://"+$window.location.hostname,CONTEXT="/otus-rest",VERSION="/v01"}function hasToken(){return!!$window.sessionStorage[TOKEN_USER_NAME]}function reset(){HOSTNAME=""}function removeSecurityToken(){delete $window.sessionStorage[TOKEN_USER_NAME]}function removeSecurityProjectToken(){delete $window.sessionStorage[TOKEN_PROJECT_NAME]}function setUrl(url){var parser=UrlParser.parser(url);HOSTNAME=parser.origin}function setHostname(hostname){HOSTNAME=hostname}function setContext(context){CONTEXT="/"+context}function setVersion(version){VERSION="/"+version}function getRestPrefix(){return HOSTNAME+CONTEXT+VERSION}function setSecurityToken(securityToken){$window.sessionStorage[TOKEN_USER_NAME]=securityToken}function setSecurityProjectToken(securityProjectToken){$window.sessionStorage[TOKEN_PROJECT_NAME]=securityProjectToken}function getSecurityProjectToken(){return $window.sessionStorage[TOKEN_PROJECT_NAME]}function getSecurityToken(){return $window.sessionStorage[TOKEN_USER_NAME]}var HOSTNAME,CONTEXT,VERSION,self=this,TOKEN_USER_NAME="outk",TOKEN_PROJECT_NAME="optk";self.setUrl=setUrl,self.setHostname=setHostname,self.setContext=setContext,self.setVersion=setVersion,self.setSecurityToken=setSecurityToken,self.setSecurityProjectToken=setSecurityProjectToken,self.getRestPrefix=getRestPrefix,self.getSecurityToken=getSecurityToken,self.getSecurityProjectToken=getSecurityProjectToken,self.removeSecurityProjectToken=removeSecurityProjectToken,self.removeSecurityToken=removeSecurityToken,self.init=init,self.reset=reset,self.hasToken=hasToken,self.init()}angular.module("otus.client").service("OtusRestResourceContext",OtusRestResourceContext),OtusRestResourceContext.$inject=["$window","UrlParser"]}(),function(){"use strict";function OtusRestResourceService(OtusInstallerResourceFactory,OtusAuthenticatorResourceFactory,OtusFieldCenterResourceFactory,OtusRestResourceContext,UserResourceFactory){function isLogged(){return OtusRestResourceContext.hasToken()}function resetConnectionData(){OtusRestResourceContext.reset()}function initDefaultConnectionData(){OtusRestResourceContext.init()}function removeSecurityProjectToken(){OtusRestResourceContext.removeSecurityProjectToken()}function removeSecurityToken(){OtusRestResourceContext.removeSecurityToken()}function setUrl(url){OtusRestResourceContext.setUrl(url)}function setSecurityProjectToken(token){OtusRestResourceContext.setSecurityProjectToken(token)}function setSecurityToken(token){OtusRestResourceContext.setSecurityToken(token)}function getOtusInstallerResource(){return OtusInstallerResourceFactory.create()}function getOtusAuthenticatorResource(){return OtusAuthenticatorResourceFactory.create()}function getOtusFieldCenterResource(){return OtusFieldCenterResourceFactory.create()}function getUserResource(){return UserResourceFactory.create()}var self=this;self.resetConnectionData=resetConnectionData,self.initDefaultConnectionData=initDefaultConnectionData,self.removeSecurityProjectToken=removeSecurityProjectToken,self.removeSecurityToken=removeSecurityToken,self.setUrl=setUrl,self.setSecurityProjectToken=setSecurityProjectToken,self.setSecurityToken=setSecurityToken,self.getOtusInstallerResource=getOtusInstallerResource,self.getOtusAuthenticatorResource=getOtusAuthenticatorResource,self.getOtusFieldCenterResource=getOtusFieldCenterResource,self.getUserResource=getUserResource,self.isLogged=isLogged}angular.module("otus.client").service("OtusRestResourceService",OtusRestResourceService),OtusRestResourceService.$inject=["OtusInstallerResourceFactory","OtusAuthenticatorResourceFactory","OtusFieldCenterResourceFactory","OtusRestResourceContext","otus.client.UserResourceFactory"]}(),function(){"use strict";function OtusAuthenticatorResourceFactory($resource,OtusRestResourceContext){function create(){return $resource({},{},{authenticate:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX,headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityToken()}},invalidate:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX+"/invalidate",headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityToken()}},authenticateProject:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX+"/project",headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityProjectToken()}}})}var SUFFIX="/authentication",self=this;return self.create=create,self}angular.module("otus.client").factory("OtusAuthenticatorResourceFactory",OtusAuthenticatorResourceFactory),OtusAuthenticatorResourceFactory.$inject=["$resource","OtusRestResourceContext"]}(),function(){"use strict";function OtusFieldCenterResourceFactory($resource,OtusRestResourceContext){function create(){return $resource({},{},{getAll:{method:"GET",url:OtusRestResourceContext.getRestPrefix()+SUFFIX,headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityProjectToken()}},create:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX,headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityProjectToken()}},update:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX+"/update",headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityProjectToken()}}})}var SUFFIX="/center",self=this;return self.create=create,self}angular.module("otus.client").factory("OtusFieldCenterResourceFactory",OtusFieldCenterResourceFactory),OtusFieldCenterResourceFactory.$inject=["$resource","OtusRestResourceContext"]}(),function(){"use strict";function OtusInstallerResourceFactory($resource,OtusRestResourceContext){function create(){return $resource({},{},{ready:{method:"GET",url:OtusRestResourceContext.getRestPrefix()+SUFFIX+"/ready"},config:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX+"/config"}})}var SUFFIX="/installer",self=this;return self.create=create,self}angular.module("otus.client").factory("OtusInstallerResourceFactory",OtusInstallerResourceFactory),OtusInstallerResourceFactory.$inject=["$resource","OtusRestResourceContext"]}(),function(){"use strict";function UserResourceFactory($resource,OtusRestResourceContext){function create(){return $resource({},{},{create:{method:"POST",url:OtusRestResourceContext.getRestPrefix()+SUFFIX,headers:{Authorization:"Bearer "+OtusRestResourceContext.getSecurityToken()}}})}var SUFFIX="/user",self=this;return self.create=create,self}angular.module("otus.client").factory("otus.client.UserResourceFactory",UserResourceFactory),UserResourceFactory.$inject=["$resource","OtusRestResourceContext"]}();
>>>>>>> dev
