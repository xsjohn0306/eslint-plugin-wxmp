/**
 * @fileoverview 禁用微信API
 * @author wwh
 */
'use strict';
module.exports = {
  meta: {
    docs: {
      description: "禁用微信API",
    },
    fixable: null,
  },

  create(context) {
    const { options = [] } = context;
    const $_options = options[0] || {};
    const { list = [] } = $_options;

    return {
      CallExpression: (node) => {
        const { callee } = node;
        if (!callee) {
          return;
        }
        const { object } = callee;
        if (!object) {
          return;
        }
        const { name: objectName } = object;
        if (objectName !== 'wx') {
          return;
        }
        const { property } = callee;
        if (!property) {
          return;
        }
        const { name: propertyName } = property;
        if (!list.includes(propertyName)) {
          return;
        }
        context.report({
          node,
          message: `请使用app.wx.${propertyName}`,
        });
      },
    };
  },
};
