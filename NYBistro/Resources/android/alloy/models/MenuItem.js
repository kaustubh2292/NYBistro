exports.definition = {
    config: {
        columns: {
            Name: "string",
            SubCatId: "number",
            MenuItemId: "number",
            Price: "float",
            Description: "string"
        },
        adapter: {
            type: "acs",
            custom: true,
            collection_name: "MenuItem",
            idAttribute: "MenuItemId"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(item) {
                return item.get("MenuItemId");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("MenuItem", exports.definition, []);

collection = Alloy.C("MenuItem", exports.definition, model);

exports.Model = model;

exports.Collection = collection;