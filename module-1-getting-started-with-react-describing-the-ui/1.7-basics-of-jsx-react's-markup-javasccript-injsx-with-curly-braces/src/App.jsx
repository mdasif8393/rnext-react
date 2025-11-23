const style1 = {
  backgroundColor: "pink",
};

const style2 = {
  backgroundColor: "cyan",
};

const color = "green";

export default function App() {
  return (
    <div>
      <h1>Today's Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul style={color === "red" ? style1 : style2}>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
