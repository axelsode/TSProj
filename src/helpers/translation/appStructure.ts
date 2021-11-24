enum MainScreen {
    MainText = "mainscreen-text",
    SaveText = "SaveText",
    CancelText = "CancelText",
    DeleteText = "DeleteText",
    EditText = "EditText",
    NewProductText = "NewProductText",
    NameText = "NameText",
    PriceText = "PriceText",
    TypeText = "TypeText",
    TypeType1 = "TypeType1",
    TypeType2 = "TypeType2"
} 

enum EditProductScreen {
  EditProductText = "editproductscreen-text",
  HeaderName = "HeaderName"
}

enum ProductScreen {
  ProductText = "productscreen-text",
  NameText = "NameText",
  PriceText = "PriceText",
  ErrorName = "ErrorName",
  ErrorPrice1 = "ErrorPrice1",
  ErrorPrice2 = "ErrorPrice2"
}

export const tokens = {
    screens: {
      screenMain: MainScreen,
      screenEditProduct: EditProductScreen,
      screenProduct: ProductScreen,
    },
  };