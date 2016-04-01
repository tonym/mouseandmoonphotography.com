<?php
include('../lib/metadata/EXIF.php');
include('../lib/metadata/Photoshop_File_Info.php');
$file_dir = '/assets/img/gallery/';
$thumb_dir = '/assets/img/gallery/thumbs/';
$dir = $_SERVER['DOCUMENT_ROOT'] . $thumb_dir;
$ret = array();

if(is_dir($dir)) {
  if($dh = opendir($dir)) {
    while(($file = readdir($dh)) != false) {
      if($file == "." or $file == "..") {
        continue;
      }
      else {
        $exif = get_EXIF_JPEG($dir . $file);
        $xmp = read_XMP_array_from_text(get_XMP_text(get_jpeg_header_data($dir . $file)));
        $irb = get_Photoshop_IRB(get_jpeg_header_data($dir . $file));
        $file_info = get_photoshop_file_info($exif, $xmp, $irb);
        $file_info['thumb'] = $thumb_dir . $file;
        $file_info['file'] = $file_dir . $file;
        $ret['gallery'][] = $file_info;
      }
    }
  }
}

echo json_encode($ret);
?>
