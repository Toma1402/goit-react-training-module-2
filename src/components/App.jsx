import { Counter } from './Counter/Counter';
import { Dropdown } from './Dropdown/Dropdown';
export const App = () => {
  return (
    <>
      <Counter initialValue={0} />
      <Dropdown />
    </>
  );
};
