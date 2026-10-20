// Adapted from the original Figma design context; layout and layer IDs are preserved.
import {N,CodeConnectSnippet,StatusBarIPhone17Pro,AIChatBox,IconButton,Sliders,Track,Fill,Knob} from "../design-runtime";
import {Home,Book,Settings,MessageCircle,Camera,ChevronRight,ChevronDown,ArrowUp,Mic,Image,Plus} from "lucide-react";
const imgChevronDown = "/assets/3cb30.svg";
const imgBack = "/assets/d8430.svg";

function SettingMedication({ className }: { className?: string }) {
  return (
    <N as="div" className={className || "f206"} data-node-id="131:1068" data-name="Setting- Medication">
      <N as="p" className="f207" data-node-id="131:1062">
        Medication
      </N>
      <N as="div" className="f208" data-node-id="131:1063" data-name="field">
        <N as="p" className="f46" data-node-id="131:1064">
          Select medication
        </N>
        <N as="div" className="f47" data-node-id="131:1065" data-name="chevron-down">
          <N as="img" alt="" className="f21" src={imgChevronDown} />
        </N>
      </N>
    </N>
  );
}

export default function HomeSetting1() {
  return (
    <N as="div" className="f34" data-node-id="131:1030" data-name="Home setting-1">
      <N as="div" className="f209" data-node-id="164:1773" />
      <N as="div" className="f210" data-node-id="131:1042" data-name="next-action">
        <N as="p" className="f57" data-node-id="131:1043">
          Next
        </N>
      </N>
      <N as="div" className="f211" data-node-id="131:1069" data-name="header">
        <N as="div" className="f212" data-node-id="131:1070" data-name="greeting">
          <SettingMedication className="f213" />
        </N>
      </N>
      <N as="div" className="f214" data-node-id="131:1077" data-name="header">
        <N as="div" className="f215" data-node-id="131:1079" data-name="Setting- Medication">
          <N as="div" className="f216" data-node-id="I131:1079;131:1062">
            <N as="p" className="f217">Menstrual period</N>
          </N>
          <N as="div" className="f208" data-node-id="I131:1079;131:1063" data-name="field">
            <N as="p" className="f46" data-node-id="I131:1079;131:1064">
              Are you in period
            </N>
            <N as="div" className="f47" data-node-id="I131:1079;131:1065" data-name="chevron-down">
              <N as="img" alt="" className="f21" src={imgChevronDown} />
            </N>
          </N>
        </N>
      </N>
      <N as="div" className="f218" data-node-id="131:1085" data-name="header">
        <N as="div" className="f212" data-node-id="131:1086" data-name="greeting">
          <N as="div" className="f213" data-node-id="131:1087" data-name="Setting- Medication">
            <N as="p" className="f219" data-node-id="I131:1087;131:1062">{`Weight  Goal`}</N>
            <N as="div" className="f208" data-node-id="I131:1087;131:1063" data-name="field">
              <N as="p" className="f46" data-node-id="I131:1087;131:1064">
                Weight Goal
              </N>
              <N as="div" className="f47" data-node-id="I131:1087;131:1065" data-name="chevron-down">
                <N as="img" alt="" className="f21" src={imgChevronDown} />
              </N>
            </N>
          </N>
        </N>
      </N>
      <N as="div" className="f220" data-node-id="131:1093" data-name="header">
        <N as="div" className="f212" data-node-id="131:1094" data-name="greeting">
          <N as="div" className="f213" data-node-id="131:1095" data-name="Setting- Medication">
            <N as="p" className="f221" data-node-id="I131:1095;131:1062">
              Flavor
            </N>
            <N as="div" className="f208" data-node-id="I131:1095;131:1063" data-name="field">
              <N as="p" className="f46" data-node-id="I131:1095;131:1064">
                Select Flavor
              </N>
              <N as="div" className="f47" data-node-id="I131:1095;131:1065" data-name="chevron-down">
                <N as="img" alt="" className="f21" src={imgChevronDown} />
              </N>
            </N>
          </N>
        </N>
      </N>
      <N as="div" className="f222" data-node-id="131:1101" data-name="header">
        <N as="div" className="f212" data-node-id="131:1102" data-name="greeting">
          <N as="div" className="f213" data-node-id="131:1103" data-name="Setting- Medication">
            <N as="p" className="f221" data-node-id="I131:1103;131:1062">
              ABV
            </N>
            <N as="div" className="f208" data-node-id="I131:1103;131:1063" data-name="field">
              <N as="p" className="f46" data-node-id="I131:1103;131:1064">
                Select ABV level
              </N>
              <N as="div" className="f47" data-node-id="I131:1103;131:1065" data-name="chevron-down">
                <N as="img" alt="" className="f21" src={imgChevronDown} />
              </N>
            </N>
          </N>
        </N>
      </N>
      <CodeConnectSnippet data-node-id="164:1639" data-name="Status bar">
        {/* iOS and iPadOS 27 component */}
        <StatusBarIPhone17Pro textTime="9:41" time="9:41" />
      </CodeConnectSnippet>
      <N as="a" className="f223" data-node-id="182:5049" data-name="back">
        <N as="img" alt="" className="f21" src={imgBack} />
      </N>
      <N as="div" className="f224" data-node-id="164:1774" data-name="Tap bar- Home">
        <N as="div" className="f23" data-node-id="I164:1774;123:886" data-name="Tap Bar">
          <N as="div" className="f24" data-node-id="I164:1774;131:683" data-name="Home">
            <CodeConnectSnippet data-node-id="I164:1774;97:610" data-name="Home">
              {/* Simple Design System component */}
              <Home />
            </CodeConnectSnippet>
            <N as="p" className="f25" data-node-id="I164:1774;123:811">
              Home
            </N>
          </N>
          <N as="div" className="f26" data-node-id="I164:1774;131:837" data-name="Gallery">
            <CodeConnectSnippet data-node-id="I164:1774;97:609" data-name="Book">
              {/* Simple Design System component */}
              <Book size={20} />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I164:1774;123:848">
              Gallery
            </N>
          </N>
          <N as="div" className="f28" data-node-id="I164:1774;131:914" data-name="Setting">
            <CodeConnectSnippet data-node-id="I164:1774;97:611" data-name="Settings">
              {/* Simple Design System component */}
              <Settings />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I164:1774;123:867">
              Setting
            </N>
          </N>
          <N as="div" className="f29" data-node-id="I164:1774;182:4523" data-name="Chat">
            <N as="div" className="f30" data-node-id="I164:1774;131:760">
              <N as="p" className="f31" data-node-id="I164:1774;123:829">
                Chat
              </N>
            </N>
            <CodeConnectSnippet data-node-id="I164:1774;182:4323" data-name="Message circle">
              {/* Simple Design System component */}
              <MessageCircle size={20} />
            </CodeConnectSnippet>
          </N>
        </N>
        <N as="div" className="f32" data-node-id="I164:1774;199:2023">
          <CodeConnectSnippet data-node-id="I164:1774;182:4804" data-name="Camera">
            {/* Simple Design System component */}
            <Camera size={20} />
          </CodeConnectSnippet>
          <N as="p" className="f33" data-node-id="I164:1774;182:4977">
            Scan
          </N>
        </N>
      </N>
    </N>
  );
}
