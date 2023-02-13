import Button from '../../components/UI/Button/Button';

type Props = {};

const NotLogged = (props: Props) => {
  return (
    <div className="md:col-[2/5] md:row-[2/7] w-[100%] h-[100%] flex flex-col justify-center items-center gap-10 ">
      <h2>You are not logged in!</h2>
      <div className="flex gap-10">
        <Button name="Log in" />
        <Button name="Register" />
      </div>
    </div>
  );
};

export default NotLogged;
