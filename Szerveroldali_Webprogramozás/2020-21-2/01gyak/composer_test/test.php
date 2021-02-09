<?php
// `composer init` parancs után mindent alapértelmezetten hagytam, majd futtattam a
// `composer require fakerphp/faker` parancsot. így már tudom használni a faker csomagot

require_once('vendor/autoload.php');

$faker = Faker\Factory::create();

echo $faker->email() . PHP_EOL;
echo $faker->text();

// tesztelés ezzel a paranccsal: `php test.php`