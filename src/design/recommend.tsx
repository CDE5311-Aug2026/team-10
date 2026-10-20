// Adapted from the original Figma design context; layout and layer IDs are preserved.
import {N,CodeConnectSnippet,StatusBarIPhone17Pro,AIChatBox,IconButton,Sliders,Track,Fill,Knob} from "../design-runtime";
import {Home,Book,Settings,MessageCircle,Camera,ChevronRight,ChevronDown,ArrowUp,Mic,Image,Plus} from "lucide-react";
const imgRectangle = "/assets/1db3a.png";
const imgHeader = "/assets/158e5.svg";
const imgComponent6 = "/assets/a7161.svg";
const imgLucideHourglass = "/assets/3d68d.svg";
const imgIcon = "/assets/8ee8b.svg";

function Component4({ className }: { className?: string }) {
  return (
    <N as="div" className={className || "f460"} data-node-id="178:4069" data-name="Component 4">
      <N as="p" className="f461" data-node-id="178:4029">
        Your Drink Tonight
      </N>
      <N as="div" className="f462" data-node-id="199:3274">
        <N as="div" className="f463" data-node-id="199:3257">
          <N as="div" className="f464" data-node-id="178:3979" data-name="Rectangle">
            <N as="img" alt="" className="f465" src={imgRectangle} />
          </N>
          <N as="div" className="f466" data-node-id="178:3980" data-name="Frame">
            <N as="div" className="f467" data-node-id="178:3981" data-name="Frame">
              <N as="p" className="f33" data-node-id="178:3982">
                Low-Alcohol Mojito
              </N>
            </N>
            <N as="div" className="f468" data-node-id="178:3983" data-name="Frame">
              <N as="div" className="f469" data-node-id="178:3984" data-name="Frame">
                <N as="p" className="f470" data-node-id="178:3985">
                  ABV
                </N>
                <N as="p" className="f471" data-node-id="178:3986">
                  3–5%
                </N>
              </N>
              <N as="div" className="f469" data-node-id="178:3987" data-name="Frame">
                <N as="p" className="f470" data-node-id="178:3988">
                  Sugar
                </N>
                <N as="p" className="f471" data-node-id="178:3989">
                  10g
                </N>
              </N>
              <N as="div" className="f472" data-node-id="178:3990" data-name="Frame">
                <N as="p" className="f470" data-node-id="178:3991">
                  Calories
                </N>
                <N as="p" className="f471" data-node-id="178:3992">
                  90–140kcal
                </N>
              </N>
            </N>
            <N as="p" className="f473" data-node-id="178:3993">
              *Estimates per serving
            </N>
          </N>
        </N>
      </N>
    </N>
  );
}

