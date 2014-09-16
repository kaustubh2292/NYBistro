exports.definition = {
    config: {
        columns: {
            CouponId: "REAL",
            ItemId: "TEXT",
            CouponName: "TEXT",
            CouponDesc: "TEXT",
            CouponExp: "TEXT",
            CouponType: "TEXT",
            CouponVal: "REAL",
            UsageCount: "REAL",
            CouponImage: "TEXT",
            ArrowImage: "TEXT",
            Status: "TEXT"
        },
        defaults: {
            CouponId: 0,
            ItemId: "",
            CouponName: "",
            CouponDesc: "",
            CouponExp: "",
            CouponType: "",
            CouponVal: 0,
            UsageCount: 0,
            CouponImage: "",
            ArrowImage: "",
            Status: ""
        },
        adapter: {
            type: "sql",
            idAttribute: "CouponId",
            collection_name: "CouponLocal"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("CouponLocal", exports.definition, []);

collection = Alloy.C("CouponLocal", exports.definition, model);

exports.Model = model;

exports.Collection = collection;