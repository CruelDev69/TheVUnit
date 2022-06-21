import {
	Client,
	Message,
} from 'discord.js'

type HexColorString = `#${string}` | string

export type chatbotOptions = {
	channel: string | string[]
	name?: string
	toggle?: boolean
	developer?: string
}
export declare function chatbot(
	client: Client,
	message: Message,
	options?: chatbotOptions
): Promise<void>

export type automemeOptions = {
	channel: string
	subReddits: string[]
	interval: number
	embedColor: HexColorString
}
export declare function automeme(
	client: Client,
	options?: automemeOptions
): Promise<void>