function HomeDailyOverview({ className }: { className?: string }) {
  return (
    <N as="div" className={className || "f68"} data-node-id="200:3476" data-name="Home- Daily Overview">
      <N as="p" className="f86" data-node-id="200:3439">
        Your Daily Overview
      </N>
      <N as="div" className="f87" data-node-id="200:3402" />
      <N as="div" className="f88" data-node-id="200:3461">
        <N as="div" className="f89" data-node-id="200:3460">
          <N as="p" className="f74" data-node-id="200:3335">
            MONDAY, OCT 20
          </N>
          <N as="p" className="f75" data-node-id="200:3336">
            Stay mindful of your intake today.
          </N>
          <N as="div" className="f90" data-node-id="200:3459">
            <N as="p" className="f91" data-node-id="200:3337">{`Today's Intake`}</N>
            <N as="p" className="f92" data-node-id="200:3341">
              Illustrative data
            </N>
          </N>
        </N>
        <N as="div" className="f93" data-node-id="200:3450">
          <N as="div" className="f94" data-node-id="200:3447">
            <N as="div" className="f95" data-node-id="200:3475">
              <N as="p" className="f96" data-node-id="200:3338">
                Alcohol
              </N>
              <N as="p" className="f97" data-node-id="200:3446">
                5/20 ABV
              </N>
              <N as="div" className="f98" data-node-id="200:3468" data-name="Track">
                <N as="div" className="f99" data-node-id="200:3463" data-name="Fill" />
                <N as="div" className="f100" data-node-id="200:3469" data-name="Track" />
              </N>
            </N>
          </N>
          <N as="div" className="f101" data-node-id="200:3448">
            <N as="p" className="f96" data-node-id="200:3339">
              Sugar
            </N>
            <N as="p" className="f97" data-node-id="200:3445">
              18/ 50 g
            </N>
            <N as="div" className="f98" data-node-id="200:3470" data-name="Track">
              <N as="div" className="f102" data-node-id="200:3465" data-name="Fill" />
              <N as="div" className="f100" data-node-id="200:3471" data-name="Track" />
            </N>
          </N>
          <N as="div" className="f103" data-node-id="200:3449">
            <N as="p" className="f96" data-node-id="200:3340">
              Calories
            </N>
            <N as="p" className="f97" data-node-id="200:3444">
              240/ 600 kcal
            </N>
            <N as="div" className="f98" data-node-id="200:3472" data-name="Track">
              <N as="div" className="f104" data-node-id="200:3467" data-name="Fill" />
              <N as="div" className="f100" data-node-id="200:3473" data-name="Track" />
            </N>
          </N>
        </N>
      </N>
    </N>
  );
}

