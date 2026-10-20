// Adapted from the original Figma design context; layout and layer IDs are preserved.
import {N,CodeConnectSnippet,StatusBarIPhone17Pro,AIChatBox,IconButton,Sliders,Track,Fill,Knob} from "../design-runtime";
import {Home,Book,Settings,MessageCircle,Camera,ChevronRight,ChevronDown,ArrowUp,Mic,Image,Plus} from "lucide-react";
const imgImage = "/assets/368b2.png";
const imgImage1 = "/assets/9db61.png";
const imgImage2 = "/assets/a9220.png";
const imgImage3 = "/assets/8965b.png";
const imgImage4 = "/assets/d38ab.png";
const imgImage5 = "/assets/b8abd.png";
const imgImage6 = "/assets/af970.png";
const imgFavoriteHeart = "/assets/f417b.svg";

export default function Gallery1() {
  return (
    <N as="div" className="f34" data-node-id="211:2116" data-name="Gallery-1">
      <N as="div" className="f293" data-node-id="211:2119" data-name="header">
        <N as="div" className="f294" data-node-id="211:2120" data-name="greeting">
          <N as="p" className="f295" data-node-id="211:2121">
            Drink history
          </N>
        </N>
        <CodeConnectSnippet data-node-id="211:2122" data-name="Chevron right">
          {/* Simple Design System component */}
          <ChevronRight size={20} />
        </CodeConnectSnippet>
      </N>
      <N as="p" className="f296" data-node-id="211:2123">
        Sample history · Estimates per serving
      </N>
      <N as="div" className="f297" data-node-id="211:2124" data-name="gallery-grid">
        <N as="div" className="f298" data-node-id="211:2125" data-name="row-1">
          <N as="div" className="f299" data-node-id="211:2126" data-name="card-1">
            <N as="div" className="f300" data-node-id="211:2127" data-name="image">
              <N as="img" alt="" className="f301" src={imgImage} />
            </N>
            <N as="div" className="f43" data-node-id="211:2128" data-name="content">
              <N as="div" className="f302" data-node-id="211:2129" data-name="Frame">
                <N as="div" className="f303" data-node-id="211:2130" data-name="Drink name and favorite">
                  <N as="p" className="f304">Negroni</N>
                  <N as="div" className="f305" data-node-id="211:2132" data-name="Favorite heart">
                    <N as="img" alt="" className="f21" src={imgFavoriteHeart} />
                  </N>
                </N>
                <N as="p" className="f306" data-node-id="211:2134">
                  Oct 07
                </N>
              </N>
              <N as="div" className="f307" data-node-id="211:2135" data-name="Frame">
                <N as="div" className="f308" data-node-id="211:2136" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2137">
                    kcal
                  </N>
                  <N as="p" className="f310" data-node-id="211:2138">
                    180
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="211:2139" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2140">
                    ABV
                  </N>
                  <N as="p" className="f310" data-node-id="211:2141">
                    24%
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="211:2142" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2143">
                    Sugar g
                  </N>
                  <N as="p" className="f310" data-node-id="211:2144">
                    12g
                  </N>
                </N>
              </N>
            </N>
          </N>
          <N as="div" className="f311" data-node-id="73:219" data-name="card-2">
            <N as="div" className="f312" data-node-id="73:220" data-name="Information side — French 75">
              <N as="div" className="f313" data-node-id="73:221" data-name="Name and date">
                <N as="p" className="f314" data-node-id="73:222">
                  French 75
                </N>
                <N as="p" className="f315" data-node-id="73:223">
                  Oct 06
                </N>
              </N>
              <N as="div" className="f316" data-node-id="73:224" data-name="AI insight">
                <N as="p" className="f317" data-node-id="73:236">
                  AI Insight:
                </N>
                <N as="p" className="f318" data-node-id="73:235">
                  A light, refreshing cocktail with a sparkling finish. Despite its delicate taste, the French 75 contains alcohol from both gin and champagne. Sip mindfully and enjoy at your own pace.
                </N>
              </N>
              <N as="div" className="f319" data-node-id="84:276" data-name="Example ingredients">
                <N as="p" className="f320" data-node-id="73:227">
                  Ingredients
                </N>
                <N as="div" className="f321" data-node-id="84:277" data-name="Gin — 30 ml">
                  <N as="p" className="f322" data-node-id="73:230">
                    Gin
                  </N>
                  <N as="p" className="f323" data-node-id="73:231">
                    30 ml
                  </N>
                </N>
                <N as="div" className="f321" data-node-id="84:278" data-name="Champagne — 60 ml">
                  <N as="p" className="f322" data-node-id="73:233">
                    Champagne
                  </N>
                  <N as="p" className="f323" data-node-id="73:234">
                    60 ml
                  </N>
                </N>
                <N as="div" className="f321" data-node-id="84:279" data-name="Fresh Lemon Juice — 15 ml">
                  <N as="p" className="f322" data-node-id="84:280">
                    Fresh Lemon Juice
                  </N>
                  <N as="p" className="f323" data-node-id="84:281">
                    15 ml
                  </N>
                </N>
                <N as="div" className="f321" data-node-id="84:282" data-name="Simple Syrup — 15 ml">
                  <N as="p" className="f322" data-node-id="84:283">
                    Simple Syrup
                  </N>
                  <N as="p" className="f323" data-node-id="84:284">
                    15 ml
                  </N>
                </N>
                <N as="div" className="f321" data-node-id="84:285" data-name="Lemon Twist (Garnish) — 1 piece">
                  <N as="p" className="f322" data-node-id="84:286">
                    Lemon Twist (Garnish)
                  </N>
                  <N as="p" className="f323" data-node-id="84:287">
                    1 piece
                  </N>
                </N>
              </N>
            </N>
            <N as="div" className="f324" data-node-id="82:740" data-name="Estimated nutrition">
              <N as="p" className="f325" data-node-id="82:741">
                Estimates per serving
              </N>
              <N as="p" className="f326" data-node-id="82:742">
                140 kcal · 18% ABV · 8 g sugar
              </N>
            </N>
          </N>
        </N>
        <N as="div" className="f327" data-node-id="211:2164" data-name="row-2">
          <N as="div" className="f299" data-node-id="211:2165" data-name="card-3">
            <N as="div" className="f300" data-node-id="211:2166" data-name="image">
              <N as="img" alt="" className="f301" src={imgImage1} />
            </N>
            <N as="div" className="f43" data-node-id="211:2167" data-name="content">
              <N as="div" className="f328" data-node-id="211:2168" data-name="Frame">
                <N as="div" className="f303" data-node-id="211:2169" data-name="Drink name and favorite">
                  <N as="p" className="f304">{`Gin & Tonic`}</N>
                  <N as="div" className="f305" data-node-id="211:2171" data-name="Favorite heart">
                    <N as="img" alt="" className="f21" src={imgFavoriteHeart} />
                  </N>
                </N>
                <N as="p" className="f306" data-node-id="211:2173">
                  Oct 04
                </N>
              </N>
              <N as="div" className="f307" data-node-id="211:2174" data-name="Frame">
                <N as="div" className="f308" data-node-id="211:2175" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2176">
                    kcal
                  </N>
                  <N as="p" className="f310" data-node-id="211:2177">
                    120
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="211:2178" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2179">
                    ABV
                  </N>
                  <N as="p" className="f310" data-node-id="211:2180">
                    12%
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="211:2181" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2182">
                    Sugar g
                  </N>
                  <N as="p" className="f310" data-node-id="211:2183">
                    6g
                  </N>
                </N>
              </N>
            </N>
          </N>
          <N as="div" className="f299" data-node-id="211:2184" data-name="card-4">
            <N as="div" className="f300" data-node-id="211:2185" data-name="image">
              <N as="img" alt="" className="f301" src={imgImage2} />
            </N>
            <N as="div" className="f43" data-node-id="211:2186" data-name="content">
              <N as="div" className="f328" data-node-id="211:2187" data-name="Frame">
                <N as="div" className="f303" data-node-id="211:2188" data-name="Drink name and favorite">
                  <N as="p" className="f304">Whiskey Sour</N>
                  <N as="div" className="f305" data-node-id="211:2190" data-name="Favorite heart">
                    <N as="img" alt="" className="f21" src={imgFavoriteHeart} />
                  </N>
                </N>
                <N as="p" className="f306" data-node-id="211:2192">
                  Oct 05
                </N>
              </N>
              <N as="div" className="f307" data-node-id="211:2193" data-name="Frame">
                <N as="div" className="f308" data-node-id="211:2194" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2195">
                    kcal
                  </N>
                  <N as="p" className="f310" data-node-id="211:2196">
                    160
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="211:2197" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2198">
                    ABV
                  </N>
                  <N as="p" className="f310" data-node-id="211:2199">
                    22%
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="211:2200" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2201">
                    Sugar g
                  </N>
                  <N as="p" className="f310" data-node-id="211:2202">
                    15g
                  </N>
                </N>
              </N>
            </N>
          </N>
        </N>
        <N as="div" className="f329" data-node-id="211:2203" data-name="row-3">
          <N as="div" className="f299" data-node-id="211:2204" data-name="card-5">
            <N as="div" className="f300" data-node-id="211:2205" data-name="image">
              <N as="img" alt="" className="f301" src={imgImage3} />
            </N>
            <N as="div" className="f43" data-node-id="211:2206" data-name="content">
              <N as="div" className="f328" data-node-id="211:2207" data-name="Frame">
                <N as="div" className="f303" data-node-id="211:2208" data-name="Drink name and favorite">
                  <N as="p" className="f304">Vodka Martini</N>
                  <N as="div" className="f305" data-node-id="211:2210" data-name="Favorite heart">
                    <N as="img" alt="" className="f21" src={imgFavoriteHeart} />
                  </N>
                </N>
                <N as="p" className="f306" data-node-id="211:2212">
                  Sep 28
                </N>
              </N>
              <N as="div" className="f307" data-node-id="211:2213" data-name="Frame">
                <N as="div" className="f308" data-node-id="211:2214" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2215">
                    kcal
                  </N>
                  <N as="p" className="f310" data-node-id="211:2216">
                    110
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="211:2217" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2218">
                    ABV
                  </N>
                  <N as="p" className="f310" data-node-id="211:2219">
                    25%
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="211:2220" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2221">
                    Sugar g
                  </N>
                  <N as="p" className="f310" data-node-id="211:2222">
                    2g
                  </N>
                </N>
              </N>
            </N>
          </N>
          <N as="div" className="f299" data-node-id="211:2223" data-name="card-6">
            <N as="div" className="f300" data-node-id="211:2224" data-name="image">
              <N as="div" aria-hidden className="f330">
                <N as="img" alt="" className="f331" src={imgImage4} />
                <N as="img" alt="" className="f331" src={imgImage4} />
              </N>
            </N>
            <N as="div" className="f43" data-node-id="211:2225" data-name="content">
              <N as="div" className="f328" data-node-id="211:2226" data-name="Frame">
                <N as="div" className="f303" data-node-id="211:2227" data-name="Drink name and favorite">
                  <N as="p" className="f304">Mojito</N>
                  <N as="div" className="f305" data-node-id="211:2229" data-name="Favorite heart">
                    <N as="img" alt="" className="f21" src={imgFavoriteHeart} />
                  </N>
                </N>
                <N as="p" className="f306" data-node-id="211:2231">
                  Sep 25
                </N>
              </N>
              <N as="div" className="f307" data-node-id="211:2232" data-name="Frame">
                <N as="div" className="f308" data-node-id="211:2233" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2234">
                    kcal
                  </N>
                  <N as="p" className="f310" data-node-id="211:2235">
                    150
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="211:2236" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2237">
                    ABV
                  </N>
                  <N as="p" className="f310" data-node-id="211:2238">
                    10%
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="211:2239" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2240">
                    Sugar g
                  </N>
                  <N as="p" className="f310" data-node-id="211:2241">
                    10g
                  </N>
                </N>
              </N>
            </N>
          </N>
        </N>
        <N as="div" className="f332" data-node-id="211:2242" data-name="row-4">
          <N as="div" className="f299" data-node-id="211:2243" data-name="card-7">
            <N as="div" className="f300" data-node-id="211:2244" data-name="image">
              <N as="img" alt="" className="f301" src={imgImage5} />
            </N>
            <N as="div" className="f43" data-node-id="211:2245" data-name="content">
              <N as="div" className="f328" data-node-id="211:2246" data-name="Frame">
                <N as="div" className="f303" data-node-id="211:2247" data-name="Drink name and favorite">
                  <N as="p" className="f304">Old Fashioned</N>
                  <N as="div" className="f305" data-node-id="211:2249" data-name="Favorite heart">
                    <N as="img" alt="" className="f21" src={imgFavoriteHeart} />
                  </N>
                </N>
                <N as="p" className="f306" data-node-id="211:2251">
                  Sep 20
                </N>
              </N>
              <N as="div" className="f307" data-node-id="211:2252" data-name="Frame">
                <N as="div" className="f308" data-node-id="211:2253" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2254">
                    kcal
                  </N>
                  <N as="p" className="f310" data-node-id="211:2255">
                    170
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="211:2256" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2257">
                    ABV
                  </N>
                  <N as="p" className="f310" data-node-id="211:2258">
                    30%
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="211:2259" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2260">
                    Sugar g
                  </N>
                  <N as="p" className="f310" data-node-id="211:2261">
                    5g
                  </N>
                </N>
              </N>
            </N>
          </N>
          <N as="div" className="f299" data-node-id="211:2262" data-name="card-8">
            <N as="div" className="f300" data-node-id="211:2263" data-name="image">
              <N as="div" aria-hidden className="f330">
                <N as="img" alt="" className="f331" src={imgImage6} />
                <N as="img" alt="" className="f331" src={imgImage6} />
              </N>
            </N>
            <N as="div" className="f43" data-node-id="211:2264" data-name="content">
              <N as="div" className="f328" data-node-id="211:2265" data-name="Frame">
                <N as="div" className="f303" data-node-id="211:2266" data-name="Drink name and favorite">
                  <N as="p" className="f304">Cosmopolitan</N>
                  <N as="div" className="f305" data-node-id="211:2268" data-name="Favorite heart">
                    <N as="img" alt="" className="f21" src={imgFavoriteHeart} />
                  </N>
                </N>
                <N as="p" className="f306" data-node-id="211:2270">
                  Sep 18
                </N>
              </N>
              <N as="div" className="f307" data-node-id="211:2271" data-name="Frame">
                <N as="div" className="f308" data-node-id="211:2272" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2273">
                    kcal
                  </N>
                  <N as="p" className="f310" data-node-id="211:2274">
                    140
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="211:2275" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2276">
                    ABV
                  </N>
                  <N as="p" className="f310" data-node-id="211:2277">
                    20%
                  </N>
                </N>
                <N as="div" className="f308" data-node-id="211:2278" data-name="Frame">
                  <N as="p" className="f309" data-node-id="211:2279">
                    Sugar g
                  </N>
                  <N as="p" className="f310" data-node-id="211:2280">
                    12g
                  </N>
                </N>
              </N>
            </N>
          </N>
        </N>
      </N>
      <CodeConnectSnippet data-node-id="211:2281" data-name="AI Chat Box">
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
      <N as="p" className="f333" data-node-id="211:2282">
        Sip:o AI uses your information solely to provide personalized insights, recommendations, and a better app experience. Your data remains private and under your control.
      </N>
      <CodeConnectSnippet data-node-id="211:2283" data-name="Status bar">
        {/* iOS and iPadOS 27 component */}
        <StatusBarIPhone17Pro textTime="9:41" time="9:41" />
      </CodeConnectSnippet>
      <N as="div" className="f22" data-node-id="211:2284" data-name="Tap bar- Gallery">
        <N as="div" className="f23" data-node-id="I211:2284;123:886" data-name="Tap Bar">
          <N as="div" className="f24" data-node-id="I211:2284;131:683" data-name="Home">
            <CodeConnectSnippet data-node-id="I211:2284;97:610" data-name="Home">
              {/* Simple Design System component */}
              <Home />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I211:2284;123:811">
              Home
            </N>
          </N>
          <N as="div" className="f26" data-node-id="I211:2284;131:837" data-name="Gallery">
            <CodeConnectSnippet data-node-id="I211:2284;97:609" data-name="Book">
              {/* Simple Design System component */}
              <Book size={20} />
            </CodeConnectSnippet>
            <N as="p" className="f25" data-node-id="I211:2284;123:848">
              Gallery
            </N>
          </N>
          <N as="div" className="f28" data-node-id="I211:2284;131:914" data-name="Setting">
            <CodeConnectSnippet data-node-id="I211:2284;97:611" data-name="Settings">
              {/* Simple Design System component */}
              <Settings />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I211:2284;123:867">
              Setting
            </N>
          </N>
          <N as="div" className="f29" data-node-id="I211:2284;182:4523" data-name="Chat">
            <N as="div" className="f30" data-node-id="I211:2284;131:760" data-name="Scan">
              <N as="p" className="f31" data-node-id="I211:2284;123:829">
                Chat
              </N>
            </N>
            <CodeConnectSnippet data-node-id="I211:2284;182:4323" data-name="Message circle">
              {/* Simple Design System component */}
              <MessageCircle size={20} />
            </CodeConnectSnippet>
          </N>
        </N>
        <N as="div" className="f32" data-node-id="I211:2284;199:2023">
          <CodeConnectSnippet data-node-id="I211:2284;182:4804" data-name="Camera">
            {/* Simple Design System component */}
            <Camera size={20} />
          </CodeConnectSnippet>
          <N as="p" className="f33" data-node-id="I211:2284;182:4977">
            Scan
          </N>
        </N>
      </N>
    </N>
  );
}
