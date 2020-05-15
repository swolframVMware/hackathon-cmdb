describe("CMDB Service Test", function() {
    var Class = System.getModule("com.vmware.pscoe.library.class").Class();
    var CMDBServiceFactory = Class.load("com.vmware.coe.hackathon.cmdb.service", "CMDBServiceFactory");

    it("Kangaroo Test", function() {
        var cmdbServiceFactory = new CMDBServiceFactory();
        var cmdbService = cmdbServiceFactory.getService("kangaroo", "test");
        expect(true).toBe(true);
    });

    it("Wombat Test", function() {
        var cmdbServiceFactory = new CMDBServiceFactory();
        var cmdbService = cmdbServiceFactory.getService("wombat", "test");
        expect(true).toBe(true);
    });

    it("Platypus Test", function() {
        var cmdbServiceFactory = new CMDBServiceFactory();
        var cmdbService = cmdbServiceFactory.getService("platypus", "test");
        expect(true).toBe(true);
    });
 })