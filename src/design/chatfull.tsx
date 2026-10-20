// Adapted from the original Figma design context; layout and layer IDs are preserved.
import {N,CodeConnectSnippet,StatusBarIPhone17Pro,AIChatBox,IconButton,Sliders,Track,Fill,Knob} from "../design-runtime";
import {Home,Book,Settings,MessageCircle,Camera,ChevronRight,ChevronDown,ArrowUp,Mic,Image,Plus} from "lucide-react";
const imgChatLogo = "/assets/8ab3a.svg";
const imgEllipse28 = "/assets/06a0d.svg";
const imgAiChat = "/assets/ae98d.svg";

function ChatLogo({ className }: { className?: string }) {
  return (
    <N as="div" className={className || "f171"} data-node-id="182:5870" data-name="Chat- Logo">
      <N as="div" className="f174">
        <N as="img" alt="" className="f78" src={imgChatLogo} />
      </N>
    </N>
  );
}

function Ellipse28({ className }: { className?: string }) {
  return (
    <N as="div" className={className || "f172"} data-node-id="182:5871">
      <N as="img" alt="" className="f21" src={imgEllipse28} />
    </N>
  );
}

function AiChat({ className }: { className?: string }) {
  return (
    <N as="div" className={className || "f172"} data-node-id="182:5874" data-name="Ai Chat">
      <N as="img" alt="" className="f21" src={imgAiChat} />
      <ChatLogo className="f175" />
    </N>
  );
}

function AiChatHead({ className }: { className?: string }) {
  return (
    <N as="div" className={className || "f173"} data-node-id="182:5887" data-name="Ai Chat - Head">
      <AiChat className="f176" />
      <N as="p" className="f177" data-node-id="182:5880">
        Sip:o AI
      </N>
      <N as="p" className="f178" data-node-id="182:5881">
        Your Personal Wellness Companion
      </N>
    </N>
  );
}

export default function Chat() {
  return (
    <N as="div" className="f34" data-node-id="87:218" data-name="Chat">
      <N as="div" className="f179" data-node-id="89:243" data-name="header" />
      <N as="div" className="f180" data-node-id="89:257" data-name="conversation-area">
        <N as="div" className="f181" data-node-id="89:258" data-name="ai-intro">
          <N as="div" className="f182" data-node-id="89:259" data-name="ai-avatar">
            <CodeConnectSnippet data-node-id="89:260" data-name="Book">
              {/* Simple Design System component */}
              <Book size={20} />
            </CodeConnectSnippet>
          </N>
          <N as="div" className="f183" data-node-id="89:263" data-name="ai-copy">
            <N as="p" className="f184" data-node-id="89:264">
              SIP:O AI
            </N>
            <N as="p" className="f185" data-node-id="89:265">
              Ask about recipes, ingredient swaps, and drink information.
            </N>
          </N>
        </N>
        <N as="div" className="f186" data-node-id="89:266" data-name="user-message-row">
          <N as="div" className="f187" data-node-id="89:267" data-name="user-bubble">
            <N as="p" className="f188" data-node-id="89:268">
              I want a lighter Negroni with less sugar. What can I swap?
            </N>
            <N as="p" className="f189" data-node-id="89:269">
              2:14 PM
            </N>
          </N>
        </N>
        <N as="div" className="f190" data-node-id="89:270" data-name="ai-response-row">
          <N as="div" className="f182" data-node-id="89:271" data-name="ai-avatar">
            <CodeConnectSnippet data-node-id="89:272" data-name="Book">
              {/* Simple Design System component */}
              <Book size={20} />
            </CodeConnectSnippet>
          </N>
          <N as="div" className="f191" data-node-id="89:275" data-name="ai-bubble">
            <N as="p" className="f188" data-node-id="89:276">
              Try 30 ml gin, 30 ml bitter aperitif and 15 ml sweet vermouth. For a drier flavor, try dry vermouth instead.
            </N>
            <N as="p" className="f192" data-node-id="89:277">
              2:14 PM
            </N>
          </N>
        </N>
        <N as="div" className="f190" data-node-id="89:278" data-name="ai-follow-up-row">
          <N as="div" className="f182" data-node-id="89:279" data-name="ai-avatar">
            <CodeConnectSnippet data-node-id="89:280" data-name="Book">
              {/* Simple Design System component */}
              <Book size={20} />
            </CodeConnectSnippet>
          </N>
          <N as="div" className="f191" data-node-id="89:283" data-name="ai-bubble">
            <N as="p" className="f188" data-node-id="89:284">
              Check labels: sugar varies by brand. Soda adds volume, but doesn’t remove alcohol or sugar.
            </N>
            <N as="p" className="f192" data-node-id="89:285">
              2:14 PM
            </N>
          </N>
        </N>
        <N as="div" className="f193" data-node-id="89:286" data-name="suggestions-row">
          <N as="div" className="f194" data-node-id="89:287" data-name="suggestion-card">
            <N as="p" className="f195" data-node-id="89:288">
              Swap vermouth
            </N>
            <N as="p" className="f196" data-node-id="89:289">
              Compare sugar on labels; styles vary.
            </N>
          </N>
          <N as="div" className="f194" data-node-id="89:290" data-name="suggestion-card">
            <N as="p" className="f195" data-node-id="89:291">
              Add soda
            </N>
            <N as="p" className="f196" data-node-id="89:292">
              Add soda for a longer drink; the sugar stays.
            </N>
          </N>
        </N>
        <N as="div" className="f197" data-node-id="89:293" data-name="privacy-note">
          <N as="p" className="f198" data-node-id="89:294">
            Privacy
          </N>
          <N as="p" className="f199" data-node-id="89:295">
            SIP:O AI uses your information solely to provide personalized insights, recommendations, and a better app experience. Your data remains private and under your control.
          </N>
        </N>
      </N>
      <N as="div" className="f200" data-node-id="89:296" data-name="composer">
        <N as="div" className="f201" data-node-id="89:297" data-name="attachment-button">
          <CodeConnectSnippet data-node-id="89:298" data-name="Image">
            {/* Simple Design System component */}
            <Image />
          </CodeConnectSnippet>
        </N>
        <N as="div" className="f202" data-node-id="89:300" data-name="input-field">
          <N as="p" className="f203" data-node-id="89:301">
            What would you like to know?
          </N>
        </N>
        <N as="div" className="f201" data-node-id="89:302" data-name="mic-button">
          <CodeConnectSnippet data-node-id="89:303" data-name="Mic">
            {/* Simple Design System component */}
            <Mic />
          </CodeConnectSnippet>
        </N>
        <N as="div" className="f204" data-node-id="89:305" data-name="send-button">
          <CodeConnectSnippet data-node-id="89:306" data-name="Arrow up">
            {/* Simple Design System component */}
            <ArrowUp />
          </CodeConnectSnippet>
        </N>
      </N>
      <CodeConnectSnippet data-node-id="164:1709" data-name="Status bar">
        {/* iOS and iPadOS 27 component */}
        <StatusBarIPhone17Pro textTime="9:41" time="9:41" />
      </CodeConnectSnippet>
      <AiChatHead className="f205" />
    </N>
  );
}
