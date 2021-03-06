exports.definition = {
	config: {
		columns: {
		    "Name": "string",
		    "CatId": "number",
		    "SubCategories": "string"
		},
		adapter: {
			type: "acs",
			collection_name: "Category",
			custom:true,
			idAttribute: "CatId"
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
        		return item.get('CatId');
        	}
			
		});

		return Collection;
	}
};