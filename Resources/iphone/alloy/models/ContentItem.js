exports.definition = {
    config: {
        columns: {
            ID: "integer",
            title: "text",
            status: "text",
            type: "text",
            content: "text",
            link: "text",
            date: "text",
            format: "text",
            featured_image: "result"
        },
        URL: "http://149.210.167.95/wp-json.php/posts",
        debug: 1,
        useStrictValidation: 0,
        initFetchWithLocalData: 1,
        adapter: {
            type: "sqlrest",
            collection_name: "posts",
            idAttribute: "ID"
        },
        deleteAllOnFetch: true
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("ContentItem", exports.definition, []);

collection = Alloy.C("ContentItem", exports.definition, model);

exports.Model = model;

exports.Collection = collection;