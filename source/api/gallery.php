<?php
$dir = $_SERVER['DOCUMENT_ROOT'] . '/assets/img/gallery';
$ret = array();

if(is_dir($dir)) {
  if($dh = opendir($dir)) {
    while(($file = readdir($dh)) != false) {
      if($file == "." or $file == "..") {
        continue;
      }
      else {
        $ret[] = $file;
      }
    }
  }
}

echo json_encode($ret);
?>
