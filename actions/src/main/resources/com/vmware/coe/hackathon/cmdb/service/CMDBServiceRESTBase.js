
/**
 * 
 */
(function () {
    var Class = System.getModule("com.vmware.pscoe.library.class").Class();
    var CMDBServiceBase = Class.load("com.vmware.coe.hackathon.cmdb.service", "CMDBServiceBase");    

    var RestHostFactory = System.getModule("com.vmware.pscoe.library.rest").RestHostFactory();

    Class.define(function CMDBServiceRESTBase() {
        var restClient = RestHostFactory.newHostWithBasicAuth(endpointUrl, endpointName, username, password);

        this.addRecord = function()  {
            throw "Not implemented"
        }

        this.deleteRecord = function()  {
            throw "Not implemented"
        }

        this.restPOST = function() {
            restClient.post(urlTemplateWithParams, ["my value1", "my value2"], { "vmName" : vm.name, "clusterName" : cluster.name } );
        }

        this.restDELETE = function() {
            restClient.delete(urlTemplateWithParams, ["my value1", "my value2"], { "vmName" : vm.name, "clusterName" : cluster.name } );
        }

    }, null, CMDBServiceBase);
});