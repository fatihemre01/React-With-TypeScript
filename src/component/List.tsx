import React from "react";
import { PeopleInterface as ListInterface } from "../App";

const List: React.FC<ListInterface> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((x) => {
      return (
        <div>
          <img src={x.url} alt="" />
          <h2>{x.name}</h2>
          <p>{x.age} years old</p>
          <p>{x.note}</p>
        </div>
      );
    });
  };
  return (
    <>
      <ul>{renderList()}</ul>
    </>
  );
};

export default List;
