"use strict";

function checkArguments(parsedArguments, context, node) {
  if (parsedArguments && parsedArguments.length > 0) {
    (parsedArguments[0].properties || []).forEach(({value}) => {
      if (value) {
        // go through the style properties
        (value.properties || []).forEach((styleContent) => {
        if (
          // we find all the Font Size properties where literals are used as values, i.e. digits
          styleContent
          && styleContent.key
          && styleContent.key.name === "fontSize"
          && styleContent.value
          && styleContent.value.value
        ) {
          context.report({
              node,
              message: 'It is recommended to use the function to scale the fontSize like getFontWithScaleFactor',
              fix: function(fixer) {
                return fixer.replaceText(styleContent.value, `getFontWithScaleFactor(${styleContent.value.value})`);
              }
          });
        }
      })
      }
    });
  }
}


module.exports = {
    meta: {
        type: "suggestion",
        docs: {
            description: "get size for different screen sizes.",
            category: "Possible Errors",
            recommended: true,
        },
        fixable: "code",
        schema: [] // no options
    },
    create: function(context) {
      return {
          "ExportDefaultDeclaration": function(node) {
              checkArguments(node.declaration.arguments, context, node);
          },
          "ExpressionStatement": function(node) {
              checkArguments(node.expression.arguments, context, node);
          },
          "VariableDeclaration": function(node) {
            (node.declarations || []).forEach(function(variableDeclarator) {
              if(
                // only for file with name styles
                // variableDeclarator.id.name == 'styles' &&
                variableDeclarator
                && variableDeclarator.init
                && variableDeclarator.init.type == 'CallExpression'
              ) {
                checkArguments(variableDeclarator.init.arguments, context, node);
              }
            });
          }
      };
  }
};
module.exports.schema = [];
