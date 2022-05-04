import React from "react";

const OthersMessage = ({ message, lastMessage }) => {
  const isFirstMessageSentByUser =
    !lastMessage || lastMessage.sender.userName !== message.sender.userName;
  return (
    <div className="message-row">
      {isFirstMessageSentByUser && (
        <div
          className="message-avatar"
          style={{
            backgroundImage: message.sender && `url(${message.sender.avatar})`,
          }}
        />
      )}
      {message.attachments && message.attachments.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageSentByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "#cabcdc",
            marginLeft: isFirstMessageSentByUser ? "4px" : "48px",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default OthersMessage;
