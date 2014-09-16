function Controller() {
    function __alloyId145(e) {
        if (e && e.fromAdapter) return;
        __alloyId145.opts || {};
        var models = __alloyId144.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId141 = models[i];
            __alloyId141.__transform = {};
            var __alloyId143 = Alloy.createController("optionsrow", {
                $model: __alloyId141,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId143.getViewEx({
                recurse: true
            }));
        }
        $.__views.optionsTable.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "testtable";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("OptionalItem");
    $.__views.orderWnd = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "orderWnd",
        statusBarHidden: "false",
        navBarHidden: "false"
    });
    $.__views.orderWnd && $.addTopLevelView($.__views.orderWnd);
    $.__views.optiontablecontainer = Ti.UI.createView({
        id: "optiontablecontainer",
        width: "95%",
        height: "0.1%",
        top: "10"
    });
    $.__views.orderWnd.add($.__views.optiontablecontainer);
    $.__views.optionsTable = Ti.UI.createTableView({
        id: "optionsTable",
        top: "5",
        height: "95%",
        borderWidth: "1",
        borderRadius: "10",
        borderColor: "black",
        width: "95%",
        allowsSelection: "false"
    });
    $.__views.optiontablecontainer.add($.__views.optionsTable);
    var __alloyId144 = Alloy.Collections["OptionalItem"] || OptionalItem;
    __alloyId144.on("fetch destroy change add remove reset", __alloyId145);
    $.__views.animatebtn = Ti.UI.createButton({
        id: "animatebtn",
        top: "350",
        bottom: "2",
        width: "180",
        height: "60",
        title: "Animate"
    });
    $.__views.orderWnd.add($.__views.animatebtn);
    exports.destroy = function() {
        __alloyId144.off("fetch destroy change add remove reset", __alloyId145);
    };
    _.extend($, $.__views);
    var optionsCol = Alloy.Collections.OptionalItem;
    optionsCol.fetch();
    var collapsed = true;
    $.animatebtn.addEventListener("click", function() {
        if (collapsed) {
            $.optiontablecontainer.animate({
                height: "50%",
                duration: 400
            });
            collapsed = false;
        } else {
            $.optiontablecontainer.animate({
                height: "0.1%",
                duration: 400
            });
            collapsed = true;
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;