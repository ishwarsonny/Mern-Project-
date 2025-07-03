import React, { useState } from "react";
import { X } from "lucide-react";

const Chatbox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const sendMessage = () => {
        if (message.trim()) {
            console.log("User message:", message);
            setMessage("");
        }
    };

    return (
        <div className="fixed bottom-20 right-6 z-50">
            {isOpen ? (
                <div className="bg-white w-80 shadow-lg rounded-lg border p-4">
                    <div className="flex justify-between items-center bg-pink-600 text-white p-2 rounded-t-lg">
                        <span> Chat with us</span>
                        <button onClick={toggleChat}>
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="p-2">
                        <p className="text-gray-700 text-sm">
                            Hi, message us with any questions. We're happy to help!
                        </p>

                        <input
                            type="text"
                            className="w-full p-2 border mt-2 rounded"
                            placeholder="Write message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button
                            className="bg-pink-600 text-white px-4 py-1 rounded mt-2 w-full"
                            onClick={sendMessage}
                        >
                            Send
                        </button>

                        <div className="mt-4">
                            <p className="text-sm font-bold">Instant answers</p>
                            <button className="w-full text-left text-blue-500 mt-1">
                                How can I buy your products?
                            </button>
                            <button className="w-full text-left text-blue-500 mt-1">
                                What is your contact info?
                            </button>
                            <button className="w-full text-left text-blue-500 mt-1">
                                What payment methods do you accept?
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <button
                    onClick={toggleChat}
                    className="bg-pink-600 text-white p-3 text-3xl rounded-full shadow-lg"
                >
                    💬
                </button>
            )}
        </div>
    );
};

export default Chatbox;