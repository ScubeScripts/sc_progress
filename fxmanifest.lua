fx_version 'cerulean'
game 'gta5'

author 'ScubeScripts'
description 'Progress-Bar for FiveM'
version '1.0.0'

server_script 'server.lua'

client_script 'client.lua'

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/style.css',
    'html/script.js'
}

exports {
    'showNUI'
}
