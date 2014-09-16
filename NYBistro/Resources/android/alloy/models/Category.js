exports.definition = {
    config: {
        columns: {
            Name: "string",
            CatId: "number",
            SubCategories: "string"
        },
        adapter: {
            type: "acs",
            collection_name: "Category",
            custom: true,
            idAttribute: "CatId"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(item) {
                return item.get("CatId");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Category", exports.definition, []);

collection = Alloy.C("Category", exports.definition, model);

exports.Model = model;

exports.Collection = collection;