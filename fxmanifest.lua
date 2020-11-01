fx_version 'cerulean'
games { 'gta5' }
dependencies { 'webpack', 'yarn' }

webpack_config 'webpack.config.js'
webpack_config 'client.config.js'

server_script 'dist/server/*'
client_script 'dist/client/*'