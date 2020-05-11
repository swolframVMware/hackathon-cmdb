/**
 * 
 */
(function () {
    var Class = System.getModule("com.vmware.pscoe.library.class").Class();
    
    var CMDBServiceBase = Class.load("com.vmware.coe.hackathon.cmdb", "CMDBServiceRESTBase");

    return Class.define(function KangarooCMDBService() {
        this.addRecord = function(name, size) {
            var response = this.restPost(
                "api/record",
                {
                    "name": name,
                    "size": size
                }
            )

            return response.id;
        }

        this.deleteRecord = function(id) {
            this.restDELETE("api/record/" +  id);
        }
    }, null, GreetingServiceRESTBase);
})