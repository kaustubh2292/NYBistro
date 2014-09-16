exports.definition = {
	config: {
		columns: {
		    "OrderId": "number",
		    "LineItems": "string",
		    "OptionalItems":"string",
		    "OptionsTotal": "number",
		    "DeliveryCharge": "number",
		    "OrderType": "string",
		    "SubTotal": "number",
		    "Taxes": "number",
		    "Total": "number"
		},
		defaults:{
			"OrderId": 1001,
		    "LineItems": "",
		    "OptionalItems":"",
		    "OptionsTotal": 0,
		    "DeliveryCharge": 0,
		    "OrderType": "",
		    "SubTotal": 0,
		    "Taxes": 0,
		    "Total": 0
		},
		adapter: {
			type: "acs",
			collection_name: "Order",
			custom:true,
			idAttribute:"OrderId"
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