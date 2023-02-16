import React from "react";

const TableItem = ({ updateData, deleteHandler, obj, index }) => {
  return (
    <tr>
      <td className="bg-success text-white fw-bold border">{index + 1}</td>
      <td className="bg-dark text-white fw-bold border">{obj.name}</td>
      <td className="bg-success text-white fw-bold border">{obj.email}</td>
      <td className="bg-dark text-white fw-bold border">{obj.password}</td>
      <td className=" text-white fw-bold">
        <button
          onClick={() => deleteHandler(index)}
          className="btn btn-danger fw-bold"
        >
          DELETE
        </button>
        <button
          onClick={() => {
            updateData(obj, index);
          }}
          className="btn btn-warning fw-bold ms-3"
        >
          UPDATE
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
