import Button from "./Button";

const Header = () => {
  return (
    <header>
      <h2>COMPONENT: Header</h2>
    </header>
  );
};

const Header1 = (pars) => {
  const onClick = () => console.log("click");

  return (
    <header>
      <h2>COMPONENT: Header1 - title: {pars.title}</h2>
      <Button text="clickMe" onClick={onClick} />
    </header>
  );
};

const Header2 = ({ title }) => {
  return (
    <header>
      <h2>COMPONENT: Header2 - title: {title}</h2>
    </header>
  );
};

export { Header, Header1, Header2 };
