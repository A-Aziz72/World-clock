import "./App.css";
import Clock from "./Clock.jsx";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <h1 className="my-4">World Clock</h1>

        <div className="clock-table">
          <div className="clock-header">
            <div>City</div>
            <div>Date</div>
            <div>Time</div>
            <div>Day</div>
          </div>

          <Clock timeZone="Europe/London" label="London" />
          <Clock timeZone="Asia/Karachi" label="Pakistan" />
          <Clock timeZone="America/New_York" label="New York" />
          <Clock timeZone="Asia/Bahrain" label="Bahrain" />
          <Clock timeZone="Asia/Kolkata" label="India" />
          <Clock timeZone="Canada/Atlantic" label="Canada" />
          <Clock timeZone="Africa/Cairo" label="Egypt" />
        </div>
      </Container>
    </>
  );
}

export default App;
