import { Head, Link, router, usePage } from '@inertiajs/react';
import { ArrowLeft, BookOpen, GraduationCap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CourseNavigation, type CourseNavigationItem } from '@/components/course-navigation';
import type { Paginated } from '@/types/pagination';

type Student = { id: number; name: string; email: string | null; enrolledAt: string | null };
type Props = {
    course: {
        id: number;
        title: string;
        status: 'draft' | 'published';
        price: number;
        trainer: string | null;
        category: string | null;
        modulesCount: number;
        enrollmentsCount: number;
    };
    students: Paginated<Student>;
    scope: 'admin' | 'trainer';
    courseNavigation: CourseNavigationItem[];
};

export default function CourseOverview() {
    const { course, students, scope, courseNavigation } = usePage<Props>().props;
    const listUrl = `/${scope}/courses`;
    const editUrl = `/${scope}/courses/${course.id}/edit`;
    const cards = [
        { label: 'Inscriptions', value: course.enrollmentsCount, icon: Users },
        { label: 'Modules', value: course.modulesCount, icon: BookOpen },
        { label: 'Prix', value: `${course.price.toLocaleString('fr-FR')} €`, icon: GraduationCap },
    ];

    return <>
        <Head title={`Tableau de bord · ${course.title}`} />
        <div className="container mx-auto space-y-6 p-4">
            <div className="grid min-w-0 gap-6 lg:grid-cols-[15rem_minmax(0,1fr)]">
            <CourseNavigation courses={courseNavigation} scope={scope} activeCourseId={course.id} />
            <main className="min-w-0 space-y-6">
            <Link href={listUrl} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" /> Formations</Link>
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
                    <p className="mt-2 text-muted-foreground">{course.trainer ?? 'Sans formateur'} · {course.category ?? 'Sans catégorie'} · {course.status === 'published' ? 'Publiée' : 'Brouillon'}</p>
                </div>
                <Button asChild variant="outline"><Link href={editUrl}>Modifier la formation</Link></Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
                {cards.map(({ label, value, icon: Icon }) => <div key={label} className="rounded-xl border bg-card p-5"><div className="flex items-center justify-between text-sm text-muted-foreground"><span>{label}</span><Icon className="size-4" /></div><p className="mt-2 text-2xl font-semibold">{value}</p></div>)}
            </div>
            <section className="rounded-xl border bg-card">
                <div className="border-b p-5"><h2 className="text-xl font-semibold">Étudiants inscrits</h2><p className="text-sm text-muted-foreground">Personnes inscrites à cette formation.</p></div>
                {students.data.length ? <div className="divide-y">{students.data.map(student => <div key={student.id} className="flex flex-wrap justify-between gap-2 p-4"><div><p className="font-medium">{student.name}</p><p className="text-sm text-muted-foreground">{student.email}</p></div><span className="text-sm text-muted-foreground">{student.enrolledAt ?? 'Date inconnue'}</span></div>)}</div> : <p className="p-5 text-sm text-muted-foreground">Aucun étudiant inscrit pour le moment.</p>}
                {students.last_page > 1 && <div className="flex items-center justify-end gap-3 border-t p-4"><Button variant="outline" size="sm" disabled={!students.links[0]?.url} onClick={() => students.links[0]?.url && router.visit(students.links[0].url)}>Précédent</Button><span className="text-sm">{students.current_page} / {students.last_page}</span><Button variant="outline" size="sm" disabled={!students.links.at(-1)?.url} onClick={() => students.links.at(-1)?.url && router.visit(students.links.at(-1)!.url!)}>Suivant</Button></div>}
            </section>
            </main>
            </div>
        </div>
    </>;
}
