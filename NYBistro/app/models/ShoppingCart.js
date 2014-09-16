exports.definition = {
	config: {
		columns: {
		    "ItemName": "text",
		    "ItemPrice": "real",
		    "Quantity": "real",
		    "Total": "real"
		},
		defaults: {
			"ItemName": "",
		    "ItemPrice": "0",
		    "Quantity": "0",
		    "Total": "0"
		},
		adapter: {
			type: "sql",
			collection_name: "ShoppingCart"
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