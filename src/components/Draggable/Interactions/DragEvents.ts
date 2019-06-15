import {IClientCoordinates, ICoordinateData, IDragHandler} from "../Draggable";

export const DragEvents = () => {
  let handler: IDragHandler;
  let element: HTMLElement;
  let isActivated: boolean;
  let isDragging: boolean;
  let activationCoordinate: IClientCoordinates;
  let lastCoordinate: IClientCoordinates;


  const attach = (htmlElement: HTMLElement, dragHandler: IDragHandler) => {
    handler = dragHandler;
    element = htmlElement;

    if (isValidDragHandler(handler)) {
      element.addEventListener("mousedown", handleMouseDown);
    }
  }

  const detach = () => {
    if (element) {
      element.removeEventListener("mousedown", handleMouseDown);
      detachDocumentEventListeners();
    }
  }

  const isValidDragHandler = (handler: IDragHandler) => {
    return (
      handler != null &&
      (handler.onActivate != null ||
        handler.onDragMove != null ||
        handler.onDragEnd != null ||
        handler.onClick != null ||
        handler.onDoubleClick != null)
    );
  }

  const maybeAlterEventChain = (event: MouseEvent) => {
    if (handler.preventDefault) {
      event.preventDefault();
    }
    if (handler.stopPropagation) {
      event.stopPropagation();
    }
  }

  const handleMouseDown = (event: MouseEvent) => {
    initCoordinateData(event);

    if (handler && handler.onActivate) {
      const exitCode = handler.onActivate(event);
      if (!exitCode) {
        return;
      }
    }

    isActivated = true;
    maybeAlterEventChain(event);

    detachDocumentEventListeners();
    attachDocumentEventListeners()
  }

  const handleMouseUp = (event: MouseEvent) => {
    maybeAlterEventChain(event);

    if(handler && handler.onDragEnd){
      const coords = updateCoordinateData(event)
      handler.onDragEnd(event, coords)
    }
    isActivated = false;
    isDragging = false;
    detachDocumentEventListeners();
  }

  const handleMouseMove = (event: MouseEvent) => {
    maybeAlterEventChain(event);

    if (isActivated) {
      isDragging = true;
    }

    if (isDragging) {
      const coords = updateCoordinateData(event);

      if (handler && handler.onDragMove) {
        handler.onDragMove(event, coords)
      }
    }
  }

  const detachDocumentEventListeners = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }

  const attachDocumentEventListeners = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }

  const initCoordinateData = (event: MouseEvent) => {
    activationCoordinate = [event.clientX, event.clientY];
    lastCoordinate = activationCoordinate
  }

  const updateCoordinateData = (event: MouseEvent) => {
    let currentCoordinate: IClientCoordinates = [event.clientX, event.clientY];
    let delta: IClientCoordinates = [
      currentCoordinate[0] - lastCoordinate[0],
      currentCoordinate[1] - lastCoordinate[1]
    ];
    let offset: IClientCoordinates = [
      currentCoordinate[0] - activationCoordinate[0],
      currentCoordinate[1] - activationCoordinate[1]
    ];

    let data: ICoordinateData = {
      activation: activationCoordinate,
      current: currentCoordinate,
      delta: delta,
      last: lastCoordinate,
      offset: offset,
    };

    lastCoordinate = [event.clientX, event.clientY];

    return data
  }

  return [attach, detach]
}
