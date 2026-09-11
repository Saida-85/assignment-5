import Logo from "./assets/logo-text.png";

function App() {
  return (
    <>
      <nav className="">
        <img src={Logo} alt="" />

        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="btn btn-active btn-error">Error</button>
      </nav>
    </>
  );
}

export default App;
