/**
 * 
 */
(function () {
    var Class = System.getModule("com.vmware.pscoe.library.class").Class();
    var CMDBServiceBase = Class.load("com.vmware.coe.hackathon.cmdb.service", "CMDBServiceBase");

    var RestClient = System.getModule("com.vmware.pscoe.library.rest").RestClient();
    var restClient = new RestClient(null);    

    return Class.define(function PlatypusCMDBService(configName) {
        CMDBServiceBase.call(this, configName);
        
        this.addRecord = function(name, size) {
            var response = restClient.post(
                "api/transaction/create",
                null,
                {
                    "name": name,
                    "size": size
                }
            )

            var id = 1;

            this.commitTransaction(id);
        }

        this.deleteRecord = function(id) {
            var response = restClient.post(
                "api/transaction/delete",
                null,
                {
                    "transactionId": id
                }
            )

            this.commitTransaction(id);
        }

        this.commitTransaction = function(id) {
            var response = restClient.post(
                "api/transaction/commit",
                null,
                {
                    "transactionId": id
                }
            )
        }

    }, null, CMDBServiceBase);
})