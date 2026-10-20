// Adapted from the original Figma design context; layout and layer IDs are preserved.
import {N,CodeConnectSnippet,StatusBarIPhone17Pro,AIChatBox,IconButton,Sliders,Track,Fill,Knob} from "../design-runtime";
import {Home,Book,Settings,MessageCircle,Camera,ChevronRight,ChevronDown,ArrowUp,Mic,Image,Plus} from "lucide-react";
export default function Gallery11() {
  return (
    <N as="div" className="f34" data-node-id="73:196" data-name="Gallery1-1">
      <N as="div" className="f293" data-node-id="73:197" data-name="header">
        <N as="div" className="f294" data-node-id="73:198" data-name="greeting">
          <N as="p" className="f295" data-node-id="73:199">
            Drink history
          </N>
        </N>
        <CodeConnectSnippet data-node-id="96:338" data-name="Chevron right">
          {/* Simple Design System component */}
          <ChevronRight size={20} />
        </CodeConnectSnippet>
      </N>
      <N as="p" className="f296" data-node-id="73:200">
        Sample history · Estimates per serving
      </N>
      <N as="div" className="f523" data-node-id="73:202" data-name="row-1">
        <N as="div" className="f299" data-node-id="73:203" data-name="card-1">
          <N as="div" className="f524" data-node-id="75:225" data-name="Information side — Negroni">
            <N as="div" className="f313" data-node-id="75:226" data-name="Name and date">
              <N as="p" className="f314" data-node-id="75:227">
                Negroni
              </N>
              <N as="p" className="f315" data-node-id="75:228">
                Oct 07
              </N>
            </N>
            <N as="div" className="f316" data-node-id="75:229" data-name="AI insight">
              <N as="p" className="f317" data-node-id="75:230">
                AI Insight:
              </N>
              <N as="p" className="f318" data-node-id="75:231">
                Bitter orange and herbal notes meet a rich, spirit-forward finish. Equal parts gin, bitter aperitif and vermouth.
              </N>
            </N>
            <N as="div" className="f319" data-node-id="75:232" data-name="Example ingredients">
              <N as="p" className="f320" data-node-id="75:233">
                Ingredients
              </N>
              <N as="div" className="f321" data-node-id="75:235" data-name="Gin — 30 ml">
                <N as="p" className="f322" data-node-id="75:236">
                  Gin
                </N>
                <N as="p" className="f323" data-node-id="75:237">
                  30 ml
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:238" data-name="Campari — 30 ml">
                <N as="p" className="f322" data-node-id="75:239">
                  Campari
                </N>
                <N as="p" className="f323" data-node-id="75:240">
                  30 ml
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:241" data-name="Sweet vermouth — 30 ml">
                <N as="p" className="f322" data-node-id="75:242">
                  Sweet vermouth
                </N>
                <N as="p" className="f323" data-node-id="75:243">
                  30 ml
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:244" data-name="Orange peel — 1 piece">
                <N as="p" className="f322" data-node-id="75:245">
                  Orange peel
                </N>
                <N as="p" className="f323" data-node-id="75:246">
                  1 piece
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:247" data-name="Ice — 1 large cube">
                <N as="p" className="f322" data-node-id="75:248">
                  Ice
                </N>
                <N as="p" className="f525" data-node-id="75:249">
                  1 cub
                </N>
              </N>
            </N>
            <N as="div" className="f526" data-node-id="75:250" data-name="Estimated nutrition">
              <N as="p" className="f527" data-node-id="75:251">
                Estimates per serving
              </N>
              <N as="p" className="f528" data-node-id="75:252">
                180 kcal · 24% ABV · 12 g sugar
              </N>
            </N>
          </N>
        </N>
      </N>
      <N as="div" className="f529" data-node-id="73:237" data-name="row-2">
        <N as="div" className="f299" data-node-id="73:238" data-name="card-3">
          <N as="div" className="f524" data-node-id="75:253" data-name="Information side — Gin & Tonic">
            <N as="div" className="f313" data-node-id="75:254" data-name="Name and date">
              <N as="p" className="f314" data-node-id="75:255">{`Gin & Tonic`}</N>
              <N as="p" className="f315" data-node-id="75:256">
                Oct 04
              </N>
            </N>
            <N as="div" className="f316" data-node-id="75:257" data-name="AI insight">
              <N as="p" className="f317" data-node-id="75:258">
                AI Insight:
              </N>
              <N as="p" className="f318" data-node-id="75:259">
                Crisp botanicals and tonic bitterness, finished with fresh lime. Tonic sweetness varies by brand.
              </N>
            </N>
            <N as="div" className="f319" data-node-id="75:260" data-name="Example ingredients">
              <N as="p" className="f320" data-node-id="75:261">
                Ingredients
              </N>
              <N as="div" className="f321" data-node-id="75:263" data-name="Gin — 45 ml">
                <N as="p" className="f322" data-node-id="75:264">
                  Gin
                </N>
                <N as="p" className="f323" data-node-id="75:265">
                  45 ml
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:266" data-name="Tonic water — 120 ml">
                <N as="p" className="f322" data-node-id="75:267">
                  Tonic water
                </N>
                <N as="p" className="f323" data-node-id="75:268">
                  120 ml
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:269" data-name="Lime wedge — 1 piece">
                <N as="p" className="f322" data-node-id="75:270">
                  Lime wedge
                </N>
                <N as="p" className="f323" data-node-id="75:271">
                  1 piece
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:272" data-name="Ice — As needed">
                <N as="p" className="f322" data-node-id="75:273">
                  Ice
                </N>
                <N as="p" className="f323" data-node-id="75:274">
                  As needed
                </N>
              </N>
            </N>
            <N as="div" className="f526" data-node-id="75:275" data-name="Estimated nutrition">
              <N as="p" className="f527" data-node-id="75:276">
                Estimates per serving
              </N>
              <N as="p" className="f528" data-node-id="75:277">
                120 kcal · 12% ABV · 6 g sugar
              </N>
            </N>
          </N>
        </N>
        <N as="div" className="f299" data-node-id="73:254" data-name="card-4">
          <N as="div" className="f524" data-node-id="75:278" data-name="Information side — Whiskey Sour">
            <N as="div" className="f313" data-node-id="75:279" data-name="Name and date">
              <N as="p" className="f314" data-node-id="75:280">
                Whiskey Sour
              </N>
              <N as="p" className="f315" data-node-id="75:281">
                Oct 05
              </N>
            </N>
            <N as="div" className="f316" data-node-id="75:282" data-name="AI insight">
              <N as="p" className="f317" data-node-id="75:283">
                AI Insight:
              </N>
              <N as="p" className="f318" data-node-id="75:284">
                Whiskey warmth balanced with bright lemon and sweetness. Optional egg white adds a soft foam.
              </N>
            </N>
            <N as="div" className="f319" data-node-id="75:285" data-name="Example ingredients">
              <N as="p" className="f320" data-node-id="75:286">
                Ingredients
              </N>
              <N as="div" className="f321" data-node-id="75:288" data-name="Whiskey — 60 ml">
                <N as="p" className="f322" data-node-id="75:289">
                  Whiskey
                </N>
                <N as="p" className="f323" data-node-id="75:290">
                  60 ml
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:291" data-name="Lemon juice — 22.5 ml">
                <N as="p" className="f322" data-node-id="75:292">
                  Lemon juice
                </N>
                <N as="p" className="f323" data-node-id="75:293">
                  22.5 ml
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:294" data-name="Simple syrup — 15 ml">
                <N as="p" className="f322" data-node-id="75:295">
                  Simple syrup
                </N>
                <N as="p" className="f323" data-node-id="75:296">
                  15 ml
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:297" data-name="Egg white (opt.) — 15 ml">
                <N as="p" className="f322" data-node-id="75:298">
                  Egg white (opt.)
                </N>
                <N as="p" className="f323" data-node-id="75:299">
                  15 ml
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:300" data-name="Cherry — 1 piece">
                <N as="p" className="f322" data-node-id="75:301">
                  Cherry
                </N>
                <N as="p" className="f323" data-node-id="75:302">
                  1 piece
                </N>
              </N>
            </N>
            <N as="div" className="f526" data-node-id="75:303" data-name="Estimated nutrition">
              <N as="p" className="f527" data-node-id="75:304">
                Estimates per serving
              </N>
              <N as="p" className="f528" data-node-id="75:305">
                160 kcal · 22% ABV · 15 g sugar
              </N>
            </N>
          </N>
        </N>
      </N>
      <N as="div" className="f530" data-node-id="73:270" data-name="row-3">
        <N as="div" className="f299" data-node-id="73:271" data-name="card-5">
          <N as="div" className="f524" data-node-id="75:306" data-name="Information side — Vodka Martini">
            <N as="div" className="f313" data-node-id="75:307" data-name="Name and date">
              <N as="p" className="f314" data-node-id="75:308">
                Vodka Martini
              </N>
              <N as="p" className="f315" data-node-id="75:309">
                Sep 28
              </N>
            </N>
            <N as="div" className="f316" data-node-id="75:310" data-name="AI insight">
              <N as="p" className="f317" data-node-id="75:311">
                AI Insight:
              </N>
              <N as="p" className="f318" data-node-id="75:312">
                Clean and dry with a subtle vermouth aroma. An olive adds a savory finish to this spirit-forward classic.
              </N>
            </N>
            <N as="div" className="f319" data-node-id="75:313" data-name="Example ingredients">
              <N as="p" className="f320" data-node-id="75:314">
                Ingredients
              </N>
              <N as="div" className="f321" data-node-id="75:316" data-name="Vodka — 60 ml">
                <N as="p" className="f322" data-node-id="75:317">
                  Vodka
                </N>
                <N as="p" className="f323" data-node-id="75:318">
                  60 ml
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:319" data-name="Dry vermouth — 10 ml">
                <N as="p" className="f322" data-node-id="75:320">
                  Dry vermouth
                </N>
                <N as="p" className="f323" data-node-id="75:321">
                  10 ml
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:322" data-name="Olive — 1 piece">
                <N as="p" className="f322" data-node-id="75:323">
                  Olive
                </N>
                <N as="p" className="f323" data-node-id="75:324">
                  1 piece
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:325" data-name="Ice for stirring — As needed">
                <N as="p" className="f531" data-node-id="75:326">
                  Ice for stirring
                </N>
                <N as="p" className="f532" data-node-id="75:327">
                  As needed
                </N>
              </N>
            </N>
            <N as="div" className="f526" data-node-id="75:328" data-name="Estimated nutrition">
              <N as="p" className="f527" data-node-id="75:329">
                Estimates per serving
              </N>
              <N as="p" className="f528" data-node-id="75:330">
                110 kcal · 25% ABV · 2 g sugar
              </N>
            </N>
          </N>
        </N>
        <N as="div" className="f299" data-node-id="73:287" data-name="card-6">
          <N as="div" className="f524" data-node-id="75:331" data-name="Information side — Mojito">
            <N as="div" className="f313" data-node-id="75:332" data-name="Name and date">
              <N as="p" className="f314" data-node-id="75:333">
                Mojito
              </N>
              <N as="p" className="f315" data-node-id="75:334">
                Sep 25
              </N>
            </N>
            <N as="div" className="f316" data-node-id="75:335" data-name="AI insight">
              <N as="p" className="f317" data-node-id="75:336">
                AI Insight:
              </N>
              <N as="p" className="f318" data-node-id="75:337">
                Fresh mint and lime brighten white rum. Soda adds a sparkling finish, with syrup balancing the citrus.
              </N>
            </N>
            <N as="div" className="f319" data-node-id="75:338" data-name="Example ingredients">
              <N as="p" className="f320" data-node-id="75:339">
                Ingredients
              </N>
              <N as="div" className="f321" data-node-id="75:341" data-name="White rum — 45 ml">
                <N as="p" className="f322" data-node-id="75:342">
                  White rum
                </N>
                <N as="p" className="f323" data-node-id="75:343">
                  45 ml
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:344" data-name="Lime juice — 25 ml">
                <N as="p" className="f322" data-node-id="75:345">
                  Lime juice
                </N>
                <N as="p" className="f323" data-node-id="75:346">
                  25 ml
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:347" data-name="Simple syrup — 15 ml">
                <N as="p" className="f322" data-node-id="75:348">
                  Simple syrup
                </N>
                <N as="p" className="f323" data-node-id="75:349">
                  15 ml
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:350" data-name="Mint — 6 leaves">
                <N as="p" className="f322" data-node-id="75:351">
                  Mint
                </N>
                <N as="p" className="f323" data-node-id="75:352">
                  6 leaves
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:353" data-name="Soda water — 60 ml">
                <N as="p" className="f322" data-node-id="75:354">
                  Soda water
                </N>
                <N as="p" className="f323" data-node-id="75:355">
                  60 ml
                </N>
              </N>
            </N>
            <N as="div" className="f526" data-node-id="75:356" data-name="Estimated nutrition">
              <N as="p" className="f527" data-node-id="75:357">
                Estimates per serving
              </N>
              <N as="p" className="f528" data-node-id="75:358">
                150 kcal · 10% ABV · 10 g sugar
              </N>
            </N>
          </N>
        </N>
      </N>
      <N as="div" className="f533" data-node-id="73:303" data-name="row-4">
        <N as="div" className="f299" data-node-id="73:304" data-name="card-7">
          <N as="div" className="f524" data-node-id="75:359" data-name="Information side — Old Fashioned">
            <N as="div" className="f313" data-node-id="75:360" data-name="Name and date">
              <N as="p" className="f314" data-node-id="75:361">
                Old Fashioned
              </N>
              <N as="p" className="f315" data-node-id="75:362">
                Sep 20
              </N>
            </N>
            <N as="div" className="f316" data-node-id="75:363" data-name="AI insight">
              <N as="p" className="f317" data-node-id="75:364">
                AI Insight:
              </N>
              <N as="p" className="f318" data-node-id="75:365">
                Rich whiskey with aromatic bitters and orange oils. A small amount of syrup softens the bold finish.
              </N>
            </N>
            <N as="div" className="f319" data-node-id="75:366" data-name="Example ingredients">
              <N as="p" className="f320" data-node-id="75:367">
                Ingredients
              </N>
              <N as="div" className="f321" data-node-id="75:369" data-name="Bourbon — 60 ml">
                <N as="p" className="f322" data-node-id="75:370">
                  Bourbon
                </N>
                <N as="p" className="f323" data-node-id="75:371">
                  60 ml
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:372" data-name="Simple syrup — 5 ml">
                <N as="p" className="f322" data-node-id="75:373">
                  Simple syrup
                </N>
                <N as="p" className="f323" data-node-id="75:374">
                  5 ml
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:375" data-name="Angostura bitters — 2 dashes">
                <N as="p" className="f322" data-node-id="75:376">
                  Angostura bitters
                </N>
                <N as="p" className="f323" data-node-id="75:377">
                  2 dashes
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:378" data-name="Orange peel — 1 piece">
                <N as="p" className="f322" data-node-id="75:379">
                  Orange peel
                </N>
                <N as="p" className="f323" data-node-id="75:380">
                  1 piece
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:381" data-name="Ice — 1 large cube">
                <N as="p" className="f322" data-node-id="75:382">
                  Ice
                </N>
                <N as="p" className="f323" data-node-id="75:383">
                  1 cube
                </N>
              </N>
            </N>
            <N as="div" className="f526" data-node-id="75:384" data-name="Estimated nutrition">
              <N as="p" className="f527" data-node-id="75:385">
                Estimates per serving
              </N>
              <N as="p" className="f528" data-node-id="75:386">
                170 kcal · 30% ABV · 5 g sugar
              </N>
            </N>
          </N>
        </N>
        <N as="div" className="f299" data-node-id="73:320" data-name="card-8">
          <N as="div" className="f524" data-node-id="75:387" data-name="Information side — Cosmopolitan">
            <N as="div" className="f313" data-node-id="75:388" data-name="Name and date">
              <N as="p" className="f314" data-node-id="75:389">
                Cosmopolitan
              </N>
              <N as="p" className="f315" data-node-id="75:390">
                Sep 18
              </N>
            </N>
            <N as="div" className="f316" data-node-id="75:391" data-name="AI insight">
              <N as="p" className="f317" data-node-id="75:392">
                AI Insight:
              </N>
              <N as="p" className="f318" data-node-id="75:393">
                Bright cranberry and lime with orange notes. A tart, lightly sweet cocktail served chilled in a martini glass.
              </N>
            </N>
            <N as="div" className="f319" data-node-id="75:394" data-name="Example ingredients">
              <N as="p" className="f320" data-node-id="75:395">
                Ingredients
              </N>
              <N as="div" className="f321" data-node-id="75:397" data-name="Vodka — 45 ml">
                <N as="p" className="f322" data-node-id="75:398">
                  Vodka
                </N>
                <N as="p" className="f323" data-node-id="75:399">
                  45 ml
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:400" data-name="Triple sec — 15 ml">
                <N as="p" className="f322" data-node-id="75:401">
                  Triple sec
                </N>
                <N as="p" className="f323" data-node-id="75:402">
                  15 ml
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:403" data-name="Cranberry juice — 30 ml">
                <N as="p" className="f322" data-node-id="75:404">
                  Cranberry juice
                </N>
                <N as="p" className="f323" data-node-id="75:405">
                  30 ml
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:406" data-name="Lime juice — 15 ml">
                <N as="p" className="f322" data-node-id="75:407">
                  Lime juice
                </N>
                <N as="p" className="f323" data-node-id="75:408">
                  15 ml
                </N>
              </N>
              <N as="div" className="f321" data-node-id="75:409" data-name="Orange peel — 1 piece">
                <N as="p" className="f322" data-node-id="75:410">
                  Orange peel
                </N>
                <N as="p" className="f323" data-node-id="75:411">
                  1 piece
                </N>
              </N>
            </N>
            <N as="div" className="f526" data-node-id="75:412" data-name="Estimated nutrition">
              <N as="p" className="f527" data-node-id="75:413">
                Estimates per serving
              </N>
              <N as="p" className="f528" data-node-id="75:414">
                140 kcal · 20% ABV · 12 g sugar
              </N>
            </N>
          </N>
        </N>
      </N>
      <CodeConnectSnippet data-node-id="73:341" data-name="AI Chat Box">
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
      <N as="p" className="f333" data-node-id="73:342">
        Sip:o AI uses your information solely to provide personalized insights, recommendations, and a better app experience. Your data remains private and under your control.
      </N>
      <CodeConnectSnippet data-node-id="164:1695" data-name="Status bar">
        {/* iOS and iPadOS 27 component */}
        <StatusBarIPhone17Pro textTime="9:41" time="9:41" />
      </CodeConnectSnippet>
      <N as="div" className="f22" data-node-id="164:1754" data-name="Tap bar- Gallery">
        <N as="div" className="f23" data-node-id="I164:1754;123:886" data-name="Tap Bar">
          <N as="div" className="f24" data-node-id="I164:1754;131:683" data-name="Home">
            <CodeConnectSnippet data-node-id="I164:1754;97:610" data-name="Home">
              {/* Simple Design System component */}
              <Home />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I164:1754;123:811">
              Home
            </N>
          </N>
          <N as="div" className="f26" data-node-id="I164:1754;131:837" data-name="Gallery">
            <CodeConnectSnippet data-node-id="I164:1754;97:609" data-name="Book">
              {/* Simple Design System component */}
              <Book size={20} />
            </CodeConnectSnippet>
            <N as="p" className="f25" data-node-id="I164:1754;123:848">
              Gallery
            </N>
          </N>
          <N as="div" className="f28" data-node-id="I164:1754;131:914" data-name="Setting">
            <CodeConnectSnippet data-node-id="I164:1754;97:611" data-name="Settings">
              {/* Simple Design System component */}
              <Settings />
            </CodeConnectSnippet>
            <N as="p" className="f27" data-node-id="I164:1754;123:867">
              Setting
            </N>
          </N>
          <N as="div" className="f29" data-node-id="I164:1754;182:4523" data-name="Chat">
            <N as="div" className="f30" data-node-id="I164:1754;131:760" data-name="Scan">
              <N as="p" className="f31" data-node-id="I164:1754;123:829">
                Chat
              </N>
            </N>
            <CodeConnectSnippet data-node-id="I164:1754;182:4323" data-name="Message circle">
              {/* Simple Design System component */}
              <MessageCircle size={20} />
            </CodeConnectSnippet>
          </N>
        </N>
        <N as="div" className="f32" data-node-id="I164:1754;199:2023">
          <CodeConnectSnippet data-node-id="I164:1754;182:4804" data-name="Camera">
            {/* Simple Design System component */}
            <Camera size={20} />
          </CodeConnectSnippet>
          <N as="p" className="f33" data-node-id="I164:1754;182:4977">
            Scan
          </N>
        </N>
      </N>
    </N>
  );
}
