import { Counter } from './Counter';
import { Dropdown } from './Dropdown';
import { ColorPicker } from './ColorPicker';
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#008000' },
  { label: 'blue', color: '#0000FF' },
  { label: 'grey', color: '#A9A9A9' },
  { label: 'pink', color: '#FFC0CB' },
  { label: 'indigo', color: '#4B0082' },
];
export const App = () => {
  return (
    <>
      <Counter initialValue={0} />
      <Dropdown />
      <ColorPicker options={colorPickerOptions} />
    </>
  );
};
