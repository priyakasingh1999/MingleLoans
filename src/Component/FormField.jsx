import React from "react";

const FormField = ({ name, type, id, style }) => {
  return (
    <div style={style}>
      <label
        for={id}
        style={{ display: "block", fontWeight: "bold", marginBottom: "8px" }}
      >
        {name}
      </label>
      <input
        placeholder={name}
        style={{ minWidth: "100%", padding: "5px 0px" }}
        type={type}
        id={id}
      />
    </div>
  );
};

export default FormField;
