function isDraggable(el: HTMLElement) {
  return Array.from(el.classList).indexOf('rap-pin') !== -1;
}

export const getRangeBox = (event: MouseEvent | React.MouseEvent<HTMLDivElement>, currentDragElement: HTMLDivElement | null) => {
  let rangeBox = event.target as HTMLElement;
  if (event.type === 'click' && isDraggable(rangeBox) && rangeBox?.parentElement?.parentElement) {
    rangeBox = rangeBox.parentElement.parentElement;
  }
  if (event.type === 'mousemove' && currentDragElement?.parentElement?.parentElement) {
    rangeBox = currentDragElement.parentElement.parentElement;
  }
  return rangeBox;
};
