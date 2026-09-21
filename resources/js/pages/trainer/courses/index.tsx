import { Head, usePage } from '@inertiajs/react';
import { CourseNavigation, type CourseNavigationItem } from '@/components/course-navigation';
import type { Course } from '@/types/course';
import type { Paginated } from '@/types/pagination';
import CourseList from './partials/course-list';
import trainer from '@/routes/trainer';

type Props = {
    courses: Paginated<Course>;
    courseNavigation: CourseNavigationItem[];
};

export default function CourseIndex() {
    const { courses, courseNavigation } = usePage<Props>().props;

    return (
        <>
            <Head title="Mes formations" />

            <div className="container mx-auto space-y-6 p-4">
                <div className="flex flex-col space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">
                        Mes formations
                    </h1>
                    <p className="text-muted-foreground">
                        Créez, modifiez et gérez vos formations.
                    </p>
                </div>

                <div className="grid min-w-0 gap-6 lg:grid-cols-[15rem_minmax(0,1fr)]">
                    <CourseNavigation courses={courseNavigation} scope="trainer" />
                    <div className="min-w-0"><CourseList courses={courses} /></div>
                </div>
            </div>
        </>
    );
}

CourseIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: trainer.dashboard() },
        { title: 'Mes formations', href: trainer.courses.index() },
    ],
};