export default function Home1Recommendation() {
  return (
    <N as="div" className="f474" data-node-id="178:3710" data-name="Home-1- Recommendation">
      <N as="div" className="f475" data-node-id="190:6015" data-name="Header">
        <N as="img" alt="" className="f21" src={imgHeader} />
        <N as="div" className="f132" data-node-id="I190:6015;190:5924" data-name="Component 6">
          <N as="img" alt="" className="f21" src={imgComponent6} />
        </N>
        <N as="p" className="f133" data-node-id="I190:6015;58:463">
          SIP:O
        </N>
        <N as="p" className="f134" data-node-id="I190:6015;190:6303">
          Stay mindful, stay you
        </N>
      </N>
      <N as="div" className="f476" data-node-id="201:3946">
        <HomeDailyOverview className="f477" />
        <Component4 className="f43" />
      </N>
      <N as="div" className="f478" data-node-id="201:3947">
        <N as="div" className="f479" data-node-id="178:4088" data-name="Home- Reminder-time">
          <N as="div" className="f70" data-node-id="I178:4088;145:640" />
          <N as="div" className="f81" data-node-id="I178:4088;199:2198">
            <N as="div" className="f82" data-node-id="I178:4088;201:3974" data-name="lucide/hourglass">
              <N as="img" alt="" className="f21" src={imgLucideHourglass} />
            </N>
            <N as="div" className="f83" data-node-id="I178:4088;199:2128">
              <N as="p" className="f74" data-node-id="I178:4088;145:636">
                Mindful Check-In
              </N>
              <N as="p" className="f75" data-node-id="I178:4088;145:637">
                8:00 PM · Pause and check how you feel
              </N>
            </N>
            <N as="div" className="f84" data-node-id="I178:4088;145:638" data-name="Icon">
              <N as="div" className="f77">
                <N as="img" alt="" className="f78" src={imgIcon} />
              </N>
            </N>
          </N>
          <N as="p" className="f79" data-node-id="I178:4088;144:633">
            Reminder
          </N>
        </N>
        <N as="div" className="f479" data-node-id="178:4094" data-name="Home- Reminder-eat">
          <N as="div" className="f70" data-node-id="I178:4094;145:640" />
          <N as="div" className="f81" data-node-id="I178:4094;199:2198">
            <N as="div" className="f82" data-node-id="I178:4094;201:3974" data-name="lucide/hourglass">
              <N as="img" alt="" className="f21" src={imgLucideHourglass} />
            </N>
            <N as="div" className="f83" data-node-id="I178:4094;199:2128">
              <N as="p" className="f74" data-node-id="I178:4094;145:636">
                Time for a Bite
              </N>
              <N as="p" className="f75" data-node-id="I178:4094;145:637">
                7:30 PM · Enjoy a little snack
              </N>
            </N>
            <N as="div" className="f84" data-node-id="I178:4094;145:638" data-name="Icon">
              <N as="div" className="f77">
                <N as="img" alt="" className="f78" src={imgIcon} />
              </N>
            </N>
          </N>
        </N>
        <N as="div" className="f479" data-node-id="178:4095" data-name="Home- Reminder-water">
          <N as="div" className="f70" data-node-id="I178:4095;145:640" />
          <N as="div" className="f81" data-node-id="I178:4095;199:2198">
            <N as="div" className="f82" data-node-id="I178:4095;201:3974" data-name="lucide/hourglass">
              <N as="img" alt="" className="f21" src={imgLucideHourglass} />
            </N>
            <N as="div" className="f83" data-node-id="I178:4095;199:2128">
              <N as="p" className="f74" data-node-id="I178:4095;145:636">
                Water Break
              </N>
              <N as="p" className="f75" data-node-id="I178:4095;145:637">
                7:45 PM · 250 mL of water
              </N>
            </N>
            <N as="div" className="f84" data-node-id="I178:4095;145:638" data-name="Icon">
              <N as="div" className="f77">
                <N as="img" alt="" className="f78" src={imgIcon} />
              </N>
            </N>
          </N>
        </N>
      </N>
      <N as="div" className="f480" data-node-id="178:4106" data-name="Tap bar- Home">
        <N as="div" className="f23" data-node-id="I178:4106;123:886" data-name="Tap Bar">
          <N as="div" className="f24" data-node-id="I178:4106;131:683" data-name="Home">
            <CodeConnectSnippet data-node-id="I178:4106;97:610" data-name="Home">
              {/* Simple Design System component */}
              <Home />
            </CodeConnectSnippet>
            <N as="p" className="f25" data-node-id="I178:4106;123:811">
              Home
            </N>
          </N>
          <N as="div" className="f26" data-node-id="I178:4106;131:837" data-name="Gallery">
            <CodeConnectSnippet data-node-id="I178:4106;97:609" data-name="Book">
              {/* Simple Design System component */}
              <Book size={20} />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I178:4106;123:848">
              Gallery
            </N>
          </N>
          <N as="div" className="f28" data-node-id="I178:4106;131:914" data-name="Setting">
            <CodeConnectSnippet data-node-id="I178:4106;97:611" data-name="Settings">
              {/* Simple Design System component */}
              <Settings />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I178:4106;123:867">
              Setting
            </N>
          </N>
          <N as="div" className="f29" data-node-id="I178:4106;182:4523" data-name="Chat">
            <N as="div" className="f30" data-node-id="I178:4106;131:760">
              <N as="p" className="f31" data-node-id="I178:4106;123:829">
                Chat
              </N>
            </N>
            <CodeConnectSnippet data-node-id="I178:4106;182:4323" data-name="Message circle">
              {/* Simple Design System component */}
              <MessageCircle size={20} />
            </CodeConnectSnippet>
          </N>
        </N>
        <N as="div" className="f32" data-node-id="I178:4106;199:2023">
          <CodeConnectSnippet data-node-id="I178:4106;182:4804" data-name="Camera">
            {/* Simple Design System component */}
            <Camera size={20} />
          </CodeConnectSnippet>
          <N as="p" className="f33" data-node-id="I178:4106;182:4977">
            Scan
          </N>
        </N>
      </N>
      <CodeConnectSnippet data-node-id="178:3721" data-name="Status bar">
        {/* iOS and iPadOS 27 component */}
        <StatusBarIPhone17Pro textTime="9:41" time="9:41" />
      </CodeConnectSnippet>
    </N>
  );
}
