import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowRight, BookOpen, CheckCircle2, CreditCard, GraduationCap, UserPlus, Users } from 'lucide-react';
import admin from '@/routes/admin';

type Props = {
    stats: {
        totalCourses: number;
        totalTrainers: number;
        totalStudents: number;
        totalEnrollments: number;
        publishedCourses: number;
        draftCourses: number;
        newEnrollmentsThisMonth: number;
        newStudentsThisMonth: number;
    };
    trainerStats: { id: number; name: string; email: string; coursesCount: number; publishedCount: number; studentsCount: number }[];
    recentActivity: { coursesThisMonth: number; enrollmentsThisMonth: number };
};

export default function AdminDashboard() {
    const { stats, trainerStats, recentActivity } = usePage<Props>().props;

    const cards = [
        { label: 'Formations', value: stats.totalCourses, detail: `${stats.publishedCourses} publiées · ${stats.draftCourses} brouillons`, icon: BookOpen, href: '/admin/courses' },
        { label: 'Formateurs', value: stats.totalTrainers, detail: 'Comptes formateurs actifs', icon: Users, href: '/admin/dashboard' },
        { label: 'Étudiants', value: stats.totalStudents, detail: `+${stats.newStudentsThisMonth} ce mois-ci`, icon: GraduationCap, href: '/admin/dashboard' },
        { label: 'Inscriptions', value: stats.totalEnrollments, detail: `+${stats.newEnrollmentsThisMonth} ce mois-ci`, icon: CreditCard, href: '/admin/dashboard' },
    ];

    return (
        <>
            <Head title="Dashboard" />

            <div className="container mx-auto space-y-6 p-4">
                <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium text-primary">Administration</p>
                    <h1 className="text-3xl font-bold tracking-tight">Vue d'ensemble de la plateforme</h1>
                    <p className="text-muted-foreground">Suivez les formations, les formateurs, les étudiants et l’activité globale.</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {cards.map(({ label, value, detail, icon: Icon, href }) => (
                        <Link href={href}
                            key={label}
                            className="rounded-xl border border-sidebar-border/70 bg-card p-6 dark:border-sidebar-border"
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-muted-foreground">{label}</p>
                                <Icon className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <p className="mt-2 text-3xl font-bold">{value}</p>
                            <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
                        </Link>
                    ))}
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    <section className="rounded-xl border bg-card p-5"><div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-primary" /><h2 className="font-semibold">Évolution ce mois-ci</h2></div><div className="mt-5 grid grid-cols-2 gap-4"><div><p className="text-2xl font-bold">{recentActivity.coursesThisMonth}</p><p className="text-sm text-muted-foreground">Nouvelles formations</p></div><div><p className="text-2xl font-bold">{recentActivity.enrollmentsThisMonth}</p><p className="text-sm text-muted-foreground">Nouvelles inscriptions</p></div></div></section>
                    <section className="rounded-xl border bg-card p-5"><div className="flex items-center gap-2"><UserPlus className="size-4 text-primary" /><h2 className="font-semibold">Accès rapides</h2></div><div className="mt-4 flex flex-wrap gap-3"><Link href="/admin/courses" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">Gérer les formations <ArrowRight className="size-3" /></Link><Link href="/admin/plans" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">Gérer les offres <ArrowRight className="size-3" /></Link></div></section>
                </div>
                <section className="rounded-xl border bg-card">
                    <div className="border-b p-5"><h2 className="text-xl font-semibold">Inscriptions par formateur</h2><p className="text-sm text-muted-foreground">Étudiants distincts inscrits à au moins une formation de chaque formateur.</p></div>
                    {trainerStats.length ? <div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="border-b text-muted-foreground"><tr><th className="p-4 font-medium">Formateur</th><th className="p-4 font-medium">Formations</th><th className="p-4 font-medium">Publiées</th><th className="p-4 font-medium">Étudiants</th></tr></thead><tbody className="divide-y">{trainerStats.map(trainer => <tr key={trainer.id}><td className="p-4"><p className="font-medium">{trainer.name}</p><p className="text-muted-foreground">{trainer.email}</p></td><td className="p-4 tabular-nums">{trainer.coursesCount}</td><td className="p-4 tabular-nums">{trainer.publishedCount}</td><td className="p-4 tabular-nums font-semibold">{trainer.studentsCount}</td></tr>)}</tbody></table></div> : <p className="p-5 text-sm text-muted-foreground">Aucun formateur pour le moment.</p>}
                    <div className="border-t p-4"><Link href="/admin/courses" className="text-sm font-medium text-primary hover:underline">Voir les formations et leurs inscriptions</Link></div>
                </section>
            </div>
        </>
    );
}

AdminDashboard.layout = {
    breadcrumbs: [{ title: 'Dashboard', href: admin.dashboard() }],
};
