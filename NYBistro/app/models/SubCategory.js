exports.definition = {
	config: {
		columns: {
		    "Name": "string",
		    "SubCatId": "number"
		},
		adapter: {
			type: "acs",
			custom:true,
			collection_name: "SubCategory",
			idAttribute: "SubCatId",
			per_page:20
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
        		return item.get('SubCatId');
        	}
		});

		return Collection;
	}
};