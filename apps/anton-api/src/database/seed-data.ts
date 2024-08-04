import { AssistantEntity, ConversationEntity, MessageEntity, SnippetEntity } from './anton-architecture';

export const prompt1: SnippetEntity = {
  id: '1',
  created_at: new Date('2024-02-01'),
  updated_at: new Date('2024-02-01'),
  content: "Do something prompt"
}

export const prompt2: SnippetEntity= {
  id: '2',
  created_at: new Date('2024-02-01'),
  updated_at: new Date('2024-02-01'),
  content: "Some other prompt"
}


export const sampleMessages: MessageEntity[] = [
  {
    id: '1',
    content: "Hey there!",
    author_id: '1',
    created_at: new Date('2024-02-01'),
    updated_at: new Date('2024-02-01'),
    role: 'assistant',
  },
  {
    id: '2',
    content: "Can you help me out with my motorcycle ?",
    author_id: undefined,
    created_at: new Date('2024-02-01'),
    updated_at: new Date('2024-02-01'),
    role: 'user',
  }
]


export const sampleConversation: ConversationEntity = {
  id: '1',
  name: 'Jakas zajebista nazwa konwersacji - inferred from the messages of this converstaion',
  created_at: new Date("2024-02-01"),
  updated_at: new Date("2024-02-01"),
  messages: sampleMessages,
  model: 'gpt4'
}

export const sampleAssistants: AssistantEntity = {
  id: '1',
  name: 'Alice',
  created_at: new Date("2024-02-01"),
  updated_at: new Date("2024-02-01"),
  messages: sampleMessages.filter(message => message.author_id === '1' && message.role === 'assistant'),
  conversations: [sampleConversation],
  snippets: [prompt1, prompt2],
  system_prompt: "You are super nice AI named Alice, who want to help your fellow friend!",
  model: 'claude-sonnet-3.5',
}
