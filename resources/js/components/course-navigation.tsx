import { Link } from '@inertiajs/react';

export type CourseNavigationItem = {
    id: number;
    title: string;
    trainer: string | null;
};

type Props = {
    courses: CourseNavigationItem[];
    scope: 'admin' | 'trainer';
    activeCourseId?: number;
};

export function CourseNavigation({ courses, scope, activeCourseId }: Props) {
    return (
        <aside className="rounded-xl border bg-card lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:self-start">
            <div className="border-b px-4 py-3">
                <h2 className="font-semibold">Formations</h2>
                <p className="text-xs text-muted-foreground">{courses.length} formation{courses.length > 1 ? 's' : ''}</p>
            </div>
            <nav aria-label="Liste des formations" className="max-h-64 overflow-y-auto p-2 lg:max-h-[calc(100vh-8rem)]">
                {courses.length ? (
                    <ul className="space-y-1">
                        {courses.map((course) => (
                            <li key={course.id}>
                                <Link
                                    href={`/${scope}/courses/${course.id}/overview`}
                                    aria-current={activeCourseId === course.id ? 'page' : undefined}
                                    className={`block rounded-lg px-3 py-2 text-sm transition-colors ${activeCourseId === course.id ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
                                >
                                    <span className="block font-medium leading-snug">{course.title}</span>
                                    {scope === 'admin' && course.trainer && (
                                        <span className={`mt-0.5 block text-xs ${activeCourseId === course.id ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                                            {course.trainer}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="p-3 text-sm text-muted-foreground">Aucune formation pour le moment.</p>
                )}
            </nav>
        </aside>
    );
}
