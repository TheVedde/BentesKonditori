// $(document).ready(function () {
//     $.Shop("cake");
//
// });

function setCookie(key, value) {
    localStorage.setItem(key, value);
}

(function ($) {
    $.Shop = function (element) {
       this.$element = $(element);
       this.init();
    };

    $.Shop.prototype = {
        init: function () {
            this.cartPrefix = "conditory-";
            this.cartName = this.cartPrefix + "cart";
            this.shippingRates = this.cartPrefix + "shipping-rates";
            this.total = this.cartPrefix + "total";
            this.storage = sessionStorage;

            //TODO: Insert the values
            this.$addToCart = this.$element.find("addToCart");
            this.$cart = this.$element.find("cart");
            // this.$checkoutCart = this.$element.find("");
            // this.$checkoutOrder = this.$element.find("");
            // this.$shipping = this.$element.find("");
            // this.$subtotal = this.$element.find("");
            // this.$shoppingCartActions = this.$element.find("");
            // this.$updateCartBtn = this.$element.find("");
            // this.$emptyCartBtn = this.$element.find("");
            // this.$userDetails = this.$element.find("");

            this.currency = "&euro;";

            // this.requiredFields = {
            //     expression: {
            //         value: /^([w-.]+)@((?:[w]+.)+)([a-z]){2,4}$/
            //     },
            //     str: {
            //         value: ""
            //     }
            // }
        },

        _emptyCart: function () {
            sessionStorage.clear();
        },

        _formatNumber: function (num, places) {
            return num.toFixed(places);

        },

        _extractPrice: function (element) {
            let self = this;
            let text = element.text();
            return text.replace(self.currency, "").replace("", "");
        },

        _convertString: function( numStr ) {
            var num;
            if( /^[-+]?[0-9]+.[0-9]+$/.test( numStr ) ) {
                num = parseFloat( numStr );
            } else if( /^d+$/.test( numStr ) ) {
                num = parseInt( numStr );
            } else {
                num = Number( numStr );
            }

            if( !isNaN( num ) ) {
                return num;
            } else {
                console.warn( numStr + " cannot be converted into a number" );
                return false;
            }
        },

        _convertNumber: function( n ) {
            var str = n.toString();
            return str;
        },

        _toJSONObject: function (str) {
            return JSON.parse(str);
        },

        _toJSONString: function (obj) {
            return JSON.stringify(obj);
        },

        _addToCart: function (values) {
            let cart = sessionStorage.getItem(this.cartName);
            let cartObject = this._toJSONObject(cart);
            console.log(sessionStorage.getItem(this.cartName));
            console.log(cart);
            let cartCopy = cartObject;
            let items = cartCopy.items;
            items.push(values);

            sessionStorage.setItem(this.cartName, this._toJSONString(cartCopy));
        },


        createCart: function() {
            if( sessionStorage.getItem( this.cartName ) == null ) {

                var cart = {};
                cart.items = [];

                sessionStorage.setItem( this.cartName, this._toJSONString( cart ) );
                sessionStorage.setItem( this.shippingRates, "0" );
                sessionStorage.setItem( this.total, "0" );
            }
        },

        displayCart: function () {
            if(this.$cart.length) {

            }
        }
    };

    $(function () {
        let shop = new $.Shop("#site").createCart();
        // shop.createCart();
        // shop.init();
    });
})($);


function addCake() {

}