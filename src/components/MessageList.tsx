import { ChatCompletionRequestMessage } from 'openai'
import React from 'react'

interface MessageListProps {
  messages: ChatCompletionRequestMessage[]
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>
          <p>{message.content}</p>
        </div>
      ))}
    </div>
  )
}

export default MessageList
