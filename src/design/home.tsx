// Adapted from the original Figma design context; layout and layer IDs are preserved.
import {N,CodeConnectSnippet,StatusBarIPhone17Pro,AIChatBox,IconButton,Sliders,Track,Fill,Knob} from "../design-runtime";
import {Home,Book,Settings,MessageCircle,Camera,ChevronRight,ChevronDown,ArrowUp,Mic,Image,Plus} from "lucide-react";
const imgLucideHourglass = "/assets/e80dd.svg";
const imgIcon = "/assets/42c10.svg";
const imgLucideAvocado = "/assets/7d5a2.svg";
const imgIcon1 = "/assets/8ee8b.svg";
const imgLucideGlassWater = "/assets/c452b.svg";
const imgLucideUserRound = "/assets/e0492.svg";
const imgLucideUserRoundGroup = "/assets/f094f.svg";
const imgLucideCoffee = "/assets/ed426.svg";
const imgLucideBriefcase = "/assets/94c10.svg";
const imgLucideUsersRoundCollaboration = "/assets/e4519.svg";
const imgHeader = "/assets/158e5.svg";
const imgComponent6 = "/assets/f9c66.svg";

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

export default function Home1() {
  return (
    <N as="div" className="f0" data-node-id="131:1295" data-name="Home-1">
      <N as="div" className="f229" data-node-id="200:3515" data-name="Home">
        <N as="div" className="f230" data-node-id="200:3514" data-name="Daily Overview">
          <N as="div" className="f231" data-node-id="200:3511">
            <N as="div" className="f232" data-node-id="190:6384" data-name="Profile Pic">
              <N as="div" className="f127" data-node-id="I190:6384;190:5894" data-name="avatar">
                <N as="p" className="f128" data-node-id="I190:6384;190:5895">
                  K
                </N>
              </N>
            </N>
            <HomeDailyOverview className="f233" />
          </N>
        </N>
        <N as="div" className="f234" data-node-id="201:4348" data-name="Reminder">
          <N as="div" className="f69" data-node-id="I201:4348;214:2172" data-name="Home- Reminder-time">
            <N as="div" className="f70" data-node-id="I201:4348;214:2173" />
            <N as="div" className="f71" data-node-id="I201:4348;214:2174">
              <N as="div" className="f72" data-node-id="I201:4348;214:2175" data-name="lucide/hourglass">
                <N as="img" alt="" className="f21" src={imgLucideHourglass} />
              </N>
              <N as="div" className="f73" data-node-id="I201:4348;214:2177">
                <N as="p" className="f74" data-node-id="I201:4348;214:2178">
                  Take It Slow
                </N>
                <N as="p" className="f75" data-node-id="I201:4348;214:2179">
                  Enjoy your drink at your own pace. Taking breaks between drinks can help you stay mindful of your consumption.
                </N>
              </N>
              <N as="div" className="f76" data-node-id="I201:4348;214:2180" data-name="Icon">
                <N as="div" className="f77">
                  <N as="img" alt="" className="f78" src={imgIcon} />
                </N>
              </N>
            </N>
            <N as="p" className="f79" data-node-id="I201:4348;214:2181">
              Reminder
            </N>
          </N>
          <N as="a" className="f235" data-node-id="I201:4348;201:4153" data-name="Home- Reminder-eat">
            <N as="div" className="f70" data-node-id="I201:4348;201:4154" />
            <N as="div" className="f81" data-node-id="I201:4348;201:4155">
              <N as="div" className="f82" data-node-id="I201:4348;201:4021" data-name="lucide/avocado">
                <N as="img" alt="" className="f21" src={imgLucideAvocado} />
              </N>
              <N as="div" className="f236" data-node-id="I201:4348;201:4158">
                <N as="p" className="f74" data-node-id="I201:4348;201:4159">
                  A Little Bite Helps
                </N>
                <N as="p" className="f75" data-node-id="I201:4348;201:4160">{`Haven't eaten yet? Having some food before or while drinking can help slow alcohol absorption.`}</N>
              </N>
              <N as="div" className="f84" data-node-id="I201:4348;201:4161" data-name="Icon">
                <N as="div" className="f77">
                  <N as="img" alt="" className="f78" src={imgIcon1} />
                </N>
              </N>
            </N>
          </N>
          <N as="a" className="f237" data-node-id="I201:4348;201:4163" data-name="Home- Reminder-water">
            <N as="div" className="f70" data-node-id="I201:4348;201:4164" />
            <N as="div" className="f81" data-node-id="I201:4348;201:4165">
              <N as="div" className="f82" data-node-id="I201:4348;201:4027" data-name="lucide/glass-water">
                <N as="img" alt="" className="f21" src={imgLucideGlassWater} />
              </N>
              <N as="div" className="f236" data-node-id="I201:4348;201:4168">
                <N as="p" className="f74" data-node-id="I201:4348;201:4169">
                  Stay Hydrated
                </N>
                <N as="p" className="f75" data-node-id="I201:4348;201:4170">
                  A glass of water between drinks is a simple way to stay hydrated and slow your drinking pace.
                </N>
              </N>
              <N as="div" className="f84" data-node-id="I201:4348;201:4171" data-name="Icon">
                <N as="div" className="f77">
                  <N as="img" alt="" className="f78" src={imgIcon1} />
                </N>
              </N>
            </N>
          </N>
        </N>
        <N as="div" className="f238" data-node-id="135:1610" data-name="Home- Setting- Today">
          <N as="div" className="f106" data-node-id="I135:1610;131:1165" />
          <N as="p" className="f107" data-node-id="I135:1610;135:1563">
            Personalize your experience based on your plans.
          </N>
          <N as="p" className="f108" data-node-id="I135:1610;135:1566">
            Who are you with?
          </N>
          <N as="div" className="f109" data-node-id="I135:1610;199:2706">
            <N as="a" className="f239" data-node-id="I135:1610;135:1594" data-name="Situation- Just Me">
              <N as="div" className="f6" data-node-id="I135:1610;135:1595" />
              <N as="div" className="f112" data-node-id="I135:1610;199:2457" data-name="lucide/user-round">
                <N as="img" alt="" className="f21" src={imgLucideUserRound} />
              </N>
              <N as="p" className="f113" data-node-id="I135:1610;135:1596">
                Just Me
              </N>
            </N>
            <N as="div" className="f114" data-node-id="I135:1610;135:1597" data-name="Situation- With Others">
              <N as="div" className="f6" data-node-id="I135:1610;135:1598" />
              <N as="div" className="f115" data-node-id="I135:1610;199:2606">
                <N as="div" className="f112" data-node-id="I135:1610;199:2462" data-name="lucide/user-round-group">
                  <N as="img" alt="" className="f21" src={imgLucideUserRoundGroup} />
                </N>
                <N as="p" className="f116" data-node-id="I135:1610;135:1599">
                  With Others
                </N>
              </N>
            </N>
          </N>
          <N as="p" className="f108" data-node-id="I135:1610;135:1567">{`What's the occasion?`}</N>
          <N as="div" className="f117" data-node-id="I135:1610;199:2779">
            <N as="div" className="f118" data-node-id="I135:1610;135:1600" data-name="Situation- Casual">
              <N as="div" className="f6" data-node-id="I135:1610;135:1601" />
              <N as="div" className="f119" data-node-id="I135:1610;199:2681">
                <N as="div" className="f112" data-node-id="I135:1610;199:2472" data-name="lucide/coffee">
                  <N as="img" alt="" className="f21" src={imgLucideCoffee} />
                </N>
                <N as="p" className="f120" data-node-id="I135:1610;135:1602">
                  Casual
                </N>
              </N>
            </N>
            <N as="div" className="f118" data-node-id="I135:1610;135:1603" data-name="Situation- Work">
              <N as="div" className="f6" data-node-id="I135:1610;135:1604" />
              <N as="div" className="f121" data-node-id="I135:1610;199:2656">
                <N as="div" className="f112" data-node-id="I135:1610;199:2480" data-name="lucide/briefcase">
                  <N as="img" alt="" className="f21" src={imgLucideBriefcase} />
                </N>
                <N as="p" className="f120" data-node-id="I135:1610;135:1605">
                  Work
                </N>
              </N>
            </N>
            <N as="div" className="f118" data-node-id="I135:1610;135:1606" data-name="Situatiobn- Social">
              <N as="div" className="f6" data-node-id="I135:1610;135:1607" />
              <N as="div" className="f122" data-node-id="I135:1610;199:2631">
                <N as="div" className="f112" data-node-id="I135:1610;199:2486" data-name="lucide/users-round-collaboration">
                  <N as="img" alt="" className="f21" src={imgLucideUsersRoundCollaboration} />
                </N>
                <N as="p" className="f120" data-node-id="I135:1610;135:1608">
                  Social
                </N>
              </N>
            </N>
          </N>
          <N as="div" className="f226" data-node-id="I135:1610;135:1592" data-name="Button- Next">
            <N as="p" className="f10" data-node-id="I135:1610;135:1593">
              Next
            </N>
          </N>
          <N as="p" className="f125" data-node-id="I135:1610;135:1562">{`What's your setting today?`}</N>
        </N>
      </N>
      <N as="div" className="f240" data-node-id="190:5929" data-name="Header">
        <N as="img" alt="" className="f21" src={imgHeader} />
        <N as="a" className="f241" data-node-id="I190:5929;190:5924" data-name="Component 6">
          <N as="img" alt="" className="f21" src={imgComponent6} />
        </N>
        <N as="p" className="f133" data-node-id="I190:5929;58:463">
          SIP:O
        </N>
        <N as="p" className="f134" data-node-id="I190:5929;190:6303">
          Stay mindful, stay you
        </N>
      </N>
      <N as="div" className="f22" data-node-id="145:734" data-name="Tap bar- Home">
        <N as="div" className="f23" data-node-id="I145:734;123:886" data-name="Tap Bar">
          <N as="div" className="f24" data-node-id="I145:734;131:683" data-name="Home">
            <CodeConnectSnippet data-node-id="I145:734;97:610" data-name="Home">
              {/* Simple Design System component */}
              <Home />
            </CodeConnectSnippet>
            <N as="p" className="f25" data-node-id="I145:734;123:811">
              Home
            </N>
          </N>
          <N as="a" className="f242" data-node-id="I145:734;131:837" data-name="Gallery">
            <CodeConnectSnippet data-node-id="I145:734;97:609" data-name="Book">
              {/* Simple Design System component */}
              <Book size={20} />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I145:734;123:848">
              Gallery
            </N>
          </N>
          <N as="a" className="f243" data-node-id="I145:734;131:914" data-name="Setting">
            <CodeConnectSnippet data-node-id="I145:734;97:611" data-name="Settings">
              {/* Simple Design System component */}
              <Settings />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I145:734;123:867">
              Setting
            </N>
          </N>
          <N as="div" className="f29" data-node-id="I145:734;182:4523" data-name="Chat">
            <N as="div" className="f30" data-node-id="I145:734;131:760">
              <N as="p" className="f31" data-node-id="I145:734;123:829">
                Chat
              </N>
            </N>
            <CodeConnectSnippet data-node-id="I145:734;182:4323" data-name="Message circle">
              {/* Simple Design System component */}
              <MessageCircle size={20} />
            </CodeConnectSnippet>
          </N>
        </N>
        <N as="a" className="f244" data-node-id="I145:734;199:2023">
          <CodeConnectSnippet data-node-id="I145:734;182:4804" data-name="Camera">
            {/* Simple Design System component */}
            <Camera size={20} />
          </CodeConnectSnippet>
          <N as="p" className="f245" data-node-id="I145:734;182:4977">
            Scan
          </N>
        </N>
      </N>
      <CodeConnectSnippet data-node-id="164:1583" data-name="Status bar">
        {/* iOS and iPadOS 27 component */}
        <StatusBarIPhone17Pro textTime="9:41" time="9:41" />
      </CodeConnectSnippet>
    </N>
  );
}
