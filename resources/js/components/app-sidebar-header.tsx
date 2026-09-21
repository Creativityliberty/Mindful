import { Link } from '@inertiajs/react';
import { ArrowLeft, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import type { BreadcrumbItem as BreadcrumbItemType } from '@/types';

export function AppSidebarHeader({
    breadcrumbs = [],
}: {
    breadcrumbs?: BreadcrumbItemType[];
}) {
    const { t } = useTranslation();

    return (
        <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between border-b border-sidebar-border/50 bg-background/95 px-6 backdrop-blur transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 supports-[backdrop-filter]:bg-background/75 md:px-4">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>

            <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild className="gap-1.5 text-muted-foreground hover:text-foreground">
                    <Link href="/">
                        <ArrowLeft className="size-4" />
                        <span className="hidden sm:inline">{t('sidebar.back_to_home', 'Retour au site')}</span>
                        <Home className="size-4 sm:hidden" />
                    </Link>
                </Button>
            </div>
        </header>
    );
}
