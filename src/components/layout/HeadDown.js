import React, { useState } from "react";

const HeadDown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-row space-x-10">
      <div
        className="block flex-col  m-5 relative group "
        onMouseEnter={() => {
          setOpen(true);
        }}

        // onClick={() => {
        //   setOpen(!open);
        // }}
      >
        <button className="p-3 text-sm hover:bg-slate-400">Resources</button>

        <div className={`group-hover:block ${open ? "" : "hidden"}`}>
          <ul className="mt-2 flex flex-col items-center justify-center">
            <li>
              <a href="#">New Starter</a>
            </li>
            <li>
              <a href="#">Stakeholders</a>
            </li>
            <li>
              <a href="#">Checklists</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col  relative group">
        <button className="p-3 text-sm hover:bg-slate-400">Tools</button>

        <div className="hidden group-hover:block">
          <ul className="mt-2 flex flex-col items-center">
            <li>
              <a href="#">TIE</a>
            </li>
            <li>
              <a href="#">Asset manager</a>
            </li>
            <li>
              <a href="#">PM</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeadDown;
