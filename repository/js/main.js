$('document').ready(
	function(){
	if(ftp)
	{
		$('#btn_plugin_ftp').attr('value','已安装');
		$('#btn_plugin_ftp').css({'disabled':"true","color":"gray","cursor":"auto"});
	}
	$('.div_pluginitem').mouseover(function()
	{
		$(this).css({'background-color':'#C6D3E5'});
	});
	$('.div_pluginitem').mouseout(function(){
		
		$(this).css({'background-color':''});
	});
}
);
