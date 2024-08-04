"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleAssistants = exports.sampleConversation = exports.sampleMessages = exports.prompt2 = exports.prompt1 = void 0;
exports.prompt1 = {
    id: '1',
    created_at: new Date('2024-02-01'),
    updated_at: new Date('2024-02-01'),
    content: "Do something prompt"
};
exports.prompt2 = {
    id: '2',
    created_at: new Date('2024-02-01'),
    updated_at: new Date('2024-02-01'),
    content: "Some other prompt"
};
exports.sampleMessages = [
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
];
exports.sampleConversation = {
    id: '1',
    name: 'Jakas zajebista nazwa konwersacji - inferred from the messages of this converstaion',
    created_at: new Date("2024-02-01"),
    updated_at: new Date("2024-02-01"),
    messages: exports.sampleMessages,
    model: 'gpt4'
};
exports.sampleAssistants = {
    id: '1',
    name: 'Alice',
    created_at: new Date("2024-02-01"),
    updated_at: new Date("2024-02-01"),
    messages: exports.sampleMessages.filter(function (message) { return message.author_id === '1' && message.role === 'assistant'; }),
    conversations: [exports.sampleConversation],
    snippets: [exports.prompt1, exports.prompt2],
    system_prompt: "You are super nice AI named Alice, who want to help your fellow friend!",
    model: 'claude-sonnet-3.5',
};
