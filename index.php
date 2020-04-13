<?php
	$files = scandir(getcwd(), 1); // include file hidden
	$files = preg_grep('/^([^.])/',  scandir(getcwd(), 1)); // not include file hidden
	$files = array_reverse($files);
	$actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
?>

<html>
	<head>
		<title>Index of /</title>
		<style type="text/css">
			.document {
			    width: 30px;
			    max-width: 100%;
			}
		</style>
	</head>
	<body>
		<h1>Index of /</h1>
		<table>
			<tbody>
			   	<tr>
			   		<th valign="top"><img class="document" src="doc.png" alt="[ICO]"></th>
				   	<th><a href="?C=N;O=D">Name</a></th>
<!-- 				   	<th><a href="?C=M;O=A">Last modified</a></th>
				   	<th><a href="?C=S;O=A">Size</a></th>
				   	<th><a href="?C=D;O=A">Description</a></th> -->
			   	</tr>
			   	<tr><th colspan="5"><hr></th></tr>
			   	<?php foreach ($files as $file) : ?>
				<tr>
					<?php if(!is_dir($file)) continue; ?>
					<td valign="top"><img class="document" src="doc.png" alt="[DIR]"></td>
					<td><?php echo '<a href="' . $file . '">'. $file .'</a>'; ?></td>
	<!-- 				<td align="right">2016-11-13 11:28  </td>
					<td align="right">  - </td>
					<td>&nbsp;</td> -->
				</tr>
				<?php endforeach ?>
			</tbody>
		</table>
	</body>
</html>
