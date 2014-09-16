exports.definition = {
    config: {
        columns: {
            OrderId: "number",
            LineItems: "string",
            OptionalItems: "string",
            OptionsTotal: "number",
            DeliveryCharge: "number",
            OrderType: "string",
            SubTotal: "number",
            Taxes: "number",
            Total: "number"
        },
        defaults: {
            OrderId: 1001,
            LineItems: "",
            OptionalItems: "",
            OptionsTotal: 0,
            DeliveryCharge: 0,
            OrderType: "",
            SubTotal: 0,
            Taxes: 0,
            Total: 0
        },
        adapter: {
            type: "acs",
            collection_name: "Order",
            custom: true,
            idAttribute: "OrderId"
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

model = Alloy.M("Order", exports.definition, []);

collection = Alloy.C("Order", exports.definition, model);

exports.Model = model;

exports.Collection = collection;