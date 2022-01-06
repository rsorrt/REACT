import "./styles.css";
import { Header, Header1, Header2 } from "./component/Header";

export default function App() {
  return (
    <div className="container">
      <h1>Hello CodeSandbox</h1>

      <Header />

      <Header1 title="titolo.1" />

      <Header2 title="titolo.2" />
    </div>
  );
}
