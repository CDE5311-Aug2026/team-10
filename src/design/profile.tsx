// Adapted from the original Figma design context; layout and layer IDs are preserved.
import {N,CodeConnectSnippet,StatusBarIPhone17Pro,AIChatBox,IconButton,Sliders,Track,Fill,Knob} from "../design-runtime";
import {Home,Book,Settings,MessageCircle,Camera,ChevronRight,ChevronDown,ArrowUp,Mic,Image,Plus} from "lucide-react";
const imgChevronDown = "/assets/3cb30.svg";

export default function Setting1() {
  return (
    <N as="div" className="f34" data-node-id="28:672" data-name="setting-1">
      <N as="div" className="f35" data-node-id="48:329" data-name="header">
        <N as="div" className="f36" data-node-id="48:330" data-name="avatar">
          <N as="p" className="f37" data-node-id="48:331">
            K
          </N>
        </N>
        <N as="div" className="f38" data-node-id="48:332" data-name="greeting">
          <N as="p" className="f39" data-node-id="48:333">
            Hi Kris!
          </N>
          <N as="p" className="f40" data-node-id="48:334">
            Preference Setting
          </N>
        </N>
      </N>
      <N as="div" className="f41" data-node-id="48:335" data-name="drinking-habit-setup">
        <N as="p" className="f42" data-node-id="48:336">
          Drinking habit setup
        </N>
        <N as="div" className="f43" data-node-id="48:337" data-name="field-frequency">
          <N as="p" className="f44" data-node-id="48:338">
            Drinking frequency
          </N>
          <N as="div" className="f45" data-node-id="48:339" data-name="Frame">
            <N as="p" className="f46" data-node-id="48:340">
              Select frequency
            </N>
            <N as="div" className="f47" data-node-id="48:414" data-name="chevron-down">
              <N as="img" alt="" className="f21" src={imgChevronDown} />
            </N>
          </N>
        </N>
        <N as="div" className="f48" data-node-id="48:342" data-name="field-amount">
          <N as="p" className="f49" data-node-id="48:343">
            Typical amount (per occasion)
          </N>
          <N as="div" className="f50" data-node-id="48:344" data-name="Frame">
            <N as="p" className="f51" data-node-id="48:345">
              Select amount
            </N>
            <N as="p" className="f52" data-node-id="48:346">
              e.g., 2-3 drinks
            </N>
          </N>
        </N>
        <N as="div" className="f43" data-node-id="48:347" data-name="field-drinks">
          <N as="p" className="f44" data-node-id="48:348">
            Preferred drinks
          </N>
          <N as="div" className="f45" data-node-id="48:349" data-name="Frame">
            <N as="p" className="f46" data-node-id="48:350">
              Select drinks
            </N>
            <N as="div" className="f47" data-node-id="48:417" data-name="chevron-down">
              <N as="img" alt="" className="f21" src={imgChevronDown} />
            </N>
          </N>
        </N>
        <N as="div" className="f43" data-node-id="48:352" data-name="field-flavors">
          <N as="p" className="f44" data-node-id="48:353">
            Preferred flavors
          </N>
          <N as="div" className="f45" data-node-id="48:354" data-name="Frame">
            <N as="p" className="f46" data-node-id="48:355">
              Select flavors
            </N>
            <N as="div" className="f47" data-node-id="48:420" data-name="chevron-down">
              <N as="img" alt="" className="f21" src={imgChevronDown} />
            </N>
          </N>
        </N>
        <N as="div" className="f43" data-node-id="48:357" data-name="field-effects">
          <N as="p" className="f44" data-node-id="48:358">
            After-drink effects
          </N>
          <N as="div" className="f45" data-node-id="48:359" data-name="Frame">
            <N as="p" className="f46" data-node-id="48:360">
              Select effects
            </N>
            <N as="div" className="f47" data-node-id="48:423" data-name="chevron-down">
              <N as="img" alt="" className="f21" src={imgChevronDown} />
            </N>
          </N>
        </N>
      </N>
      <N as="div" className="f53" data-node-id="48:362" data-name="personal-information">
        <N as="p" className="f42" data-node-id="48:363">
          Personal information
        </N>
        <N as="div" className="f48" data-node-id="48:364" data-name="field-age">
          <N as="p" className="f49" data-node-id="48:365">
            Age
          </N>
          <N as="div" className="f50" data-node-id="48:366" data-name="Frame">
            <N as="p" className="f51" data-node-id="48:367">
              Select age
            </N>
            <N as="p" className="f52" data-node-id="48:368">
              years
            </N>
          </N>
        </N>
        <N as="div" className="f43" data-node-id="48:369" data-name="field-gender">
          <N as="p" className="f44" data-node-id="48:370">
            Gender
          </N>
          <N as="div" className="f45" data-node-id="48:371" data-name="Frame">
            <N as="p" className="f46" data-node-id="48:372">
              Select gender
            </N>
            <N as="div" className="f47" data-node-id="48:426" data-name="chevron-down">
              <N as="img" alt="" className="f21" src={imgChevronDown} />
            </N>
          </N>
        </N>
        <N as="div" className="f48" data-node-id="48:374" data-name="field-height">
          <N as="p" className="f49" data-node-id="48:375">
            Height
          </N>
          <N as="div" className="f50" data-node-id="48:376" data-name="Frame">
            <N as="p" className="f51" data-node-id="48:377">
              Select height
            </N>
            <N as="p" className="f52" data-node-id="48:378">
              cm
            </N>
          </N>
        </N>
        <N as="div" className="f48" data-node-id="48:379" data-name="field-weight">
          <N as="p" className="f49" data-node-id="48:380">
            Weight
          </N>
          <N as="div" className="f50" data-node-id="48:381" data-name="Frame">
            <N as="p" className="f51" data-node-id="48:382">
              Select weight
            </N>
            <N as="p" className="f52" data-node-id="48:383">
              kg
            </N>
          </N>
        </N>
      </N>
      <N as="div" className="f54" data-node-id="48:384" data-name="personal-conditions">
        <N as="p" className="f42" data-node-id="48:385">
          Personal conditions
        </N>
        <N as="p" className="f55" data-node-id="48:386">
          Optional. Share only what you’re comfortable with.
        </N>
        <N as="div" className="f43" data-node-id="48:387" data-name="field-medication">
          <N as="p" className="f44" data-node-id="48:388">
            Medication
          </N>
          <N as="div" className="f45" data-node-id="48:389" data-name="Frame">
            <N as="p" className="f46" data-node-id="48:390">
              Select medication
            </N>
            <N as="div" className="f47" data-node-id="48:429" data-name="chevron-down">
              <N as="img" alt="" className="f21" src={imgChevronDown} />
            </N>
          </N>
        </N>
        <N as="div" className="f43" data-node-id="48:392" data-name="field-menstrual">
          <N as="p" className="f44" data-node-id="48:393">
            Menstrual period
          </N>
          <N as="div" className="f45" data-node-id="48:394" data-name="Frame">
            <N as="p" className="f46" data-node-id="48:395">
              Select cycle
            </N>
            <N as="div" className="f47" data-node-id="48:432" data-name="chevron-down">
              <N as="img" alt="" className="f21" src={imgChevronDown} />
            </N>
          </N>
        </N>
        <N as="div" className="f43" data-node-id="48:397" data-name="field-weight-goal">
          <N as="p" className="f44" data-node-id="48:398">
            Weight-control goal
          </N>
          <N as="div" className="f45" data-node-id="48:399" data-name="Frame">
            <N as="p" className="f46" data-node-id="48:400">
              Select goal
            </N>
            <N as="div" className="f47" data-node-id="48:435" data-name="chevron-down">
              <N as="img" alt="" className="f21" src={imgChevronDown} />
            </N>
          </N>
        </N>
      </N>
      <N as="div" className="f56" data-node-id="48:402" data-name="save-action">
        <N as="p" className="f57" data-node-id="48:403">
          Save preferences
        </N>
      </N>
      <CodeConnectSnippet data-node-id="164:1723" data-name="Status bar">
        {/* iOS and iPadOS 27 component */}
        <StatusBarIPhone17Pro textTime="9:41" time="9:41" />
      </CodeConnectSnippet>
      <N as="div" className="f58" data-node-id="129:630" data-name="Tap bar- Setting">
        <N as="div" className="f23" data-node-id="I129:630;123:886" data-name="Tap Bar">
          <N as="div" className="f24" data-node-id="I129:630;131:683" data-name="home">
            <CodeConnectSnippet data-node-id="I129:630;97:610" data-name="Home">
              {/* Simple Design System component */}
              <Home />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I129:630;123:811">
              Home
            </N>
          </N>
          <N as="div" className="f26" data-node-id="I129:630;131:837" data-name="gallery">
            <CodeConnectSnippet data-node-id="I129:630;97:609" data-name="Book">
              {/* Simple Design System component */}
              <Book size={20} />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I129:630;123:848">
              Gallery
            </N>
          </N>
          <N as="div" className="f28" data-node-id="I129:630;131:914" data-name="setting">
            <CodeConnectSnippet data-node-id="I129:630;97:611" data-name="Settings">
              {/* Simple Design System component */}
              <Settings />
            </CodeConnectSnippet>
            <N as="p" className="f25" data-node-id="I129:630;123:867">
              Setting
            </N>
          </N>
          <N as="div" className="f29" data-node-id="I129:630;182:4523" data-name="Chat">
            <N as="div" className="f30" data-node-id="I129:630;131:760" data-name="scan">
              <N as="p" className="f31" data-node-id="I129:630;123:829">
                Chat
              </N>
            </N>
            <CodeConnectSnippet data-node-id="I129:630;182:4323" data-name="Message circle">
              {/* Simple Design System component */}
              <MessageCircle size={20} />
            </CodeConnectSnippet>
          </N>
        </N>
        <N as="div" className="f32" data-node-id="I129:630;199:2023">
          <CodeConnectSnippet data-node-id="I129:630;182:4804" data-name="Camera">
            {/* Simple Design System component */}
            <Camera size={20} />
          </CodeConnectSnippet>
          <N as="p" className="f33" data-node-id="I129:630;182:4977">
            Scan
          </N>
        </N>
      </N>
    </N>
  );
}
