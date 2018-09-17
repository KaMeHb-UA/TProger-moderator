declare type Settings = {
    token: String,
    'target chat id': String,
    'chat history cache': Array<{
        firstMsgDate: Date,
        msgCount: Number,
        uid: Number
    }>,
}
