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
            this.$el.find("div[country='"+this.selectedCountry()+"']").css('background','gray'); 
            // 隐藏区域外的国家
            for (var i=0; i<this.hideCountries.length; i++) {
                var country = this.hideCountries[i];
                this.$el.find("div[country='"+country+"']").hide();
            }
            return this;
        },
        next: function(event) {
            var country = event.currentTarget.getAttribute('country');
            app.selectedCountry = country;
            Backbone.history.history.back(); //返回
        },
        selectedCountry: function() {
            var country = this.countries[this.selected];
            return country;
        },
        buildDisplayData: function() {
            // 计算行、列数
            var totalColumns = Math.ceil(this.countries.length / this.ROW_SIZE);
            if (totalColumns < this.COLUMN_SIZE) {
                totalColumns = this.COLUMN_SIZE;
            }
            var totalRows = Math.ceil(this.countries.length / totalColumns);
            
            // 展示的国家规则行、列
            var displayCountries = []; // 数组嵌套数组;
            var hideCountries = [];
            var index = 0;
            for (var row=0; row<totalRows; row++) {
                var currentRowColumns = [];
                for (var column=0; column<totalColumns; column++) {
                    if (index < this.countries.length) {
                        var country = this.countries[index];
                        currentRowColumns.push(country);
                        index ++;
                        // 不在展示区域则隐藏
                        if (column < this.rangeStart || column > this.rangeEnd) {
                            hideCountries.push(country);
                        }
                    }
                    else {
                        break;
                    }
                }
                displayCountries.push(currentRowColumns);
            }
            
            // 数据
            this.totalColumns = totalColumns;
            this.totalRows = totalRows;
            this.displayCountries = displayCountries;
            this.hideCountries = hideCountries;
        }
    });
    return mobileSelectCountryView;
});