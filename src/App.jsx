import { useEffect, useState } from "react";
function App() {
  const [visitor, setVisitor] = useState(0);
  useEffect(() => {
    const randomizeVisitor = Math.random();
    console.log(randomizeVisitor);
    if (randomizeVisitor > 0.5) {
      setVisitor(1);
    }
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    console.log({
      event: "ctaClick",
      cta: "button",
      variant: visitor === 0 ? "variant A" : "variant B",
    });
  };
  return (
    <>
      {visitor === 1 ? (
        <img src="https://picsum.photos/200" alt="image" />
      ) : (
        <></>
      )}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
        <button type="submit" onClick={handleClick}>
          Sign Up
        </button>
    </>
  );
}
export default App;