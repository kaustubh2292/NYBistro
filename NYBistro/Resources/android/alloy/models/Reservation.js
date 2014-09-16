exports.definition = {
    config: {
        columns: {
            ReservationId: "number",
            NumberOfPeople: "number",
            ReservationDate: "string",
            ReservationTime: "string"
        },
        adapter: {
            type: "acs",
            collection_name: "Reservation",
            custom: true,
            idAttribute: "ReservationId"
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

model = Alloy.M("Reservation", exports.definition, []);

collection = Alloy.C("Reservation", exports.definition, model);

exports.Model = model;

exports.Collection = collection;