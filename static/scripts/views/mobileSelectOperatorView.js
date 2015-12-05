define(['jquery', 'underscore', 'backbone', "routers/router"], function ($, _, Backbone, Router) {
    var mobileSelectOperatorView = Backbone.View.extend({
        COLUMN_SIZE: 4,
        tagName: 'div',
        template:_.template($('#mobile-select-operator-template').html()),
        initialize: function() {
            this.operators = app.operators;
            this.selected = 0;
            this.rangeStart = 0;
            this.rangeEnd = this.COLUMN_SIZE - 1;
        },
        events: {
            "click #next": "next"
        },
        render: function() {
            this.$el.empty();
            var jsonObject = {
                'operators': this.operators,
                'selected': this.selected,
                'rangeStart': this.rangeStart,
                'rangeEnd': this.rangeEnd
            };
            this.$el.html(this.template(jsonObject));
            this.renderOperators();
            self = this;
            $(document).one("keypress", function(event){ // 绑定一次
                if (event.keyCode==39) {
                    self.changeSelected(1);
                    self.render();
                }
                else if (event.keyCode==37) {
                    self.changeSelected(-1);
                    self.render();
                }
                else if (event.keyCode==13) {
                    var operator = self.selectedOperator();
                    app.selectedOperator = operator;
                    Router.navigate('mobile', {trigger: true});
                }
                return false;
            });
            return this;
        },
        renderOperators: function () {
            this.$el.find("div[operator='"+this.selectedOperator()+"']").css('background','gray'); // .focus();
            if (this.rangeStart <= 0)
            {
                this.$el.find(".operator-left").css('background','url()');
            }
            if (this.rangeEnd >= this.operators.length - 1)
            {
                this.$el.find(".operator-right").css('background','url()');
            }
            for (var i=0; i<this.operators.length; i++) {
                if (i < this.rangeStart || i > this.rangeEnd) {
                    var currentOperator = this.operators[i];
                    this.$el.find("div[operator='"+currentOperator+"']").hide();
                }
            }
        },
        next: function(event) {
            var operator = event.target.getAttribute('operator');
            app.selectedOperator = operator;
            Router.navigate('mobile', {trigger: true});
        },
        selectedOperator: function() {
            var operator = this.operators[this.selected];
            return operator;
        },
        changeSelected: function(offset) {
            if (offset > 0){
                if (this.selected < this.operators.length - 1) {
                    if (this.selected < this.rangeEnd) {
                        this.selected = this.selected + 1;
                    }
                    else if (this.selected == this.rangeEnd) {
                        this.changeRange(offset);
                        this.selected = this.selected + 1;
                    }
                }
            }
            else if (offset < 0) {
                if (this.selected > 0) {
                    if (this.selected > this.rangeStart) {
                        this.selected = this.selected - 1;
                    }
                    else if (this.selected == this.rangeStart) {
                        this.changeRange(offset);
                        this.selected = this.selected - 1;
                    }
                }
            }
        },
        changeRange: function(offset) {
            if (offset > 0){
                if (this.rangeEnd < this.operators.length - 1) {
                    this.rangeStart = this.rangeStart + 1;
                    this.rangeEnd = this.rangeEnd + 1;
                }
            }
            else if (offset < 0){
                if (this.rangeStart > 0) {
                    this.rangeStart = this.rangeStart - 1;
                    this.rangeEnd = this.rangeEnd - 1;
                }
            }
        }
    });
    return mobileSelectOperatorView;
});