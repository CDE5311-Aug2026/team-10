// Adapted from the original Figma design context; layout and layer IDs are preserved.
import {N,CodeConnectSnippet,StatusBarIPhone17Pro,AIChatBox,IconButton,Sliders,Track,Fill,Knob} from "../design-runtime";
import {Home,Book,Settings,MessageCircle,Camera,ChevronRight,ChevronDown,ArrowUp,Mic,Image,Plus} from "lucide-react";
const imgBack = "/assets/d8430.svg";

export default function Home12ReminderWater() {
  return (
    <N as="div" className="f0" data-node-id="175:1424" data-name="Home-1-2 Reminder-water">
      <N as="div" className="f59" data-node-id="175:1428" />
      <N as="div" className="f60" data-node-id="175:2312" data-name="Reminder-water">
        <N as="p" className="f3" data-node-id="I175:2312;175:1671">
          Stay Hydrated
        </N>
        <N as="div" className="f4" data-node-id="I175:2312;175:1658" />
        <N as="div" className="f5" data-node-id="I175:2312;175:1659" data-name="Situation- With Others">
          <N as="div" className="f6" data-node-id="I175:2312;175:1660" />
          <N as="p" className="f7" data-node-id="I175:2312;175:1661">
            Amount
          </N>
          <CodeConnectSnippet data-node-id="I175:2312;175:1662" data-name="Chevron down">
            {/* Simple Design System component */}
            <ChevronDown size={20} />
          </CodeConnectSnippet>
        </N>
        <N as="div" className="f8" data-node-id="I175:2312;175:1663" data-name="Situation- With Others">
          <N as="div" className="f6" data-node-id="I175:2312;175:1664" />
          <N as="p" className="f7" data-node-id="I175:2312;175:1665">
            30 minutes
          </N>
          <CodeConnectSnippet data-node-id="I175:2312;175:1666" data-name="Chevron down">
            {/* Simple Design System component */}
            <ChevronDown size={20} />
          </CodeConnectSnippet>
        </N>
        <N as="div" className="f9" data-node-id="I175:2312;175:1667" data-name="Button- Next">
          <N as="p" className="f10" data-node-id="I175:2312;175:1668">
            Pause
          </N>
        </N>
        <N as="div" className="f11" data-node-id="I175:2312;175:1669" data-name="Button- Next">
          <N as="p" className="f10" data-node-id="I175:2312;175:1670">
            Start
          </N>
        </N>
        <N as="p" className="f15" data-node-id="I175:2312;175:1675">
          Set a gentle check-in to help you avoid drinking too quickly.
        </N>
        <N as="p" className="f61" data-node-id="I175:2312;175:1676">
          Goal
        </N>
        <N as="p" className="f62" data-node-id="I175:2312;175:1677">
          Check-in time
        </N>
        <N as="p" className="f63" data-node-id="I175:2312;175:2310">
          0ml
        </N>
        <N as="p" className="f64" data-node-id="I175:2312;175:2311">
          250ml
        </N>
        <N as="p" className="f19" data-node-id="I175:2312;175:1679">{`"A little water break? Enjoy a refreshing glass before deciding on your next drink."`}</N>
        <CodeConnectSnippet data-node-id="I175:2312;175:1653" data-name="Plus">
          {/* Simple Design System component */}
          <Plus size={32} />
        </CodeConnectSnippet>
        <CodeConnectSnippet data-node-id="I175:2312;175:2296" data-name="Sliders">
          {/* iOS and iPadOS 26 component
Docs:
  https://developer.apple.com/design/human-interface-guidelines/sliders */}
          <Sliders booleanShowSymbols={false} showSymbols={false} textSymbolMin="tortoise.fill" symbolMin="tortoise.fill" booleanShowTicks={false} showTicks={false} textSymbolMax="hare.fill" symbolMax="hare.fill" variantValue="50%" value="50%">
            <Track />
            <Fill />
            <Knob />
          </Sliders>
        </CodeConnectSnippet>
      </N>
      <N as="a" className="f65" data-node-id="182:5057" data-name="back">
        <N as="img" alt="" className="f21" src={imgBack} />
      </N>
      <CodeConnectSnippet data-node-id="175:1430" data-name="Status bar">
        {/* iOS and iPadOS 27 component */}
        <StatusBarIPhone17Pro textTime="9:41" time="9:41" />
      </CodeConnectSnippet>
      <N as="div" className="f66" data-node-id="175:1431" data-name="Tap bar- Home">
        <N as="div" className="f23" data-node-id="I175:1431;123:886" data-name="Tap Bar">
          <N as="div" className="f24" data-node-id="I175:1431;131:683" data-name="Home">
            <CodeConnectSnippet data-node-id="I175:1431;97:610" data-name="Home">
              {/* Simple Design System component */}
              <Home />
            </CodeConnectSnippet>
            <N as="p" className="f25" data-node-id="I175:1431;123:811">
              Home
            </N>
          </N>
          <N as="div" className="f26" data-node-id="I175:1431;131:837" data-name="Gallery">
            <CodeConnectSnippet data-node-id="I175:1431;97:609" data-name="Book">
              {/* Simple Design System component */}
              <Book size={20} />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I175:1431;123:848">
              Gallery
            </N>
          </N>
          <N as="div" className="f28" data-node-id="I175:1431;131:914" data-name="Setting">
            <CodeConnectSnippet data-node-id="I175:1431;97:611" data-name="Settings">
              {/* Simple Design System component */}
              <Settings />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I175:1431;123:867">
              Setting
            </N>
          </N>
          <N as="div" className="f29" data-node-id="I175:1431;182:4523" data-name="Chat">
            <N as="div" className="f30" data-node-id="I175:1431;131:760">
              <N as="p" className="f31" data-node-id="I175:1431;123:829">
                Chat
              </N>
            </N>
            <CodeConnectSnippet data-node-id="I175:1431;182:4323" data-name="Message circle">
              {/* Simple Design System component */}
              <MessageCircle size={20} />
            </CodeConnectSnippet>
          </N>
        </N>
        <N as="div" className="f32" data-node-id="I175:1431;199:2023">
          <CodeConnectSnippet data-node-id="I175:1431;182:4804" data-name="Camera">
            {/* Simple Design System component */}
            <Camera size={20} />
          </CodeConnectSnippet>
          <N as="p" className="f33" data-node-id="I175:1431;182:4977">
            Scan
          </N>
        </N>
      </N>
    </N>
  );
}
