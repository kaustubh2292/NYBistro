exports.definition = {
    config: {
        columns: {
            CouponId: "number",
            ItemId: "string",
            CouponName: "string",
            CouponDesc: "string",
            CouponExp: "datetime",
            CouponType: "string",
            CouponVal: "number",
            UsageCount: "number",
            CouponImage: "string",
            ArrowImage: "string",
            Status: "string"
        },
        defaults: {
            CouponImage: "",
            ArrowImage: "",
            Status: "new"
        },
        adapter: {
            type: "acs",
            custom: true,
            collection_name: "Coupon",
            idAttribute: "CouponId"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(item) {
                return item.get("CouponId");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Coupon", exports.definition, []);

collection = Alloy.C("Coupon", exports.definition, model);

exports.Model = model;

exports.Collection = collection;