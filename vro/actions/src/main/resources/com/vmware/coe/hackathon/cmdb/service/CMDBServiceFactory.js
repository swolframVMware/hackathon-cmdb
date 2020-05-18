(function() {
    var Class = System.getModule("com.vmware.pscoe.library.class").Class();

    return Class.define(function CMDBServiceFactory() {
        this.getService = function(cmdb_name, configName) {
            return eval(new (Class.load("com.vmware.coe.hackathon.cmdb.service." + cmdb_name.toLowerCase(), cmdb_name + "CMDBService"))(configName))
        }
    })
})