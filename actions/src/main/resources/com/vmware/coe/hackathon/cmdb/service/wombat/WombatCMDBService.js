/**
 * 
 */
(function () {
    var Class = System.getModule("com.vmware.pscoe.library.class").Class();
    var CMDBServiceBase = Class.load("com.vmware.coe.hackathon.cmdb.service", "CMDBServiceBase");

    var RestClient = System.getModule("com.vmware.pscoe.library.rest").RestClient();
    var restClient = new RestClient(null);        

    return Class.define(function WombatCMDBService(configName) {
         CMDBServiceBase.call(this, configName);

        var apiVersion = "v1";

        this.addRecord = function(name, size) {
            var response = restClient.post(
                "cmdb/" + apiVersion + "/record",
                null,
                "<CreateRecord>" +
                    "<Name>" + name + "</Name>" +
                    "<Size>" + size + "</Size>" +
                "</CreateRecord>"
            )

            return 1;
        }

        this.deleteRecord = function(id) {
            var response = restClient.post(
                "cmdb/" + apiVersion + "/record",
                null,
                "<DeleteRecord>" +
                    "<Id>" + id + "</Id>" +
                "</DeleteRecord>"
            )
        }
    }, null, CMDBServiceBase);
})