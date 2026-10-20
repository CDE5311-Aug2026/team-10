// Adapted from the original Figma design context; layout and layer IDs are preserved.
import {N,CodeConnectSnippet,StatusBarIPhone17Pro,AIChatBox,IconButton,Sliders,Track,Fill,Knob} from "../design-runtime";
import {Home,Book,Settings,MessageCircle,Camera,ChevronRight,ChevronDown,ArrowUp,Mic,Image,Plus} from "lucide-react";
const imgImage18 = "/assets/d480a.png";
const imgImage17 = "/assets/75c14.png";
const imgEllipse23 = "/assets/69c8b.svg";
const imgEllipse22 = "/assets/f77e9.svg";
const imgBack = "/assets/d8430.svg";

export default function Home12ReminderFood2() {
  return (
    <N as="div" className="f0" data-node-id="151:1122" data-name="Home-1-2 Reminder-food 2">
      <N as="div" className="f1" data-node-id="151:1126" />
      <N as="div" className="f246" data-node-id="175:1106" data-name="Reminder-eat">
        <N as="div" className="f247" data-node-id="175:1107" />
        <N as="div" className="f248" data-node-id="175:1108" data-name="Button- Next">
          <N as="p" className="f10" data-node-id="175:1109">
            Select
          </N>
        </N>
        <N as="p" className="f249" data-node-id="175:1110">
          A Little Bite Helps
        </N>
        <N as="p" className="f250" data-node-id="175:1111">
          Explore food ideas that can help slow alcohol absorption.
        </N>
        <N as="div" className="f251" data-node-id="175:1112">
          <N as="img" alt="" className="f21" src={imgEllipse23} />
        </N>
        <N as="div" className="f252" data-node-id="175:1144" data-name="Food card">
          <N as="div" className="f70" data-node-id="175:1145" />
          <N as="p" className="f253" data-node-id="175:1146">{`Avocado & Egg Toast`}</N>
          <N as="p" className="f254" data-node-id="175:1147">
            Carbohydrates, protein and healthy fats.
          </N>
          <N as="p" className="f255" data-node-id="175:1148">
            Calories
          </N>
          <N as="p" className="f256" data-node-id="175:1149">
            350 kcal
          </N>
          <N as="div" className="f257" data-node-id="175:1104" data-name="image 18">
            <N as="div" className="f258">
              <N as="img" alt="" className="f259" src={imgImage18} />
            </N>
          </N>
        </N>
        <N as="div" className="f260" data-node-id="175:1136" data-name="Food card">
          <N as="div" className="f70" data-node-id="175:1137" />
          <N as="p" className="f261" data-node-id="175:1138">
            Mixed Nut
          </N>
          <N as="p" className="f254" data-node-id="175:1139">
            Walnut, peanut, almond
          </N>
          <N as="p" className="f255" data-node-id="175:1140">
            Calories
          </N>
          <N as="p" className="f262" data-node-id="175:1141">
            170 kcal
          </N>
          <N as="button" className="f263" data-node-id="175:1143">
            <N as="img" alt="" className="f21" src={imgEllipse22} />
          </N>
          <N as="div" className="f264" data-node-id="173:1100" data-name="image 17">
            <N as="div" className="f258">
              <N as="img" alt="" className="f265" src={imgImage17} />
            </N>
          </N>
        </N>
        <N as="div" className="f266" data-node-id="175:1116" data-name="Situatiobn- Social">
          <N as="div" className="f111" data-node-id="175:1117" />
          <N as="p" className="f267" data-node-id="175:1118">
            While Drinking
          </N>
        </N>
        <N as="div" className="f268" data-node-id="175:1119" data-name="Situation- Work">
          <N as="div" className="f6" data-node-id="175:1120" />
          <N as="p" className="f269" data-node-id="175:1121">
            Before drink
          </N>
        </N>
      </N>
      <N as="a" className="f270" data-node-id="182:5053" data-name="back">
        <N as="img" alt="" className="f21" src={imgBack} />
      </N>
      <CodeConnectSnippet data-node-id="164:1625" data-name="Status bar">
        {/* iOS and iPadOS 27 component */}
        <StatusBarIPhone17Pro textTime="9:41" time="9:41" />
      </CodeConnectSnippet>
      <N as="div" className="f66" data-node-id="151:1128" data-name="Tap bar- Home">
        <N as="div" className="f23" data-node-id="I151:1128;123:886" data-name="Tap Bar">
          <N as="div" className="f24" data-node-id="I151:1128;131:683" data-name="Home">
            <CodeConnectSnippet data-node-id="I151:1128;97:610" data-name="Home">
              {/* Simple Design System component */}
              <Home />
            </CodeConnectSnippet>
            <N as="p" className="f25" data-node-id="I151:1128;123:811">
              Home
            </N>
          </N>
          <N as="div" className="f26" data-node-id="I151:1128;131:837" data-name="Gallery">
            <CodeConnectSnippet data-node-id="I151:1128;97:609" data-name="Book">
              {/* Simple Design System component */}
              <Book size={20} />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I151:1128;123:848">
              Gallery
            </N>
          </N>
          <N as="div" className="f28" data-node-id="I151:1128;131:914" data-name="Setting">
            <CodeConnectSnippet data-node-id="I151:1128;97:611" data-name="Settings">
              {/* Simple Design System component */}
              <Settings />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I151:1128;123:867">
              Setting
            </N>
          </N>
          <N as="div" className="f29" data-node-id="I151:1128;182:4523" data-name="Chat">
            <N as="div" className="f30" data-node-id="I151:1128;131:760">
              <N as="p" className="f31" data-node-id="I151:1128;123:829">
                Chat
              </N>
            </N>
            <CodeConnectSnippet data-node-id="I151:1128;182:4323" data-name="Message circle">
              {/* Simple Design System component */}
              <MessageCircle size={20} />
            </CodeConnectSnippet>
          </N>
        </N>
        <N as="div" className="f32" data-node-id="I151:1128;199:2023">
          <CodeConnectSnippet data-node-id="I151:1128;182:4804" data-name="Camera">
            {/* Simple Design System component */}
            <Camera size={20} />
          </CodeConnectSnippet>
          <N as="p" className="f33" data-node-id="I151:1128;182:4977">
            Scan
          </N>
        </N>
      </N>
    </N>
  );
}
