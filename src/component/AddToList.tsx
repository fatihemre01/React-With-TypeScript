import React, { useState } from "react";
import { PeopleInterface as SetPeopleInterface } from "../App";

interface AddListInterface {
  people: SetPeopleInterface["people"];
  setPeople: React.Dispatch<React.SetStateAction<SetPeopleInterface["people"]>>;
}

const AddToList: React.FC<AddListInterface> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handeClick = () => {
    if (!input.name || !input.age || !input.url) {
      alert("Fields can not be empty");
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note,
      },
    ]);

    setInput({
      name: "",
      age: "",
      url: "",
      note: "",
    });
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={input.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        placeholder="Age"
        value={input.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="url"
        placeholder="Url"
        value={input.url}
        onChange={handleChange}
      />
      <textarea
        name="note"
        placeholder="Note"
        value={input.note}
        onChange={handleChange}
      ></textarea>

      <button onClick={handeClick}>Add To List</button>
    </div>
  );
};

export default AddToList;
