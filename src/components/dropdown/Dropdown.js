import React from "react";
import useHovered from "hooks/useHover";
import DropDownItem from "../items/DropdownItem";
import items from "../data/dropdown.json";
import useHover from "hooks/useHover";
import { useState } from "react";
export default function DropDown() {
  return (
    <div className={`w-full relative flex flex-row space-x-24`}>
      {items.map((item, index) => (
        <DropDownItem key={index} item={item} />
      ))}
    </div>
  );
}
