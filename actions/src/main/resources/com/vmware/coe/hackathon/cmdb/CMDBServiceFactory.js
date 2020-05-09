/**
 * 
 */

(function() {
    var Class = System.getModule("com.vmware.pscoe.library.class").Class();

    var KangarooCMDBService = Class.load("com.vmware.coe.hackathon.cmdb.kangaroo", "KangarooCMDBService");
    var WombatCMDBService = Class.load("com.vmware.coe.hackathon.cmdb.wombat", "WombatCMDBService");
    var PlatypusCMDBService = Class.load("com.vmware.coe.hackathon.cmdb.platypus", "PlatypusCMDBService");

    return Class.define(function CMDBServiceFactory() {
        this.getService = function(cmdb) {
            switch (cmdb.toLowerCase()) {
                case "kangaroo":
                    return new KangarooCMDBService();
                case "wombat":
                    return new WombatCMDBService();
                case "platypus":
                    return new PlatypusCMDBService();
            }
        }
    })
})