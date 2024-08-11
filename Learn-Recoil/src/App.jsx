import { countAtom } from "./store/atoms/count";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
}

function Count() {
  return (
    <>
      <Buttons />
      <CounterRender />
    </>
  );
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
}

function CounterRender() {
  const count = useRecoilValue(countAtom);
  return (
    <>
      {count}
      <div>{count % 2 == 0 ? "It is even" : " "}</div>
    </>
  );
}

export default App;
