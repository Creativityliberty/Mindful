import { Head, useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import { Mail, Users, Send, CheckCircle2, AlertCircle, BarChart3, PlusCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import admin from '@/routes/admin';

interface ContactItem {
    email: string;
    id: number;
    emailBlacklisted: boolean;
    smsBlacklisted: boolean;
    createdAt?: string;
}

interface CampaignItem {
    id: number;
    name: string;
    subject: string;
    type: string;
    status: string;
    sentDate?: string;
}

interface Props {
    account: any;
    contacts: ContactItem[];
    totalContacts: number;
    campaigns: CampaignItem[];
}

export default function NewsletterIndex({ account, contacts, totalContacts, campaigns }: Props) {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<'overview' | 'create' | 'contacts'>('overview');

    const { data, setData, post, processing, errors, reset } = useForm({
        subject: '',
        senderName: 'FormationSession',
        senderEmail: 'contact@formationsession.com',
        htmlContent: '',
        sendNow: true,
    });

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/newsletter/send', {
            onSuccess: () => {
                reset('subject', 'htmlContent');
            },
        });
    };

    return (
        <>
            <Head title={t('newsletter.title')} />

            <div className="container mx-auto space-y-6 p-4">
                {/* Header Page + Tabs Navigation */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-sidebar-border/60 pb-6">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-bold tracking-tight">{t('newsletter.title')}</h1>
                        <p className="text-muted-foreground text-sm">
                            {t('newsletter.subtitle')}
                        </p>
                    </div>

                    {/* Tabs Pill Selector */}
                    <div className="flex items-center gap-1 rounded-xl bg-muted/60 p-1 border border-sidebar-border/50 self-start md:self-auto">
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                                activeTab === 'overview'
                                    ? 'bg-card text-foreground shadow-sm'
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            <BarChart3 className="h-3.5 w-3.5 text-sky-400" />
                            {t('newsletter.overview')}
                        </button>
                        <button
                            onClick={() => setActiveTab('create')}
                            className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                                activeTab === 'create'
                                    ? 'bg-sky-400 text-white shadow-sm'
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            <PlusCircle className="h-3.5 w-3.5" />
                            {t('newsletter.create_campaign')}
                        </button>
                        <button
                            onClick={() => setActiveTab('contacts')}
                            className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                                activeTab === 'contacts'
                                    ? 'bg-card text-foreground shadow-sm'
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            <Users className="h-3.5 w-3.5 text-sky-400" />
                            {t('newsletter.subscribers')} ({totalContacts})
                        </button>
                    </div>
                </div>

                {/* TAB 1: OVERVIEW */}
                {activeTab === 'overview' && (
                    <div className="space-y-6">
                        {/* Stats Grid */}
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 dark:border-sidebar-border">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('newsletter.total_subscribers')}</span>
                                    <Users className="h-4 w-4 text-sky-400" />
                                </div>
                                <p className="mt-2 text-3xl font-bold">{totalContacts}</p>
                                <span className="text-xs text-sky-400 font-medium mt-1 block">{t('newsletter.synced_brevo')}</span>
                            </div>

                            <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 dark:border-sidebar-border">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('newsletter.brevo_account')}</span>
                                    <Mail className="h-4 w-4 text-emerald-400" />
                                </div>
                                <p className="mt-2 text-xl font-bold truncate">{account?.email || 'Connecté'}</p>
                                <span className="text-xs text-emerald-400 font-medium mt-1 block">Plan : {account?.plan?.[0]?.type || 'Actif'}</span>
                            </div>

                            <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 dark:border-sidebar-border">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('newsletter.sent_campaigns')}</span>
                                    <Send className="h-4 w-4 text-muted-foreground" />
                                </div>
                                <p className="mt-2 text-3xl font-bold">{campaigns.length}</p>
                                <span className="text-xs text-muted-foreground mt-1 block">Historique global</span>
                            </div>
                        </div>

                        {/* Campaign History Table */}
                        <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 dark:border-sidebar-border space-y-4">
                            <h2 className="text-lg font-bold">{t('newsletter.recent_campaigns')}</h2>
                            {campaigns.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm">
                                        <thead>
                                            <tr className="border-b border-sidebar-border/50 text-xs text-muted-foreground uppercase">
                                                <th className="py-3 px-4">Nom / Sujet</th>
                                                <th className="py-3 px-4">Statut</th>
                                                <th className="py-3 px-4">Type</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-sidebar-border/30">
                                            {campaigns.map((c) => (
                                                <tr key={c.id} className="hover:bg-muted/20">
                                                    <td className="py-3 px-4 font-semibold">{c.name}</td>
                                                    <td className="py-3 px-4">
                                                        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                                                            {c.status}
                                                        </span>
                                                    </td>
                                                    <td className="py-3 px-4 text-muted-foreground">{c.type}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="py-8 text-center text-sm text-muted-foreground">
                                    {t('newsletter.no_campaigns')}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* TAB 2: CREATE CAMPAIGN */}
                {activeTab === 'create' && (
                    <div className="max-w-3xl rounded-xl border border-sidebar-border/70 bg-card p-6 md:p-8 dark:border-sidebar-border space-y-6">
                        <div>
                            <h2 className="text-xl font-bold">{t('newsletter.create_campaign')}</h2>
                            <p className="text-xs text-muted-foreground mt-1">Rédigez et envoyez votre newsletter à tous vos abonnés Brevo.</p>
                        </div>

                        <form onSubmit={handleSend} className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('newsletter.subject')}</label>
                                <input
                                    type="text"
                                    required
                                    value={data.subject}
                                    onChange={(e) => setData('subject', e.target.value)}
                                    placeholder="ex: Nouveaux cours d'artisanat et de bien-être disponibles !"
                                    className="w-full rounded-lg border border-sidebar-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:outline-none"
                                />
                                {errors.subject && <span className="text-xs text-red-500">{errors.subject}</span>}
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('newsletter.sender_name')}</label>
                                    <input
                                        type="text"
                                        required
                                        value={data.senderName}
                                        onChange={(e) => setData('senderName', e.target.value)}
                                        className="w-full rounded-lg border border-sidebar-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('newsletter.sender_email')}</label>
                                    <input
                                        type="email"
                                        required
                                        value={data.senderEmail}
                                        onChange={(e) => setData('senderEmail', e.target.value)}
                                        className="w-full rounded-lg border border-sidebar-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('newsletter.content')}</label>
                                <textarea
                                    required
                                    rows={8}
                                    value={data.htmlContent}
                                    onChange={(e) => setData('htmlContent', e.target.value)}
                                    placeholder="<p>Bonjour à tous, voici les actualités de FormationSession...</p>"
                                    className="w-full resize-none rounded-lg border border-sidebar-border bg-background px-4 py-2.5 text-sm font-mono text-foreground focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:outline-none"
                                />
                                {errors.htmlContent && <span className="text-xs text-red-500">{errors.htmlContent}</span>}
                            </div>

                            <div className="pt-2">
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="gap-2 rounded-full px-8 h-10 font-semibold bg-sky-400 hover:bg-sky-500 text-white uppercase text-xs tracking-wider"
                                >
                                    <Send className="h-4 w-4" />
                                    {processing ? t('newsletter.sending') : t('newsletter.send_now')}
                                </Button>
                            </div>
                        </form>
                    </div>
                )}

                {/* TAB 3: CONTACTS LIST */}
                {activeTab === 'contacts' && (
                    <div className="rounded-xl border border-sidebar-border/70 bg-card p-6 dark:border-sidebar-border space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-bold">{t('newsletter.subscribers')} Brevo ({totalContacts})</h2>
                        </div>
                        {contacts && contacts.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead>
                                        <tr className="border-b border-sidebar-border/50 text-xs text-muted-foreground uppercase">
                                            <th className="py-3 px-4">ID Brevo</th>
                                            <th className="py-3 px-4">Adresse Email</th>
                                            <th className="py-3 px-4">Statut</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-sidebar-border/30">
                                        {contacts.map((contact) => (
                                            <tr key={contact.id} className="hover:bg-muted/20">
                                                <td className="py-3 px-4 text-muted-foreground font-mono text-xs">{contact.id}</td>
                                                <td className="py-3 px-4 font-semibold">{contact.email}</td>
                                                <td className="py-3 px-4">
                                                    {!contact.emailBlacklisted ? (
                                                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                                                            <CheckCircle2 className="h-3 w-3" /> Actif
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-semibold text-red-400">
                                                            <AlertCircle className="h-3 w-3" /> Désabonné
                                                        </span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="py-8 text-center text-sm text-muted-foreground">
                                {t('newsletter.no_campaigns')}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

NewsletterIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: admin.dashboard() },
        { title: 'Gestion Newsletter', href: '/admin/newsletter' },
    ],
};
