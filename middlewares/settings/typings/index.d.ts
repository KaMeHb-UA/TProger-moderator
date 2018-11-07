declare namespace Settings{
    interface chc {
        [x: number]: Promise<{
            firstMessageTimestamp: Date
            messageCount: number
        }>
    }
}
export const getBotToken: () => string
export const getChatId: () => number
export const init: () => Promise<void>
export const chc: () => Settings.chc
