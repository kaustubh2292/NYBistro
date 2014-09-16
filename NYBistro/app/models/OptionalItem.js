exports.definition = {
	config: {
		columns: {
		    "OptionId": "number",
		    "Name": "string",
		    "Price": "number"
		},
		adapter: {
			type: "acs",
			collection_name: "OptionalItem",
			custom:true,
			idAttribute:"OptionId"
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
			comparator: function(item) {
        		return item.get('OptionId');
        	}
		});

		return Collection;
	}
};