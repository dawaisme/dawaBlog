layui.use(['layer', 'element'], function() {
	var element = layui.element,
		layer = layui.layer,
		$ = layui.$;
	$(function() {
		//网站运行时间
		span_dt_dt=document.getElementById("yunxing")
		function show_date_time() {
			setTimeout(show_date_time,1000)
			BirthDay = new Date("09/24/2018 00:00:00");
			today = new Date();
			timeold = (today.getTime() - BirthDay.getTime());
			sectimeold = timeold / 1000;
			secondsold = Math.floor(sectimeold);
			msPerDay = 24 * 60 * 60 * 1000;
			e_daysold = timeold / msPerDay;
			daysold = Math.floor(e_daysold);
			e_hrsold = (e_daysold - daysold) * 24;
			hrsold = Math.floor(e_hrsold);
			e_minsold = (e_hrsold - hrsold) * 60;
			minsold = Math.floor((e_hrsold - hrsold) * 60);
			seconds = Math.floor((e_minsold - minsold) * 60);
			span_dt_dt.innerHTML = daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒";
		}
		show_date_time();
	})
});