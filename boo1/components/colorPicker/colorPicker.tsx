import React, { Dispatch, FC, SetStateAction } from "react";
import { CirclePicker } from "react-color";

type Props = {
  setDrawingColor: Dispatch<SetStateAction<string>>;
  setIsToolPanelOpen: Dispatch<SetStateAction<boolean>>;
  setIsErasing: Dispatch<SetStateAction<boolean>>;
};

const ColorPicker: FC<Props> = ({
  setDrawingColor,
  setIsToolPanelOpen,
  setIsErasing,
}) => {
  return (
    <CirclePicker
      onChange={(color) => {
        if (color) {
          setDrawingColor(color.hex);
          setIsToolPanelOpen(false);
          setIsErasing(false);
          window.scrollTo(0, -document.body.scrollHeight);
        }
      }}
    />
  );
};

export default ColorPicker;
