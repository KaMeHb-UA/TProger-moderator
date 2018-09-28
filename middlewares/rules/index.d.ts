class TelegrafContext{}
declare type Rules = {
    messagesCount: {
        increase(ctx:TelegrafContext):Number
    }
    linkInMessage: {}
}

