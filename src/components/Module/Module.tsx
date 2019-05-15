import * as React from "react";
import {reducer} from "./common/reducer";
import {useReducer} from "react";
import Toolbar from "../Toolbar/Toolbar";
import SideBar from "../SideBar/SideBar";
import ToolbarGroup from "../Toolbar/ToolbarGroup";
import ToolbarItem from "../Toolbar/ToolbarItem";
import "./style/style.scss"

const initialState = () => ({
  sideBar: {
    isOpen: true
  }
});

export const Module = () => {

  const [state, dispatch] = useReducer(reducer, {}, initialState);

  return (
    <div className={"Module"}>
      <SideBar isOpen={state.sideBar.isOpen} onClose={() => dispatch({type:'CLOSE_SIDEBAR'})}/>
      <div className={`content`}>
        <Toolbar position={"left"} onClickItem={itemCn=> dispatch({type:`CLICK_${itemCn.toUpperCase()}`})} onSelectItem={()=> {}}>
          <ToolbarGroup>
            <ToolbarItem itemCn={'module'} type={"immediate"}/>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarItem itemCn={'settings'} type={"immediate"}/>
          </ToolbarGroup>
        </Toolbar>
        <Toolbar position={"right"} onClickItem={()=> {}} onSelectItem={()=> {}}/>

      </div>
    </div>
  )
}
