export const DetermineTemplateAreas = (recipe) => {
    const templateAreas = {};
  
    if (recipe.dietLabels.length != 0) {
      if (recipe.cautions.length != 0) {
        templateAreas.base = `
          "info"
          "ingr"
          "hl"
          "dlCau"
          "nutr"
        `;
        templateAreas.sm = `
          "info nutr"
          "ingr ingr"
          "hl hl"
          "dlCau dlCau"
        `;
        templateAreas.md = `
          "info ingr nutr"
          "hl hl dlCau"
        `;
      } else {
        templateAreas.base = `
          "info"
          "ingr"
          "hl"
          "dl"
          "nutr"
        `;
        templateAreas.sm = `
          "info nutr"
          "ingr ingr"
          "hl hl"
          "dl dl"
        `;
        templateAreas.md = `
          "info ingr nutr"
          "hl hl dl"
        `;
      }
    } else if (recipe.cautions.length != 0) {
      templateAreas.base = `
        "info"
        "ingr"
        "hl"
        "cau"
        "nutr"
      `;
      templateAreas.sm = `
        "info nutr"
        "ingr ingr"
        "hl hl"
        "cau cau"
      `;
      templateAreas.md = `
        "info ingr nutr"
        "hl hl cau"
      `;
    } else {
      templateAreas.base = `
        "info"
        "ingr"
        "hl"
        "nutr"
      `;
      templateAreas.sm = `
        "info nutr"
        "ingr ingr"
        "hl hl"
      `;
      templateAreas.md = `
        "info ingr nutr"
        "hl hl hl"
      `;
    }
  
    return templateAreas;
  };
  