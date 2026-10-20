// Adapted from the original Figma design context; layout and layer IDs are preserved.
import {N,CodeConnectSnippet,StatusBarIPhone17Pro,AIChatBox,IconButton,Sliders,Track,Fill,Knob} from "../design-runtime";
import {Home,Book,Settings,MessageCircle,Camera,ChevronRight,ChevronDown,ArrowUp,Mic,Image,Plus} from "lucide-react";
const imgBack = "/assets/d8430.svg";

export default function Home11ReminderTime() {
  return (
    <N as="div" className="f0" data-node-id="151:654" data-name="Home-1-1 Reminder -Time">
      <N as="div" className="f1" data-node-id="151:785" />
      <N as="div" className="f2" data-node-id="151:786" data-name="Component 3">
        <N as="p" className="f3" data-node-id="I151:786;147:755">{`Take it Slow `}</N>
        <N as="div" className="f4" data-node-id="I151:786;147:754" />
        <N as="div" className="f5" data-node-id="I151:786;147:759" data-name="Situation- With Others">
          <N as="div" className="f6" data-node-id="I151:786;147:760" />
          <N as="p" className="f7" data-node-id="I151:786;147:761">
            Time
          </N>
          <CodeConnectSnippet data-node-id="I151:786;151:615" data-name="Chevron down">
            {/* Simple Design System component */}
            <ChevronDown size={20} />
          </CodeConnectSnippet>
        </N>
        <N as="div" className="f8" data-node-id="I151:786;147:765" data-name="Situation- With Others">
          <N as="div" className="f6" data-node-id="I151:786;147:766" />
          <N as="p" className="f7" data-node-id="I151:786;147:767">
            30 minutes
          </N>
          <CodeConnectSnippet data-node-id="I151:786;151:618" data-name="Chevron down">
            {/* Simple Design System component */}
            <ChevronDown size={20} />
          </CodeConnectSnippet>
        </N>
        <N as="div" className="f9" data-node-id="I151:786;151:624" data-name="Button- Next">
          <N as="p" className="f10" data-node-id="I151:786;151:625">
            Pause
          </N>
        </N>
        <N as="div" className="f11" data-node-id="I151:786;151:809" data-name="Button- Next">
          <N as="p" className="f10" data-node-id="I151:786;151:810">
            Start
          </N>
        </N>
        <N as="div" className="f12" data-node-id="I151:786;151:629" data-name="Time- count down">
          <N as="div" className="f13" data-node-id="I151:786;151:623" />
          <N as="p" className="f14" data-node-id="I151:786;151:621">
            20:00
          </N>
        </N>
        <N as="p" className="f15" data-node-id="I151:786;147:756">
          Set a gentle check-in to help you avoid drinking too quickly.
        </N>
        <N as="p" className="f16" data-node-id="I151:786;147:757">
          Last drink started
        </N>
        <N as="p" className="f17" data-node-id="I151:786;147:758">
          Check-in time
        </N>
        <N as="p" className="f18" data-node-id="I151:786;151:622">
          Your next mindful check-in
        </N>
        <N as="p" className="f19" data-node-id="I151:786;151:628">{`"No rush! Take a moment to check how you're feeling. You can always choose to stop for tonight."`}</N>
      </N>
      <N as="a" className="f20" data-node-id="182:5041" data-name="back">
        <N as="img" alt="" className="f21" src={imgBack} />
      </N>
      <CodeConnectSnippet data-node-id="164:1597" data-name="Status bar">
        {/* iOS and iPadOS 27 component */}
        <StatusBarIPhone17Pro textTime="9:41" time="9:41" />
      </CodeConnectSnippet>
      <N as="div" className="f22" data-node-id="151:664" data-name="Tap bar- Home">
        <N as="div" className="f23" data-node-id="I151:664;123:886" data-name="Tap Bar">
          <N as="div" className="f24" data-node-id="I151:664;131:683" data-name="Home">
            <CodeConnectSnippet data-node-id="I151:664;97:610" data-name="Home">
              {/* Simple Design System component */}
              <Home />
            </CodeConnectSnippet>
            <N as="p" className="f25" data-node-id="I151:664;123:811">
              Home
            </N>
          </N>
          <N as="div" className="f26" data-node-id="I151:664;131:837" data-name="Gallery">
            <CodeConnectSnippet data-node-id="I151:664;97:609" data-name="Book">
              {/* Simple Design System component */}
              <Book size={20} />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I151:664;123:848">
              Gallery
            </N>
          </N>
          <N as="div" className="f28" data-node-id="I151:664;131:914" data-name="Setting">
            <CodeConnectSnippet data-node-id="I151:664;97:611" data-name="Settings">
              {/* Simple Design System component */}
              <Settings />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I151:664;123:867">
              Setting
            </N>
          </N>
          <N as="div" className="f29" data-node-id="I151:664;182:4523" data-name="Chat">
            <N as="div" className="f30" data-node-id="I151:664;131:760">
              <N as="p" className="f31" data-node-id="I151:664;123:829">
                Chat
              </N>
            </N>
            <CodeConnectSnippet data-node-id="I151:664;182:4323" data-name="Message circle">
              {/* Simple Design System component */}
              <MessageCircle size={20} />
            </CodeConnectSnippet>
          </N>
        </N>
        <N as="div" className="f32" data-node-id="I151:664;199:2023">
          <CodeConnectSnippet data-node-id="I151:664;182:4804" data-name="Camera">
            {/* Simple Design System component */}
            <Camera size={20} />
          </CodeConnectSnippet>
          <N as="p" className="f33" data-node-id="I151:664;182:4977">
            Scan
          </N>
        </N>
      </N>
    </N>
  );
}
