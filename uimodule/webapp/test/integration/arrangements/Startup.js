sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("com.myorg.documentSaver.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "com.myorg.documentSaver",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
