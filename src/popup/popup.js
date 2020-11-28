import App from "./popup.svelte";

const app = new App(
  {
    target: document.body,
  }
)

window.popup = app;

export default App;
