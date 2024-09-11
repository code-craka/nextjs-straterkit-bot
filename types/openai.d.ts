declare module 'openai' {
  export interface ChatCompletionRequestMessage {
    role: string
    content: string
  }

  // Add other type definitions as needed
}
