Ext.define('Foo.Calc', {

    singleton: true,

    /**
     * Returns the proportion of 2 values
     * @param {Number} value1
     * @param {Number} value2
     * @returns {number}
     */
    proportion: function (value1, value2) {
        if (0 === value2) {
            return 0;
        }

        return value1 / value2;
    },

    /**
     * Rounds the number to the precision
     *
     * @param {number} number
     * @param {number} [precision]
     * @returns {number}
     */
    round: function (number, precision) {
        number = +number || 0;
        precision = precision || 0;
        return parseFloat(number.toFixed(precision));
    },

    /**
     * Returns the percentage of the value. The result is rounded to the precision.
     *
     * @param {Number} value
     * @param {Number} [percent = 100]
     * @param {Number} [precision = 0]
     * @return {*|number}
     */
    percentage: function (value, percent, precision) {
        percent = percent || 0;
        precision = precision || 0;
        return this.round(value * percent / 100, precision);
    },

    /**
     * Returns the VAT amount from of the specified amount
     *
     * @param {number} amount Gross(Brutto) Amount
     * @param {number} vatPercent Vat percentage
     * @return {number} The VAT Amount
     */
    vatAmount: function (amount, vatPercent) {
        return amount * vatPercent / (100 + vatPercent);
    },

    /**
     * Returns the NET amount relative to the VAT
     *
     * @param {number} amount Gross(Brutto) Amount
     * @param {number} vatPercent Vat percentage
     * @return {number} The NET amount
     */
    netAmount: function (amount, vatPercent) {
        return amount * 100 / (100 + vatPercent);
    }

});
