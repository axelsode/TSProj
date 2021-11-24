enum MainScreen {
  MainText = "mainscreen-text",
  SaveText = "SaveText"
} 

enum EditProductScreen {
    EditProductText = "editproductscreen-text"
}

enum ProductScreen {
    ProductText = "productscreen-text"
}

export const tokens = {
    screens: {
      screenMain: MainScreen,
      screenEditProduct: EditProductScreen,
      screenProduct: ProductScreen,
    },
  };