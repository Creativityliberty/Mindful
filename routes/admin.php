<?php

use App\Http\Controllers\Admin\Courses\CourseController as AdminCourseController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\Plans\PlanController as AdminPlanController;
use App\Http\Controllers\Admin\NewsletterController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');
    Route::resource('courses', AdminCourseController::class)->except(['show']);
    Route::patch('courses/{course}/status', [AdminCourseController::class, 'toggleStatus'])->name('courses.toggle-status');
    Route::resource('plans', AdminPlanController::class)->except(['show']);

    // Newsletter Brevo Admin
    Route::get('newsletter', [NewsletterController::class, 'index'])->name('newsletter.index');
    Route::post('newsletter/send', [NewsletterController::class, 'sendCampaign'])->name('newsletter.send');
});

