export default function Chatbot() {
    return (
      <div className="h-full flex flex-col p-4 bg-white">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Chat Assistant</h2>
        <div className="flex-1 bg-gray-100 rounded-lg p-4 overflow-auto shadow-inner">
          <p className="text-gray-500">Hello! How can I help you today?</p>
        </div>
        <div className="mt-4 flex">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none"
          />
          <button className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700">
            Send
          </button>
        </div>
      </div>
    );
  }