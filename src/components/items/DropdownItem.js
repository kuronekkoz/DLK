import useHovered from "hooks/useHover";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function DropDownItem({ item }) {
  const { hovered, nodeRef } = useHovered();
  const [showDropDown, setShowDropDown] = useState(false);

  if (item.childrens) {
    return (
      <div className="inline-block text-2xl  shrink-0">
        <div
          className="flex flex-row max-w-3xl "
          onClick={() => setShowDropDown(!showDropDown)}
        >
          {item.title}

          {showDropDown && (
            <div className={`flex flex-col pt-10`}>
              {item.childrens.map((child, index) => (
                <DropDownItem key={index} item={child} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <NavLink to={item.path || "#"} className="text-2xl">
        {item.title}
      </NavLink>
    );
  }
}
