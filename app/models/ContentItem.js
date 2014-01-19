exports.definition = {
	config: {
		columns: {
			"ID": "integer",
			"title": "text",
			"status": "text",
			"type": "text",
			"content": "text",
			"link": "text",
			"date": "text",
			"format": "text",
			"featured_image": "result",
		},

		//"parentNode": "featured_image"
		
		"URL": "http://149.210.167.95/wp-json.php/posts",
		"debug": 1, //debug mode enabled
        "useStrictValidation":0, // validates each item if all columns are present
        "initFetchWithLocalData": 1,
        "adapter" : {
            "type" : "sqlrest",
            "collection_name" : "posts",
            "idAttribute" : "ID",

            // optimise the amount of data transfer from remote server to app
            //"addModifedToUrl": true,
            //"lastModifiedColumn": "date"
        },

        //optional
        // "headers": { //your custom headers
        //     "Accept": "application/vnd.stackmob+json; version=0",
        //     "X-StackMob-API-Key": "your-stackmob-key"
        // },

        // delete all models on fetch
        "deleteAllOnFetch": true
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