import AppLogoIcon from '@/components/app-logo-icon';

export default function AppLogo() {
    return (
        <div className="flex items-center gap-2.5">
            <div className="flex aspect-square size-8 items-center justify-center rounded-xl bg-sky-400 text-white shadow-sm">
                <AppLogoIcon className="size-5" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="truncate leading-tight font-bold text-foreground">
                    Formation<span className="text-sky-400">Session</span>
                </span>
            </div>
        </div>
    );
}
