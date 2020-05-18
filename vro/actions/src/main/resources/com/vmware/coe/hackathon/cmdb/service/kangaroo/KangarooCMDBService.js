/**
 * 
 */
(function () {
    var Class = System.getModule("com.vmware.pscoe.library.class").Class();
    var CMDBServiceBase = Class.load("com.vmware.coe.hackathon.cmdb.service", "CMDBServiceBase");

    var RestClient = System.getModule("com.vmware.pscoe.library.rest").RestClient();
    var restClient = new RestClient(null);  

    return Class.define(function KangarooCMDBService(configName) {
        CMDBServiceBase.call(this, configName);

        this.addRecord = function(name, size) {
             response = restClient.put(
                "api/record",
                null,
                {
                    "name": name,
                    "size": size
                }
            );   
        }

        this.deleteRecord = function(id) {
           restClient.delete(
               "api/record/{id}",
               [id],
               null
            );
        }
        
    }, null, CMDBServiceBase);
})