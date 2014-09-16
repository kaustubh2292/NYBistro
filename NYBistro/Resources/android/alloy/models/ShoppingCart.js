exports.definition = {
    config: {
        columns: {
            ItemName: "text",
            ItemPrice: "real",
            Quantity: "real",
            Total: "real"
        },
        defaults: {
            ItemName: "",
            ItemPrice: "0",
            Quantity: "0",
            Total: "0"
        },
        adapter: {
            type: "sql",
            collection_name: "ShoppingCart"
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

model = Alloy.M("ShoppingCart", exports.definition, []);

collection = Alloy.C("ShoppingCart", exports.definition, model);

exports.Model = model;

exports.Collection = collection;