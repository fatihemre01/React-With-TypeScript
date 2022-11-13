import React, { useState } from "react";
import AddToList from "./component/AddToList";
import List from "./component/List";

export interface PeopleInterface {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const App = () => {
  const [people, setPeople] = useState<PeopleInterface["people"]>([
    {
      name: "Fatih",
      age: 18,
      url: "",
      note: "Hi",
    },
  ]);
  return (
    <div>
      <h2>People Invited To My Party</h2>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
};

export default App;
