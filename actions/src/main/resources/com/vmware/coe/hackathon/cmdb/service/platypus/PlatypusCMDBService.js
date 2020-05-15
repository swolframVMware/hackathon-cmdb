/**
 * 
 */
(function () {
    var Class = System.getModule("com.vmware.pscoe.library.class").Class();
    
    var CMDBServiceRESTBase = Class.load("com.vmware.coe.hackathon.cmdb.service", "CMDBServiceRESTBase");

    return Class.define(function PlatypusCMDBService() {
        this.addRecord = function(name, size) {
            var response = this.restPost(
                "api/transaction/create",
                {
                    "name": name,
                    "size": size
                }
            )

            var id = response.id;

            commitTransaction(id);
        }

        this.deleteRecord = function(id) {
            var response = this.restPost(
                "api/transaction/delete",
                {
                    "id": id
                }
            )

            var id = response.id;

            commitTransaction(id);
        }

        this.commitTransaction = function(id) {
            this.restPost(
                "api/transaction/commit",
                {
                    "transactionId": id
                }
            )
        }

    }, null, CMDBServiceRESTBase);
})