(async entryPoint => {
    await require('middlewares/settings/check_settings')();
    var params = [entryPoint];
    if(process.argv[2] == '--debug') params.unshift('--inspect');
    require('child_process').spawnSync('node', params, {
        cwd: __dirname,
        stdio: 'inherit'
    })
})('main')
