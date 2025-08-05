import React, { useState } from "react";
import data from "./data";

const Accordion = () => {
    const [selected, setSelected] = useState(null);
    
    function handleSingleSelection(currentId) { 
        setSelected(currentId === selected ? null : currentId)
    }

  return (
      <div className="wrapper">
          <button>Enable Multi Selection</button>
          <div className="accordion">
              {data.map((item) => (
                  <div key={item.id} className="item">
                      <div onClick={() => handleSingleSelection(item.id)} className="title">
                          <h3>{item.question}</h3>
                          <span>+</span>
                      </div>
                      {selected === item.id && (
                          <div className="content">
                              <p>{item.answer}</p>
                          </div>
                      )}
                  </div>
              ))}
      </div>
    </div>
  );
};

export default Accordion;
