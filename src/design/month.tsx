// Adapted from the original Figma design context; layout and layer IDs are preserved.
import {N,CodeConnectSnippet,StatusBarIPhone17Pro,AIChatBox,IconButton,Sliders,Track,Fill,Knob} from "../design-runtime";
import {Home,Book,Settings,MessageCircle,Camera,ChevronRight,ChevronDown,ArrowUp,Mic,Image,Plus} from "lucide-react";
const imgBack = "/assets/71c87.svg";
const imgVector4 = "/assets/e4a06.svg";
const imgVector3 = "/assets/6e376.svg";
const imgLucideLightbulb = "/assets/dfe10.svg";

export default function HomeDataMonth() {
  return (
    <N as="div" className="f343" data-node-id="200:3601" data-name="Home- Data - Month">
      <CodeConnectSnippet data-node-id="200:3603" data-name="Status bar">
        {/* iOS and iPadOS 27 component */}
        <StatusBarIPhone17Pro textTime="9:41" time="9:41" />
      </CodeConnectSnippet>
      <N as="div" className="f344" data-node-id="200:3602" />
      <N as="a" className="f223" data-node-id="200:3605" data-name="back">
        <N as="img" alt="" className="f21" src={imgBack} />
      </N>
      <N as="div" className="f383" data-node-id="201:3860" data-name="Monthly log">
        <N as="div" className="f384" data-node-id="201:3861" data-name="Home- Log">
          <N as="div" className="f87" data-node-id="201:3862" />
          <N as="div" className="f385" data-node-id="201:3863" data-name="Location Tap-selected">
            <N as="div" className="f6" data-node-id="I201:3863;114:321" />
            <N as="p" className="f350" data-node-id="I201:3863;114:322">
              Weekly
            </N>
          </N>
          <N as="div" className="f386" data-node-id="201:3864" data-name="Location Tap">
            <N as="div" className="f111" data-node-id="I201:3864;114:296" />
            <N as="p" className="f348" data-node-id="I201:3864;114:297">
              Last 30 Days
            </N>
          </N>
          <N as="p" className="f387" data-node-id="201:3865">
            10.06-11.7
          </N>
          <N as="p" className="f388" data-node-id="201:3866">{`8 Logged drink `}</N>
          <N as="p" className="f354" data-node-id="201:3897">
            Log
          </N>
          <N as="div" className="f389" data-node-id="201:3898" data-name="Monthly log">
            <N as="div" className="f390" data-node-id="201:3899" />
            <N as="div" className="f391" data-node-id="201:3900" />
            <N as="div" className="f392" data-node-id="201:3901" />
            <N as="div" className="f393" data-node-id="201:3902" />
            <N as="div" className="f394" data-node-id="201:3903">
              <N as="div" className="f395">
                <N as="img" alt="" className="f78" src={imgVector4} />
              </N>
            </N>
            <N as="div" className="f396" data-node-id="201:3904">
              <N as="div" className="f397">
                <N as="img" alt="" className="f78" src={imgVector3} />
              </N>
            </N>
            <N as="p" className="f398" data-node-id="201:3905">
              1
            </N>
            <N as="p" className="f399" data-node-id="201:3906">
              1
            </N>
            <N as="p" className="f400" data-node-id="201:3907">
              5
            </N>
            <N as="p" className="f401" data-node-id="201:3908">
              10
            </N>
            <N as="p" className="f402" data-node-id="201:3909">
              2
            </N>
            <N as="p" className="f403" data-node-id="201:3910">
              3
            </N>
            <N as="p" className="f404" data-node-id="201:3911">
              4
            </N>
          </N>
        </N>
      </N>
      <N as="div" className="f405" data-node-id="201:4421" data-name="Data reminder-month">
        <N as="div" className="f70" data-node-id="I201:4421;201:4402" />
        <N as="div" className="f81" data-node-id="I201:4421;201:4403">
          <N as="div" className="f82" data-node-id="I201:4421;201:4404" data-name="lucide/lightbulb">
            <N as="img" alt="" className="f21" src={imgLucideLightbulb} />
          </N>
          <N as="div" className="f406" data-node-id="I201:4421;201:4406">
            <N as="p" className="f407" data-node-id="I201:4421;201:4407">
              What we noticed
            </N>
            <N as="p" className="f408" data-node-id="I201:4421;201:4408">
              Your logged alcohol intake was lower in Week 4 than Week 1. Your overall trend suggests a reduction across the month, although intake varied between weeks.
            </N>
          </N>
        </N>
      </N>
      <N as="div" className="f409" data-node-id="201:4460" data-name="Data reminder-free">
        <N as="div" className="f70" data-node-id="201:4461" />
        <N as="div" className="f378" data-node-id="201:4462">
          <N as="p" className="f379" data-node-id="201:4463">
            Keep Your Alcohol-Free Days
          </N>
          <N as="p" className="f380" data-node-id="201:4464">
            Continue making space for alcohol-free days in your routine.
          </N>
        </N>
      </N>
      <N as="div" className="f410" data-node-id="201:4465" data-name="Data reminder-less">
        <N as="div" className="f70" data-node-id="201:4466" />
        <N as="div" className="f378" data-node-id="201:4467">
          <N as="p" className="f379" data-node-id="201:4468">
            Explore Lighter Choices
          </N>
          <N as="p" className="f380" data-node-id="201:4469">
            Consider lower-alcohol or alcohol-free alternatives when socializing.
          </N>
        </N>
      </N>
      <N as="div" className="f411" data-node-id="201:4470" data-name="Data reminder-next">
        <N as="div" className="f70" data-node-id="201:4471" />
        <N as="div" className="f378" data-node-id="201:4472">
          <N as="p" className="f379" data-node-id="201:4473">
            Set a Personal Intention
          </N>
          <N as="p" className="f380" data-node-id="201:4474">
            Choose a realistic wellbeing goal for next month and review your progress.
          </N>
        </N>
      </N>
      <N as="div" className="f22" data-node-id="200:3604" data-name="Tap bar- Home">
        <N as="div" className="f23" data-node-id="I200:3604;123:886" data-name="Tap Bar">
          <N as="div" className="f24" data-node-id="I200:3604;131:683" data-name="Home">
            <CodeConnectSnippet data-node-id="I200:3604;97:610" data-name="Home">
              {/* Simple Design System component */}
              <Home />
            </CodeConnectSnippet>
            <N as="p" className="f25" data-node-id="I200:3604;123:811">
              Home
            </N>
          </N>
          <N as="div" className="f26" data-node-id="I200:3604;131:837" data-name="Gallery">
            <CodeConnectSnippet data-node-id="I200:3604;97:609" data-name="Book">
              {/* Simple Design System component */}
              <Book size={20} />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I200:3604;123:848">
              Gallery
            </N>
          </N>
          <N as="div" className="f28" data-node-id="I200:3604;131:914" data-name="Setting">
            <CodeConnectSnippet data-node-id="I200:3604;97:611" data-name="Settings">
              {/* Simple Design System component */}
              <Settings />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I200:3604;123:867">
              Setting
            </N>
          </N>
          <N as="div" className="f29" data-node-id="I200:3604;182:4523" data-name="Chat">
            <N as="div" className="f30" data-node-id="I200:3604;131:760">
              <N as="p" className="f31" data-node-id="I200:3604;123:829">
                Chat
              </N>
            </N>
            <CodeConnectSnippet data-node-id="I200:3604;182:4323" data-name="Message circle">
              {/* Simple Design System component */}
              <MessageCircle size={20} />
            </CodeConnectSnippet>
          </N>
        </N>
        <N as="div" className="f32" data-node-id="I200:3604;199:2023">
          <CodeConnectSnippet data-node-id="I200:3604;182:4804" data-name="Camera">
            {/* Simple Design System component */}
            <Camera size={20} />
          </CodeConnectSnippet>
          <N as="p" className="f33" data-node-id="I200:3604;182:4977">
            Scan
          </N>
        </N>
      </N>
    </N>
  );
}
