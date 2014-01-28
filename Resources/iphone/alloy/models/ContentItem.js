var moment = require("alloy/moment");

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
            featured_image: "result",
            template: "text",
            timestamp: "integer"
        },
        URL: "http://149.210.167.95/wp-json.php/posts",
        debug: 1,
        useStrictValidation: 0,
        initFetchWithLocalData: 1,
        adapter: {
            type: "sqlrest",
            collection_name: "ContentItems",
            idAttribute: "ID"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            comparator: function(contentitem) {
                return moment(contentitem.get("date")).format("X");
            },
            initialize: function() {
                this.set({
                    template: this.get("format"),
                    timestamp: moment(this.get("date")).format("X")
                });
            }
        });
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