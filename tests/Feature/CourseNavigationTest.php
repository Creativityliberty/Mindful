<?php

use App\Models\Course;
use App\Models\User;
use Spatie\Permission\Models\Role;

beforeEach(function () {
    Role::findOrCreate('admin', 'web');
    Role::findOrCreate('trainer', 'web');
});

test('admin course navigation includes courses beyond the table page', function () {
    $admin = User::factory()->create()->assignRole('admin');
    Course::factory()->count(11)->create();

    $this->actingAs($admin)->get(route('admin.courses.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('admin/courses/index')
            ->has('courses.data', 10)
            ->has('courseNavigation', 11));
});

test('trainer navigation only includes their courses on the list and overview', function () {
    $trainer = User::factory()->create()->assignRole('trainer');
    $other = User::factory()->create()->assignRole('trainer');
    $ownCourse = Course::factory()->create(['trainer_id' => $trainer->id]);
    $otherCourse = Course::factory()->create(['trainer_id' => $other->id]);

    $this->actingAs($trainer)->get(route('trainer.courses.index'))
        ->assertInertia(fn ($page) => $page->component('trainer/courses/index')
            ->has('courseNavigation', 1)
            ->where('courseNavigation.0.id', $ownCourse->id));

    $this->actingAs($trainer)->get(route('trainer.courses.overview', $ownCourse))
        ->assertInertia(fn ($page) => $page->component('courses/overview')
            ->has('courseNavigation', 1)
            ->where('courseNavigation.0.id', $ownCourse->id));

    $this->actingAs($trainer)->get(route('trainer.courses.overview', $otherCourse))
        ->assertForbidden();
});
