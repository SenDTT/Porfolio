import About from "@/Components/About";
import Experience from "@/Components/Experience";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

const navigations = [
    { to: '#about', name: 'About' },
    { to: '#experience', name: 'Experience' },
    { to: '#contact', name: 'Contact' }
];

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-myBG text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        {/* <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-2">
                            <div className="flex">
                                <Link href="/">
                                    <h1 className="text-3xl text-primary font-mono font-bold">SenDoan</h1>
                                </Link>
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {
                                    navigations.map((value, index) => (
                                        <Link
                                            key={index + value.name}
                                            href={value.to}
                                            className="font-bold rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-purple-700 focus:outline-none dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            {value.name}
                                        </Link>
                                    ))
                                }
                            </nav>
                        </header> */}

                        <main className="mt-6 flex flex-col items-center gap-4">
                            <About />
                            <Experience />
                        </main>

                        {/* <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer> */}
                    </div>
                </div>
            </div>
        </>
    );
}
