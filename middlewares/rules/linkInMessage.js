const targetAssets = [
    'url',              // link
    'text_link',        // "hidden" link
    'mention',          // @user(group)name
];
module.exports = ctx => {
    if(ctx.message.entities instanceof Array){
        for(var i = 0; i < ctx.message.entities.length; i++){
            if(targetAssets.indexOf(ctx.message.entities[i].type) != -1) return true;
        }
    }
    return false
}
