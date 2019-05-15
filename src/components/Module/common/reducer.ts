

export const reducer = (state:any, action:any) => {
  console.log(action);
  switch(action.type){
    case `CLICK_SETTINGS`: {
      return {
        ...state,
        sideBar: {
          isOpen: !state.sideBar.isOpen
        }
      }
    }
    case 'CLOSE_SIDEBAR': {
      return {...state,
        sideBar: {
          isOpen: false
        }
      }
    }
    default:
      return state;
      // throw new Error('Unexpected action');
  }
};
