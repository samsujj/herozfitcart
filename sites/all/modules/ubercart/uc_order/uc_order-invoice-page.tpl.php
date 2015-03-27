<?php

/**
 * @file
 * Default theme implementation to display a printable Ubercart invoice.
 *
 * @see template_preprocess_uc_order_invoice_page()
 */
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language ?>" lang="<?php print $language->language ?>" dir="<?php print $language->dir ?>">

<head>


<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.2.min.js"></script>

<script type="text/javascript">
$(function(){

$('.invoice').find('table').eq(0).css('border','solid 2px #008081');

$('.invoice').find('table').find('tbody').find('table').find('tbody').find('table').find('tbody').find('tr').eq(0).find('td').eq(1).css('display','none');
$('.invoice').find('table').find('tbody').find('table').find('tbody').find('table').find('tbody').find('tr').eq(0).find('td').eq(2).css('display','none');
$('.invoice').find('table').find('tbody').find('table').find('tbody').find('table').find('tbody').find('tr').eq(0).find('td').eq(0).find('img').css('display','block');
$('.invoice').find('table').find('tbody').find('table').find('tbody').find('table').find('tbody').find('tr').eq(0).find('td').eq(0).find('img').css('margin','0 auto');
//$('.invoice').find('td').css('background','008081');
//$('.invoice').find('')
$("td[bgcolor='#006699']").css('padding','10px').css('font-size','14px'); 
$("td[bgcolor='#006699']").attr('bgcolor','#008081'); 
$("td[bgcolor='#EEEEEE']").attr('bgcolor','#fff'); 
$("font[color='#CC6600']").attr('color','#008081'); 
$('.invoice').find('tr').find('a').css('color','#008081');
$('.invoice').find('tr').find('a').css('text-decoration','none');
});


</script>

  <?php //echo "test";
  print $head; ?>
  <title><?php print $head_title; ?></title>
  <style type="text/css">
    .buttons {
      text-align: right;
      margin: 0 1em 1em 0;
    }







  </style>
  <style type="text/css" media="print">
    .buttons {
      display: none;
    }

	
  </style>
</head>
<body class="invoice">
  <div class="buttons">
    <input type="button" value="<?php print t('Print invoice'); ?>" onclick="window.print();" />
  </div>

  <?php
  print $content; ?>
</body>
</html>
