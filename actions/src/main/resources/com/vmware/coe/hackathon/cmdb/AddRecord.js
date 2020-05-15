/**
 * @param {string} cmdb_name
 * @param {string} cmdb_record_name
 * @param {number} cmdb_record_size
 * 
 * @return {string}
 */

(function(cmdb_name, cmdb_record_name, cmdb_record_size) {
    var Class = System.getModule("com.vmware.pscoe.library.class").Class();

    var CMDBServiceFactory = Class.load("com.vmware.coe.hackathon.cmdb", "CMDBServiceFactory");

    var cmdbServiceFactory = new CMDBServiceFactory();
    var cmdbService = cmdbServiceFactory.getService(cmdb);

    return cmdbService.addRecord(cmdb_name, cmdb_record_name, cmdb_record_size);
})