<?php 

if (!function_exists('get_title_dropdown')) {
    function get_title_dropdown()
    {
        return [
            ['option'=> 'Mr.', 'value'=> 'Mr.'],
            ['option'=> 'Ms.', 'value'=> 'Ms.'],
            ['option'=> 'Lecture', 'value'=> 'Lecture'],
            ['option'=> 'Assistance Lecture', 'value'=> 'Assistance Lecture'],
            ['option'=> 'Tutorial Assistance', 'value'=> 'Tutorial Assistance'],
            ['option'=> 'Instracture', 'value'=> 'Instracture'],
            ['option'=> 'Sineor Lecture', 'value'=> 'Sineor Lecture'],
            ['option'=> 'Sineor Instracture', 'value'=> 'Sineor Instracture'],
            ['option'=> 'Technician', 'value'=> 'Technician']
        ];
    }
}