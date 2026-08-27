import { motion } from 'framer-motion'
import { Search, Sparkles, ChevronsUpDown, Check, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'

export type CourseFilters = {
    categories: string[]
    trainers: string[]
}

type MultiSelectProps = {
    label: string
    options: string[]
    selected: string[]
    onChange: (selected: string[]) => void
    searchable?: boolean
    searchPlaceholder?: string
    noResultsText?: string
}

function MultiSelect({ label, options, selected, onChange, searchable = false, searchPlaceholder = 'Rechercher...', noResultsText = 'Aucun résultat' }: MultiSelectProps) {
    const [open, setOpen] = useState(false)

    const toggle = (value: string) => {
        onChange(selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value])
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn(
                        'h-9 justify-between gap-2 border-border/40 bg-background/60 backdrop-blur-sm hover:bg-background/80 dark:border-border/50 dark:bg-background/50',
                        selected.length > 0 && 'border-primary/40 bg-primary/5 dark:bg-primary/10',
                    )}
                >
                    <span className="text-sm font-medium text-foreground/80">{label}</span>
                    {selected.length > 0 && (
                        <Badge className="h-4 min-w-4 rounded-full px-1 text-[10px]">{selected.length}</Badge>
                    )}
                    <ChevronDown className="h-3.5 w-3.5 shrink-0 text-foreground/40" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 border-border/40 bg-background/95 p-0 backdrop-blur-md dark:border-border/50" align="start">
                <Command>
                    {searchable && <CommandInput placeholder={searchPlaceholder} className="h-9 text-sm" />}
                    <CommandList>
                        {searchable && (
                            <CommandEmpty className="py-4 text-center text-sm text-foreground/50">{noResultsText}</CommandEmpty>
                        )}
                        <CommandGroup>
                            {options.map((option) => {
                                const active = selected.includes(option)

                                return (
                                    <CommandItem key={option} value={option} onSelect={() => toggle(option)} className="gap-2 text-sm">
                                        <div className={cn('flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors', active ? 'border-primary bg-primary' : 'border-border/60')}>
                                            {active && <Check className="h-2.5 w-2.5 text-primary-foreground" />}
                                        </div>
                                        {option}
                                    </CommandItem>
                                )
                            })}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

type Props = {
    search: string
    onSearch: (v: string) => void
    sort: string
    onSort: (v: string) => void
    filters: CourseFilters
    onFilters: (f: CourseFilters) => void
    total: number
    categoryOptions: string[]
    trainerOptions: string[]
}

export function CoursesHeader({ search, onSearch, sort, onSort, filters, onFilters, total, categoryOptions, trainerOptions }: Props) {
    const { t } = useTranslation()
    const [sortOpen, setSortOpen] = useState(false)

    const sortOptions = [
        { value: 'popular', label: t('courses_page.sort_popular') },
        { value: 'rating', label: t('courses_page.sort_rating') },
        { value: 'price-asc', label: t('courses_page.sort_price_asc') },
        { value: 'price-desc', label: t('courses_page.sort_price_desc') },
        { value: 'trainer', label: t('courses_page.sort_trainer') },
    ]

    const current = sortOptions.find((o) => o.value === sort)
    const activeCount = filters.categories.length + filters.trainers.length

    return (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
            <div className="mb-6">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-foreground/70 uppercase backdrop-blur dark:border-border/60 dark:bg-background/70">
                    <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    Catalogue
                </div>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                    {t('nav.courses')}
                </h1>
                <p className="mt-2 text-foreground/60">
                    {total > 1
                        ? t('courses_page.results_count_plural', { count: total })
                        : t('courses_page.results_count', { count: total })}
                </p>
            </div>

            <div className="mb-4 flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                    <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-foreground/40" aria-hidden="true" />
                    <Input
                        type="search"
                        placeholder={t('courses_page.search_placeholder')}
                        value={search}
                        onChange={(e) => onSearch(e.target.value)}
                        className="border-border/40 bg-background/60 pl-9 backdrop-blur-sm placeholder:text-foreground/40 focus-visible:border-border/60 dark:border-border/50 dark:bg-background/50"
                    />
                </div>

                <Popover open={sortOpen} onOpenChange={setSortOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={sortOpen}
                            className="w-full justify-between border-border/40 bg-background/60 backdrop-blur-sm hover:bg-background/80 sm:w-56 dark:border-border/50 dark:bg-background/50"
                        >
                            <span className="flex-1 text-left text-sm font-medium text-foreground">
                                {current?.label ?? t('courses_page.sort_popular')}
                            </span>
                            <ChevronsUpDown className="ml-2 h-3.5 w-3.5 shrink-0 text-foreground/40" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 border-border/40 bg-background/95 p-0 backdrop-blur-md dark:border-border/50">
                        <Command>
                            <CommandList>
                                <CommandGroup>
                                    {sortOptions.map((option) => (
                                        <CommandItem
                                            key={option.value}
                                            value={option.value}
                                            onSelect={(val) => {
                                                onSort(val); setSortOpen(false) 
                                            }}
                                            className="gap-2 text-sm"
                                        >
                                            <Check className={cn('h-4 w-4 text-primary', sort === option.value ? 'opacity-100' : 'opacity-0')} />
                                            {option.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>

            <div className="flex flex-wrap items-center gap-2">
                <MultiSelect
                    label={t('courses_page.categories_title')}
                    options={categoryOptions}
                    selected={filters.categories}
                    onChange={(categories) => onFilters({ ...filters, categories })}
                />
                <MultiSelect
                    label={t('courses_page.trainers_title')}
                    options={trainerOptions}
                    selected={filters.trainers}
                    onChange={(trainers) => onFilters({ ...filters, trainers })}
                    searchable
                />

                {activeCount > 0 && (
                    <button
                        type="button"
                        onClick={() => onFilters({ categories: [], trainers: [] })}
                        className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border/40 bg-background/60 px-3 text-xs text-foreground/50 transition-colors hover:text-foreground dark:border-border/50 dark:bg-background/50"
                    >
                        <X className="h-3 w-3" />
                        {t('courses_page.reset_filters')} ({activeCount})
                    </button>
                )}
            </div>
        </motion.div>
    )
}
