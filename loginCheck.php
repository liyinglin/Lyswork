<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	    <meta name="keywords" content="关键词, 李颖琳, 13网广, HTML, 课堂作业">
		<meta name="description" content="简介文字">
	    <meta name="author" content="定义网页作者">
		<!--
			注释
        	作者：offline
        	时间：2016-03-03
        	描述：
        -->	
		<title>接受表单提交</title>
		<style>
			div#success{
				background-color: #00BFFF;
			}
			div#failed{
				background-color: #B22222;
			}
			div{
				height: 80px;
				text-align: center;
			}
		</style>
	</head>
	<body>		
		<h1>登录结果</h1>
			<?php
				if(	$_REQUEST['user_name'] == 'ww' 
				&& 	$_REQUEST['user_password'] == '2016')
				{
			?>
					<div id="success">
						登录成功
					</div>
			<?php
				}else{
			?>
					<div id="failed">
						登录失败
					</div>
			<?php 
				} 
			?>
		<div>
			<h1>用户提交的信息</h1>
			<pre>
			<?php
				var_dump($_REQUEST);
			?>
		<div>
			<h1>用户提交的信息</h1>
			<pre>
			<?php
				var_dump($_REQUEST);
			?>
			</pre>
		</div>
		
	</body>
</html>
<?php
	echo'你提交的用户名是'.$_REQUEST['user_name'];
	echo'你提交的密码是:'.$_REQUEST['user_password'];
	if(	$_REQUEST['user_name'] == 'lyl'
 	 && $_REQUEST['user_password'] == 'lyl')
	{
		echo'hhhhh';
	}else{
		echo'密码错误！！';
	}
?>

