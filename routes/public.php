<?php

use App\Http\Controllers\Public\BecomeTrainer\CheckoutController;
use App\Http\Controllers\Public\BecomeTrainer\PaymentController;
use App\Http\Controllers\Public\BecomeTrainer\TrainerPlanController;
use App\Http\Controllers\Public\Blog\BlogController;
use App\Http\Controllers\Public\Courses\CheckoutController as CourseCheckoutController;
use App\Http\Controllers\Public\Courses\CourseController;
use App\Http\Controllers\Public\Home\HomeController;
use App\Http\Controllers\Public\WebhookController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::inertia('about', 'home/about')->name('about');
Route::get('blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('blog/{slug}', [BlogController::class, 'show'])->name('blog.show');
Route::inertia('glossaire', 'home/glossary')->name('glossary');
Route::inertia('guides', 'home/guides')->name('guides');
Route::inertia('contact', 'home/contact')->name('contact');
Route::inertia('realisations', 'home/realisations/index')->name('realisations');
Route::post('newsletter/subscribe', [\App\Http\Controllers\Admin\NewsletterController::class, 'subscribe'])->name('newsletter.subscribe');

// Plateforme & Communauté
Route::inertia('comment-ca-marche', 'home/how-it-works')->name('how-it-works');
Route::inertia('tarifs', 'home/pricing')->name('pricing');
Route::inertia('communaute/forum', 'home/community/forum')->name('community.forum');
Route::inertia('communaute/evenements', 'home/community/events')->name('community.events');

// Légal
Route::inertia('legal/confidentialite', 'home/legal/privacy')->name('legal.privacy');
Route::inertia('legal/cgu', 'home/legal/cgu')->name('legal.cgu');
Route::inertia('legal/cookies', 'home/legal/cookies')->name('legal.cookies');
Route::inertia('legal/mentions-legales', 'home/legal/terms')->name('legal.terms');

// Courses
Route::get('courses', [CourseController::class, 'index'])->name('courses.index');
Route::get('courses/{identifier}', [CourseController::class, 'show'])->name('courses.show');
Route::get('courses/{identifier}/checkout', [CourseCheckoutController::class, 'show'])->middleware(['auth', 'verified'])->name('courses.checkout.show');
Route::post('courses/checkout', [CourseCheckoutController::class, 'store'])->middleware(['auth', 'verified'])->name('courses.checkout');
Route::post('courses/{courseId}/enroll-free', [\App\Http\Controllers\Public\Courses\FreeEnrollController::class, 'store'])->middleware(['auth', 'verified'])->name('courses.enroll-free');
Route::inertia('courses/purchase/success', 'home/courses/success')->middleware(['auth', 'verified'])->name('courses.purchase.success');

// Become trainer
Route::get('become-trainer', [TrainerPlanController::class, 'index'])->name('become-trainer.index');
Route::get('become-trainer/checkout/{plan}', [CheckoutController::class, 'show'])->middleware(['auth', 'verified'])->name('become-trainer.checkout.show');
Route::post('become-trainer/checkout', [CheckoutController::class, 'store'])->middleware(['auth', 'verified'])->name('become-trainer.checkout');
Route::inertia('become-trainer/success', 'home/become-trainer/success')->name('become-trainer.success');

// Stripe / Cashier
Route::post('stripe/webhook', [WebhookController::class, 'handleWebhook'])->name('cashier.webhook');
Route::get('stripe/payment/{payment}', [PaymentController::class, 'show'])->name('cashier.payment');
