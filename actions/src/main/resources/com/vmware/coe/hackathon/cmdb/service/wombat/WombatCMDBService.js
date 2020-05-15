/**
 * 
 */
(function () {
    var Class = System.getModule("com.vmware.pscoe.library.class").Class();
    
    var CMDBServiceRESTBase = Class.load("com.vmware.coe.hackathon.cmdb.service", "CMDBServiceRESTBase");

    return Class.define(function WombatCMDBService(configName) {
         CMDBServiceRESTBase.call(this, configName);

        var apiVersion = "v1";

        this.addRecord = function(name, size) {
            var response = this.restPost(
                "cmdb/" + apiVersion + "/record",
                "<CreateRecord>" +
                    "<Name>" + name + "</Name>" +
                    "<Size>" + size + "</Size>" +
                "</CreateRecord>"
            )

            return response.id;
        }

        this.deleteRecord = function(id) {
            this.restPost(
                "cmdb/" + apiVersion + "/record",
                "<DeleteRecord>" +
                    "<Id>" + id + "</Id>" +
                "</DeleteRecord>"
            )
        }
    }, null, CMDBServiceRESTBase);
})