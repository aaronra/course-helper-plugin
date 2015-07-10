<?php
/*
Plugin Name: CourseHelper
Plugin URI:  https://github.com/aaronra/course-helper-plugin
Description: Paginates Courses and changes default wp-courseware behavior
Version:     1.0
Author:      Aaron Jared M. Randrup
Author URI:  https://github.com/aaronra

*/


/**
 * Proper way to enqueue scripts and styles
 */
function emecanaan_scripts_basic()
{
}
function emecanaan_scripts()
{
    wp_register_script( 'emecanaan_script', plugins_url( 'js/emecanaan.js', __FILE__ ), array( 'jquery' ) );
    wp_enqueue_script('emecanaan_script');

    wp_enqueue_style('emecanaan', plugins_url('css/emecanaan.css', __FILE__));
    emecanaan_scripts_basic();
}


add_action('wp_enqueue_scripts', 'emecanaan_scripts');
