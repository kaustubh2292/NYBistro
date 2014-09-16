exports.definition = {
	config: {
		columns: {
			"ReservationId": "number",
		    "NumberOfPeople": "number",
		    "ReservationDate": "string",
		    "ReservationTime": "string"
		},
		adapter: {
			type: "acs",
			collection_name: "Reservation",
			custom:true,
			idAttribute:"ReservationId"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};