/**
 * 
 */
(function () {
    var Class = System.getModule("com.vmware.pscoe.library.class").Class();
    
    var CMDBServiceBase = Class.load("com.vmware.coe.hackathon.cmdb", "CMDBServiceRESTBase");

    return Class.define(function PlatypusCMDBService() {
        this.addRecord = function(name) {
            //todo
        }

        this.deleteRecord = function(name) {
            //todo
        }
    }, null, GreetingServiceBase);
})