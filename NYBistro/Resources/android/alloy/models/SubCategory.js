exports.definition = {
    config: {
        columns: {
            Name: "string",
            SubCatId: "number"
        },
        adapter: {
            type: "acs",
            custom: true,
            collection_name: "SubCategory",
            idAttribute: "SubCatId",
            per_page: 20
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(item) {
                return item.get("SubCatId");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("SubCategory", exports.definition, []);

collection = Alloy.C("SubCategory", exports.definition, model);

exports.Model = model;

exports.Collection = collection;