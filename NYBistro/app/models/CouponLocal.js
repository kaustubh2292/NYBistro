exports.definition = {
	config: {
		columns: {
		    "CouponId": "REAL",
		    "ItemId": "TEXT",
		    "CouponName": "TEXT",
		    "CouponDesc": "TEXT",
		    "CouponExp": "TEXT",
		    "CouponType": "TEXT",
		    "CouponVal": "REAL",
		    "UsageCount": "REAL",
		    "CouponImage": "TEXT",
		    "ArrowImage":"TEXT",
		    "Status":"TEXT"
		},
		defaults: {
		    "CouponId": 0,
		    "ItemId": "",
		    "CouponName": "",
		    "CouponDesc": "",
		    "CouponExp": "",
		    "CouponType": "",
		    "CouponVal": 0,
		    "UsageCount": 0,
		    "CouponImage": "",
		    "ArrowImage":"",
		    "Status":""
		},
		adapter: {
			type: "sql",
			idAttribute:"CouponId",
			collection_name: "CouponLocal"
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