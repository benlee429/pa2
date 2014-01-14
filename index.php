<!DOCTYPE html>
<html>
	<head>
		<script language="javascript" type="text/javascript" src="search.js"></script>
		<script language="javascript" type="text/javascript" src="jquery-2.0.3.min.js"></script>
	</head>
	<body>		
		<form action="index.php" method="get">
			<input id="search" type="text" name="search">
			<input type="submit" value="Search">
		</form>
		<div id="results">
		</div>
		<?php
			if(isset($_REQUEST["search"])){
				display everything in results
			}
		
		?>
	</body>
</html>