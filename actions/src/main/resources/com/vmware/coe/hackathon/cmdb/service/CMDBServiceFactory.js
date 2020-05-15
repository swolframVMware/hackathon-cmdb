(function() {
    var Class = System.getModule("com.vmware.pscoe.library.class").Class();

    var KangarooCMDBService = Class.load("com.vmware.coe.hackathon.cmdb.service.kangaroo", "KangarooCMDBService");
    var WombatCMDBService = Class.load("com.vmware.coe.hackathon.cmdb.service.wombat", "WombatCMDBService");
    var PlatypusCMDBService = Class.load("com.vmware.coe.hackathon.cmdb.service.platypus", "PlatypusCMDBService");

    return Class.define(function CMDBServiceFactory() {
        this.getService = function(cmdb, configName) {
            switch (cmdb.toLowerCase()) {
                case "kangaroo":
                    return new KangarooCMDBService(configName);
                case "wombat":
                    return new WombatCMDBService(configName);
                case "platypus":
                    return new PlatypusCMDBService(configName);
            }
        }
    })
})