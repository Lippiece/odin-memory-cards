import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";

import { CardsContext } from "../context/cardsContext";

const Scoreboard = () => {
  const [ _name, setName ]               = useState<string>("John"); // prettier-ignore
  const { score, shownComponents, time } = useContext(CardsContext);
  return (
    <div
      className="scoreboard"
      data-testid="scoreboard"
      hidden={!shownComponents.has("scoreboard")}
    >
      <Form setName={setName} />
      <Score name={_name} />
      <Timings time={time} />
    </div>
  );
};
interface FormProps {
  setName: (name_: string) => void;
}
const Form = ({ setName }: FormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { value } = event.currentTarget.querySelector("input");
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
        data-testid="nameInput"
        role="textbox"
      />
      <Button
        id="submit"
        type="submit"
        data-testid="submit"
        role="button"
      >
        Submit
      </Button>
    </form>
  );
};
interface ScoreProps {
  name: string;
}
const Score = ({ name }: ScoreProps) => {
  const { score } = useContext(CardsContext);
  return (
    <div>
      <h1>Scoreboard</h1>
      <p data-testid="score">{`Score: ${score}`}</p>
      <p>{name}</p>
    </div>
  );
};
const Timings = ({
  time,
}: {
  time: {
    general: number,
  },
}) => {
  const getGeneralTimeTaken = () => {
    const startTime = new Date("01/01/2020 12:00:00");
    const endTime   = new Date("01/01/2020 12:30:00");

    const diffMs   = endTime.getTime() - startTime.getTime();
    const diffMins = Math.floor(diffMs / 60_000);
    const diffSecs = (diffMs % 60_000) / 1000;

    console.log(`${diffMins}:${diffSecs}`);
  };
  return (
    <div
      className="timings"
      data-testid="timings"
    >
      <h1>Timings:</h1>
      <h2>Time taken to complete the game: {getGeneralTimeTaken()}</h2>
    </div>
  );
};
export default Scoreboard;
