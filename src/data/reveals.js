/**
 * Reveal texts: 23 entries for 22 distros (Pop!_OS has one under Serene
 * and another under Dreamer).
 *
 * Shape per entry:
 *   {
 *     distroName: string,             // display name (not translated)
 *     nature: string,                 // one of the 6 natures (English ID)
 *     path: string,                   // tie-break path
 *     natureText: { en, es },         // 2-3 sentences about the person
 *     revealText: { en, es },         // 1-2 sentences linking person to distro
 *   }
 */

export const reveals = {
  // ─── Restless ───────────────────────────────────────────────────────────
  arch: {
    distroName: 'Arch Linux',
    nature: 'Restless',
    path: 'forward',
    natureText: {
      en:
        "You're someone who needs to touch things to understand them. " +
        "Breaking them counts too. Where others see a system that works, " +
        "you see a chance to improve it, to make it more yours, to know " +
        "why it does what it does. You're not satisfied with \"it runs " +
        "fine\" — you want to know exactly how it runs.",
      es:
        "Eres alguien que necesita tocar las cosas para entenderlas. " +
        "Romperlas también cuenta. Donde otros ven un sistema que funciona, " +
        "tú ves una oportunidad de mejorarlo, de hacerlo más tuyo, de saber " +
        "por qué hace lo que hace. No te conformas con que algo «vaya bien»: " +
        "quieres saber exactamente cómo va.",
    },
    revealText: {
      en:
        "Your distro is Arch Linux. It doesn't welcome you with a red " +
        "carpet or promise that anything will be easy. It hands you an " +
        "empty terminal and says: \"build it yourself.\" And that, deep " +
        "down, is what you wanted.",
      es:
        "Tu distro es Arch Linux. No te recibe con una alfombra roja ni te " +
        "promete que todo será fácil. Te da una terminal vacía y te dice: " +
        "«constrúyela tú». Y eso, en el fondo, es lo que querías.",
    },
  },
  gentoo: {
    distroName: 'Gentoo',
    nature: 'Restless',
    path: 'plan',
    natureText: {
      en:
        "You're someone who enjoys the process more than the result. You " +
        "like to understand each piece before placing it, read every " +
        "manual, plan before acting. The time it takes to do something " +
        "well doesn't scare you — what scares you is doing it without " +
        "knowing why. For you, patience and curiosity are the same thing.",
      es:
        "Eres alguien que disfruta el proceso más que el resultado. Te " +
        "gusta entender cada pieza antes de colocarla, leer cada manual, " +
        "planificar antes de actuar. No te asusta el tiempo que cuesta " +
        "hacer algo bien: te asusta hacerlo sin saber por qué. Para ti, " +
        "la paciencia y la curiosidad son la misma cosa.",
    },
    revealText: {
      en:
        "Your distro is Gentoo. It hands you nothing finished — only the " +
        "tools, and an invitation to forge it yourself, piece by piece. " +
        "What others call excess, you call precision.",
      es:
        "Tu distro es Gentoo. No te entrega nada hecho: te entrega las " +
        "herramientas y te invita a forjarlo tú mismo, pieza a pieza. " +
        "Lo que otros consideran exceso, tú lo llamas precisión.",
    },
  },
  endeavouros: {
    distroName: 'EndeavourOS',
    nature: 'Restless',
    path: 'pace',
    natureText: {
      en:
        "You're someone who likes to tinker, but you have nothing to " +
        "prove. You want to explore your own way, without anyone marking " +
        "the path for you — but you also have no desire to fight every " +
        "detail. You know what you want: freedom without unnecessary " +
        "friction.",
      es:
        "Eres alguien al que le gusta trastear, pero no tienes nada que " +
        "demostrar. Quieres explorar a tu manera, sin que nadie te marque " +
        "el camino, pero tampoco tienes ganas de pelearte con cada detalle. " +
        "Sabes lo que quieres: libertad sin fricción innecesaria.",
    },
    revealText: {
      en:
        "Your distro is EndeavourOS. It gives you the full power that " +
        "seasoned explorers enjoy, but spares you the initiation ritual. " +
        "An open door into the Arch world, without the storm.",
      es:
        "Tu distro es EndeavourOS. Te ofrece todo el poder del que " +
        "disfrutan los exploradores más curtidos, pero te ahorra el " +
        "ritual de iniciación. Una puerta abierta al mundo Arch, sin la " +
        "tormenta.",
    },
  },

  // ─── Serene ─────────────────────────────────────────────────────────────
  pop_os_serene: {
    distroName: 'Pop!_OS',
    nature: 'Serene',
    path: 'forward',
    natureText: {
      en:
        "You're someone who dives in. You want a tool that matches your " +
        "stride, one that won't slow you down when you mean business. It " +
        "doesn't matter if it's for creating, for playing, or for hard " +
        "work — what you ask is that it be ready when you are.",
      es:
        "Eres alguien que se lanza. Quieres una herramienta que esté a tu " +
        "altura, que no te frene cuando vas en serio. Te da igual si es " +
        "para crear, para jugar o para trabajar duro: lo que pides es que " +
        "esté lista cuando tú lo estés.",
    },
    revealText: {
      en:
        "Your distro is Pop!_OS. Made for people who don't want to ask " +
        "the system if they can do something — they just do it. Power " +
        "well-wrapped, ready to take flight.",
      es:
        "Tu distro es Pop!_OS. Pensada para gente que no quiere " +
        "preguntarle al sistema si puede hacer algo, sino simplemente " +
        "hacerlo. Potencia bien envuelta, lista para volar.",
    },
  },
  manjaro: {
    distroName: 'Manjaro',
    nature: 'Serene',
    path: 'plan',
    natureText: {
      en:
        "You're someone who wants the best of both worlds. The modern " +
        "draws you in — what's alive and evolving — but you don't want " +
        "to gamble every week. You seek balance between the new and the " +
        "safe, between control and a net to catch you if something twists.",
      es:
        "Eres alguien que quiere lo mejor de dos mundos. Te atrae lo " +
        "moderno, lo que está vivo y evoluciona, pero no quieres " +
        "jugártela cada semana. Buscas el equilibrio entre lo nuevo y lo " +
        "seguro, entre el control y la red que te sostiene si algo se " +
        "tuerce.",
    },
    revealText: {
      en:
        "Your distro is Manjaro. It gives you access to a world in " +
        "constant motion — but filtered, tested, presented with calm. " +
        "Adventure, yes, but with a map in hand.",
      es:
        "Tu distro es Manjaro. Te da acceso a un mundo en constante " +
        "cambio, pero filtrado, probado, presentado con calma. La " +
        "aventura, sí, pero con un mapa en la mano.",
    },
  },
  ubuntu: {
    distroName: 'Ubuntu',
    nature: 'Serene',
    path: 'help',
    natureText: {
      en:
        "You're someone who likes things to just work without having to " +
        "think about them too much. You value your time, your peace of " +
        "mind, and the sense that if anything gets tangled, there'll be " +
        "someone on the other side who knows how to help. You have " +
        "nothing to prove — you just want to live your life.",
      es:
        "Eres alguien al que le gusta que las cosas funcionen sin tener " +
        "que pensarlas demasiado. Valoras tu tiempo, tu tranquilidad, y " +
        "la sensación de que, si algo se complica, habrá alguien al otro " +
        "lado que sepa cómo ayudarte. No tienes nada que demostrar: lo " +
        "que quieres es vivir tu vida.",
    },
    revealText: {
      en:
        "Your distro is Ubuntu. The most familiar, the most accompanied, " +
        "the one with an answer for almost any question. Not the rarest " +
        "or the most brilliant — and that's precisely why so many hands " +
        "reach out to you.",
      es:
        "Tu distro es Ubuntu. La más conocida, la más acompañada, la " +
        "que tiene una respuesta para casi cualquier pregunta. No es la " +
        "más rara ni la más brillante, y precisamente por eso es la que " +
        "más manos te tienden.",
    },
  },
  mint: {
    distroName: 'Linux Mint',
    nature: 'Serene',
    path: 'pace',
    natureText: {
      en:
        "You're someone who delights in the familiar. You don't chase " +
        "the latest, and you have no interest in proving how much you " +
        "know. What you want is to feel at home — for things to be where " +
        "you expect, to work how you expect, for your day to flow " +
        "without jolts. That, for you, is freedom.",
      es:
        "Eres alguien que disfruta de lo familiar. No persigues lo " +
        "último, ni te interesa demostrar cuánto sabes. Lo que quieres " +
        "es sentirte en casa: que las cosas estén donde esperas, que " +
        "funcionen como esperas, que tu día fluya sin sobresaltos. Eso, " +
        "para ti, es libertad.",
    },
    revealText: {
      en:
        "Your distro is Linux Mint. It greets you with a welcoming smile, " +
        "no strange questions, no asking you to learn a new language. " +
        "It's the comfortable armchair after a long day.",
      es:
        "Tu distro es Linux Mint. Te recibe con una sonrisa de bienvenida, " +
        "sin preguntas raras, sin pedirte que aprendas un idioma nuevo. " +
        "Es el sillón cómodo después de un día largo.",
    },
  },

  // ─── Stoic ──────────────────────────────────────────────────────────────
  slackware: {
    distroName: 'Slackware',
    nature: 'Stoic',
    path: 'forward',
    natureText: {
      en:
        "You're someone who prefers the old done well to the new done " +
        "halfway. What's in fashion doesn't interest you — what's still " +
        "here thirty years later does. There's something in you that " +
        "respects slow methods, long roads, things that were done once " +
        "and done right.",
      es:
        "Eres alguien que prefiere lo viejo bien hecho a lo nuevo a " +
        "medias. No te interesa lo que está de moda: te interesa lo que " +
        "sigue ahí treinta años después. Hay algo en ti que respeta los " +
        "métodos lentos, los caminos largos, las cosas que se hicieron " +
        "una vez y bien.",
    },
    revealText: {
      en:
        "Your distro is Slackware. The oldest of those still alive. It " +
        "hasn't changed much, and it doesn't need to. For those who " +
        "understand it, that's exactly its virtue.",
      es:
        "Tu distro es Slackware. La más antigua de todas las que siguen " +
        "vivas. No ha cambiado mucho, y no necesita hacerlo. Para los " +
        "que la entienden, esa es exactamente su virtud.",
    },
  },
  debian: {
    distroName: 'Debian',
    nature: 'Stoic',
    path: 'plan',
    natureText: {
      en:
        "You're someone who values what has stood the test of time. " +
        "Trends don't impress you, and you're in no rush to try the " +
        "latest. For you, what matters is coherence — that what works " +
        "today will keep working tomorrow. That quiet faithfulness is " +
        "who you are.",
      es:
        "Eres alguien que valora lo que ha pasado la prueba del tiempo. " +
        "No te impresionan las modas, ni te corre prisa probar lo último. " +
        "Para ti, lo importante es la coherencia: que lo que hoy funciona, " +
        "mañana siga funcionando. Esa fidelidad silenciosa es tu forma " +
        "de ser.",
    },
    revealText: {
      en:
        "Your distro is Debian. One of the oldest, one of the most " +
        "respected, one of the quietest. It promises nothing it can't " +
        "deliver, and that's why it's been delivering for decades.",
      es:
        "Tu distro es Debian. Una de las más antiguas, una de las más " +
        "respetadas, una de las que menos ruido hace. No promete nada " +
        "que no pueda cumplir, y por eso lleva décadas cumpliéndolo.",
    },
  },
  opensuse_leap: {
    distroName: 'openSUSE Leap',
    nature: 'Stoic',
    path: 'help',
    natureText: {
      en:
        "You're someone who trusts what's well-built. You like that " +
        "behind things there's order — an institution, a steady hand " +
        "that takes care of them. You don't need everything to be " +
        "spectacular — you need it to be serious, rigorous, dependable. " +
        "That seriousness calms you.",
      es:
        "Eres alguien que confía en lo que está bien construido. Te " +
        "gusta que detrás de las cosas haya un orden, una institución, " +
        "una mano firme que las cuide. No necesitas que todo sea " +
        "espectacular: necesitas que sea serio, riguroso, fiable. Esa " +
        "seriedad te tranquiliza.",
    },
    revealText: {
      en:
        "Your distro is openSUSE Leap. Discreet, solid, made with the " +
        "calm of those who have been doing things right for a long time. " +
        "It doesn't shout, it doesn't draw attention — it simply holds.",
      es:
        "Tu distro es openSUSE Leap. Discreta, sólida, hecha con la " +
        "calma de quien lleva mucho tiempo haciendo las cosas bien. No " +
        "grita, no llama la atención, simplemente sostiene.",
    },
  },
  mx_linux: {
    distroName: 'MX Linux',
    nature: 'Stoic',
    path: 'pace',
    natureText: {
      en:
        "You're someone who values what lasts. Noise bothers you — " +
        "novelty for novelty's sake, things that change just to look " +
        "new. You prefer what endures, what's still there tomorrow, " +
        "what asks nothing from you in return. You know patience isn't " +
        "slowness — it's choosing well.",
      es:
        "Eres alguien que valora lo que dura. Te molesta el ruido, las " +
        "novedades por las novedades, las cosas que cambian solo para " +
        "parecer nuevas. Prefieres lo que aguanta, lo que sigue ahí " +
        "mañana, lo que no te pide nada a cambio. Sabes que la paciencia " +
        "no es lentitud: es elegir bien.",
    },
    revealText: {
      en:
        "Your distro is MX Linux. No rush, no fanfare, no asking you to " +
        "become someone else to use it. It does what it promised, and " +
        "it does it every day. For you, that's already enough.",
      es:
        "Tu distro es MX Linux. Sin prisa, sin alardes, sin pedirte que " +
        "te conviertas en otra persona para usarla. Hace lo que prometió " +
        "hacer, y lo hace cada día. Eso, para ti, ya es suficiente.",
    },
  },

  // ─── Dreamer ────────────────────────────────────────────────────────────
  garuda: {
    distroName: 'Garuda Linux',
    nature: 'Dreamer',
    path: 'forward',
    natureText: {
      en:
        "You're someone who isn't satisfied with something just working " +
        "— you want it to make you feel something too. You like the " +
        "spectacle, the detail, the sense of holding something alive in " +
        "your hands. For you, aesthetics isn't decoration — it's energy.",
      es:
        "Eres alguien que no se conforma con que algo funcione: quiere " +
        "que también te haga sentir algo. Te gusta el espectáculo, el " +
        "detalle, la sensación de tener entre las manos algo que está " +
        "vivo. Para ti, la estética no es decoración: es energía.",
    },
    revealText: {
      en:
        "Your distro is Garuda Linux. Striking, intense, unafraid to " +
        "stand out. Made for those who prefer a system that seems to " +
        "have character, not one that apologizes for existing.",
      es:
        "Tu distro es Garuda Linux. Llamativa, intensa, sin miedo a " +
        "destacar. Hecha para los que prefieren un sistema que parezca " +
        "tener carácter, no uno que se disculpe por existir.",
    },
  },
  pop_os_dreamer: {
    distroName: 'Pop!_OS',
    nature: 'Dreamer',
    path: 'plan',
    natureText: {
      en:
        "You're someone who puts care into how they work. You like " +
        "having an environment that's worthy of what you're about to " +
        "do, where everything is where it should be. Aesthetics matter " +
        "to you — not on a whim, but because you know a well-designed " +
        "space makes you better.",
      es:
        "Eres alguien que pone cuidado en cómo trabaja. Te gusta tener " +
        "un entorno que esté a la altura de lo que vas a hacer, donde " +
        "cada cosa esté donde tiene que estar. La estética te importa, " +
        "pero no por capricho: porque sabes que un espacio bien diseñado " +
        "te hace mejor.",
    },
    revealText: {
      en:
        "Your distro is Pop!_OS. Clean, thought through to the detail, " +
        "with an identity of its own that shows in every corner. A tool " +
        "made by people who care about the people who use it.",
      es:
        "Tu distro es Pop!_OS. Limpia, pensada al detalle, con una " +
        "identidad propia que se nota en cada esquina. Una herramienta " +
        "hecha por gente que se preocupa por la gente que la usa.",
    },
  },
  zorin: {
    distroName: 'Zorin OS',
    nature: 'Dreamer',
    path: 'help',
    natureText: {
      en:
        "You're someone who wants beauty without giving up the familiar. " +
        "You like things to be intuitive, to trust what you see, to find " +
        "that what's new doesn't ask you to start over. You're after " +
        "beauty, yes — but also a friendly hand.",
      es:
        "Eres alguien que quiere lo bonito sin tener que renunciar a lo " +
        "familiar. Te gusta cuando las cosas son intuitivas, cuando " +
        "puedes confiar en lo que ves, cuando lo nuevo no te exige " +
        "empezar de cero. Buscas belleza, sí, pero también una mano " +
        "amiga.",
    },
    revealText: {
      en:
        "Your distro is Zorin OS. Polished, accessible, designed so that " +
        "change feels like a gift, not a test. Gentle on the eyes, " +
        "gentle to use.",
      es:
        "Tu distro es Zorin OS. Cuidada, accesible, pensada para que el " +
        "cambio se sienta como un regalo, no como una prueba. Suave a " +
        "la vista, suave al uso.",
    },
  },
  elementary: {
    distroName: 'elementary OS',
    nature: 'Dreamer',
    path: 'pace',
    natureText: {
      en:
        "You're someone for whom beautiful is also functional. Careless " +
        "details bother you — things poorly thought out, gratuitous " +
        "ugliness. For you, a well-designed tool isn't a luxury — it's " +
        "respect. Respect for whoever uses it, and for the time spent " +
        "with it.",
      es:
        "Eres alguien para quien lo bonito también es funcional. Te " +
        "molestan los detalles descuidados, las cosas mal pensadas, lo " +
        "feo gratuito. Para ti, una herramienta bien diseñada no es un " +
        "lujo: es respeto. Respeto por quien la usa y por el tiempo que " +
        "pasa con ella.",
    },
    revealText: {
      en:
        "Your distro is elementary OS. Cared for, coherent, made with " +
        "the conviction that every pixel matters. Not the most powerful " +
        "or the most flexible — but the kindest to you.",
      es:
        "Tu distro es elementary OS. Cuidada, coherente, hecha con la " +
        "convicción de que cada píxel importa. No es la más potente ni " +
        "la más flexible: es la más amable contigo.",
    },
  },

  // ─── Cautious ───────────────────────────────────────────────────────────
  tails: {
    distroName: 'Tails',
    nature: 'Cautious',
    path: 'forward',
    natureText: {
      en:
        "You're someone who understands there are moments when no trace " +
        "can be left. Fear doesn't paralyze you — awareness moves you. " +
        "You know there are situations that demand not being there, not " +
        "appearing, not being recorded. And when the moment comes, you " +
        "don't hesitate.",
      es:
        "Eres alguien que entiende que hay momentos en los que no se " +
        "puede dejar rastro. No te paraliza el miedo: te mueve la " +
        "conciencia. Sabes que hay situaciones que exigen no estar, no " +
        "figurar, no quedar registrado. Y cuando llega el momento, no " +
        "dudas.",
    },
    revealText: {
      en:
        "Your distro is Tails. It lives on a USB stick and dies when " +
        "you power down. It saves nothing, remembers nothing, betrays " +
        "nothing. Made for moments when existing in silence is the only " +
        "way to exist.",
      es:
        "Tu distro es Tails. Vive en una memoria USB y muere cuando " +
        "apagas el equipo. No guarda, no recuerda, no delata. Hecha para " +
        "los momentos en los que existir en silencio es la única forma " +
        "de existir.",
    },
  },
  qubes: {
    distroName: 'Qubes OS',
    nature: 'Cautious',
    path: 'plan',
    natureText: {
      en:
        "You're someone who understands that trust isn't given away. " +
        "You read the fine print. You notice who's watching through the " +
        "window before you speak. You've learned, maybe the hard way, " +
        "that giving information is losing it — and you'd rather own " +
        "less than own things you don't control. That doesn't make you " +
        "paranoid. It makes you awake.",
      es:
        "Eres alguien que entiende que la confianza no se regala. Lees " +
        "la letra pequeña. Te das cuenta de quién mira por la ventana " +
        "antes de hablar. Has aprendido, quizá por las malas, que dar " +
        "información es perderla, y prefieres tener menos cosas a tener " +
        "cosas que no controlas. Eso no te hace paranoico: te hace " +
        "despierto.",
    },
    revealText: {
      en:
        "Your distro is Qubes OS. It doesn't ask you to trust it — it " +
        "teaches you not to need to trust anyone. Everything in its " +
        "place, every risk in its box. Finally, someone who understands.",
      es:
        "Tu distro es Qubes OS. No te pide que confíes en ella: te " +
        "enseña a no necesitar confiar en nadie. Cada cosa en su sitio, " +
        "cada riesgo en su caja. Por fin, alguien que entiende.",
    },
  },
  parrot: {
    distroName: 'Parrot Home',
    nature: 'Cautious',
    path: 'help',
    natureText: {
      en:
        "You're someone who cares about privacy, but you don't want to " +
        "wall yourself off from the world to protect it. You're after " +
        "balance — being protected without turning every daily gesture " +
        "into a clandestine operation. You want tools, not walls.",
      es:
        "Eres alguien al que le importa su privacidad, pero no quieres " +
        "aislarte del mundo para protegerla. Buscas un equilibrio: estar " +
        "protegido sin convertir cada gesto cotidiano en una operación " +
        "clandestina. Quieres herramientas, no muros.",
    },
    revealText: {
      en:
        "Your distro is Parrot Home. It gives you the defenses you need " +
        "without asking you to give up everything else. Discreet, " +
        "complete, ready for real life.",
      es:
        "Tu distro es Parrot Home. Te da las defensas que necesitas sin " +
        "pedirte que renuncies a lo demás. Discreta, completa, lista " +
        "para la vida real.",
    },
  },
  whonix: {
    distroName: 'Whonix',
    nature: 'Cautious',
    path: 'pace',
    natureText: {
      en:
        "You're someone who has learned to move without making noise. " +
        "You don't hide out of fear — you go unseen out of conviction. " +
        "You know anonymity isn't a luxury, it's a discipline, and it's " +
        "built slowly, layer by layer, with no shortcuts.",
      es:
        "Eres alguien que ha aprendido a moverse sin hacer ruido. No " +
        "buscas esconderte por miedo: buscas no ser visto por convicción. " +
        "Sabes que el anonimato no es un lujo, es una disciplina, y que " +
        "se construye despacio, capa a capa, sin atajos.",
    },
    revealText: {
      en:
        "Your distro is Whonix. Designed so your trail fades along the " +
        "way, with no apparent effort. A shadow carefully cast.",
      es:
        "Tu distro es Whonix. Diseñada para que tu rastro se desvanezca " +
        "en el camino, sin esfuerzo aparente. Una sombra cuidadosamente " +
        "proyectada.",
    },
  },

  // ─── Curious ────────────────────────────────────────────────────────────
  cachyos: {
    distroName: 'CachyOS',
    nature: 'Curious',
    path: 'forward',
    natureText: {
      en:
        "You're someone interested in squeezing what you have. You're " +
        "not satisfied with something just working — you want to know " +
        "how much it can give. You like understanding from the inside, " +
        "optimizing, watching theory translate into something real and " +
        "measurable. The good leaves you wanting more if you believe it " +
        "can be better.",
      es:
        "Eres alguien al que le interesa exprimir lo que tiene. No te " +
        "conformas con que algo funcione: quieres saber cuánto puede " +
        "dar. Te gusta entender por dentro, optimizar, ver cómo la " +
        "teoría se traduce en algo real y medible. Lo bueno te sabe a " +
        "poco si crees que puede ser mejor.",
    },
    revealText: {
      en:
        "Your distro is CachyOS. Built from the ground up for " +
        "performance, no apologies, no comfortable compromises. For " +
        "those who believe every millisecond matters.",
      es:
        "Tu distro es CachyOS. Construida desde cero pensando en el " +
        "rendimiento, sin disculpas, sin compromisos cómodos. Para " +
        "quienes creen que cada milisegundo importa.",
    },
  },
  opensuse_tumbleweed: {
    distroName: 'openSUSE Tumbleweed',
    nature: 'Curious',
    path: 'plan',
    natureText: {
      en:
        "You're someone who wants the latest, but not at any price. You " +
        "like change, you like the edge — but you despise sloppiness. " +
        "For you, innovation without method isn't innovation. It's " +
        "noise. You want to live on the edge, but with a net.",
      es:
        "Eres alguien que quiere lo último, pero no a cualquier precio. " +
        "Te gusta el cambio, te gusta la frontera, pero detestas la " +
        "chapuza. Para ti, la innovación sin método no es innovación: " +
        "es ruido. Buscas vivir en el filo, pero con red.",
    },
    revealText: {
      en:
        "Your distro is openSUSE Tumbleweed. Constantly up to date, yet " +
        "validated with an almost obsessive rigor. The adventure for " +
        "those who can't tolerate recklessness.",
      es:
        "Tu distro es openSUSE Tumbleweed. Constantemente al día, pero " +
        "validada con un rigor casi obsesivo. La aventura para quienes " +
        "no toleran la imprudencia.",
    },
  },
  fedora: {
    distroName: 'Fedora',
    nature: 'Curious',
    path: 'help',
    natureText: {
      en:
        "You're someone who likes to stay awake. New things interest " +
        "you — not as fashion, but to understand where the world is " +
        "heading. You want to learn, but not alone — you like knowing " +
        "there are others like you asking the same questions.",
      es:
        "Eres alguien al que le gusta estar despierto. Te interesan las " +
        "cosas nuevas, no por moda sino por entender hacia dónde va el " +
        "mundo. Quieres aprender, pero sin sentirte solo en el camino: " +
        "te gusta saber que hay otros como tú haciendo las mismas " +
        "preguntas.",
    },
    revealText: {
      en:
        "Your distro is Fedora. Always a step ahead, but surrounded by " +
        "serious people, backed by a community that also wants to " +
        "understand. The new, yes — but done with care.",
      es:
        "Tu distro es Fedora. Siempre un paso por delante, pero rodeada " +
        "de gente seria, con el respaldo de una comunidad que también " +
        "quiere entender. Lo nuevo, sí, pero hecho con cabeza.",
    },
  },
  nixos: {
    distroName: 'NixOS',
    nature: 'Curious',
    path: 'pace',
    natureText: {
      en:
        "You're someone fascinated by ideas that change the way things " +
        "are done. You're not satisfied with something just working — " +
        "you want to know if there's a better way to think about it " +
        "from scratch. You love elegant solutions, the ones that feel " +
        "like a revelation.",
      es:
        "Eres alguien fascinado por las ideas que cambian la forma de " +
        "hacer las cosas. No te conformas con que algo funcione: quieres " +
        "saber si hay una manera mejor de pensarlo entero. Te gustan las " +
        "soluciones elegantes, las que se sienten como una revelación.",
    },
    revealText: {
      en:
        "Your distro is NixOS. It isn't a distro — it's a different way " +
        "of thinking about what a system can be. For those who, above " +
        "all, enjoy having their mind blown.",
      es:
        "Tu distro es NixOS. No es una distro: es una forma distinta de " +
        "pensar lo que un sistema puede ser. Para los que disfrutan, " +
        "sobre todo, de que se les vuele la cabeza.",
    },
  },
};
