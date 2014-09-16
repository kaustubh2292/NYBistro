exports.definition = {
    config: {
        columns: {
            OptionId: "number",
            Name: "string",
            Price: "number"
        },
        adapter: {
            type: "acs",
            collection_name: "OptionalItem",
            custom: true,
            idAttribute: "OptionId"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(item) {
                return item.get("OptionId");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("OptionalItem", exports.definition, []);

collection = Alloy.C("OptionalItem", exports.definition, model);

exports.Model = model;

exports.Collection = collection;