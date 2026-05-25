/**
 * Question pool for distrosoul.
 *
 * Shape:
 *   {
 *     id: string,
 *     text: string,
 *     options: [
 *       { text: string, points: { Restless?: number, Serene?: number, ... } },
 *       ...four total
 *     ]
 *   }
 *
 * The pool has 19 questions. At runtime 8 are picked at random (see
 * lib/selectQuestions.js) and presented before the fixed final question
 * (data/finalQuestion.js). Missing nature keys in `points` are treated as 0.
 */

export const questions = [
  {
    id: 'q1_flatpack',
    text:
      "Someone gives you flat-pack furniture as a gift. You open the box " +
      "and find 200 pieces, a manual in Chinese, and no instructions in " +
      "your language. What do you do?",
    options: [
      { text: "I start assembling it by eye — I'll figure it out as I go.", points: { Restless: 2, Curious: 1 } },
      { text: "I look for a tutorial on YouTube.", points: { Serene: 1, Dreamer: 1 } },
      { text: "I read the whole manual before touching anything, even if it's in Chinese.", points: { Curious: 2 } },
      { text: "I leave it in a corner until I have a quiet day.", points: { Serene: 2 } },
    ],
  },
  {
    id: 'q2_friends_describe',
    text: "Your friends would describe you as…",
    options: [
      { text: "The one who always tries the weird new place.", points: { Restless: 1, Curious: 1 } },
      { text: "The one you can rely on no matter what.", points: { Stoic: 2, Serene: 1 } },
      { text: "The one with the best taste in the group.", points: { Dreamer: 2 } },
      { text: "The one who notices things others miss.", points: { Cautious: 1, Curious: 1 } },
    ],
  },
  {
    id: 'q3_unlabeled_box',
    text: "You find an unlabeled box at your front door. What do you do?",
    options: [
      { text: "I open it right away — curiosity wins.", points: { Restless: 1, Curious: 2 } },
      { text: "I check for a sender or any clue before touching it.", points: { Cautious: 2 } },
      { text: "I bring it inside and open it calmly.", points: { Serene: 2 } },
      { text: "I call someone so I'm not alone when I open it.", points: { Cautious: 1, Serene: 1 } },
    ],
  },
  {
    id: 'q4_new_city_dinner',
    text:
      "You're traveling in a new city. It's dinner time. How do you pick " +
      "a restaurant?",
    options: [
      { text: "I walk until something catches my eye.", points: { Restless: 1, Dreamer: 1 } },
      { text: "I ask a local.", points: { Serene: 2 } },
      { text: "I read reviews carefully and pick the best by my own criteria.", points: { Curious: 1, Stoic: 1 } },
      { text: "I go to the place that looks best from the outside.", points: { Dreamer: 2 } },
    ],
  },
  {
    id: 'q5_gift',
    text: "What kind of gift do you prefer to receive?",
    options: [
      { text: "Something handmade, even if it's imperfect.", points: { Restless: 2, Dreamer: 1 } },
      { text: "Something useful you'll actually use every day.", points: { Stoic: 2, Serene: 1 } },
      { text: "An experience: a class, a trip, a special dinner.", points: { Curious: 1, Dreamer: 1 } },
      { text: "Something that respects your privacy — no accounts, no subscriptions, no connected devices.", points: { Cautious: 2 } },
    ],
  },
  {
    id: 'q6_car_advice',
    text: "A friend asks for advice about buying a car. What do you tell them?",
    options: [
      { text: "To test-drive it and see how it feels behind the wheel.", points: { Dreamer: 1, Restless: 1 } },
      { text: "To check reliability and maintenance cost over ten years.", points: { Stoic: 2 } },
      { text: "To compare models in a spreadsheet with all the data.", points: { Curious: 2 } },
      { text: "To ask people who already own that model.", points: { Serene: 2 } },
    ],
  },
  {
    id: 'q7_party',
    text: "You're at a party where you barely know anyone. What do you do?",
    options: [
      { text: "I dive in and talk to the first person I see.", points: { Restless: 1, Serene: 1 } },
      { text: "I stay in a corner observing before I make a move.", points: { Cautious: 2, Curious: 1 } },
      { text: "I find the host and introduce myself.", points: { Serene: 2 } },
      { text: "I take it in — the decor, the music. I just enjoy the atmosphere.", points: { Dreamer: 2 } },
    ],
  },
  {
    id: 'q8_learning',
    text: "How do you prefer to learn something new?",
    options: [
      { text: "By diving in and learning from my mistakes.", points: { Restless: 2 } },
      { text: "With a well-structured course, step by step.", points: { Serene: 1, Stoic: 1 } },
      { text: "By reading everything I can on the subject before I start.", points: { Curious: 2 } },
      { text: "With someone who already knows, teaching me in person.", points: { Serene: 1, Dreamer: 1 } },
    ],
  },
  {
    id: 'q9_movie',
    text: "You're picking a movie for a solo night in. What kind do you go for?",
    options: [
      { text: "Something new and experimental that nobody's seen.", points: { Restless: 1, Curious: 1 } },
      { text: "The one I've seen ten times that never lets me down.", points: { Stoic: 2 } },
      { text: "Something visually stunning — the plot doesn't matter.", points: { Dreamer: 2 } },
      { text: "A documentary about something I've always wanted to understand.", points: { Curious: 2 } },
    ],
  },
  {
    id: 'q10_important_message',
    text:
      "You've just finished writing an important message. Before sending " +
      "it…",
    options: [
      { text: "I hit send without rereading. Done.", points: { Restless: 2 } },
      { text: "I read it once to catch any typos.", points: { Serene: 2 } },
      { text: "I read it several times, thinking about how it will land.", points: { Cautious: 2, Dreamer: 1 } },
      { text: "I save it as a draft and come back later with a fresh mind.", points: { Stoic: 1, Curious: 1 } },
    ],
  },
  {
    id: 'q11_attractive_trait',
    text: "What do you find most attractive in a person?",
    options: [
      { text: "Having their own strange ideas.", points: { Restless: 1, Curious: 1 } },
      { text: "Being reliable. Being there.", points: { Stoic: 2, Serene: 1 } },
      { text: "Having style — caring about the details.", points: { Dreamer: 2 } },
      { text: "Respecting your space and not asking too much.", points: { Cautious: 2 } },
    ],
  },
  {
    id: 'q12_found_money',
    text: "You find a €50 bill on the street. What do you do?",
    options: [
      { text: "I keep it. Lucky me.", points: { Restless: 2, Serene: 1 } },
      { text: "I look around in case someone's searching for it.", points: { Stoic: 1, Serene: 1 } },
      { text: "I leave it where it is — I don't want any trouble.", points: { Cautious: 2 } },
      { text: "I pick it up and donate it to something I care about.", points: { Dreamer: 1, Curious: 1 } },
    ],
  },
  {
    id: 'q13_works_well',
    text: "When something works well for you, what happens over time?",
    options: [
      { text: "I start changing things to make it better.", points: { Restless: 2, Curious: 1 } },
      { text: "I leave it as is, as long as it keeps working.", points: { Stoic: 2, Serene: 1 } },
      { text: "I customize it bit by bit, to make it more mine.", points: { Dreamer: 2, Restless: 1 } },
      { text: "I take care of it — clean it, keep it safe.", points: { Cautious: 1, Stoic: 1 } },
    ],
  },
  {
    id: 'q14_bothers_most',
    text: "What bothers you most?",
    options: [
      { text: "Things that stall, that don't evolve.", points: { Restless: 2, Curious: 1 } },
      { text: "Things that change for no reason, just to change.", points: { Stoic: 2 } },
      { text: "Things that are ugly, poorly thought out, tasteless.", points: { Dreamer: 2 } },
      { text: "Things that ask for your data without needing to.", points: { Cautious: 2 } },
    ],
  },
  {
    id: 'q15_signup_invite',
    text:
      "Someone very friendly invites you to a new website and asks you to " +
      "create an account with your email. What do you do?",
    options: [
      { text: "I sign up — sounds fun.", points: { Serene: 1, Restless: 1 } },
      { text: "I use a burner email I keep just for things like this.", points: { Cautious: 1, Curious: 1 } },
      { text: "I look into what the site is and who runs it first.", points: { Cautious: 2, Stoic: 1 } },
      { text: "I say no — I'm done creating more accounts.", points: { Cautious: 2, Stoic: 1 } },
    ],
  },
  {
    id: 'q16_perfect_day_home',
    text: "Your perfect day at home would be…",
    options: [
      { text: "Starting a new project I've been putting off.", points: { Restless: 1, Curious: 1 } },
      { text: "Doing nothing special — just resting peacefully.", points: { Stoic: 2, Serene: 1 } },
      { text: "Rearranging and decorating some corner of the house.", points: { Dreamer: 2 } },
      { text: "Learning something new — reading, watching documentaries.", points: { Curious: 2 } },
    ],
  },
  {
    id: 'q17_satisfying_problems',
    text: "What kind of problems do you find most satisfying to solve?",
    options: [
      { text: "The ones that need lots of trial and error until something clicks.", points: { Restless: 2 } },
      { text: "The ones with a clear answer if you follow the steps.", points: { Serene: 1, Stoic: 1 } },
      { text: "The ones that demand you understand the whole system before acting.", points: { Curious: 2, Cautious: 1 } },
      { text: "The ones that depend more on patience than on cleverness.", points: { Stoic: 2 } },
    ],
  },
  {
    id: 'q18_house',
    text: "If you had to live in a house, what would it be like?",
    options: [
      { text: "A strange house, full of things I built myself.", points: { Restless: 2, Dreamer: 1 } },
      { text: "A comfortable, normal house — no complications.", points: { Serene: 2 } },
      { text: "A country house, far from it all, quiet.", points: { Cautious: 1, Stoic: 1 } },
      { text: "A beautiful house, cared for down to the detail.", points: { Dreamer: 2 } },
    ],
  },
  {
    id: 'q19_data_breach',
    text:
      "You find out a company you use has had a data breach. How do you " +
      "react?",
    options: [
      { text: "I change the password and move on.", points: { Serene: 2 } },
      { text: "I think 'why would I be surprised?' and get on with my day.", points: { Stoic: 1, Restless: 1 } },
      { text: "I change all my passwords and check what information they had.", points: { Cautious: 2, Curious: 1 } },
      { text: "I consider dropping the service entirely.", points: { Cautious: 2 } },
    ],
  },
];
