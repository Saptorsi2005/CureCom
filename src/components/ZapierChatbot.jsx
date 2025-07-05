import React, { useEffect, useState } from 'react';
import { MessageSquare } from 'lucide-react'; // optional icon (npm install lucide-react)

const ZapierChatbot = () => {
  const [showBot, setShowBot] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setShowBot(!showBot)}
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition duration-300"
        title="Chat with us"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chatbot Embed (Toggles on button click) */}
      {showBot && (
        <div className="fixed bottom-20 right-6 z-40 shadow-xl border-2 border-green-500 rounded-xl bg-white">
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <zapier-interfaces-chatbot-embed 
                  is-popup="false" 
                  chatbot-id="cmcaynxzh002k7zi6eyov9bob" 
                  height="600px" 
                  width="400px">
                </zapier-interfaces-chatbot-embed>
              `,
            }}
          />
        </div>
      )}
    </>
  );
};

export default ZapierChatbot;
