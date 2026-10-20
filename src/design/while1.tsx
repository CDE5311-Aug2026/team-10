// Adapted from the original Figma design context; layout and layer IDs are preserved.
import {N,CodeConnectSnippet,StatusBarIPhone17Pro,AIChatBox,IconButton,Sliders,Track,Fill,Knob} from "../design-runtime";
import {Home,Book,Settings,MessageCircle,Camera,ChevronRight,ChevronDown,ArrowUp,Mic,Image,Plus} from "lucide-react";
const imgImage18 = "/assets/d480a.png";
const imgImage17 = "/assets/75c14.png";
const imgEllipse23 = "/assets/32c53.svg";
const imgEllipse22 = "/assets/33ecd.svg";
const imgBack = "/assets/d8430.svg";

export default function Home11ReminderFood2Selection1() {
  return (
    <N as="div" className="f0" data-node-id="175:1286" data-name="Home-1-1 Reminder-food 2 -selection 1">
      <N as="div" className="f1" data-node-id="175:1290" />
      <N as="div" className="f520" data-node-id="175:1291" data-name="Reminder-eat">
        <N as="div" className="f247" data-node-id="175:1292" />
        <N as="div" className="f248" data-node-id="175:1293" data-name="Button- Next">
          <N as="p" className="f10" data-node-id="175:1294">
            Select
          </N>
        </N>
        <N as="p" className="f249" data-node-id="175:1295">
          A Little Bite Helps
        </N>
        <N as="p" className="f250" data-node-id="175:1296">
          Explore food ideas that can help slow alcohol absorption.
        </N>
        <N as="a" className="f534" data-node-id="175:1297">
          <N as="img" alt="" className="f21" src={imgEllipse23} />
        </N>
        <N as="div" className="f252" data-node-id="175:1298" data-name="Food card">
          <N as="div" className="f70" data-node-id="175:1299" />
          <N as="p" className="f253" data-node-id="175:1300">{`Avocado & Egg Toast`}</N>
          <N as="p" className="f254" data-node-id="175:1301">
            Carbohydrates, protein and healthy fats.
          </N>
          <N as="p" className="f255" data-node-id="175:1302">
            Calories
          </N>
          <N as="p" className="f256" data-node-id="175:1303">
            350 kcal
          </N>
          <N as="div" className="f257" data-node-id="175:1306" data-name="image 18">
            <N as="div" className="f258">
              <N as="img" alt="" className="f259" src={imgImage18} />
            </N>
          </N>
        </N>
        <N as="div" className="f260" data-node-id="175:1308" data-name="Food card">
          <N as="div" className="f70" data-node-id="175:1309" />
          <N as="p" className="f261" data-node-id="175:1310">
            Mixed Nut
          </N>
          <N as="p" className="f254" data-node-id="175:1311">
            Walnut, peanut, almond
          </N>
          <N as="p" className="f255" data-node-id="175:1312">
            Calories
          </N>
          <N as="p" className="f262" data-node-id="175:1313">
            170 kcal
          </N>
          <N as="div" className="f518" data-node-id="175:1315">
            <N as="img" alt="" className="f21" src={imgEllipse22} />
          </N>
          <N as="div" className="f264" data-node-id="175:1316" data-name="image 17">
            <N as="div" className="f258">
              <N as="img" alt="" className="f265" src={imgImage17} />
            </N>
          </N>
        </N>
        <N as="div" className="f266" data-node-id="175:1317" data-name="Situatiobn- Social">
          <N as="div" className="f111" data-node-id="175:1318" />
          <N as="p" className="f267" data-node-id="175:1319">
            While Drinking
          </N>
        </N>
        <N as="div" className="f268" data-node-id="175:1320" data-name="Situation- Work">
          <N as="div" className="f6" data-node-id="175:1321" />
          <N as="p" className="f269" data-node-id="175:1322">
            Before drink
          </N>
        </N>
      </N>
      <N as="a" className="f20" data-node-id="182:5069" data-name="back">
        <N as="img" alt="" className="f21" src={imgBack} />
      </N>
      <CodeConnectSnippet data-node-id="175:1323" data-name="Status bar">
        {/* iOS and iPadOS 27 component */}
        <StatusBarIPhone17Pro textTime="9:41" time="9:41" />
      </CodeConnectSnippet>
      <N as="div" className="f22" data-node-id="175:1324" data-name="Tap bar- Home">
        <N as="div" className="f23" data-node-id="I175:1324;123:886" data-name="Tap Bar">
          <N as="div" className="f24" data-node-id="I175:1324;131:683" data-name="Home">
            <CodeConnectSnippet data-node-id="I175:1324;97:610" data-name="Home">
              {/* Simple Design System component */}
              <Home />
            </CodeConnectSnippet>
            <N as="p" className="f25" data-node-id="I175:1324;123:811">
              Home
            </N>
          </N>
          <N as="div" className="f26" data-node-id="I175:1324;131:837" data-name="Gallery">
            <CodeConnectSnippet data-node-id="I175:1324;97:609" data-name="Book">
              {/* Simple Design System component */}
              <Book size={20} />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I175:1324;123:848">
              Gallery
            </N>
          </N>
          <N as="div" className="f28" data-node-id="I175:1324;131:914" data-name="Setting">
            <CodeConnectSnippet data-node-id="I175:1324;97:611" data-name="Settings">
              {/* Simple Design System component */}
              <Settings />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I175:1324;123:867">
              Setting
            </N>
          </N>
          <N as="div" className="f29" data-node-id="I175:1324;182:4523" data-name="Chat">
            <N as="div" className="f30" data-node-id="I175:1324;131:760">
              <N as="p" className="f31" data-node-id="I175:1324;123:829">
                Chat
              </N>
            </N>
            <CodeConnectSnippet data-node-id="I175:1324;182:4323" data-name="Message circle">
              {/* Simple Design System component */}
              <MessageCircle size={20} />
            </CodeConnectSnippet>
          </N>
        </N>
        <N as="div" className="f32" data-node-id="I175:1324;199:2023">
          <CodeConnectSnippet data-node-id="I175:1324;182:4804" data-name="Camera">
            {/* Simple Design System component */}
            <Camera size={20} />
          </CodeConnectSnippet>
          <N as="p" className="f33" data-node-id="I175:1324;182:4977">
            Scan
          </N>
        </N>
      </N>
    </N>
  );
}
