<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class HeroesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     **/
    public function run()
    {
        $date = new DateTime();
        for ($i = 0; $i < 10; $i++) {
            DB::table('heroes')->insert([
                'name' => Str::random(10),
                'created_at' => $date->format('Y-m-d H:i:s'),
                'updated_at' => $date->format('Y-m-d H:i:s'),
            ]);
        }
    }
}
