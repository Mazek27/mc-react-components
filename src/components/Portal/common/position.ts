import {CSSProperties} from "react";

export type  positionType = "center" | "top-left" | "top-right" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center" | "left-center" | "right-center"

export const positions : {[x: string]: CSSProperties} = {
  "center": {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    overflow: 'auto'
  },
  "top-left": {
    top: 0,
    left: 0
  },
  "top-right" : {
    top: 0,
    right: 0
  },
  "bottom-right" : {
    bottom: 0,
    right: 0
  },
  "bottom-left" : {
    bottom: 0,
    left: 0
  },
  "top-center" : {
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center'
  },
  "bottom-center" : {
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center'
  },
  "left-center" : {
    top: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center'
  },
  "right-center" : {
    top: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center'
  }
}
