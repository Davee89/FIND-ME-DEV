import { Switch } from '@headlessui/react';
import { useDarkModeContext } from '../../../context/DarkModeContext';

const Toggle = () => {
  const { isDark, setIsDark } = useDarkModeContext();

  return (
    <Switch
      checked={isDark}
      onChange={setIsDark}
      className={`${isDark ? 'bg-gray-700 ' : 'bg-white'} relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          isDark ? 'translate-x-6 bg-gray-900 shadow-yellow-100 shadow-sbb' : 'translate-x-1 bg-yellow-400 shadow-sb'
        } inline-block h-4 w-4 transform rounded-full transition`}
      />
    </Switch>
  );
};

export default Toggle;
