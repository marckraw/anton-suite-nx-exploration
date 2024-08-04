export type AIModel = 'gpt4' | 'claude-sonnet-3.5'

export interface MessageEntity {
    id: string
    role: 'assistant' | 'user' | 'system'
    created_at: Date
    updated_at: Date
    content: any
    /**
     *
     * this is an id of an author of the message
     * This can be id of a real user, or an id of an Assistant
     * from the AssistantEntity, for now its totally optional, we
     * will see if it will have any nice use
     * */
    author_id?: string
}

export interface SnippetEntity {
    id: string
    created_at: Date
    updated_at: Date
    content: any
}

export interface ConversationEntity {
    id: string
    name: string
    model: AIModel
    created_at: Date
    updated_at: Date
    messages: MessageEntity[]
}

export interface AssistantEntity {
    id: string
    name: string
    model: AIModel
    system_prompt: string
    created_at: Date
    updated_at: Date
    messages: MessageEntity[]
    conversations: ConversationEntity[]
    /**
     *
     * Messages entities that this specific Assistant gave
     * */
    snippets?: SnippetEntity[]
}




