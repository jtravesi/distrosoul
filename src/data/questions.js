/**
 * Question pool for distrosoul.
 *
 * Shape:
 *   {
 *     id: string,
 *     text: { en: string, es: string },
 *     options: [
 *       { text: { en, es }, points: { Restless?, Serene?, ... } },
 *       ...four total
 *     ]
 *   }
 *
 * Pool of 19 questions; 8 are picked at random per run (see
 * lib/selectQuestions.js) then the fixed final question.
 * Nature identifiers stay in English; only display text is bilingual.
 */

export const questions = [
  {
    id: 'q1_flatpack',
    text: {
      en:
        "Someone gives you flat-pack furniture as a gift. You open the box " +
        "and find 200 pieces, a manual in Chinese, and no instructions in " +
        "your language. What do you do?",
      es:
        "Te regalan un mueble por montar. Abres la caja y dentro encuentras " +
        "200 piezas, un manual en chino y ninguna instrucción en tu idioma. " +
        "¿Qué haces?",
    },
    options: [
      {
        text: {
          en: "I start assembling it by eye. I'll figure it out as I go.",
          es: "Empiezo a montarlo a ojo, ya iré viendo.",
        },
        points: { Restless: 2, Curious: 1 },
      },
      {
        text: {
          en: "I look for a tutorial on YouTube.",
          es: "Busco un tutorial en YouTube.",
        },
        points: { Serene: 1, Dreamer: 1 },
      },
      {
        text: {
          en: "I read the whole manual before touching anything, even if it's in Chinese.",
          es: "Leo el manual entero antes de tocar nada, aunque sea en chino.",
        },
        points: { Curious: 2 },
      },
      {
        text: {
          en: "I leave it in a corner until I have a quiet day.",
          es: "Lo dejo en una esquina hasta que tenga un día tranquilo.",
        },
        points: { Serene: 2 },
      },
    ],
  },
  {
    id: 'q2_friends_describe',
    text: {
      en: "Your friends would describe you as…",
      es: "Tus amigos te describirían como…",
    },
    options: [
      {
        text: {
          en: "The one who always tries the weird new place.",
          es: "La persona que siempre prueba el sitio raro nuevo.",
        },
        points: { Restless: 1, Curious: 1 },
      },
      {
        text: {
          en: "The one you can rely on no matter what.",
          es: "La persona en la que se puede confiar pase lo que pase.",
        },
        points: { Stoic: 2, Serene: 1 },
      },
      {
        text: {
          en: "The one with the best taste in the group.",
          es: "La persona con mejor gusto del grupo.",
        },
        points: { Dreamer: 2 },
      },
      {
        text: {
          en: "The one who notices things others miss.",
          es: "La persona que se da cuenta de las cosas que los demás no ven.",
        },
        points: { Cautious: 1, Curious: 1 },
      },
    ],
  },
  {
    id: 'q3_unlabeled_box',
    text: {
      en: "You find an unlabeled box at your front door. What do you do?",
      es: "Encuentras una caja sin etiqueta en la entrada de tu casa. ¿Qué haces?",
    },
    options: [
      {
        text: {
          en: "I open it right away. Curiosity wins.",
          es: "La abro inmediatamente, ¡curiosidad!",
        },
        points: { Restless: 1, Curious: 2 },
      },
      {
        text: {
          en: "I check for a sender or any clue before touching it.",
          es: "Miro si tiene remitente o algún indicio antes de tocarla.",
        },
        points: { Cautious: 2 },
      },
      {
        text: {
          en: "I bring it inside and open it calmly.",
          es: "La meto dentro y la abro con calma.",
        },
        points: { Serene: 2 },
      },
      {
        text: {
          en: "I call someone so I'm not alone when I open it.",
          es: "Llamo a alguien para abrirla con compañía.",
        },
        points: { Cautious: 1, Serene: 1 },
      },
    ],
  },
  {
    id: 'q4_new_city_dinner',
    text: {
      en:
        "You're traveling in a new city. It's dinner time. How do you pick " +
        "a restaurant?",
      es:
        "Estás de viaje en una ciudad nueva. Es la hora de cenar. ¿Cómo eliges " +
        "restaurante?",
    },
    options: [
      {
        text: {
          en: "I walk until something catches my eye.",
          es: "Camino hasta que algo me llame la atención.",
        },
        points: { Restless: 1, Dreamer: 1 },
      },
      {
        text: {
          en: "I ask a local.",
          es: "Pregunto a un local.",
        },
        points: { Serene: 2 },
      },
      {
        text: {
          en: "I read reviews carefully and pick the best by my own criteria.",
          es: "Reviso reseñas con calma y elijo el mejor según mis criterios.",
        },
        points: { Curious: 1, Stoic: 1 },
      },
      {
        text: {
          en: "I go to the place that looks best from the outside.",
          es: "Voy al sitio que mejor pinta tenga por fuera.",
        },
        points: { Dreamer: 2 },
      },
    ],
  },
  {
    id: 'q5_gift',
    text: {
      en: "What kind of gift do you prefer to receive?",
      es: "¿Qué tipo de regalo prefieres recibir?",
    },
    options: [
      {
        text: {
          en: "Something handmade, even if it's imperfect.",
          es: "Algo hecho a mano, aunque sea imperfecto.",
        },
        points: { Restless: 2, Dreamer: 1 },
      },
      {
        text: {
          en: "Something useful you'll actually use every day.",
          es: "Algo útil que vayas a usar todos los días.",
        },
        points: { Stoic: 2, Serene: 1 },
      },
      {
        text: {
          en: "An experience: a class, a trip, a special dinner.",
          es: "Una experiencia: un curso, un viaje, una cena especial.",
        },
        points: { Curious: 1, Dreamer: 1 },
      },
      {
        text: {
          en: "Something that respects your privacy: no accounts, no subscriptions, no connected devices.",
          es: "Algo que respete tu privacidad: nada de cuentas, suscripciones ni dispositivos conectados.",
        },
        points: { Cautious: 2 },
      },
    ],
  },
  {
    id: 'q6_car_advice',
    text: {
      en: "A friend asks for advice about buying a car. What do you tell them?",
      es: "Un amigo te pide consejo para comprarse un coche. ¿Qué le dices?",
    },
    options: [
      {
        text: {
          en: "To test-drive it and see how it feels behind the wheel.",
          es: "Que se lo pruebe y vea cómo se siente al conducirlo.",
        },
        points: { Dreamer: 1, Restless: 1 },
      },
      {
        text: {
          en: "To check reliability and maintenance cost over ten years.",
          es: "Que mire fiabilidad y coste de mantenimiento a 10 años.",
        },
        points: { Stoic: 2 },
      },
      {
        text: {
          en: "To compare models in a spreadsheet with all the data.",
          es: "Que compare modelos en una hoja de cálculo con todos los datos.",
        },
        points: { Curious: 2 },
      },
      {
        text: {
          en: "To ask people who already own that model.",
          es: "Que pregunte a gente que tenga ese modelo.",
        },
        points: { Serene: 2 },
      },
    ],
  },
  {
    id: 'q7_party',
    text: {
      en: "You're at a party where you barely know anyone. What do you do?",
      es: "Estás en una fiesta donde no conoces a casi nadie. ¿Qué haces?",
    },
    options: [
      {
        text: {
          en: "I dive in and talk to the first person I see.",
          es: "Me lanzo a hablar con el primero que veo.",
        },
        points: { Restless: 1, Serene: 1 },
      },
      {
        text: {
          en: "I stay in a corner observing before I make a move.",
          es: "Me quedo en una esquina observando antes de moverme.",
        },
        points: { Cautious: 2, Curious: 1 },
      },
      {
        text: {
          en: "I find the host and introduce myself.",
          es: "Busco a la persona que invita y me presento.",
        },
        points: { Serene: 2 },
      },
      {
        text: {
          en: "I take it in: the decor, the music. I just enjoy the atmosphere.",
          es: "Aprovecho para ver la decoración y la música, me gusta el ambiente.",
        },
        points: { Dreamer: 2 },
      },
    ],
  },
  {
    id: 'q8_learning',
    text: {
      en: "How do you prefer to learn something new?",
      es: "¿Cómo prefieres aprender algo nuevo?",
    },
    options: [
      {
        text: {
          en: "By diving in and learning from my mistakes.",
          es: "Lanzándome y aprendiendo de los errores.",
        },
        points: { Restless: 2 },
      },
      {
        text: {
          en: "With a well-structured course, step by step.",
          es: "Con un curso bien estructurado paso a paso.",
        },
        points: { Serene: 1, Stoic: 1 },
      },
      {
        text: {
          en: "By reading everything I can on the subject before I start.",
          es: "Leyendo todo lo que pueda sobre el tema antes de empezar.",
        },
        points: { Curious: 2 },
      },
      {
        text: {
          en: "With someone who already knows, teaching me in person.",
          es: "Con alguien que ya sepa, que me lo enseñe en persona.",
        },
        points: { Serene: 1, Dreamer: 1 },
      },
    ],
  },
  {
    id: 'q9_movie',
    text: {
      en: "You're picking a movie for a solo night in. What kind do you go for?",
      es: "Te toca elegir película para una noche tú solo. ¿Qué tipo eliges?",
    },
    options: [
      {
        text: {
          en: "Something new and experimental that nobody's seen.",
          es: "Algo nuevo y experimental que nadie haya visto.",
        },
        points: { Restless: 1, Curious: 1 },
      },
      {
        text: {
          en: "The one I've seen ten times that never lets me down.",
          es: "Esa que ya he visto diez veces y nunca falla.",
        },
        points: { Stoic: 2 },
      },
      {
        text: {
          en: "Something visually stunning. The plot doesn't matter.",
          es: "Una visualmente impresionante, da igual la trama.",
        },
        points: { Dreamer: 2 },
      },
      {
        text: {
          en: "A documentary about something I've always wanted to understand.",
          es: "Un documental sobre algo que siempre quise entender.",
        },
        points: { Curious: 2 },
      },
    ],
  },
  {
    id: 'q10_important_message',
    text: {
      en:
        "You've just finished writing an important message. Before sending " +
        "it…",
      es:
        "Estás escribiendo un mensaje importante. Lo terminas y antes de " +
        "enviarlo…",
    },
    options: [
      {
        text: {
          en: "I hit send without rereading. Done.",
          es: "Le doy a enviar sin releer, ya está.",
        },
        points: { Restless: 2 },
      },
      {
        text: {
          en: "I read it once to catch any typos.",
          es: "Lo releo una vez para que no haya erratas.",
        },
        points: { Serene: 2 },
      },
      {
        text: {
          en: "I read it several times, thinking about how it will land.",
          es: "Lo releo varias veces pensando cómo lo recibirá.",
        },
        points: { Cautious: 2, Dreamer: 1 },
      },
      {
        text: {
          en: "I save it as a draft and come back later with a fresh mind.",
          es: "Lo dejo en borrador y vuelvo más tarde con la mente fresca.",
        },
        points: { Stoic: 1, Curious: 1 },
      },
    ],
  },
  {
    id: 'q11_attractive_trait',
    text: {
      en: "What do you find most attractive in a person?",
      es: "¿Qué te parece más atractivo en una persona?",
    },
    options: [
      {
        text: {
          en: "Having their own strange ideas.",
          es: "Que tenga ideas raras y propias.",
        },
        points: { Restless: 1, Curious: 1 },
      },
      {
        text: {
          en: "Being reliable. Being there.",
          es: "Que sea de fiar, que esté ahí.",
        },
        points: { Stoic: 2, Serene: 1 },
      },
      {
        text: {
          en: "Having style: caring about the details.",
          es: "Que tenga estilo, que cuide los detalles.",
        },
        points: { Dreamer: 2 },
      },
      {
        text: {
          en: "Respecting your space and not asking too much.",
          es: "Que respete tu espacio y no pregunte de más.",
        },
        points: { Cautious: 2 },
      },
    ],
  },
  {
    id: 'q12_found_money',
    text: {
      en: "You find a €50 bill on the street. What do you do?",
      es: "Encuentras un billete de 50€ en la calle. ¿Qué haces?",
    },
    options: [
      {
        text: {
          en: "I keep it. Lucky me.",
          es: "Me lo quedo, suerte mía.",
        },
        points: { Restless: 2, Serene: 1 },
      },
      {
        text: {
          en: "I look around in case someone's searching for it.",
          es: "Miro alrededor por si alguien lo busca.",
        },
        points: { Stoic: 1, Serene: 1 },
      },
      {
        text: {
          en: "I leave it where it is. I don't want any trouble.",
          es: "Lo dejo donde está, no quiero líos.",
        },
        points: { Cautious: 2 },
      },
      {
        text: {
          en: "I pick it up and donate it to something I care about.",
          es: "Lo recojo y lo dono a algo que me importe.",
        },
        points: { Dreamer: 1, Curious: 1 },
      },
    ],
  },
  {
    id: 'q13_works_well',
    text: {
      en: "When something works well for you, what happens over time?",
      es: "Cuando algo te funciona bien, ¿qué pasa con el tiempo?",
    },
    options: [
      {
        text: {
          en: "I start changing things to make it better.",
          es: "Empiezo a cambiarle cosas para mejorarlo.",
        },
        points: { Restless: 2, Curious: 1 },
      },
      {
        text: {
          en: "I leave it as is, as long as it keeps working.",
          es: "Lo dejo tal cual mientras siga funcionando.",
        },
        points: { Stoic: 2, Serene: 1 },
      },
      {
        text: {
          en: "I customize it bit by bit, to make it more mine.",
          es: "Lo personalizo poco a poco para que sea más mío.",
        },
        points: { Dreamer: 2, Restless: 1 },
      },
      {
        text: {
          en: "I take care of it: clean it, keep it safe.",
          es: "Lo cuido, lo limpio, lo mantengo a salvo.",
        },
        points: { Cautious: 1, Stoic: 1 },
      },
    ],
  },
  {
    id: 'q14_bothers_most',
    text: {
      en: "What bothers you most?",
      es: "¿Qué te molesta más?",
    },
    options: [
      {
        text: {
          en: "Things that stall, that don't evolve.",
          es: "Las cosas que se quedan estancadas, que no evolucionan.",
        },
        points: { Restless: 2, Curious: 1 },
      },
      {
        text: {
          en: "Things that change for no reason, just to change.",
          es: "Las cosas que cambian sin razón, solo por cambiar.",
        },
        points: { Stoic: 2 },
      },
      {
        text: {
          en: "Things that are ugly, poorly thought out, tasteless.",
          es: "Las cosas feas, mal pensadas, sin gusto.",
        },
        points: { Dreamer: 2 },
      },
      {
        text: {
          en: "Things that ask for your data without needing to.",
          es: "Las cosas que te piden datos sin necesidad.",
        },
        points: { Cautious: 2 },
      },
    ],
  },
  {
    id: 'q15_signup_invite',
    text: {
      en:
        "Someone very friendly invites you to a new website and asks you to " +
        "create an account with your email. What do you do?",
      es:
        "Una persona muy maja te invita a un sitio web nuevo y te pide que te " +
        "crees una cuenta con tu correo. ¿Qué haces?",
    },
    options: [
      {
        text: {
          en: "I sign up. Sounds fun.",
          es: "Me apunto, suena divertido.",
        },
        points: { Serene: 1, Restless: 1 },
      },
      {
        text: {
          en: "I use a burner email I keep just for things like this.",
          es: "Uso un correo alternativo solo para estas cosas.",
        },
        points: { Cautious: 1, Curious: 1 },
      },
      {
        text: {
          en: "I look into what the site is and who runs it first.",
          es: "Investigo primero qué es el sitio y quién lo gestiona.",
        },
        points: { Cautious: 2, Stoic: 1 },
      },
      {
        text: {
          en: "I say no. I'm done creating more accounts.",
          es: "Le digo que no, paso de crear más cuentas.",
        },
        points: { Cautious: 2, Stoic: 1 },
      },
    ],
  },
  {
    id: 'q16_perfect_day_home',
    text: {
      en: "Your perfect day at home would be…",
      es: "Tu día perfecto en casa sería…",
    },
    options: [
      {
        text: {
          en: "Starting a new project I've been putting off.",
          es: "Empezar un proyecto nuevo que llevo tiempo posponiendo.",
        },
        points: { Restless: 1, Curious: 1 },
      },
      {
        text: {
          en: "Doing nothing special, just resting peacefully.",
          es: "No hacer nada especial, solo descansar tranquilo.",
        },
        points: { Stoic: 2, Serene: 1 },
      },
      {
        text: {
          en: "Rearranging and decorating some corner of the house.",
          es: "Reorganizar y decorar algún rincón.",
        },
        points: { Dreamer: 2 },
      },
      {
        text: {
          en: "Learning something new: reading, watching documentaries.",
          es: "Aprender algo nuevo, leer, ver documentales.",
        },
        points: { Curious: 2 },
      },
    ],
  },
  {
    id: 'q17_satisfying_problems',
    text: {
      en: "What kind of problems do you find most satisfying to solve?",
      es: "¿Qué tipo de problemas te resultan más satisfactorios de resolver?",
    },
    options: [
      {
        text: {
          en: "The ones that need lots of trial and error until something clicks.",
          es: "Los que requieren probar muchas cosas hasta dar con la solución.",
        },
        points: { Restless: 2 },
      },
      {
        text: {
          en: "The ones with a clear answer if you follow the steps.",
          es: "Los que tienen una respuesta clara si sigues los pasos.",
        },
        points: { Serene: 1, Stoic: 1 },
      },
      {
        text: {
          en: "The ones that demand you understand the whole system before acting.",
          es: "Los que requieren entender bien el sistema antes de actuar.",
        },
        points: { Curious: 2, Cautious: 1 },
      },
      {
        text: {
          en: "The ones that depend more on patience than on cleverness.",
          es: "Los que dependen más de paciencia que de inteligencia.",
        },
        points: { Stoic: 2 },
      },
    ],
  },
  {
    id: 'q18_house',
    text: {
      en: "If you had to live in a house, what would it be like?",
      es: "Si tuvieras que vivir en una casa, ¿cómo sería?",
    },
    options: [
      {
        text: {
          en: "A strange house, full of things I built myself.",
          es: "Una casa rara con cosas inventadas por mí.",
        },
        points: { Restless: 2, Dreamer: 1 },
      },
      {
        text: {
          en: "A comfortable, normal house. No complications.",
          es: "Una casa cómoda y normal, sin complicaciones.",
        },
        points: { Serene: 2 },
      },
      {
        text: {
          en: "A country house, far from it all, quiet.",
          es: "Una casa de campo, alejada, tranquila.",
        },
        points: { Cautious: 1, Stoic: 1 },
      },
      {
        text: {
          en: "A beautiful house, cared for down to the detail.",
          es: "Una casa muy bonita, cuidada al detalle.",
        },
        points: { Dreamer: 2 },
      },
    ],
  },
  {
    id: 'q19_data_breach',
    text: {
      en:
        "You find out a company you use has had a data breach. How do you " +
        "react?",
      es:
        "Te enteras de que una empresa que usas ha tenido una filtración de " +
        "datos. ¿Cómo reaccionas?",
    },
    options: [
      {
        text: {
          en: "I change the password and move on.",
          es: "Cambio la contraseña y a otra cosa.",
        },
        points: { Serene: 2 },
      },
      {
        text: {
          en: "I think 'why would I be surprised?' and get on with my day.",
          es: "Pienso '¿y de qué me sorprendo?' y sigo con mi día.",
        },
        points: { Stoic: 1, Restless: 1 },
      },
      {
        text: {
          en: "I change all my passwords and check what information they had.",
          es: "Cambio todas mis contraseñas y reviso qué información tenían.",
        },
        points: { Cautious: 2, Curious: 1 },
      },
      {
        text: {
          en: "I consider dropping the service entirely.",
          es: "Me planteo dejar de usar el servicio.",
        },
        points: { Cautious: 2 },
      },
    ],
  },
];
