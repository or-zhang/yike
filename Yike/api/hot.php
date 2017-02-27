<?php

	// 推荐
	$recUrl = 'https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	// 全部
	$allUrl = 'https://moment.douban.com/api/auth_authors/all?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	$recData = file_get_contents($recUrl);

	$allData = file_get_contents($allUrl);

	// echo 'hello';
	// echo "world";

	// echo $allData; // {}
	// echo $recData; // {}

	// {}{}

	$recData = json_decode($recData, true);
	$allData = json_decode($allData, true);

	echo json_encode(array('rec' => $recData, 'all' => $allData));