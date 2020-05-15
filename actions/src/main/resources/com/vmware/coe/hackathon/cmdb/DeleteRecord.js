/**
 * @param {string} cmdb_name
 * @param {string} cmdb_record_id
 */

(function(cmdb_name, cmdb_record_id) {
    var Class = System.getModule("com.vmware.pscoe.library.class").Class();

    var CMDBServiceFactory = Class.load("com.vmware.coe.hackathon.cmdb.service", "CMDBServiceFactory");

    var cmdbServiceFactory = new CMDBServiceFactory();
    var cmdbService = cmdbServiceFactory.getService(cmdb_name, "_mock");

    cmdbService.deleteRecord(cmdb_name, cmdb_record_id);
})