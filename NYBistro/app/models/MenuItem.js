exports.definition = {
	config: {
		columns: {
		    "Name": "string",
		    "SubCatId": "number",
		    "MenuItemId": "number",
		    "Price": "float",
		    "Description": "string"
		},
		adapter: {
			type: "acs",
			custom:true,
			collection_name: "MenuItem",
			idAttribute: "MenuItemId"
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
        		return item.get('MenuItemId');
        	}
		});

		return Collection;
	}
};