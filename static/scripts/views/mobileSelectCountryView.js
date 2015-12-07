define(['jquery', 'underscore', 'backbone', "routers/router"], function ($, _, Backbone, Router) {
    var mobileSelectCountryView = Backbone.View.extend({
        COLUMN_SIZE: 4,
        ROW_SIZE: 2,
        tagName: 'div',
        template:_.template($('#mobile-select-country-template').html()),
        initialize: function() {
            this.countries = app.countries;
            this.selected = 0;
            
            // 显示
            this.rangeStart = 0;
            this.rangeEnd = this.COLUMN_SIZE - 1;
            
            // 
            this.buildDisplayData();
        },
        events: {
            "click #next": "next"
        },
        render: function() {
            this.$el.empty();
            var jsonObject = {"countries":this.displayCountries};
            this.$el.html(this.template(jsonObject)); //模板使用JSON对象
            return this;
        },
        next: function(event) {
            var country = event.target.getAttribute('country');
            app.selectedCountry = country;
            Backbone.history.history.back(); //返回
        },
        buildDisplayData: function() {
            // 展示的国家规则行、列
            var displayCountries = []; // 数组嵌套数组;
            var totalColumns = Math.ceil(this.countries.length / this.ROW_SIZE);
            if (totalColumns < this.COLUMN_SIZE) {
                totalColumns = this.COLUMN_SIZE;
            }
            var totalRows = Math.ceil(this.countries.length / totalColumns);
            var index = 0;
            for (var row=0; row<totalRows; row++) {
                var currentRowColumns = [];
                for (var column=0; column<totalColumns; column++) {
                    if (index < this.countries.length) {
                        var country = this.countries[index];
                        currentRowColumns.push(country);
                        index ++;
                    }
                    else {
                        break;
                    }
                }
                displayCountries.push(currentRowColumns);
            }
            
            // 数据
            this.displayCountries = displayCountries;
            this.totalColumns = totalColumns;
            this.totalRows = totalRows;
        }
    });
    return mobileSelectCountryView;
});