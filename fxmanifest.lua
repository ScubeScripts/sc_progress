fx_version 'cerulean'
game 'gta5'

author 'Dein Name'
description 'Eigene Progress-Bar für FiveM'
version '1.0.0'

-- Server-side
server_script 'server.lua'

-- Client-side
client_script 'client.lua'

-- NUI files
ui_page 'html/index.html'

files {
    'html/index.html',
    'html/style.css',
    'html/script.js'
}

-- Export für die Progress-Bar
exports {
    'showNUI'
}
