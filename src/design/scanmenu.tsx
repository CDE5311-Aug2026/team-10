// Adapted from the original Figma design context; layout and layer IDs are preserved.
import {N,CodeConnectSnippet,StatusBarIPhone17Pro,AIChatBox,IconButton,Sliders,Track,Fill,Knob} from "../design-runtime";
import {Home,Book,Settings,MessageCircle,Camera,ChevronRight,ChevronDown,ArrowUp,Mic,Image,Plus} from "lucide-react";
const img75Bf550C1734E451B158Dc87A07Eb5Bd1 = "/assets/224c9.png";

export default function HomeScanMenu() {
  return (
    <N as="div" className="f135" data-node-id="114:556" data-name="Home-Scan Menu">
      <N as="div" className="f136" data-node-id="114:562" data-name="camera-feature">
        <N as="div" className="f137" data-node-id="114:563" data-name="camera-card">
          <N as="div" className="f138" data-node-id="126:664" data-name="75bf550c1734e451b158dc87a07eb5bd 1">
            <N as="div" className="f139">
              <N as="img" alt="" className="f140" src={img75Bf550C1734E451B158Dc87A07Eb5Bd1} />
            </N>
          </N>
          <N as="div" className="f141" data-node-id="114:594" data-name="drink-panel">
            <N as="p" className="f142" data-node-id="114:595">
              Possible Match
            </N>
            <N as="p" className="f143" data-node-id="114:596">
              Menu
            </N>
            <N as="p" className="f144" data-node-id="114:597">
              Sample estimate — confirm the recipe.
            </N>
          </N>
          <N as="div" className="f145" data-node-id="114:566" data-name="Rectangle" />
          <N as="div" className="f146" data-node-id="114:567" data-name="Rectangle" />
          <N as="div" className="f147" data-node-id="114:568" data-name="Rectangle" />
          <N as="div" className="f148" data-node-id="114:569" data-name="Rectangle" />
          <N as="div" className="f149" data-node-id="114:570" data-name="Rectangle" />
          <N as="div" className="f150" data-node-id="114:571" data-name="Rectangle" />
          <N as="div" className="f151" data-node-id="114:572" data-name="Rectangle" />
          <N as="div" className="f152" data-node-id="114:573" data-name="Rectangle" />
          <N as="div" className="f153" data-node-id="129:601" data-name="nutrition-panel">
            <N as="div" className="f154" data-node-id="129:602" data-name="Frame">
              <N as="div" className="f155" data-node-id="129:603" data-name="Frame">
                <N as="p" className="f156" data-node-id="129:604">
                  recommend Drink
                </N>
                <N as="p" className="f157" data-node-id="129:605">
                  Tropical Citrus
                </N>
              </N>
              <N as="div" className="f158" data-node-id="129:606" data-name="Frame">
                <N as="p" className="f156" data-node-id="129:607">
                  Calories
                </N>
                <N as="p" className="f157" data-node-id="129:608">
                  200 kcal
                </N>
              </N>
            </N>
            <N as="div" className="f154" data-node-id="129:609" data-name="Frame">
              <N as="div" className="f155" data-node-id="129:610" data-name="Frame">
                <N as="p" className="f156" data-node-id="129:611">
                  Sugar
                </N>
                <N as="p" className="f159" data-node-id="129:612">
                  15 g
                </N>
              </N>
              <N as="div" className="f158" data-node-id="129:613" data-name="Frame">
                <N as="p" className="f156" data-node-id="129:614">
                  Serving
                </N>
                <N as="p" className="f157" data-node-id="129:615">
                  1 cocktail
                </N>
              </N>
            </N>
          </N>
        </N>
      </N>
      <N as="div" className="f160" data-node-id="114:603" data-name="Ignore reminder">
        <N as="p" className="f161" data-node-id="114:604">
          Looks good
        </N>
      </N>
      <N as="div" className="f162" data-node-id="126:650" data-name="Tap bar- Home">
        <N as="div" className="f23" data-node-id="I126:650;123:886" data-name="Tap Bar">
          <N as="div" className="f24" data-node-id="I126:650;131:683" data-name="Home">
            <CodeConnectSnippet data-node-id="I126:650;97:610" data-name="Home">
              {/* Simple Design System component */}
              <Home />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I126:650;123:811">
              Home
            </N>
          </N>
          <N as="div" className="f26" data-node-id="I126:650;131:837" data-name="Gallery">
            <CodeConnectSnippet data-node-id="I126:650;97:609" data-name="Book">
              {/* Simple Design System component */}
              <Book size={20} />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I126:650;123:848">
              Gallery
            </N>
          </N>
          <N as="div" className="f28" data-node-id="I126:650;131:914" data-name="Setting">
            <CodeConnectSnippet data-node-id="I126:650;97:611" data-name="Settings">
              {/* Simple Design System component */}
              <Settings />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I126:650;123:867">
              Setting
            </N>
          </N>
          <N as="div" className="f29" data-node-id="I126:650;182:4523" data-name="Chat">
            <N as="div" className="f30" data-node-id="I126:650;131:760">
              <N as="p" className="f31" data-node-id="I126:650;123:829">
                Chat
              </N>
            </N>
            <CodeConnectSnippet data-node-id="I126:650;182:4323" data-name="Message circle">
              {/* Simple Design System component */}
              <MessageCircle size={20} />
            </CodeConnectSnippet>
          </N>
        </N>
        <N as="div" className="f32" data-node-id="I126:650;199:2023">
          <CodeConnectSnippet data-node-id="I126:650;182:4804" data-name="Camera">
            {/* Simple Design System component */}
            <Camera size={20} />
          </CodeConnectSnippet>
          <N as="p" className="f163" data-node-id="I126:650;182:4977">
            Scan
          </N>
        </N>
      </N>
      <N as="div" className="f164" data-node-id="126:809">
        <N as="a" className="f165" data-node-id="126:762" data-name="Location Tap">
          <N as="div" className="f166" data-node-id="I126:762;114:296" />
          <N as="p" className="f167" data-node-id="I126:762;114:297">
            Scan Drink
          </N>
        </N>
        <N as="div" className="f168" data-node-id="126:763" data-name="Location Tap-selected">
          <N as="div" className="f169" data-node-id="I126:763;114:321" />
          <N as="p" className="f170" data-node-id="I126:763;114:322">
            Scan Menu
          </N>
        </N>
      </N>
      <CodeConnectSnippet data-node-id="164:1667" data-name="Status bar">
        {/* iOS and iPadOS 27 component */}
        <StatusBarIPhone17Pro textTime="9:41" time="9:41" />
      </CodeConnectSnippet>
    </N>
  );
}
