type Props = {
  isOpen: boolean;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hamburger = ({ isOpen, onClick }: Props) => {
  return (
    <>
      <div className="md:hidden space-y-2 z-40" onClick={() => onClick(!isOpen)}>
        <span
          className={`block h-0.5 w-8 animate-pulse bg-white ${
            isOpen ? 'rotate-45 transition-all translate-y-2 animate-none' : 'transition-all'
          }`}
        ></span>
        <span
          className={`block h-0.5 w-8 animate-pulse bg-white ${
            isOpen ? 'rotate-180 opacity-0 transition-all animate-none' : 'transition-all'
          }`}
        ></span>
        <span
          className={`block h-0.5 w-8 animate-pulse bg-white ${
            isOpen ? '-rotate-45 -translate-y-3 transition-all animate-none' : 'transition-all'
          }`}
        ></span>
      </div>
    </>
  );
};
export default Hamburger;
