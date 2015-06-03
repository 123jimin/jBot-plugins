var path = require('path'),
	fs = require('fs');

function PluginLoader(){};

PluginLoader.prototype.init = function PluginLoader$init(bot){
	bot.loadPlugins(path.join(path.dirname(fs.realpathSync(__filename)), "src"));
};

module.exports = new PluginLoader;
