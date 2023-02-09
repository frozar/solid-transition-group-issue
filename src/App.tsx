import { Component, createSignal } from "solid-js";

import { Transition } from "solid-transition-group";

const App: Component = () => {
  const [show, setShow] = createSignal(false);
  return (
    <>
      <button onClick={() => setShow((show) => !show)}>Toggle show</button>
      <Transition name="slide-fade">{show() && <div>Hello</div>}</Transition>
    </>
  );
};

export default App;
