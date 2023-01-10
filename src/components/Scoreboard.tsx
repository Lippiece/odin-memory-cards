import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";

import { CardsContext } from "../context/cardsContext";

const Scoreboard = () => {
  const [ _name, setName ]        = useState<string>("John"); // prettier-ignore
  const { score,shownComponents } = useContext(CardsContext);
  return (
    <div
      className="scoreboard"
      data-testid="scoreboard"
      hidden={!shownComponents.has("scoreboard")}
    >
      <Form
        setName={setName}
      />
      <h1>
        Scoreboard
      </h1>
      <p
        data-testid="score"
      >
        {`Score: ${score}`}
      </p>
      <p>
        {_name}
      </p>
    </div>
  );
};
interface FormProps {
  setName: (name_: string) => void;
}
const Form = ({ setName }: FormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { value } = event.currentTarget.querySelector("input") as HTMLInputElement;
    setName(value);
  };
  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      data-testid="form"
    >
      <TextField
        type="text"
        id="name"
        label="Name"
        data-testid="name"
      />
      <Button
        type="submit"
        data-testid="submit"
      >
        Submit
      </Button>
    </form>
  );
};
export default Scoreboard;
