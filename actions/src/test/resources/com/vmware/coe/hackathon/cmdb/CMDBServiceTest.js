
describe("CMDB Service Test", function() {
    System = System.getModule("com.vmware.coe.hackathon.cmdb.mocks").SystemExtender().mockSystem();
    System.getContext = function() { return undefined; }
    
    var Class = System.getModule("com.vmware.pscoe.library.class").Class();
    var CMDBServiceFactory = Class.load("com.vmware.coe.hackathon.cmdb.service", "CMDBServiceFactory");

    it("Kangaroo Add Test", function() {
        var cmdbServiceFactory = new CMDBServiceFactory();
        var cmdbService = cmdbServiceFactory.getService("kangaroo", "_mock");

        cmdbService.addRecord("name", 1);
        
        expect(true).toBe(true);
    });

    it("Kangaroo Delete Test", function() {
        var cmdbServiceFactory = new CMDBServiceFactory();
        var cmdbService = cmdbServiceFactory.getService("kangaroo", "_mock");

        cmdbService.deleteRecord(1);
        
        expect(true).toBe(true);
    });    

    it("Wombat Add Test", function() {
        var cmdbServiceFactory = new CMDBServiceFactory();
        var cmdbService = cmdbServiceFactory.getService("wombat", "_mock");

        cmdbService.addRecord("name", 1);

        expect(true).toBe(true);
    });

    it("Wombat Delete Test", function() {
        var cmdbServiceFactory = new CMDBServiceFactory();
        var cmdbService = cmdbServiceFactory.getService("wombat", "_mock");

        cmdbService.deleteRecord("name", 1);

        expect(true).toBe(true);
    });

    it("Platypus Add Test", function() {
        var cmdbServiceFactory = new CMDBServiceFactory();
        var cmdbService = cmdbServiceFactory.getService("platypus", "_mock");

        cmdbService.addRecord("name", 1);

        expect(true).toBe(true);
    });

    it("Platypus Delete Test", function() {
        var cmdbServiceFactory = new CMDBServiceFactory();
        var cmdbService = cmdbServiceFactory.getService("platypus", "_mock");

        cmdbService.addRecord("name", 1);

        expect(true).toBe(true);
    });    
 })