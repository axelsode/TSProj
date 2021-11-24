enum MainScreen {
  MainText = "mainscreen-text",
  SaveText = "SaveText",
  CancelText = "CancelText",
  DeleteText = "DeleteText",
  EditText = "EditText",
  NewProductText = "NewProductText",
  NameText = "NameText",
  PriceText = "PriceText",
  TypeText = "TypeText"
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