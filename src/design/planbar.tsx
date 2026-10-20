// Adapted from the original Figma design context; layout and layer IDs are preserved.
import {N,CodeConnectSnippet,StatusBarIPhone17Pro,AIChatBox,IconButton,Sliders,Track,Fill,Knob} from "../design-runtime";
import {Home,Book,Settings,MessageCircle,Camera,ChevronRight,ChevronDown,ArrowUp,Mic,Image,Plus} from "lucide-react";
const imgSparkles = "/assets/4a6fb.svg";
const imgBack = "/assets/e83ca.svg";

function OccasionJustMeCasual({ className }: { className?: string }) {
  return (
    <N as="div" className={className || "f271"} data-node-id="175:2920" data-name="Occasion - Just Me Casual">
      <N as="div" className="f111" data-node-id="175:2773" />
      <N as="p" className="f272" data-node-id="175:2774">
        Just Me/Casual
      </N>
    </N>
  );
}

export default function Home13TodayJustMeSocialHome() {
  return (
    <N as="div" className="f0" data-node-id="178:3399" data-name="Home-1-3 Today-Just Me + Social- Home">
      <N as="div" className="f273" data-node-id="178:3403" />
      <N as="div" className="f274" data-node-id="178:3499">
        <N as="div" className="f275" data-node-id="178:3500" data-name="Situatiobn- Social">
          <N as="div" className="f111" data-node-id="178:3501" />
          <N as="p" className="f276" data-node-id="178:3502">
            Bar
          </N>
        </N>
        <N as="div" className="f277" data-node-id="178:3503" data-name="Situation- Work">
          <N as="div" className="f6" data-node-id="178:3504" />
          <N as="p" className="f278" data-node-id="178:3505">
            Home
          </N>
        </N>
      </N>
      <OccasionJustMeCasual className="f279" />
      <N as="div" className="f280" data-node-id="178:3669" data-name="Occasions- Just me Casual">
        <N as="div" className="f281" data-node-id="178:3670" />
        <N as="p" className="f282" data-node-id="178:3671">
          Explore the Bar Menu
        </N>
        <N as="p" className="f283" data-node-id="178:3672">
          See something you like? Scan the menu to explore drink options and compare their estimated alcohol, sugar, and calories
        </N>
        <N as="div" className="f284" data-node-id="178:3673" data-name="camera-feature">
          <N as="div" className="f137" data-node-id="178:3674" data-name="camera-card">
            <N as="div" className="f285" data-node-id="178:3675" data-name="status-panel">
              <N as="div" className="f286" data-node-id="178:3676" data-name="sparkles">
                <N as="img" alt="" className="f21" src={imgSparkles} />
              </N>
              <N as="p" className="f287" data-node-id="178:3678">
                Demo Preview • Unverified
              </N>
            </N>
            <N as="div" className="f141" data-node-id="178:3679" data-name="drink-panel">
              <N as="p" className="f142" data-node-id="178:3680">
                Possible Match
              </N>
              <N as="p" className="f143" data-node-id="178:3681">
                Menu
              </N>
              <N as="p" className="f144" data-node-id="178:3682">
                Sample estimate — confirm the recipe.
              </N>
            </N>
            <N as="div" className="f145" data-node-id="178:3683" data-name="Rectangle" />
            <N as="div" className="f146" data-node-id="178:3684" data-name="Rectangle" />
            <N as="div" className="f147" data-node-id="178:3685" data-name="Rectangle" />
            <N as="div" className="f148" data-node-id="178:3686" data-name="Rectangle" />
            <N as="div" className="f149" data-node-id="178:3687" data-name="Rectangle" />
            <N as="div" className="f150" data-node-id="178:3688" data-name="Rectangle" />
            <N as="div" className="f151" data-node-id="178:3689" data-name="Rectangle" />
            <N as="div" className="f152" data-node-id="178:3690" data-name="Rectangle" />
            <N as="div" className="f288" data-node-id="178:3692" data-name="nutrition-panel">
              <N as="div" className="f154" data-node-id="178:3693" data-name="Frame">
                <N as="div" className="f155" data-node-id="178:3694" data-name="Frame">
                  <N as="p" className="f156" data-node-id="178:3695">
                    recommend Drink
                  </N>
                  <N as="p" className="f157" data-node-id="178:3696">
                    Mai Tai
                  </N>
                </N>
                <N as="div" className="f158" data-node-id="178:3697" data-name="Frame">
                  <N as="p" className="f156" data-node-id="178:3698">
                    Calories
                  </N>
                  <N as="p" className="f157" data-node-id="178:3699">
                    170 kcal
                  </N>
                </N>
              </N>
              <N as="div" className="f154" data-node-id="178:3700" data-name="Frame">
                <N as="div" className="f155" data-node-id="178:3701" data-name="Frame">
                  <N as="p" className="f156" data-node-id="178:3702">
                    Sugar
                  </N>
                  <N as="p" className="f159" data-node-id="178:3703">
                    8 g
                  </N>
                </N>
                <N as="div" className="f158" data-node-id="178:3704" data-name="Frame">
                  <N as="p" className="f156" data-node-id="178:3705">
                    Serving
                  </N>
                  <N as="p" className="f157" data-node-id="178:3706">
                    1 cocktail
                  </N>
                </N>
              </N>
            </N>
          </N>
        </N>
      </N>
      <N as="a" className="f289" data-node-id="178:3707" data-name="Button- Next">
        <N as="p" className="f290" data-node-id="178:3708">{`Scan Menu `}</N>
      </N>
      <N as="a" className="f291" data-node-id="182:5081" data-name="back">
        <N as="img" alt="" className="f21" src={imgBack} />
      </N>
      <CodeConnectSnippet data-node-id="178:3404" data-name="Status bar">
        {/* iOS and iPadOS 27 component */}
        <StatusBarIPhone17Pro textTime="9:41" time="9:41" />
      </CodeConnectSnippet>
      <N as="div" className="f292" data-node-id="178:3507" data-name="Tap bar- Home">
        <N as="div" className="f23" data-node-id="I178:3507;123:886" data-name="Tap Bar">
          <N as="div" className="f24" data-node-id="I178:3507;131:683" data-name="Home">
            <CodeConnectSnippet data-node-id="I178:3507;97:610" data-name="Home">
              {/* Simple Design System component */}
              <Home />
            </CodeConnectSnippet>
            <N as="p" className="f25" data-node-id="I178:3507;123:811">
              Home
            </N>
          </N>
          <N as="div" className="f26" data-node-id="I178:3507;131:837" data-name="Gallery">
            <CodeConnectSnippet data-node-id="I178:3507;97:609" data-name="Book">
              {/* Simple Design System component */}
              <Book size={20} />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I178:3507;123:848">
              Gallery
            </N>
          </N>
          <N as="div" className="f28" data-node-id="I178:3507;131:914" data-name="Setting">
            <CodeConnectSnippet data-node-id="I178:3507;97:611" data-name="Settings">
              {/* Simple Design System component */}
              <Settings />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I178:3507;123:867">
              Setting
            </N>
          </N>
          <N as="div" className="f29" data-node-id="I178:3507;182:4523" data-name="Chat">
            <N as="div" className="f30" data-node-id="I178:3507;131:760">
              <N as="p" className="f31" data-node-id="I178:3507;123:829">
                Chat
              </N>
            </N>
            <CodeConnectSnippet data-node-id="I178:3507;182:4323" data-name="Message circle">
              {/* Simple Design System component */}
              <MessageCircle size={20} />
            </CodeConnectSnippet>
          </N>
        </N>
        <N as="div" className="f32" data-node-id="I178:3507;199:2023">
          <CodeConnectSnippet data-node-id="I178:3507;182:4804" data-name="Camera">
            {/* Simple Design System component */}
            <Camera size={20} />
          </CodeConnectSnippet>
          <N as="p" className="f33" data-node-id="I178:3507;182:4977">
            Scan
          </N>
        </N>
      </N>
    </N>
  );
}
