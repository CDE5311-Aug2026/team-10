// Adapted from the original Figma design context; layout and layer IDs are preserved.
import {N,CodeConnectSnippet,StatusBarIPhone17Pro,AIChatBox,IconButton,Sliders,Track,Fill,Knob} from "../design-runtime";
import {Home,Book,Settings,MessageCircle,Camera,ChevronRight,ChevronDown,ArrowUp,Mic,Image,Plus} from "lucide-react";
const imgBack = "/assets/71c87.svg";
const imgFrame44 = "/assets/f3799.svg";
const imgLucideLightbulb = "/assets/dfe10.svg";

export default function HomeDataWeek() {
  return (
    <N as="div" className="f343" data-node-id="200:3516" data-name="Home- Data- week">
      <CodeConnectSnippet data-node-id="200:3534" data-name="Status bar">
        {/* iOS and iPadOS 27 component */}
        <StatusBarIPhone17Pro textTime="9:41" time="9:41" />
      </CodeConnectSnippet>
      <N as="div" className="f344" data-node-id="200:3517" />
      <N as="a" className="f223" data-node-id="200:3536" data-name="back">
        <N as="img" alt="" className="f21" src={imgBack} />
      </N>
      <N as="div" className="f345" data-node-id="201:3799" data-name="Log">
        <N as="div" className="f87" data-node-id="201:3800" />
        <N as="div" className="f346" data-node-id="201:3801">
          <N as="div" className="f347" data-node-id="201:3802" data-name="Location Tap-selected">
            <N as="div" className="f169" data-node-id="I201:3802;114:321" />
            <N as="p" className="f348" data-node-id="I201:3802;114:322">
              Weekly
            </N>
          </N>
          <N as="a" className="f349" data-node-id="201:3803" data-name="Location Tap">
            <N as="div" className="f6" data-node-id="I201:3803;114:296" />
            <N as="p" className="f350" data-node-id="I201:3803;114:297">
              Last 30 Days
            </N>
          </N>
        </N>
        <N as="div" className="f351" data-node-id="201:3804">
          <N as="p" className="f352" data-node-id="201:3805">
            10.06-10.12
          </N>
          <N as="p" className="f353" data-node-id="201:3806">{`2 Logged drink `}</N>
        </N>
        <N as="p" className="f354" data-node-id="201:3807">
          Log
        </N>
        <N as="div" className="f355" data-node-id="201:3808" data-name="Weekly log">
          <N as="div" className="f356" data-node-id="201:3809">
            <N as="div" className="f357" data-node-id="201:3810">
              <N as="div" className="f358" data-node-id="201:3811">
                <N as="div" className="f359" data-node-id="201:3812" />
                <N as="div" className="f360" data-node-id="201:3813" />
                <N as="div" className="f360" data-node-id="201:3814" />
                <N as="div" className="f361" data-node-id="201:3815" />
                <N as="div" className="f362" data-node-id="201:3816" />
                <N as="div" className="f363" data-node-id="201:3817" />
                <N as="div" className="f364" data-node-id="201:3818" />
              </N>
              <N as="div" className="f365" data-node-id="201:3819" data-name="week">
                <N as="p" className="f366" data-node-id="201:3820">
                  M
                </N>
                <N as="p" className="f367" data-node-id="201:3821">
                  T
                </N>
                <N as="p" className="f368" data-node-id="201:3822">
                  W
                </N>
                <N as="p" className="f369" data-node-id="201:3823">
                  T
                </N>
                <N as="p" className="f370" data-node-id="201:3824">
                  F
                </N>
                <N as="p" className="f371" data-node-id="201:3825">
                  S
                </N>
                <N as="p" className="f372" data-node-id="201:3826">
                  S
                </N>
              </N>
            </N>
            <N as="div" className="f373" data-node-id="201:3827">
              <N as="div" className="f374">
                <N as="img" alt="" className="f78" src={imgFrame44} />
              </N>
            </N>
          </N>
        </N>
      </N>
      <N as="div" className="f375" data-node-id="201:4412" data-name="Data reminder-week">
        <N as="div" className="f70" data-node-id="I201:4412;201:3698" />
        <N as="div" className="f81" data-node-id="I201:4412;201:3699">
          <N as="div" className="f82" data-node-id="I201:4412;201:4393" data-name="lucide/lightbulb">
            <N as="img" alt="" className="f21" src={imgLucideLightbulb} />
          </N>
          <N as="div" className="f376" data-node-id="I201:4412;201:3700">
            <N as="p" className="f74" data-node-id="I201:4412;201:3701">
              What we noticed
            </N>
            <N as="p" className="f75" data-node-id="I201:4412;201:3702">
              Most of your logged alcohol intake happened on Friday and Saturday, with Saturday being your highest-intake day.
            </N>
          </N>
        </N>
      </N>
      <N as="div" className="f377" data-node-id="201:4430" data-name="Data reminder- water">
        <N as="div" className="f70" data-node-id="201:4431" />
        <N as="div" className="f378" data-node-id="201:4432">
          <N as="p" className="f379" data-node-id="201:4433">
            Stay Hydrated
          </N>
          <N as="p" className="f380" data-node-id="201:4434">
            Consider alternating alcoholic drinks with water during longer outings.
          </N>
        </N>
      </N>
      <N as="div" className="f381" data-node-id="201:4435" data-name="Data reminder-less">
        <N as="div" className="f70" data-node-id="201:4436" />
        <N as="div" className="f378" data-node-id="201:4437">
          <N as="p" className="f379" data-node-id="201:4438">
            Try a Lighter Alternative
          </N>
          <N as="p" className="f380" data-node-id="201:4439">
            Choose a lower-alcohol or alcohol-free option for your next social occasion.
          </N>
        </N>
      </N>
      <N as="div" className="f382" data-node-id="201:4440" data-name="Data reminder-next">
        <N as="div" className="f70" data-node-id="201:4441" />
        <N as="div" className="f378" data-node-id="201:4442">
          <N as="p" className="f379" data-node-id="201:4443">
            Plan Your Next Outing
          </N>
          <N as="p" className="f380" data-node-id="201:4444">
            Set a personal intake limit before going out and check in with yourself along the way.
          </N>
        </N>
      </N>
      <N as="div" className="f22" data-node-id="200:3535" data-name="Tap bar- Home">
        <N as="div" className="f23" data-node-id="I200:3535;123:886" data-name="Tap Bar">
          <N as="div" className="f24" data-node-id="I200:3535;131:683" data-name="Home">
            <CodeConnectSnippet data-node-id="I200:3535;97:610" data-name="Home">
              {/* Simple Design System component */}
              <Home />
            </CodeConnectSnippet>
            <N as="p" className="f25" data-node-id="I200:3535;123:811">
              Home
            </N>
          </N>
          <N as="div" className="f26" data-node-id="I200:3535;131:837" data-name="Gallery">
            <CodeConnectSnippet data-node-id="I200:3535;97:609" data-name="Book">
              {/* Simple Design System component */}
              <Book size={20} />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I200:3535;123:848">
              Gallery
            </N>
          </N>
          <N as="div" className="f28" data-node-id="I200:3535;131:914" data-name="Setting">
            <CodeConnectSnippet data-node-id="I200:3535;97:611" data-name="Settings">
              {/* Simple Design System component */}
              <Settings />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I200:3535;123:867">
              Setting
            </N>
          </N>
          <N as="div" className="f29" data-node-id="I200:3535;182:4523" data-name="Chat">
            <N as="div" className="f30" data-node-id="I200:3535;131:760">
              <N as="p" className="f31" data-node-id="I200:3535;123:829">
                Chat
              </N>
            </N>
            <CodeConnectSnippet data-node-id="I200:3535;182:4323" data-name="Message circle">
              {/* Simple Design System component */}
              <MessageCircle size={20} />
            </CodeConnectSnippet>
          </N>
        </N>
        <N as="div" className="f32" data-node-id="I200:3535;199:2023">
          <CodeConnectSnippet data-node-id="I200:3535;182:4804" data-name="Camera">
            {/* Simple Design System component */}
            <Camera size={20} />
          </CodeConnectSnippet>
          <N as="p" className="f33" data-node-id="I200:3535;182:4977">
            Scan
          </N>
        </N>
      </N>
    </N>
  );
}
