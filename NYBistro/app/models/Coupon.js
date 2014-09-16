exports.definition = {
	config: {
		columns: {
		    "CouponId": "number",
		    "ItemId": "string",
		    "CouponName": "string",
		    "CouponDesc": "string",
		    "CouponExp": "datetime",
		    "CouponType": "string",
		    "CouponVal": "number",
		    "UsageCount": "number",
		    "CouponImage": "string",
		    "ArrowImage":"string",
		    "Status":"string"
		},
		defaults: {
			"CouponImage": "",
			"ArrowImage":"",
			"Status":"new"
		},
		adapter: {
			type: "acs",
			custom:true,
			collection_name: "Coupon",
			idAttribute:"CouponId"
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
        		return item.get('CouponId');
        	}
		});

		return Collection;
	}
};