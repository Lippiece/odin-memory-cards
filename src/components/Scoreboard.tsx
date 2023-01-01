import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";

import { CardsContext } from "../context/cardsContext";

const Scoreboard = () => {
  const [ status_, setStatus ] = useState<StatusData["status"]>("open"); // prettier-ignore
  const [ name_, setName ]     = useState<string>("John"); // prettier-ignore
  const { score }              = useContext(CardsContext);
  return (
    <div
      className="scoreboard"
      data-testid="scoreboard"
    >
      <Form
        setStatus={setStatus}
        status_={status_}
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
        {name_}
      </p>
    </div>
  );
};
interface FormProps {
  setStatus: (status_: StatusData["status"]) => void;
  status_: StatusData["status"];
  setName: (name_: string) => void;
}
const Form = ({ setStatus, status_: status, setName }: FormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { value } = event.currentTarget.querySelector("input") as HTMLInputElement;
    setName(value);
    setStatus("close");
  };
  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      hidden={status === "close"}
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
