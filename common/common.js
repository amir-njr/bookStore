import { atom } from "jotai";
export const basketData = atom({
  selectedItem: [],
  counter: 0
});


// export const checkExistInArray

const basketHandller = async ({ action }) => {
  const { type, payload } = action;

  const res = await fetch("http://localhost:3000/api/books?id="+payload);
  const json = await res.json();
  const data = json;

  switch (type) {
    case "ADD_ITEM":
      basketData.selectedItem.map((item)=>{
        if(+item.id === payload) {

        }
      })
    console.log(data)
      return 
      case "REMOVE_ITEM":
        return

        case "INCREASE":
        return

        case "DECREASE":
        return
  }
};

export { basketHandller };
