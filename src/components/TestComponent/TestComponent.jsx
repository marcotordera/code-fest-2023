import { Button } from "@material-ui/core";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
const counterStore = observable({
  count: 0,
  increment: action(function () {
    this.count++;
  }),
  decrement: action(function () {
    this.count--;
  }),
});
const TestComponent = observer(() => {
  return (
    <div>
      <h1>Count: {counterStore.count}</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => counterStore.increment()}
      >
        +
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => counterStore.decrement()}
      >
        -
      </Button>
    </div>
  );
});

export { TestComponent, counterStore };
