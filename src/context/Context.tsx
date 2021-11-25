import React from 'react'

export interface IItemObject {
    name: string,
    price: number,
    type: string,
}

export interface IItemObjectList extends Array<IItemObject> {}

export interface IContext {
    itemList?: IItemObjectList,
    addItem: (item: IItemObject) => void;
    removeItem: (name: string) => void;
    updateItem: (newItem: IItemObject, oldName: string) => void;
    
}

export const initialValues = {
    items: [
       
    ] as IItemObjectList,
    addItem: () => {
    },
    removeItem: () => {
    },
    updateItem: () => {
    },
};

export const Context = React.createContext<IContext>(initialValues);



export const ContextProvider: React.FC = (props) => {

    const [itemListState, setItemListState] = React.useState(initialValues)

    return (
        <Context.Provider value={{
      ...itemListState,
      addItem: (item: IItemObject) => {
          console.log("log", "addItem")
          console.log("length", itemListState)
        const list = itemListState.items
        list.push(item)
        setItemListState({
            ...itemListState,
            items: list
        })
    },
    removeItem: (name: string) => {
        setItemListState({
            ...itemListState,
            items: itemListState.items.filter((i) => {
                return i.name != name
            })
        })
    },
    updateItem: ( newItem: IItemObject, oldName: string) => {
        var newList: IItemObject[] = itemListState.items.filter(function (el: IItemObject) {
            return el.name != oldName  })
            newList.push(newItem)
            setItemListState({
            ...itemListState,
            items: newList
        })
    }
            
        }}>
            {props.children}

        </Context.Provider>

    );

}
