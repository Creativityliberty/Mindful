import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { useEffect, useRef } from 'react';

type Point = {
    x: number;
    y: number;
};

interface WaveConfig {
    offset: number;
    amplitude: number;
    frequency: number;
    color: string;
    opacity: number;
}

export function Cta() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const mouseRef = useRef<Point>({ x: 0, y: 0 });
    const targetMouseRef = useRef<Point>({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return undefined;

        const ctx = canvas.getContext('2d');
        if (!ctx) return undefined;

        let animationId: number;
        let time = 0;

        const computeThemeColors = () => {
            const rootStyles = getComputedStyle(document.documentElement);

            const resolveColor = (variables: string[], alpha = 1) => {
                const tempEl = document.createElement('div');
                tempEl.style.position = 'absolute';
                tempEl.style.visibility = 'hidden';
                tempEl.style.width = '1px';
                tempEl.style.height = '1px';
                document.body.appendChild(tempEl);

                let color = `rgba(255, 255, 255, ${alpha})`;

                for (const variable of variables) {
                    const value = rootStyles.getPropertyValue(variable).trim();
                    if (value) {
                        tempEl.style.backgroundColor = `var(${variable})`;
                        const computedColor =
                            getComputedStyle(tempEl).backgroundColor;

                        if (
                            computedColor &&
                            computedColor !== 'rgba(0, 0, 0, 0)'
                        ) {
                            if (alpha < 1) {
                                const rgbMatch = computedColor.match(
                                    /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/,
                                );
                                if (rgbMatch) {
                                    color = `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${alpha})`;
                                } else {
                                    color = computedColor;
                                }
                            } else {
                                color = computedColor;
                            }
                            break;
                        }
                    }
                }

                document.body.removeChild(tempEl);
                return color;
            };

            return {
                wavePalette: [
                    {
                        offset: 0,
                        amplitude: 35,
                        frequency: 0.003,
                        color: 'rgba(56, 189, 248, 0.4)', // Sky blue wave
                        opacity: 0.45,
                    },
                    {
                        offset: Math.PI / 2,
                        amplitude: 45,
                        frequency: 0.0026,
                        color: 'rgba(56, 189, 248, 0.3)',
                        opacity: 0.35,
                    },
                    {
                        offset: Math.PI,
                        amplitude: 30,
                        frequency: 0.0034,
                        color: 'rgba(56, 189, 248, 0.2)',
                        opacity: 0.3,
                    },
                ] satisfies WaveConfig[],
            };
        };

        let themeColors = computeThemeColors();

        const handleThemeMutation = () => {
            themeColors = computeThemeColors();
        };

        const observer = new MutationObserver(handleThemeMutation);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class', 'data-theme'],
        });

        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;

        const mouseInfluence = prefersReducedMotion ? 5 : 40;
        const influenceRadius = prefersReducedMotion ? 100 : 250;
        const smoothing = prefersReducedMotion ? 0.04 : 0.1;

        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        };

        const recenterMouse = () => {
            const centerPoint = { x: canvas.width / 2, y: canvas.height / 2 };
            mouseRef.current = centerPoint;
            targetMouseRef.current = centerPoint;
        };

        const handleResize = () => {
            resizeCanvas();
            recenterMouse();
        };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            targetMouseRef.current = { 
                x: event.clientX - rect.left, 
                y: event.clientY - rect.top 
            };
        };

        const handleMouseLeave = () => {
            recenterMouse();
        };

        resizeCanvas();
        recenterMouse();

        window.addEventListener('resize', handleResize);
        const sectionEl = canvas.closest('section');
        if (sectionEl) {
            sectionEl.addEventListener('mousemove', handleMouseMove);
            sectionEl.addEventListener('mouseleave', handleMouseLeave);
        }

        const drawWave = (wave: WaveConfig) => {
            ctx.save();
            ctx.beginPath();

            for (let x = 0; x <= canvas.width; x += 4) {
                const dx = x - mouseRef.current.x;
                const dy = canvas.height / 2 - mouseRef.current.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const influence = Math.max(0, 1 - distance / influenceRadius);
                const mouseEffect =
                    influence *
                    mouseInfluence *
                    Math.sin(time * 0.001 + x * 0.01 + wave.offset);

                const y =
                    canvas.height / 2 +
                    Math.sin(x * wave.frequency + time * 0.002 + wave.offset) *
                        wave.amplitude +
                    Math.sin(x * wave.frequency * 0.4 + time * 0.003) *
                        (wave.amplitude * 0.45) +
                    mouseEffect;

                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }

            ctx.lineWidth = 2;
            ctx.strokeStyle = wave.color;
            ctx.globalAlpha = wave.opacity;
            ctx.shadowBlur = 20;
            ctx.shadowColor = wave.color;
            ctx.stroke();

            ctx.restore();
        };

        const animate = () => {
            time += 1;

            mouseRef.current.x +=
                (targetMouseRef.current.x - mouseRef.current.x) * smoothing;
            mouseRef.current.y +=
                (targetMouseRef.current.y - mouseRef.current.y) * smoothing;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;

            themeColors.wavePalette.forEach(drawWave);

            animationId = window.requestAnimationFrame(animate);
        };

        animationId = window.requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (sectionEl) {
                sectionEl.removeEventListener('mousemove', handleMouseMove);
                sectionEl.removeEventListener('mouseleave', handleMouseLeave);
            }
            cancelAnimationFrame(animationId);
            observer.disconnect();
        };
    }, []);

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* blobs décoratifs - Soft sky blue theme */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 h-[440px] w-[440px] rounded-full bg-sky-400/[0.03] blur-[150px]" />
                <div className="absolute right-1/4 bottom-0 h-[360px] w-[360px] rounded-full bg-primary/[0.015] blur-[130px]" />
            </div>

            {/* canvas des vagues interactives placé en arrière-plan */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 h-full w-full pointer-events-none"
                aria-hidden="true"
            />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.75 }}
                    className="mx-auto max-w-3xl rounded-[2.5rem] border border-border/40 bg-background/50 px-8 py-16 text-center backdrop-blur-md md:px-16 dark:border-border/50"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-1.5 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                        Commencez dès aujourd’hui
                    </div>

                    <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl font-sans">
                        Révélez et transmettez votre savoir-faire.
                    </h2>

                    <p className="mx-auto mb-10 max-w-2xl text-base md:text-lg text-foreground/60 font-light leading-relaxed">
                        Que vous souhaitiez vous initier aux pratiques énergétiques, maîtriser la création de bougies artisanales, le stylisme de l'ongle, ou automatiser votre activité avec l'IA, accédez à des formations de qualité dispensées par des professionnels passionnés.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            size="lg"
                            className="group gap-2 rounded-full px-8 text-sm font-semibold tracking-wider uppercase h-12"
                            asChild
                        >
                            <Link href="/courses" preserveState prefetch>
                                Explorer les formations
                                <ArrowRight
                                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                    aria-hidden="true"
                                />
                            </Link>
                        </Button>

                        <Button
                            size="lg"
                            variant="secondary"
                            className="gap-2 rounded-full h-12 border border-border/40"
                            asChild
                        >
                            <Link href="/become-trainer" preserveState prefetch>
                                Devenir formateur
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
