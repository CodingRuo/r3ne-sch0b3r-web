import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen">
            <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
                <div className="absolute inset-0"></div>
                <div className="text-center z-10 max-w-4xl mx-auto">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6">
                        René Schober
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">Full-Stack Entwickler & DevOps-Enthusiast</h2>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Ich entwickle nicht nur Code, ich schaffe Lösungen – von der Idee bis zum Live-Server.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {/* <Button
                            size="lg"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
                            onClick={() => scrollToSection("projects")}
                        >
                            Meine Projekte
                            <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-slate-700 text-white hover:bg-gray-800 px-8 py-3 text-lg bg-transparent"
                        >
                            <Download className="mr-2 h-5 w-5" />
                            Lebenslauf herunterladen
                        </Button> */}
                    </div>
                </div>
            </section>
        </div>
    );
}
