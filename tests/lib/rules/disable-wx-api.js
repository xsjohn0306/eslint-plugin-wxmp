/**
 * @fileoverview 禁用微信API
 * @author wwh
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/disable-wx-api"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("disable-wx-api", rule, {
  valid: [
    // give me some code that won't trigger a warning
    {
      code: "app.wx.setTopBarText()",
    },
  ],

  invalid: [
    {
      code: "wx.setTopBarText()",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
