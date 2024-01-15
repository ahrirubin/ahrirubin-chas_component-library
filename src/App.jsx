import React from "react";
import { AiFillAliwangwang } from "react-icons/ai";
import { AiFillBug } from "react-icons/ai";
import { AiFillCrown } from "react-icons/ai";

import Alerts from "./components/Alerts";
import Button from "./components/Button";
import Badges from "./components/Badges";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div>
        <h1>Button Component:</h1>
        <Button color="red" disable={true} size={20}>
          Disabled
        </Button>
        <br></br>
        <Button color="blue" disable={false} size={50}>
          Enabled
        </Button>
      </div>

      <div>
        <h1>Alerts Component:</h1>
        <Alerts
          bgColor="#fa9696"
          borderColor="red"
          icon="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Cross_red_circle.svg/480px-Cross_red_circle.svg.png"
          text="Your attempt failed."
        ></Alerts>
        <br></br>
        <Alerts
          bgColor="#60c257"
          borderColor="green"
          icon="https://static.vecteezy.com/system/resources/thumbnails/015/130/843/small/check-mark-icon-free-png.png"
          text="Your attempt succeeded."
        ></Alerts>
      </div>

      <div>
        <h1>Badges Component: </h1>
        <div style={{ display: "flex" }}>
          <Badges
            color="green"
            size="100"
            icon={<AiFillAliwangwang />}
          ></Badges>
          <Badges color="red" size="100" icon={<AiFillBug />}></Badges>
          <Badges color="purple" size="100" icon={<AiFillCrown />}></Badges>
        </div>
      </div>

      <div>
        <h1>Card Component:</h1>
        <Card
          href="https://en.wikipedia.org/wiki/Lin_Lanying"
          imgSrc="https://i.imgur.com/1bX5QH6.jpg"
          imgAlt="Lin Lanying"
        >
          This is a card
        </Card>
      </div>
      <br></br>
      <Card
        href="https://en.wikipedia.org/wiki/Gregorio_Y._Zara"
        imgSrc="https://i.imgur.com/7vQD0fPs.jpg"
        imgAlt="Gregorio Y. Zara"
      >
        This is another card
      </Card>
    </>
  );
}

export default App;
