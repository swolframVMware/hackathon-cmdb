/**
 * 
 */
(function () {
    var Class = System.getModule("com.vmware.pscoe.library.class").Class();

    return Class.define(function CMDBServiceBase(configName) {
        this.addRecord = function()  {
            throw "Not implemented"
        }

        this.deleteRecord = function()  {
            throw "Not implemented"
        }
    }, null, null);
});