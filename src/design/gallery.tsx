// Adapted from the original Figma design context; layout and layer IDs are preserved.
import {N,CodeConnectSnippet,StatusBarIPhone17Pro,AIChatBox,IconButton,Sliders,Track,Fill,Knob} from "../design-runtime";
import {Home,Book,Settings,MessageCircle,Camera,ChevronRight,ChevronDown,ArrowUp,Mic,Image,Plus} from "lucide-react";
const imgImage = "/assets/368b2.png";
const imgImage1 = "/assets/43981.png";
const imgImage2 = "/assets/9db61.png";
const imgImage3 = "/assets/a9220.png";
const imgImage4 = "/assets/8965b.png";
const imgImage5 = "/assets/d38ab.png";
const imgImage6 = "/assets/b8abd.png";
const imgImage7 = "/assets/af970.png";
const imgFavoriteHeart = "/assets/f417b.svg";

export default function Gallery1() {
  return (
    <N as="div" className="f34" data-node-id="35:189" data-name="Gallery-1">
      <N as="div" className="f293" data-node-id="53:175" data-name="header">
        <N as="div" className="f294" data-node-id="53:178" data-name="greeting">
          <N as="p" className="f295" data-node-id="53:180">
            Drink history
          </N>
        </N>
        <CodeConnectSnippet data-node-id="96:335" data-name="Chevron right">
          {/* Simple Design System component */}
          <ChevronRight size={20} />
        </CodeConnectSnippet>
      </N>
      <N as="p" className="f296" data-node-id="53:318">
        Sample history · Estimates per serving
      </N>
      <N as="div" className="f297" data-node-id="53:181" data-name="gallery-grid">
        <N as="div" className="f298" data-node-id="53:182" data-name="row-1">
          <N as="div" className="f299" data-node-id="53:183" data-name="card-1">
            <N as="div" className="f300" data-node-id="53:184" data-name="image">
              <N as="img" alt="" className="f301" src={imgImage} />
            </N>
            <N as="div" className="f43" data-node-id="53:185" data-name="content">
              <N as="div" className="f302" data-node-id="53:186" data-name="Frame">
                <N as="div" className="f303" data-node-id="84:250" data-name="Drink name and favorite">
                  <N as="p" className="f304">Negroni</N>
                  <N as="div" className="f305" data-node-id="84:251" data-name="Favorite heart">
                    <N as="img" alt="" className="f21" src={imgFavoriteHeart} />
                  </N>
                </N>
                <N as="p" className="f306" data-node-id="53:188">
                  Oct 07
                </N>
              </N>
              <N as="div" className="f307" data-node-id="53:189" data-name="Frame">
                <N as="div" className="f308" data-node-id="53:190" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:191">
                    kcal
                  </N>
                  <N as="p" className="f310" data-node-id="53:192">
                    180
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="53:193" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:194">
                    ABV
                  </N>
                  <N as="p" className="f310" data-node-id="53:195">
                    24%
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="53:196" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:197">
                    Sugar g
                  </N>
                  <N as="p" className="f310" data-node-id="53:198">
                    12g
                  </N>
                </N>
              </N>
            </N>
          </N>
          <N as="a" className="f434" data-node-id="53:199" data-name="card-2">
            <N as="div" className="f300" data-node-id="53:201" data-name="image">
              <N as="img" alt="" className="f301" src={imgImage1} />
            </N>
            <N as="div" className="f43" data-node-id="53:202" data-name="content">
              <N as="div" className="f435" data-node-id="75:212" data-name="Frame">
                <N as="div" className="f303" data-node-id="84:253" data-name="Drink name and favorite">
                  <N as="p" className="f436">French 75</N>
                  <N as="div" className="f305" data-node-id="84:254" data-name="Favorite heart">
                    <N as="img" alt="" className="f21" src={imgFavoriteHeart} />
                  </N>
                </N>
                <N as="p" className="f437" data-node-id="75:213">
                  Oct 06
                </N>
              </N>
              <N as="div" className="f438" data-node-id="75:214" data-name="Frame">
                <N as="div" className="f308" data-node-id="75:215" data-name="Frame">
                  <N as="p" className="f309" data-node-id="75:216">
                    kcal
                  </N>
                  <N as="p" className="f310" data-node-id="75:217">
                    140
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="75:218" data-name="Frame">
                  <N as="p" className="f309" data-node-id="75:219">
                    ABV
                  </N>
                  <N as="p" className="f310" data-node-id="75:220">
                    18%
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="75:221" data-name="Frame">
                  <N as="p" className="f309" data-node-id="75:222">
                    Sugar g
                  </N>
                  <N as="p" className="f310" data-node-id="75:223">
                    8g
                  </N>
                </N>
              </N>
            </N>
          </N>
        </N>
        <N as="div" className="f327" data-node-id="53:215" data-name="row-2">
          <N as="div" className="f299" data-node-id="53:216" data-name="card-3">
            <N as="div" className="f300" data-node-id="53:217" data-name="image">
              <N as="img" alt="" className="f301" src={imgImage2} />
            </N>
            <N as="div" className="f43" data-node-id="53:218" data-name="content">
              <N as="div" className="f328" data-node-id="53:219" data-name="Frame">
                <N as="div" className="f303" data-node-id="84:256" data-name="Drink name and favorite">
                  <N as="p" className="f304">{`Gin & Tonic`}</N>
                  <N as="div" className="f305" data-node-id="84:257" data-name="Favorite heart">
                    <N as="img" alt="" className="f21" src={imgFavoriteHeart} />
                  </N>
                </N>
                <N as="p" className="f306" data-node-id="53:221">
                  Oct 04
                </N>
              </N>
              <N as="div" className="f307" data-node-id="53:222" data-name="Frame">
                <N as="div" className="f308" data-node-id="53:223" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:224">
                    kcal
                  </N>
                  <N as="p" className="f310" data-node-id="53:225">
                    120
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="53:226" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:227">
                    ABV
                  </N>
                  <N as="p" className="f310" data-node-id="53:228">
                    12%
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="53:229" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:230">
                    Sugar g
                  </N>
                  <N as="p" className="f310" data-node-id="53:231">
                    6g
                  </N>
                </N>
              </N>
            </N>
          </N>
          <N as="div" className="f299" data-node-id="53:232" data-name="card-4">
            <N as="div" className="f300" data-node-id="53:233" data-name="image">
              <N as="img" alt="" className="f301" src={imgImage3} />
            </N>
            <N as="div" className="f43" data-node-id="53:234" data-name="content">
              <N as="div" className="f328" data-node-id="53:235" data-name="Frame">
                <N as="div" className="f303" data-node-id="84:259" data-name="Drink name and favorite">
                  <N as="p" className="f304">Whiskey Sour</N>
                  <N as="div" className="f305" data-node-id="84:260" data-name="Favorite heart">
                    <N as="img" alt="" className="f21" src={imgFavoriteHeart} />
                  </N>
                </N>
                <N as="p" className="f306" data-node-id="53:237">
                  Oct 05
                </N>
              </N>
              <N as="div" className="f307" data-node-id="53:238" data-name="Frame">
                <N as="div" className="f308" data-node-id="53:239" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:240">
                    kcal
                  </N>
                  <N as="p" className="f310" data-node-id="53:241">
                    160
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="53:242" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:243">
                    ABV
                  </N>
                  <N as="p" className="f310" data-node-id="53:244">
                    22%
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="53:245" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:246">
                    Sugar g
                  </N>
                  <N as="p" className="f310" data-node-id="53:247">
                    15g
                  </N>
                </N>
              </N>
            </N>
          </N>
        </N>
        <N as="div" className="f329" data-node-id="53:248" data-name="row-3">
          <N as="div" className="f299" data-node-id="53:249" data-name="card-5">
            <N as="div" className="f300" data-node-id="53:250" data-name="image">
              <N as="img" alt="" className="f301" src={imgImage4} />
            </N>
            <N as="div" className="f43" data-node-id="53:251" data-name="content">
              <N as="div" className="f328" data-node-id="53:252" data-name="Frame">
                <N as="div" className="f303" data-node-id="84:262" data-name="Drink name and favorite">
                  <N as="p" className="f304">Vodka Martini</N>
                  <N as="div" className="f305" data-node-id="84:263" data-name="Favorite heart">
                    <N as="img" alt="" className="f21" src={imgFavoriteHeart} />
                  </N>
                </N>
                <N as="p" className="f306" data-node-id="53:254">
                  Sep 28
                </N>
              </N>
              <N as="div" className="f307" data-node-id="53:255" data-name="Frame">
                <N as="div" className="f308" data-node-id="53:256" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:257">
                    kcal
                  </N>
                  <N as="p" className="f310" data-node-id="53:258">
                    110
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="53:259" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:260">
                    ABV
                  </N>
                  <N as="p" className="f310" data-node-id="53:261">
                    25%
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="53:262" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:263">
                    Sugar g
                  </N>
                  <N as="p" className="f310" data-node-id="53:264">
                    2g
                  </N>
                </N>
              </N>
            </N>
          </N>
          <N as="div" className="f299" data-node-id="53:265" data-name="card-6">
            <N as="div" className="f300" data-node-id="53:266" data-name="image">
              <N as="div" aria-hidden className="f330">
                <N as="img" alt="" className="f331" src={imgImage5} />
                <N as="img" alt="" className="f331" src={imgImage5} />
              </N>
            </N>
            <N as="div" className="f43" data-node-id="53:267" data-name="content">
              <N as="div" className="f328" data-node-id="53:268" data-name="Frame">
                <N as="div" className="f303" data-node-id="84:265" data-name="Drink name and favorite">
                  <N as="p" className="f304">Mojito</N>
                  <N as="div" className="f305" data-node-id="84:266" data-name="Favorite heart">
                    <N as="img" alt="" className="f21" src={imgFavoriteHeart} />
                  </N>
                </N>
                <N as="p" className="f306" data-node-id="53:270">
                  Sep 25
                </N>
              </N>
              <N as="div" className="f307" data-node-id="53:271" data-name="Frame">
                <N as="div" className="f308" data-node-id="53:272" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:273">
                    kcal
                  </N>
                  <N as="p" className="f310" data-node-id="53:274">
                    150
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="53:275" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:276">
                    ABV
                  </N>
                  <N as="p" className="f310" data-node-id="53:277">
                    10%
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="53:278" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:279">
                    Sugar g
                  </N>
                  <N as="p" className="f310" data-node-id="53:280">
                    10g
                  </N>
                </N>
              </N>
            </N>
          </N>
        </N>
        <N as="div" className="f332" data-node-id="53:281" data-name="row-4">
          <N as="div" className="f299" data-node-id="53:282" data-name="card-7">
            <N as="div" className="f300" data-node-id="53:283" data-name="image">
              <N as="img" alt="" className="f301" src={imgImage6} />
            </N>
            <N as="div" className="f43" data-node-id="53:284" data-name="content">
              <N as="div" className="f328" data-node-id="53:285" data-name="Frame">
                <N as="div" className="f303" data-node-id="84:268" data-name="Drink name and favorite">
                  <N as="p" className="f304">Old Fashioned</N>
                  <N as="div" className="f305" data-node-id="84:269" data-name="Favorite heart">
                    <N as="img" alt="" className="f21" src={imgFavoriteHeart} />
                  </N>
                </N>
                <N as="p" className="f306" data-node-id="53:287">
                  Sep 20
                </N>
              </N>
              <N as="div" className="f307" data-node-id="53:288" data-name="Frame">
                <N as="div" className="f308" data-node-id="53:289" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:290">
                    kcal
                  </N>
                  <N as="p" className="f310" data-node-id="53:291">
                    170
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="53:292" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:293">
                    ABV
                  </N>
                  <N as="p" className="f310" data-node-id="53:294">
                    30%
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="53:295" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:296">
                    Sugar g
                  </N>
                  <N as="p" className="f310" data-node-id="53:297">
                    5g
                  </N>
                </N>
              </N>
            </N>
          </N>
          <N as="div" className="f299" data-node-id="53:298" data-name="card-8">
            <N as="div" className="f300" data-node-id="53:299" data-name="image">
              <N as="div" aria-hidden className="f330">
                <N as="img" alt="" className="f331" src={imgImage7} />
                <N as="img" alt="" className="f331" src={imgImage7} />
              </N>
            </N>
            <N as="div" className="f43" data-node-id="53:300" data-name="content">
              <N as="div" className="f328" data-node-id="53:301" data-name="Frame">
                <N as="div" className="f303" data-node-id="84:271" data-name="Drink name and favorite">
                  <N as="p" className="f304">Cosmopolitan</N>
                  <N as="div" className="f305" data-node-id="84:272" data-name="Favorite heart">
                    <N as="img" alt="" className="f21" src={imgFavoriteHeart} />
                  </N>
                </N>
                <N as="p" className="f306" data-node-id="53:303">
                  Sep 18
                </N>
              </N>
              <N as="div" className="f307" data-node-id="53:304" data-name="Frame">
                <N as="div" className="f308" data-node-id="53:305" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:306">
                    kcal
                  </N>
                  <N as="p" className="f310" data-node-id="53:307">
                    140
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="53:308" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:309">
                    ABV
                  </N>
                  <N as="p" className="f310" data-node-id="53:310">
                    20%
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="53:311" data-name="Frame">
                  <N as="p" className="f309" data-node-id="53:312">
                    Sugar g
                  </N>
                  <N as="p" className="f310" data-node-id="53:313">
                    12g
                  </N>
                </N>
              </N>
            </N>
          </N>
        </N>
      </N>
      <CodeConnectSnippet data-node-id="56:299" data-name="AI Chat Box">
        {/* Simple Design System component */}
        <AIChatBox variantState="Default" state="Default">
          <IconButton instanceSwapIcon="56:222" icon="56:222" variantVariant="Subtle" variant="Subtle" variantState="Default" state="Default" variantSize="Small" size="Small">
            <Image />
          </IconButton>
          <IconButton instanceSwapIcon="56:278" icon="56:278" variantVariant="Subtle" variant="Subtle" variantState="Default" state="Default" variantSize="Small" size="Small">
            <Mic />
          </IconButton>
          <IconButton instanceSwapIcon="56:280" icon="56:280" variantVariant="Primary" variant="Primary" variantState="Disabled" state="Disabled" variantSize="Small" size="Small">
            <ArrowUp />
          </IconButton>
        </AIChatBox>
      </CodeConnectSnippet>
      <N as="p" className="f333" data-node-id="57:326">
        Sip:o AI uses your information solely to provide personalized insights, recommendations, and a better app experience. Your data remains private and under your control.
      </N>
      <CodeConnectSnippet data-node-id="164:1681" data-name="Status bar">
        {/* iOS and iPadOS 27 component */}
        <StatusBarIPhone17Pro textTime="9:41" time="9:41" />
      </CodeConnectSnippet>
      <N as="div" className="f22" data-node-id="114:624" data-name="Tap bar- Gallery">
        <N as="div" className="f23" data-node-id="I114:624;123:886" data-name="Tap Bar">
          <N as="div" className="f24" data-node-id="I114:624;131:683" data-name="Home">
            <CodeConnectSnippet data-node-id="I114:624;97:610" data-name="Home">
              {/* Simple Design System component */}
              <Home />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I114:624;123:811">
              Home
            </N>
          </N>
          <N as="div" className="f26" data-node-id="I114:624;131:837" data-name="Gallery">
            <CodeConnectSnippet data-node-id="I114:624;97:609" data-name="Book">
              {/* Simple Design System component */}
              <Book size={20} />
            </CodeConnectSnippet>
            <N as="p" className="f25" data-node-id="I114:624;123:848">
              Gallery
            </N>
          </N>
          <N as="div" className="f28" data-node-id="I114:624;131:914" data-name="Setting">
            <CodeConnectSnippet data-node-id="I114:624;97:611" data-name="Settings">
              {/* Simple Design System component */}
              <Settings />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I114:624;123:867">
              Setting
            </N>
          </N>
          <N as="div" className="f29" data-node-id="I114:624;182:4523" data-name="Chat">
            <N as="div" className="f30" data-node-id="I114:624;131:760" data-name="Scan">
              <N as="p" className="f31" data-node-id="I114:624;123:829">
                Chat
              </N>
            </N>
            <CodeConnectSnippet data-node-id="I114:624;182:4323" data-name="Message circle">
              {/* Simple Design System component */}
              <MessageCircle size={20} />
            </CodeConnectSnippet>
          </N>
        </N>
        <N as="div" className="f32" data-node-id="I114:624;199:2023">
          <CodeConnectSnippet data-node-id="I114:624;182:4804" data-name="Camera">
            {/* Simple Design System component */}
            <Camera size={20} />
          </CodeConnectSnippet>
          <N as="p" className="f33" data-node-id="I114:624;182:4977">
            Scan
          </N>
        </N>
      </N>
    </N>
  );
}
