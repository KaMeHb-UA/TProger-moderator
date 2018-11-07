import { Context as TelegrafContext } from 'telegraf'

export const linkInMessage: (ctx: TelegrafContext) => boolean
export const messagesCount: {
    increase: (ctx: TelegrafContext) => Promise<number>
}
export const isBot: (ctx: TelegrafContext) => Promise<boolean>
export const adminNicks: string[]
