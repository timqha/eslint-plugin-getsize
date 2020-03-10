"use strict";

var rule = require("../../../lib/rules/need-get-font-size-scale-factor"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("need-get-font-size-scale-factor", rule, {

    valid: [
        "fontSize: getFontWithScaleFactor(16)"
    ],

    invalid: [
        {
            code: "var styles = StyleSheet.create({ modal: { fontSize: 16 }})",
            errors: [{
                message: "It is recommended to use the function to scale the fontSize like getFontWithScaleFactor"            }]
        },
        {
            code: "StyleSheet.create({ modal: { fontSize: 16 }})",
            errors: [{
                message: "It is recommended to use the function to scale the fontSize like getFontWithScaleFactor"            }]
        }
    ]
});
