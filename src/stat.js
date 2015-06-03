function StatPlugin(){};

StatPlugin.prototype.bot = null;

StatPlugin.prototype.init = function StatPlugin$init(bot){
	this.bot = bot;

	bot.addCommand('time', "시각/시간/현재시각/현재시간/curtime/currenttime/omni:time/omni:date".split('/'),
		"@: 현재 시각을 알려줍니다.", function(msg, ctx, cmd, args){
		var d = new Date();
		var text = [
			"지금은 ",
			d.getFullYear(), "년 ",
			d.getMonth()+1, "월 ",
			d.getDate(), "일 ",
			"일월화수목금토"[d.getDay()],
			"요일"
		];
		if(cmd == 'date:omni'){
			text[0] = "오늘은 ";
		}else{
			text.push(
				" ", d.getHours(), "시 "
			);
			if(d.getMinutes() || d.getSeconds()) text.push(
				d.getMinutes(), "분"
			);
			else text.push("정각");
			if(d.getSeconds()) text.push(
				" ", d.getSeconds(), "초"
			);
		}
		text.push("입니다.");
		bot.reply(ctx, text.join(''));
	});
};

StatPlugin.prototype.destroy = function StatPlugin$destroy(){
};

module.exports = new StatPlugin;
