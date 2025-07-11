"use client"

import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Cloud, Code, Database, ExternalLink, Github, Mail, Server, Terminal as TerminalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { createInteractiveCV, Terminal } from '@codingruo/r3ne-sch0b3r.io';
import '@codingruo/r3ne-sch0b3r.io/styles.css';
import { ModeToggle } from "@/components/theme-toggle";


export default function Home() {

    const skills = {
        frontend: ["Vue.js", "Quasar", "TypeScript", "HTML5", "CSS3", "React", "Next.js", "Nuxt.js"],
        backend: ["Node.js", "Fastify", "REST APIs", "Clean Architecture", "Socket.io", "Elysia.js", "Bun"],
        database: ["MongoDB", "Mongoose ODM"],
        devops: ["Docker", "Linux", "NGINX", "SSL/TLS", "Cloudflare"],
    }

    // Strukturierte Daten für SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "René Schober",
        "jobTitle": "Full-Stack Entwickler",
        "description": "Full-Stack Entwickler aus Salzburg mit Expertise in Vue.js, Node.js, TypeScript und modernen Web-Technologien",
        "url": "https://r3ne-sch0b3r.web/",
        "sameAs": [
            "https://github.com/CodingRuo",
            "https://www.codingruo.dev/"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Salzburg",
            "addressCountry": "AT"
        },
        "email": "r.schober@outlook.com",
        "knowsAbout": [
            "Vue.js",
            "Node.js", 
            "TypeScript",
            "React",
            "Next.js",
            "Docker",
            "Clean Architecture",
            "Full-Stack Development",
            "Container Deployment"
        ],
        "hasOccupation": {
            "@type": "Occupation",
            "name": "Full-Stack Entwickler",
            "occupationLocation": {
                "@type": "City",
                "name": "Salzburg"
            }
        }
    };

    const [isAdminModalOpen, setIsAdminModalOpen] = useState(false)
    const [isDevOpsModalOpen, setIsDevOpsModalOpen] = useState(false)
    const [isClubSystemModalOpen, setIsClubSystemModalOpen] = useState(false)
    const [isDispatchModalOpen, setIsDispatchModalOpen] = useState(false)
    const [isPortForgeModalOpen, setIsPortForgeModalOpen] = useState(false)
    const [isVerbModalOpen, setIsVerbModalOpen] = useState(false)
    const [isTerminalModalOpen, setIsTerminalModalOpen] = useState(false)
    const [isFreelancerModalOpen, setIsFreelancerModalOpen] = useState(false)

    const [terminal, setTerminal] = useState<Terminal | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Hook für Bildschirmgröße
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // 768px ist der md breakpoint von Tailwind
        };

        // Initial check
        checkMobile();

        // Event listener für Resize
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {

        const myCommands = {
            'hello': {
                description: 'Sagt Hallo',
                output: 'Hallo Welt! Dies ist ein benutzerdefinierter Befehl.'
            },
            'screen': {
                description: 'Zeigt Bildschirminfo',
                output: `Bildschirmbreite: ${window.innerWidth}px\nMobile Modus: ${isMobile ? 'Ja' : 'Nein'}\nBreakpoint: ${window.innerWidth < 768 ? 'Mobile' : 'Desktop'}`
            },
        };

        // Responsive Terminal-Konfiguration
        const terminalConfig = {
            customCommands: myCommands,
            height: isMobile ? '70vh' : '800px', // Etwas mehr Höhe auf Mobile
            width: isMobile ? '98vw' : '1200px',  // Fast Vollbreite auf Mobile
            fontSize: isMobile ? '13px' : '16px', // Kleinere Schrift auf Mobile
            // Zusätzliche Mobile-Optimierungen
            ...(isMobile && {
                padding: '10px',
                borderRadius: '8px',
                maxHeight: '80vh' // Maximale Höhe begrenzen
            })
        };

        const terminalInstance = createInteractiveCV('terminal-container', terminalConfig);
        setTerminal(terminalInstance);
    }, [isMobile]); // Re-initialisieren wenn sich Mobile-Status ändert

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="min-h-screen">
            {/* Theme Toggle - oben rechts */}
            <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
                <ModeToggle />
            </div>
            
            {/* Strukturierte Daten für SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            
            <div id="terminal-container" />
            {/* Hero Section */}
            <header className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30"></div>
                
                {/* Dezentes Grid-Pattern */}
                <div 
                    className="absolute inset-0 opacity-[0.09]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                    }}>
                </div>
                
                {/* Animated Background Lines (Vite-inspired) - Dezentere Version */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Subtile diagonale Linien */}
                    <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-15">
                        <div 
                            className="absolute inset-0 rotate-12"
                            style={{
                                background: 'linear-gradient(90deg, transparent, #8b5cf6 50%, transparent)',
                                animation: 'float-right 8s ease-in-out infinite'
                            }}>
                        </div>
                    </div>
                    
                    <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] opacity-10">
                        <div 
                            className="absolute inset-0 -rotate-12" 
                            style={{
                                background: 'linear-gradient(270deg, transparent, #06b6d4 50%, transparent)',
                                animation: 'float-left 10s ease-in-out infinite reverse'
                            }}>
                        </div>
                    </div>
                </div>
                
                {/* Floating geometric shapes */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" 
                         style={{ animationDuration: '4s' }}></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" 
                         style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
                </div>
                <div className="text-center z-10 max-w-4xl mx-auto">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6">
                        René Schober
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">Full-Stack Entwickler & Technologie-Enthusiast</h2>
                    <p className="text-xl md:text-2xl text-muted-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Meine Leidenschaft: Komplexe Ideen in funktionierende Software zu verwandeln.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                            onClick={() => scrollToSection("projects")}
                        >
                            Meine Projekte
                            <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </header>

            {/* About Section */}
            <main>
                <section className="py-20 px-4" aria-labelledby="about-heading">
                    <div className="max-w-4xl mx-auto">
                        <h2 id="about-heading" className="text-4xl font-bold mb-12 text-center">Die Story</h2>
                        <div className="prose prose-lg prose-invert max-w-none">
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                Technologie ist für mich mehr als nur ein Job – es ist ein riesiges Spielfeld zum Lernen und Ausprobieren. Meine Reise begann 2019 mit der Ausbildung zum Applikationsentwickler, und seitdem liebe ich es, jeden Tag tiefer in die Welt des Codes einzutauchen.
                            </p>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                Was mich antreibt, ist der Prozess selbst: eine Idee zu nehmen, sie in einer sauberen Architektur zu strukturieren und sie dann Zeile für Zeile zum Leben zu erwecken. Dabei sehe ich mich nicht als jemanden, der schon alles perfekt kann. Im Gegenteil: Ich bin mir bewusst, dass ich bei Themen wie Docker und Server-Administration noch am Anfang meiner Reise stehe, aber ich habe keine Scheu, mich einzuarbeiten und die Verantwortung für den gesamten Zyklus zu übernehmen – vom ersten Entwurf bis zum laufenden System.
                            </p>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Ich lerne am besten, indem ich Dinge tue. Ich glaube daran, dass ehrliches Interesse und die Bereitschaft, ständig Neues zu lernen, wichtiger sind als ein perfekter Lebenslauf. Ich suche ein Team, in dem ich genau das tun kann: mich einbringen, wachsen und gemeinsam an spannenden Herausforderungen arbeiten.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section className="py-20 px-4" aria-labelledby="skills-heading">
                    <div className="max-w-6xl mx-auto">
                        <h2 id="skills-heading" className="text-4xl font-bold mb-12 text-center">Skills & Technologien</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="bg-card border-border">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <Code className="h-8 w-8 text-primary mr-3" />
                                    <h3 className="text-xl font-semibold">Frontend</h3>
                                </div>
                                <div className="space-y-2">
                                    {skills.frontend.map((skill) => (
                                        <Badge key={skill} variant="secondary" className="mr-2 mb-2 bg-primary/20 text-primary">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <Server className="h-8 w-8 text-chart-3 mr-3" />
                                    <h3 className="text-xl font-semibold">Backend</h3>
                                </div>
                                <div className="space-y-2">
                                    {skills.backend.map((skill) => (
                                        <Badge key={skill} variant="secondary" className="mr-2 mb-2 bg-chart-3/20 text-chart-3">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <Database className="h-8 w-8 text-accent mr-3" />
                                    <h3 className="text-xl font-semibold">Datenbank</h3>
                                </div>
                                <div className="space-y-2">
                                    {skills.database.map((skill) => (
                                        <Badge key={skill} variant="secondary" className="mr-2 mb-2 bg-accent/20 text-accent">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <Cloud className="h-8 w-8 text-chart-4 mr-3" />
                                    <h3 className="text-xl font-semibold">DevOps</h3>
                                </div>
                                <div className="space-y-2">
                                    {skills.devops.map((skill) => (
                                        <Badge key={skill} variant="secondary" className="mr-2 mb-2 bg-chart-4/20 text-chart-4">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

                {/* Projects */}
                <section id="projects" className="py-20 px-4 bg-muted/50" aria-labelledby="projects-heading">
                <div className="max-w-7xl mx-auto">
                    <h2 id="projects-heading" className="text-4xl font-bold mb-12 text-center">Projekte</h2>
                    <div className="grid lg:grid-cols-3 xl:grid-cols-3 gap-6">
                        <Card className="bg-card border-border hover:border-primary transition-colors">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-primary">Admin-Oberfläche</h3>
                                <p className="text-muted-foreground mb-4 text-lg">Eigenverantwortliche Neuentwicklung</p>
                                <p className="text-muted-foreground/80 mb-6 leading-relaxed">
                                    Entwicklung einer komplexen Admin-Oberfläche mit Vue.js/Quasar Framework und einem robusten
                                    Node.js/TypeScript Backend. Das Projekt folgt Clean-Architecture-Prinzipien und wird vollständig
                                    eigenverantwortlich von der Konzeption bis zur Implementierung umgesetzt.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <Badge className="bg-primary/20 text-primary">Vue.js</Badge>
                                    <Badge className="bg-primary/20 text-primary">Quasar</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">Node.js</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">TypeScript</Badge>
                                    <Badge className="bg-primary/20 text-primary">Clean Architecture</Badge>
                                </div>
                                <Button
                                    variant="outline"
                                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                                    onClick={() => setIsAdminModalOpen(true)}
                                >
                                    Details ansehen
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border hover:border-chart-3 transition-colors">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-chart-3">DevOps & Server-Infrastruktur</h3>
                                <p className="text-muted-foreground mb-4 text-lg">Vollständige Serveradministration</p>
                                <p className="text-muted-foreground/80 mb-6 leading-relaxed">
                                    Aufbau und Verwaltung der kompletten Server-Infrastruktur: Linux-Server-Setup,
                                    Docker-Container-Orchestrierung, NGINX als Reverse Proxy, SSL/TLS-Konfiguration und umfassende
                                    Sicherheitsmaßnahmen inklusive Firewall-Management.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <Badge className="bg-chart-4/20 text-chart-4">Docker</Badge>
                                    <Badge className="bg-chart-4/20 text-chart-4">Linux</Badge>
                                    <Badge className="bg-chart-4/20 text-chart-4">NGINX</Badge>
                                    <Badge className="bg-destructive/20 text-destructive">SSL/TLS</Badge>
                                    <Badge className="bg-destructive/20 text-destructive">Security</Badge>
                                </div>
                                <Button
                                    variant="outline"
                                    className="border-chart-3 text-chart-3 hover:bg-chart-3 hover:text-primary-foreground bg-transparent"
                                    onClick={() => setIsDevOpsModalOpen(true)}
                                >
                                    Details ansehen
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border hover:border-accent transition-colors">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-accent">Club-Eintrittssystem</h3>
                                <p className="text-muted-foreground mb-4 text-lg">QR-Code & Apple Wallet Integration</p>
                                <p className="text-muted-foreground/80 mb-6 leading-relaxed">
                                    Vollständiges Eintrittssystem für Clubs in Salzburg mit Gästeregistrierung, QR-Code-Generierung und
                                    Apple Wallet Integration. Gehostet auf Cloudflare mit optimaler Performance und Skalierbarkeit.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <Badge className="bg-accent/20 text-accent">Vue.js</Badge>
                                    <Badge className="bg-accent/20 text-accent">Node.js</Badge>
                                    <Badge className="bg-chart-4/20 text-chart-4">Cloudflare</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">QR-Codes</Badge>
                                    <Badge className="bg-muted text-muted-foreground">Apple Wallet</Badge>
                                </div>
                                <Button
                                    variant="outline"
                                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                                    onClick={() => setIsClubSystemModalOpen(true)}
                                >
                                    Details ansehen
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border hover:border-chart-5 transition-colors">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-chart-5">Dispositions-Software</h3>
                                <p className="text-muted-foreground mb-4 text-lg">Krankentransport mit Echtzeit-Tracking</p>
                                <p className="text-muted-foreground/80 mb-6 leading-relaxed">
                                    Professionelle Dispositions-Software für Krankentransport mit Echtzeit-Tracking via Socket.io. Mein
                                    erstes großes Projekt nach der Ausbildung, bei dem ich Vue.js, Quasar und Node.js von Grund auf
                                    gelernt habe. Saubere Komponenten-Architektur mit Pinia State Management.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <Badge className="bg-chart-5/20 text-chart-5">Vue.js</Badge>
                                    <Badge className="bg-chart-5/20 text-chart-5">Quasar</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">Socket.io</Badge>
                                    <Badge className="bg-primary/20 text-primary">Pinia</Badge>
                                    <Badge className="bg-chart-4/20 text-chart-4">MongoDB</Badge>
                                </div>
                                <Button
                                    variant="outline"
                                    className="border-chart-5 text-chart-5 hover:bg-chart-5 hover:text-primary-foreground bg-transparent"
                                    onClick={() => setIsDispatchModalOpen(true)}
                                >
                                    Details ansehen
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border hover:border-blue-500 transition-colors">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-blue-500">PortForge</h3>
                                <p className="text-muted-foreground mb-4 text-lg">Container-Deployment Plattform</p>
                                <p className="text-muted-foreground/80 mb-6 leading-relaxed">
                                    Hobby-Projekt als Alternative zu Coolify - eine webbasierte Container-Deployment-Plattform mit Admin-Oberfläche. 
                                    Entwickelt mit modernen Technologien wie Next.js, Bun und ElysiaJS für schnelle und effiziente Container-Verwaltung.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <Badge className="bg-blue-500/20 text-blue-500">Next.js</Badge>
                                    <Badge className="bg-blue-500/20 text-blue-500">Bun</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">ElysiaJS</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">Socket.io</Badge>
                                    <Badge className="bg-chart-4/20 text-chart-4">Docker</Badge>
                                </div>
                                <Button
                                    variant="outline"
                                    className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-primary-foreground bg-transparent"
                                    onClick={() => setIsPortForgeModalOpen(true)}
                                >
                                    Details ansehen
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border hover:border-green-500 transition-colors">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-green-500">Verb Template</h3>
                                <p className="text-muted-foreground mb-4 text-lg">Fullstack Development Boilerplate</p>
                                <p className="text-muted-foreground/80 mb-6 leading-relaxed">
                                    Ein Fullstack-Template mit Bun, Elysia, React und Vite für schnellen Entwicklungsstart. 
                                    Inkl. create-verb CLI-Tool für automatisierte Projektinitialisierung mit optionalen Features wie Better Auth und tRPC.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <Badge className="bg-green-500/20 text-green-500">React</Badge>
                                    <Badge className="bg-green-500/20 text-green-500">Vite</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">Bun</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">ElysiaJS</Badge>
                                    <Badge className="bg-primary/20 text-primary">tRPC</Badge>
                                </div>
                                <Button
                                    variant="outline"
                                    className="border-green-500 text-green-500 hover:bg-green-500 hover:text-primary-foreground bg-transparent"
                                    onClick={() => setIsVerbModalOpen(true)}
                                >
                                    Details ansehen
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border hover:border-purple-500 transition-colors">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-purple-500">Interaktives Terminal</h3>
                                <p className="text-muted-foreground mb-4 text-lg">r3ne-sch0b3r.io Package</p>
                                <p className="text-muted-foreground/80 mb-6 leading-relaxed">
                                    Ein interaktives Terminal-Interface für Portfolio-Websites. Alternative zu statischen Bewerbungsunterlagen - 
                                    ermöglicht Besuchern eine spielerische Erkundung meiner Fähigkeiten und Projekte via Terminal-Commands.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <Badge className="bg-purple-500/20 text-purple-500">TypeScript</Badge>
                                    <Badge className="bg-purple-500/20 text-purple-500">Web Components</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">NPM Package</Badge>
                                    <Badge className="bg-primary/20 text-primary">Interactive</Badge>
                                </div>
                                <Button
                                    variant="outline"
                                    className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-primary-foreground bg-transparent"
                                    onClick={() => setIsTerminalModalOpen(true)}
                                >
                                    Details ansehen
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border hover:border-orange-500 transition-colors">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-orange-500">CodingRuo.dev</h3>
                                <p className="text-muted-foreground mb-4 text-lg">Freelancer Portfolio Website</p>
                                <p className="text-muted-foreground/80 mb-6 leading-relaxed">
                                    Professionelle Freelancer-Website mit modernem Design und responsive Layout. 
                                    Präsentiert Services, Portfolio und Kontaktmöglichkeiten für potenzielle Kunden im Freelancing-Bereich.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <Badge className="bg-orange-500/20 text-orange-500">Next.js</Badge>
                                    <Badge className="bg-orange-500/20 text-orange-500">Tailwind CSS</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">TypeScript</Badge>
                                    <Badge className="bg-primary/20 text-primary">Responsive</Badge>
                                    <Badge className="bg-chart-4/20 text-chart-4">SEO</Badge>
                                </div>
                                <Button
                                    variant="outline"
                                    className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-primary-foreground bg-transparent"
                                    onClick={() => setIsFreelancerModalOpen(true)}
                                >
                                    Details ansehen
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            </main>

            {/* Kontakt */}
            <section className="py-20 px-4 bg-muted/50" aria-labelledby="contact-heading">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 id="contact-heading" className="text-4xl font-bold mb-8">Lassen Sie uns reden!</h2>
                    <p className="text-xl text-muted-foreground mb-12">
                        Ich freue mich darauf, zu hören, wie ich Ihr Team unterstützen kann.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <Card className="bg-card border-border hover:border-primary transition-colors">
                            <CardContent className="p-6 text-center">
                                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                                <h3 className="font-semibold mb-2">E-Mail</h3>
                                <p className="text-muted-foreground text-sm">r.schober@outlook.com</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border hover:border-chart-4 transition-colors">
                            <CardContent className="p-6 text-center">
                                <Github className="h-8 w-8 text-chart-4 mx-auto mb-4" />
                                <h3 className="font-semibold mb-2">GitHub</h3>
                                <p className="text-muted-foreground text-sm">github.com/CodingRuo</p>
                            </CardContent>
                        </Card>
                    </div>

                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                        <Mail className="mr-2 h-5 w-5" />
                        Kontakt aufnehmen
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 border-t border-border">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-muted-foreground">
                        © 2025 René Schober. Entwickelt mit Next.js und TypeScript in Salzburg.
                    </p>
                </div>
            </footer>

            {/* Einfache Modals */}
            {isAdminModalOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
                    <div className="bg-card border border-border rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-primary mb-2">Admin-Oberfläche</h2>
                                    <p className="text-xl text-muted-foreground">Eigenverantwortliche Neuentwicklung</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsAdminModalOpen(false)}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    ✕
                                </Button>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-primary">Projektübersicht</h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        Eine vollständig eigenverantwortlich entwickelte Admin-Oberfläche für ein komplexes Geschäftssystem.
                                        Das Projekt umfasst sowohl Frontend als auch Backend und folgt modernen Architekturprinzipien.
                                    </p>

                                    <h3 className="text-xl font-semibold mb-4 text-primary">Technische Highlights</h3>
                                    <ul className="text-muted-foreground space-y-2 mb-6">
                                        <li className="flex items-start">
                                            <span className="text-primary mr-2">•</span>
                                            <span>Vue.js 3 mit Composition API für reaktive Benutzeroberflächen</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-primary mr-2">•</span>
                                            <span>Quasar Framework für konsistente UI-Komponenten</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-primary mr-2">•</span>
                                            <span>TypeScript für typsichere Entwicklung</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-primary mr-2">•</span>
                                            <span>Node.js Backend mit Fastify Framework</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-primary mr-2">•</span>
                                            <span>Clean Architecture für wartbaren Code</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-primary">Funktionalitäten</h3>
                                    <div className="space-y-4 mb-6">
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-chart-3 mb-2">Benutzerverwaltung</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Vollständige CRUD-Operationen für Benutzer mit Rollen- und Rechteverwaltung
                                            </p>
                                        </div>
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-accent mb-2">Dashboard & Analytics</h4>
                                            <p className="text-muted-foreground text-sm">Interaktive Dashboards mit Echtzeit-Datenvisualisierung</p>
                                        </div>
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-chart-4 mb-2">Content Management</h4>
                                            <p className="text-muted-foreground text-sm">Intuitive Verwaltung von Inhalten mit Rich-Text-Editor</p>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-4 text-primary">Architektur</h3>
                                    <div className="bg-muted p-4 rounded-lg">
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Das System folgt Clean Architecture Prinzipien mit klarer Trennung von Presentation Layer,
                                            Business Logic und Data Access Layer. Dependency Injection sorgt für testbaren und wartbaren Code.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-border">
                                <h3 className="text-xl font-semibold mb-4 text-primary">Technologie-Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-primary/20 text-primary">Vue.js 3</Badge>
                                    <Badge className="bg-primary/20 text-primary">Quasar Framework</Badge>
                                    <Badge className="bg-accent/20 text-accent">TypeScript</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">Node.js</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">Fastify</Badge>
                                    <Badge className="bg-chart-5/20 text-chart-5">MongoDB</Badge>
                                    <Badge className="bg-destructive/20 text-destructive">Docker</Badge>
                                    <Badge className="bg-primary/20 text-primary">Clean Architecture</Badge>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <Button
                                    onClick={() => setIsAdminModalOpen(false)}
                                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                                >
                                    Schließen
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* DevOps Modal */}
            {isDevOpsModalOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
                    <div className="bg-card border border-border rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-chart-3 mb-2">DevOps & Server-Infrastruktur</h2>
                                    <p className="text-xl text-muted-foreground">Vollständige Serveradministration</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsDevOpsModalOpen(false)}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    ✕
                                </Button>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-chart-3">Infrastruktur-Übersicht</h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        Vollständige Verantwortung für die Server-Infrastruktur von der initialen Einrichtung bis zur
                                        produktiven Wartung. Aufbau skalierbarer, sicherer und hochverfügbarer Systeme mit modernen
                                        DevOps-Praktiken.
                                    </p>

                                    <h3 className="text-xl font-semibold mb-4 text-chart-3">Server-Administration</h3>
                                    <ul className="text-muted-foreground space-y-2 mb-6">
                                        <li className="flex items-start">
                                            <span className="text-chart-3 mr-2">•</span>
                                            <span>Ubuntu/Debian Linux Server Setup und Konfiguration</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-chart-3 mr-2">•</span>
                                            <span>SSH-Hardening und Schlüssel-basierte Authentifizierung</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-chart-3 mr-2">•</span>
                                            <span>UFW Firewall Konfiguration und Iptables Management</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-chart-3 mr-2">•</span>
                                            <span>Automatische Updates und Security Patches</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-chart-3 mr-2">•</span>
                                            <span>System Monitoring mit htop, netstat und Custom Scripts</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-chart-3">Container-Orchestrierung</h3>
                                    <div className="space-y-4 mb-6">
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-accent mb-2">Docker Containerization</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Multi-Container Setups mit Docker Compose für Frontend, Backend und Datenbank
                                            </p>
                                        </div>
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-primary mb-2">NGINX Reverse Proxy</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Load Balancing, SSL Termination und Request Routing für mehrere Services
                                            </p>
                                        </div>
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-chart-4 mb-2">SSL/TLS Management</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Let's Encrypt Zertifikate mit automatischer Erneuerung via Certbot
                                            </p>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-4 text-chart-3">Sicherheit & Monitoring</h3>
                                    <div className="bg-muted p-4 rounded-lg">
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Implementierung von Security Best Practices: Fail2Ban für Intrusion Prevention, regelmäßige
                                            Backups, Log-Monitoring und proaktive Systemüberwachung.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl font-semibold mb-4 text-chart-3">Deployment Pipeline</h3>
                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-muted p-4 rounded-lg text-center">
                                        <div className="text-2xl mb-2">🔧</div>
                                        <h4 className="font-semibold text-accent mb-2">Development</h4>
                                        <p className="text-muted-foreground text-sm">Git-basierte Entwicklung mit Feature Branches</p>
                                    </div>
                                    <div className="bg-muted p-4 rounded-lg text-center">
                                        <div className="text-2xl mb-2">🚀</div>
                                        <h4 className="font-semibold text-primary mb-2">Deployment</h4>
                                        <p className="text-muted-foreground text-sm">Automatisierte Deployments via Docker Compose</p>
                                    </div>
                                    <div className="bg-muted p-4 rounded-lg text-center">
                                        <div className="text-2xl mb-2">📊</div>
                                        <h4 className="font-semibold text-chart-3 mb-2">Monitoring</h4>
                                        <p className="text-muted-foreground text-sm">Kontinuierliche Überwachung und Alerting</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-border">
                                <h3 className="text-xl font-semibold mb-4 text-chart-3">DevOps-Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-chart-4/20 text-chart-4">Docker</Badge>
                                    <Badge className="bg-chart-4/20 text-chart-4">Docker Compose</Badge>
                                    <Badge className="bg-accent/20 text-accent">Ubuntu Linux</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">NGINX</Badge>
                                    <Badge className="bg-primary/20 text-primary">Let's Encrypt</Badge>
                                    <Badge className="bg-destructive/20 text-destructive">UFW Firewall</Badge>
                                    <Badge className="bg-chart-5/20 text-chart-5">Fail2Ban</Badge>
                                    <Badge className="bg-muted text-muted-foreground">SSH</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">Certbot</Badge>
                                    <Badge className="bg-accent/20 text-accent">Git</Badge>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <Button
                                    onClick={() => setIsDevOpsModalOpen(false)}
                                    className="bg-chart-3 hover:bg-chart-3/90 text-primary-foreground"
                                >
                                    Schließen
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Club System Modal */}
            {isClubSystemModalOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
                    <div className="bg-card border border-border rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-accent mb-2">Club-Eintrittssystem</h2>
                                    <p className="text-xl text-muted-foreground">QR-Code & Apple Wallet Integration</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsClubSystemModalOpen(false)}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    ✕
                                </Button>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-accent">Projektübersicht</h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        Ein innovatives Eintrittssystem für Clubs in Salzburg, das den gesamten Gäste-Workflow
                                        digitalisiert. Von der Online-Registrierung über QR-Code-Generierung bis hin zur Apple Wallet
                                        Integration - alles nahtlos integriert und cloudbasiert gehostet.
                                    </p>

                                    <h3 className="text-xl font-semibold mb-4 text-accent">Kernfunktionalitäten</h3>
                                    <ul className="text-muted-foreground space-y-2 mb-6">
                                        <li className="flex items-start">
                                            <span className="text-accent mr-2">•</span>
                                            <span>Online-Gästeregistrierung mit Validierung</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent mr-2">•</span>
                                            <span>Automatische QR-Code-Generierung pro Gast</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent mr-2">•</span>
                                            <span>Apple Wallet Pass-Erstellung und -Versendung</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent mr-2">•</span>
                                            <span>Echtzeit-Einlasskontrolle via QR-Scanner</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent mr-2">•</span>
                                            <span>Admin-Dashboard für Club-Management</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-accent">Technische Features</h3>
                                    <div className="space-y-4 mb-6">
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-chart-3 mb-2">Cloudflare Hosting</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Globale CDN-Verteilung für optimale Performance und DDoS-Schutz
                                            </p>
                                        </div>
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-primary mb-2">Node.js Backend</h4>
                                            <p className="text-muted-foreground text-sm">
                                                RESTful API mit MongoDB für Gästedaten und Event-Management
                                            </p>
                                        </div>
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-chart-4 mb-2">Apple Wallet API</h4>
                                            <p className="text-muted-foreground text-sm">Native iOS-Integration für nahtlose Ticket-Verwaltung</p>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-4 text-accent">Workflow</h3>
                                    <div className="bg-muted p-4 rounded-lg">
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center text-muted-foreground">
                                                <span className="text-accent mr-2">1.</span>
                                                <span>Gast registriert sich online</span>
                                            </div>
                                            <div className="flex items-center text-muted-foreground">
                                                <span className="text-accent mr-2">2.</span>
                                                <span>QR-Code wird generiert</span>
                                            </div>
                                            <div className="flex items-center text-muted-foreground">
                                                <span className="text-accent mr-2">3.</span>
                                                <span>Apple Wallet Pass wird erstellt</span>
                                            </div>
                                            <div className="flex items-center text-muted-foreground">
                                                <span className="text-accent mr-2">4.</span>
                                                <span>Pass wird per E-Mail versendet</span>
                                            </div>
                                            <div className="flex items-center text-muted-foreground">
                                                <span className="text-accent mr-2">5.</span>
                                                <span>Einlass via QR-Code-Scan</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-border">
                                <h3 className="text-xl font-semibold mb-4 text-accent">Technologie-Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-accent/20 text-accent">Vue.js 3</Badge>
                                    <Badge className="bg-accent/20 text-accent">Vite</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">Node.js</Badge>
                                    <Badge className="bg-chart-4/20 text-chart-4">Cloudflare</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">QR-Code.js</Badge>
                                    <Badge className="bg-muted text-muted-foreground">Apple Wallet API</Badge>
                                    <Badge className="bg-chart-5/20 text-chart-5">MongoDB</Badge>
                                    <Badge className="bg-destructive/20 text-destructive">Tailwind CSS</Badge>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <Button
                                    onClick={() => setIsClubSystemModalOpen(false)}
                                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                                >
                                    Schließen
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Dispatch System Modal */}
            {isDispatchModalOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
                    <div className="bg-card border border-border rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-chart-5 mb-2">Dispositions-Software</h2>
                                    <p className="text-xl text-muted-foreground">Krankentransport mit Echtzeit-Tracking</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsDispatchModalOpen(false)}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    ✕
                                </Button>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-chart-5">Mein Einstiegsprojekt</h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        Dieses Projekt war mein Sprungbrett in die professionelle Entwicklung. Direkt nach der Ausbildung
                                        bekam ich die Chance, eine komplette Dispositions-Software für Krankentransporte zu entwickeln. Hier
                                        lernte ich Vue.js, Quasar und Node.js von Grund auf.
                                    </p>

                                    <h3 className="text-xl font-semibold mb-4 text-chart-5">Kernfunktionalitäten</h3>
                                    <ul className="text-muted-foreground space-y-2 mb-6">
                                        <li className="flex items-start">
                                            <span className="text-chart-5 mr-2">•</span>
                                            <span>Echtzeit-Fahrzeugtracking mit GPS-Integration</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-chart-5 mr-2">•</span>
                                            <span>Automatische Auftragszuteilung an verfügbare Fahrzeuge</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-chart-5 mr-2">•</span>
                                            <span>Live-Kommunikation zwischen Leitstelle und Fahrern</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-chart-5 mr-2">•</span>
                                            <span>Patientendaten-Management mit Datenschutz</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-chart-5 mr-2">•</span>
                                            <span>Reporting und Statistiken für Management</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-chart-5">Technische Architektur</h3>
                                    <div className="space-y-4 mb-6">
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-chart-3 mb-2">Frontend (Vue.js + Quasar)</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Responsive Admin-Dashboard mit Echtzeit-Karten und Fahrzeug-Status
                                            </p>
                                        </div>
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-accent mb-2">Echtzeit-Kommunikation</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Socket.io für Live-Updates zwischen allen Clients und GPS-Tracking
                                            </p>
                                        </div>
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-primary mb-2">State Management</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Pinia für saubere Zustandsverwaltung und Komponenten-Kommunikation
                                            </p>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-4 text-chart-5">Deployment & Management</h3>
                                    <div className="bg-muted p-4 rounded-lg">
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Docker-Container für Frontend und Backend, verwaltet über die Admin-Oberfläche. MongoDB für
                                            Patientendaten und Auftragsverwaltung mit entsprechenden Datenschutz-Maßnahmen.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl font-semibold mb-4 text-chart-5">Komponenten-Architektur</h3>
                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-muted p-4 rounded-lg text-center">
                                        <div className="text-2xl mb-2">🗺️</div>
                                        <h4 className="font-semibold text-accent mb-2">Map Component</h4>
                                        <p className="text-muted-foreground text-sm">Live-Karte mit Fahrzeug-Positionen</p>
                                    </div>
                                    <div className="bg-muted p-4 rounded-lg text-center">
                                        <div className="text-2xl mb-2">📋</div>
                                        <h4 className="font-semibold text-chart-3 mb-2">Dispatch Panel</h4>
                                        <p className="text-muted-foreground text-sm">Auftragsverwaltung und -zuteilung</p>
                                    </div>
                                    <div className="bg-muted p-4 rounded-lg text-center">
                                        <div className="text-2xl mb-2">💬</div>
                                        <h4 className="font-semibold text-primary mb-2">Communication</h4>
                                        <p className="text-muted-foreground text-sm">Chat zwischen Leitstelle und Fahrern</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-border">
                                <h3 className="text-xl font-semibold mb-4 text-chart-5">Technologie-Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-chart-5/20 text-chart-5">Vue.js 3</Badge>
                                    <Badge className="bg-chart-5/20 text-chart-5">Quasar Framework</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">Node.js</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">Socket.io</Badge>
                                    <Badge className="bg-primary/20 text-primary">Pinia</Badge>
                                    <Badge className="bg-chart-4/20 text-chart-4">MongoDB</Badge>
                                    <Badge className="bg-accent/20 text-accent">Docker</Badge>
                                    <Badge className="bg-destructive/20 text-destructive">GPS API</Badge>
                                    <Badge className="bg-muted text-muted-foreground">Leaflet Maps</Badge>
                                </div>
                            </div>

                            <div className="mt-8 bg-muted p-4 rounded-lg">
                                <h4 className="font-semibold text-chart-5 mb-2">💡 Lerneffekt</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Dieses Projekt war mein Durchbruch in der professionellen Entwicklung. Ich lernte nicht nur die
                                    Technologien, sondern auch saubere Code-Architektur, Komponenten-Design und Echtzeit-Systeme. Die
                                    Erfahrung prägte meinen Entwicklungsstil nachhaltig.
                                </p>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <Button
                                    onClick={() => setIsDispatchModalOpen(false)}
                                    className="bg-chart-5 hover:bg-chart-5/90 text-primary-foreground"
                                >
                                    Schließen
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* PortForge Modal */}
            {isPortForgeModalOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
                    <div className="bg-card border border-border rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-blue-500 mb-2">PortForge</h2>
                                    <p className="text-xl text-muted-foreground">Container-Deployment Plattform</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsPortForgeModalOpen(false)}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    ✕
                                </Button>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-blue-500">Projektübersicht</h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        PortForge ist mein persönliches Lernprojekt - eine Alternative zu Coolify für Container-Deployment. 
                                        Die Plattform ermöglicht es, Container über eine intuitive Weboberfläche zu verwalten und zu deployen.
                                    </p>

                                    <h3 className="text-xl font-semibold mb-4 text-blue-500">Kernfunktionalitäten</h3>
                                    <ul className="text-muted-foreground space-y-2 mb-6">
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            <span>Container-Management über Webinterface</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            <span>Automatisierte Deployments aus Git-Repositories</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            <span>Real-time Container-Status und Logs</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            <span>Environment-Variable Management</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-blue-500">Technische Features</h3>
                                    <div className="space-y-4 mb-6">
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-chart-3 mb-2">Next.js Frontend</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Moderne React-basierte Benutzeroberfläche mit Server-Side Rendering
                                            </p>
                                        </div>
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-primary mb-2">Bun Runtime</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Ultraschnelle JavaScript-Runtime für optimale Performance
                                            </p>
                                        </div>
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-chart-4 mb-2">ElysiaJS Backend</h4>
                                            <p className="text-muted-foreground text-sm">High-Performance TypeScript-Framework für APIs</p>
                                        </div>
                                    </div>

                                    <div className="bg-muted p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-500 mb-2">🎯 Lernziel</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Praktische Erfahrung mit modernen Technologien und Container-Orchestrierung sammeln.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-border">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-blue-500">GitHub Repository</h3>
                                    <a 
                                        href="https://github.com/CodingRuo/PortForge" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-blue-400 transition-colors"
                                    >
                                        <Github className="h-5 w-5" />
                                    </a>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-blue-500/20 text-blue-500">Next.js</Badge>
                                    <Badge className="bg-blue-500/20 text-blue-500">Bun</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">ElysiaJS</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">Socket.io</Badge>
                                    <Badge className="bg-chart-4/20 text-chart-4">Docker</Badge>
                                    <Badge className="bg-accent/20 text-accent">TypeScript</Badge>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <Button
                                    onClick={() => setIsPortForgeModalOpen(false)}
                                    className="bg-blue-500 hover:bg-blue-500/90 text-primary-foreground"
                                >
                                    Schließen
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Verb Template Modal */}
            {isVerbModalOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
                    <div className="bg-card border border-border rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-green-500 mb-2">Verb Template</h2>
                                    <p className="text-xl text-muted-foreground">Fullstack Development Boilerplate</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsVerbModalOpen(false)}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    ✕
                                </Button>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-green-500">Template-Übersicht</h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        Ein umfassendes Fullstack-Template für schnelle Projektinitialisierung. Mit modernen Technologien 
                                        und Best Practices vorkonfiguriert, um sofort mit der Entwicklung starten zu können.
                                    </p>

                                    <h3 className="text-xl font-semibold mb-4 text-green-500">Features</h3>
                                    <ul className="text-muted-foreground space-y-2 mb-6">
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            <span>React Frontend mit Vite für schnelle Entwicklung</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            <span>ElysiaJS Backend mit Bun Runtime</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            <span>Optionale Better Auth Integration</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            <span>tRPC für Type-Safe APIs</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            <span>Swagger-Dokumentation</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-green-500">create-verb CLI</h3>
                                    <div className="space-y-4 mb-6">
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-chart-3 mb-2">CLI-Tool (in Entwicklung)</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Automatisierte Projektinitialisierung mit konfigurierbaren Features
                                            </p>
                                        </div>
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-primary mb-2">Modulare Architektur</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Auswahl zwischen verschiedenen Authentifizierungs- und API-Optionen
                                            </p>
                                        </div>
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-chart-4 mb-2">Best Practices</h4>
                                            <p className="text-muted-foreground text-sm">Vorkonfigurierte ESLint, Prettier und TypeScript Settings</p>
                                        </div>
                                    </div>

                                    <div className="bg-muted p-4 rounded-lg">
                                        <h4 className="font-semibold text-green-500 mb-2">🚀 Ziel</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Entwicklern einen schnellen und strukturierten Einstieg in neue Projekte ermöglichen.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-border">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-green-500">GitHub Repository</h3>
                                    <a 
                                        href="https://github.com/CodingRuo/verb" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-green-500 hover:text-green-400 transition-colors"
                                    >
                                        <Github className="h-5 w-5" />
                                    </a>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-green-500/20 text-green-500">React</Badge>
                                    <Badge className="bg-green-500/20 text-green-500">Vite</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">Bun</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">ElysiaJS</Badge>
                                    <Badge className="bg-primary/20 text-primary">tRPC</Badge>
                                    <Badge className="bg-accent/20 text-accent">Better Auth</Badge>
                                    <Badge className="bg-chart-4/20 text-chart-4">Swagger</Badge>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <Button
                                    onClick={() => setIsVerbModalOpen(false)}
                                    className="bg-green-500 hover:bg-green-500/90 text-primary-foreground"
                                >
                                    Schließen
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Interactive Terminal Modal */}
            {isTerminalModalOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
                    <div className="bg-card border border-border rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-purple-500 mb-2">Interaktives Terminal</h2>
                                    <p className="text-xl text-muted-foreground">r3ne-sch0b3r.io Package</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsTerminalModalOpen(false)}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    ✕
                                </Button>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-purple-500">Konzept</h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        Ein interaktives Terminal-Interface als Alternative zu traditionellen Portfolio-Websites. 
                                        Besucher können über Terminal-Befehle meine Fähigkeiten, Projekte und Erfahrungen erkunden.
                                    </p>

                                    <h3 className="text-xl font-semibold mb-4 text-purple-500">Verfügbare Commands</h3>
                                    <ul className="text-muted-foreground space-y-2 mb-6">
                                        <li className="flex items-start">
                                            <span className="text-purple-500 mr-2">•</span>
                                            <span><code className="bg-muted px-1 rounded">about</code> - Persönliche Informationen</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-500 mr-2">•</span>
                                            <span><code className="bg-muted px-1 rounded">skills</code> - Technische Fähigkeiten</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-500 mr-2">•</span>
                                            <span><code className="bg-muted px-1 rounded">projects</code> - Portfolio-Projekte</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-500 mr-2">•</span>
                                            <span><code className="bg-muted px-1 rounded">contact</code> - Kontaktinformationen</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-500 mr-2">•</span>
                                            <span><code className="bg-muted px-1 rounded">help</code> - Alle verfügbaren Befehle</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-purple-500">Technische Umsetzung</h3>
                                    <div className="space-y-4 mb-6">
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-chart-3 mb-2">NPM Package</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Wiederverwendbare Komponente als installierbare Bibliothek
                                            </p>
                                        </div>
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-primary mb-2">Web Components</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Framework-agnostische Implementierung mit TypeScript
                                            </p>
                                        </div>
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-chart-4 mb-2">Konfigurierbar</h4>
                                            <p className="text-muted-foreground text-sm">Anpassbare Commands und Styling-Optionen</p>
                                        </div>
                                    </div>

                                    <div className="bg-muted p-4 rounded-lg">
                                        <h4 className="font-semibold text-purple-500 mb-2">💡 Innovation</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Einzigartige Art der Selbstpräsentation für tech-affine Besucher.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-border">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-purple-500">GitHub Repository</h3>
                                    <a 
                                        href="https://github.com/CodingRuo/r3ne-sch0b3r.io" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-purple-500 hover:text-purple-400 transition-colors"
                                    >
                                        <Github className="h-5 w-5" />
                                    </a>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-purple-500/20 text-purple-500">TypeScript</Badge>
                                    <Badge className="bg-purple-500/20 text-purple-500">Web Components</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">NPM Package</Badge>
                                    <Badge className="bg-primary/20 text-primary">Interactive</Badge>
                                    <Badge className="bg-accent/20 text-accent">CSS</Badge>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <Button
                                    onClick={() => setIsTerminalModalOpen(false)}
                                    className="bg-purple-500 hover:bg-purple-500/90 text-primary-foreground"
                                >
                                    Schließen
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Freelancer Website Modal */}
            {isFreelancerModalOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
                    <div className="bg-card border border-border rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-orange-500 mb-2">CodingRuo.dev</h2>
                                    <p className="text-xl text-muted-foreground">Freelancer Portfolio Website</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsFreelancerModalOpen(false)}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    ✕
                                </Button>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-orange-500">Website-Übersicht</h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        Professionelle Freelancer-Website zur Präsentation meiner Services und Portfolio. 
                                        Optimiert für Kundenakquise mit klarem Call-to-Action und responsivem Design.
                                    </p>

                                    <h3 className="text-xl font-semibold mb-4 text-orange-500">Hauptbereiche</h3>
                                    <ul className="text-muted-foreground space-y-2 mb-6">
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-2">•</span>
                                            <span>Service-Portfolio und Leistungsübersicht</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-2">•</span>
                                            <span>Projekt-Showcase mit Case Studies</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-2">•</span>
                                            <span>Testimonials und Kundenfeedback</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-2">•</span>
                                            <span>Direkte Kontaktmöglichkeiten</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-2">•</span>
                                            <span>Blog für technische Artikel</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-orange-500">Technische Features</h3>
                                    <div className="space-y-4 mb-6">
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-chart-3 mb-2">SEO-Optimiert</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Meta-Tags, Strukturierte Daten und Performance-Optimierung
                                            </p>
                                        </div>
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-primary mb-2">Responsive Design</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Mobile-First Ansatz mit Tailwind CSS für alle Geräte
                                            </p>
                                        </div>
                                        <div className="bg-muted p-4 rounded-lg">
                                            <h4 className="font-semibold text-chart-4 mb-2">Performance</h4>
                                            <p className="text-muted-foreground text-sm">Next.js für optimale Ladezeiten und User Experience</p>
                                        </div>
                                    </div>

                                    <div className="bg-muted p-4 rounded-lg">
                                        <h4 className="font-semibold text-orange-500 mb-2">🎯 Ziel</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Potenzielle Kunden überzeugen und Freelancer-Projekte akquirieren.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-border">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-orange-500">Live Website</h3>
                                    <a 
                                        href="https://www.codingruo.dev/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-orange-500 hover:text-orange-400 transition-colors"
                                    >
                                        <ExternalLink className="h-5 w-5" />
                                    </a>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-orange-500/20 text-orange-500">Next.js</Badge>
                                    <Badge className="bg-orange-500/20 text-orange-500">Tailwind CSS</Badge>
                                    <Badge className="bg-chart-3/20 text-chart-3">TypeScript</Badge>
                                    <Badge className="bg-primary/20 text-primary">Responsive</Badge>
                                    <Badge className="bg-chart-4/20 text-chart-4">SEO</Badge>
                                    <Badge className="bg-accent/20 text-accent">Performance</Badge>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <Button
                                    onClick={() => setIsFreelancerModalOpen(false)}
                                    className="bg-orange-500 hover:bg-orange-500/90 text-primary-foreground"
                                >
                                    Schließen
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Terminal Button */}
            <Button
                onClick={() => terminal?.open()}
                className={`fixed z-40 shadow-lg hover:shadow-xl transition-all duration-200 bg-primary hover:bg-primary/90 text-primary-foreground ${
                    isMobile 
                        ? 'bottom-4 right-4 h-12 w-12 rounded-full' // Kleiner auf Mobile
                        : 'bottom-6 right-6 h-14 w-14 rounded-full'  // Normal auf Desktop
                }`}
                title="Terminal öffnen"
            >
                <TerminalIcon className={isMobile ? 'h-5 w-5' : 'h-6 w-6'} />
            </Button>
        </div>
    );
}
