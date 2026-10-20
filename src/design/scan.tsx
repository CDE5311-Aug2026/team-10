// Adapted from the original Figma design context; layout and layer IDs are preserved.
import {N,CodeConnectSnippet,StatusBarIPhone17Pro,AIChatBox,IconButton,Sliders,Track,Fill,Knob} from "../design-runtime";
import {Home,Book,Settings,MessageCircle,Camera,ChevronRight,ChevronDown,ArrowUp,Mic,Image,Plus} from "lucide-react";
const imgCocktailPhoto = "/assets/f195d.png";

export default function HomeScanDrink() {
  return (
    <N as="div" className="f439" data-node-id="73:363" data-name="Home-Scan Drink">
      <N as="div" className="f440" data-node-id="73:406" data-name="camera-feature">
        <N as="div" className="f137" data-node-id="73:407" data-name="camera-card">
          <N as="div" className="f441" data-node-id="77:216" data-name="cocktail-photo">
            <N as="img" alt="" className="f442" src={imgCocktailPhoto} />
          </N>
          <N as="div" className="f443" data-node-id="77:217" data-name="scan-grid">
            <N as="div" className="f444" data-node-id="77:218" data-name="Rectangle" />
            <N as="div" className="f445" data-node-id="77:219" data-name="Rectangle" />
            <N as="div" className="f446" data-node-id="77:220" data-name="Rectangle" />
            <N as="div" className="f447" data-node-id="77:221" data-name="Rectangle" />
            <N as="div" className="f448" data-node-id="77:222" data-name="Rectangle" />
            <N as="div" className="f449" data-node-id="77:223" data-name="Rectangle" />
            <N as="div" className="f450" data-node-id="77:224" data-name="Rectangle" />
            <N as="div" className="f451" data-node-id="77:225" data-name="Rectangle" />
          </N>
          <N as="div" className="f452" data-node-id="77:226" data-name="info-overlay">
            <N as="div" className="f453" data-node-id="77:230" data-name="nutrition-panel">
              <N as="div" className="f154" data-node-id="77:231" data-name="Frame">
                <N as="div" className="f155" data-node-id="77:232" data-name="Frame">
                  <N as="p" className="f156" data-node-id="77:233">
                    Estimated ABV
                  </N>
                  <N as="p" className="f157" data-node-id="77:234">
                    35%
                  </N>
                </N>
                <N as="div" className="f158" data-node-id="77:235" data-name="Frame">
                  <N as="p" className="f156" data-node-id="77:236">
                    Calories
                  </N>
                  <N as="p" className="f157" data-node-id="77:237">
                    170 kcal
                  </N>
                </N>
              </N>
              <N as="div" className="f154" data-node-id="77:238" data-name="Frame">
                <N as="div" className="f155" data-node-id="77:239" data-name="Frame">
                  <N as="p" className="f156" data-node-id="77:240">
                    Sugar
                  </N>
                  <N as="p" className="f159" data-node-id="77:241">
                    8 g
                  </N>
                </N>
                <N as="div" className="f158" data-node-id="77:242" data-name="Frame">
                  <N as="p" className="f156" data-node-id="77:243">
                    Serving
                  </N>
                  <N as="p" className="f157" data-node-id="77:244">
                    1 cocktail
                  </N>
                </N>
              </N>
            </N>
            <N as="div" className="f454" data-node-id="77:245" data-name="drink-panel">
              <N as="p" className="f142" data-node-id="77:246">
                Possible Match
              </N>
              <N as="p" className="f143" data-node-id="77:247">
                Old Fashioned
              </N>
              <N as="p" className="f144" data-node-id="77:248">
                Sample estimate — confirm the recipe.
              </N>
            </N>
          </N>
        </N>
      </N>
      <N as="div" className="f455" data-node-id="73:632" data-name="Ignore reminder">
        <N as="p" className="f161" data-node-id="73:633">
          Looks good
        </N>
      </N>
      <N as="div" className="f456" data-node-id="123:791" data-name="Tap bar- Home">
        <N as="div" className="f23" data-node-id="I123:791;123:886" data-name="Tap Bar">
          <N as="div" className="f24" data-node-id="I123:791;131:683" data-name="Home">
            <CodeConnectSnippet data-node-id="I123:791;97:610" data-name="Home">
              {/* Simple Design System component */}
              <Home />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I123:791;123:811">
              Home
            </N>
          </N>
          <N as="div" className="f26" data-node-id="I123:791;131:837" data-name="Gallery">
            <CodeConnectSnippet data-node-id="I123:791;97:609" data-name="Book">
              {/* Simple Design System component */}
              <Book size={20} />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I123:791;123:848">
              Gallery
            </N>
          </N>
          <N as="div" className="f28" data-node-id="I123:791;131:914" data-name="Setting">
            <CodeConnectSnippet data-node-id="I123:791;97:611" data-name="Settings">
              {/* Simple Design System component */}
              <Settings />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I123:791;123:867">
              Setting
            </N>
          </N>
          <N as="div" className="f29" data-node-id="I123:791;182:4523" data-name="Chat">
            <N as="div" className="f30" data-node-id="I123:791;131:760">
              <N as="p" className="f31" data-node-id="I123:791;123:829">
                Chat
              </N>
            </N>
            <CodeConnectSnippet data-node-id="I123:791;182:4323" data-name="Message circle">
              {/* Simple Design System component */}
              <MessageCircle size={20} />
            </CodeConnectSnippet>
          </N>
        </N>
        <N as="div" className="f32" data-node-id="I123:791;199:2023">
          <CodeConnectSnippet data-node-id="I123:791;182:4804" data-name="Camera">
            {/* Simple Design System component */}
            <Camera size={20} />
          </CodeConnectSnippet>
          <N as="p" className="f163" data-node-id="I123:791;182:4977">
            Scan
          </N>
        </N>
      </N>
      <N as="div" className="f457" data-node-id="126:808">
        <N as="a" className="f458" data-node-id="126:755" data-name="Location Tap">
          <N as="div" className="f166" data-node-id="I126:755;114:296" />
          <N as="p" className="f167" data-node-id="I126:755;114:297">
            Scan Menu
          </N>
        </N>
        <N as="div" className="f459" data-node-id="126:759" data-name="Location Tap-selected">
          <N as="div" className="f169" data-node-id="I126:759;114:321" />
          <N as="p" className="f170" data-node-id="I126:759;114:322">
            Scan Drink
          </N>
        </N>
      </N>
      <CodeConnectSnippet data-node-id="164:1653" data-name="Status bar">
        {/* iOS and iPadOS 27 component */}
        <StatusBarIPhone17Pro textTime="9:41" time="9:41" />
      </CodeConnectSnippet>
    </N>
  );
}
