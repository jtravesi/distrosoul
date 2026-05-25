/**
 * Reveal texts — one entry per distro (22 total).
 *
 * Shape per entry:
 *   {
 *     distroName: string,   // display name
 *     nature: string,       // one of the 6 natures
 *     path: string,         // tie-break path (forward/plan/help/pace)
 *     natureText: string,   // 2-3 sentences about the person, no Linux
 *     revealText: string,   // 1-2 sentences linking person to distro, no tech jargon
 *   }
 *
 * Tone: PMD-poetic. Short lyrical sentences, no rolling-release, no kernel,
 * no package-manager talk. The reveal should feel like a discovery about the
 * self, not a spec sheet.
 */

export const reveals = {
  // ─── Restless ───────────────────────────────────────────────────────────
  arch: {
    distroName: 'Arch Linux',
    nature: 'Restless',
    path: 'forward',
    natureText:
      "You're someone who needs to touch things to understand them. " +
      "Breaking them counts too. Where others see a system that works, " +
      "you see a chance to improve it, to make it more yours, to know " +
      "why it does what it does. You're not satisfied with \"it runs " +
      "fine\" — you want to know exactly how it runs.",
    revealText:
      "Your distro is Arch Linux. It doesn't welcome you with a red " +
      "carpet or promise that anything will be easy. It hands you an " +
      "empty terminal and says: \"build it yourself.\" And that, deep " +
      "down, is what you wanted.",
  },
  gentoo: {
    distroName: 'Gentoo',
    nature: 'Restless',
    path: 'plan',
    natureText:
      "You're someone who enjoys the process more than the result. You " +
      "like to understand each piece before placing it, read every " +
      "manual, plan before acting. The time it takes to do something " +
      "well doesn't scare you — what scares you is doing it without " +
      "knowing why. For you, patience and curiosity are the same thing.",
    revealText:
      "Your distro is Gentoo. It hands you nothing finished — only the " +
      "tools, and an invitation to forge it yourself, piece by piece. " +
      "What others call excess, you call precision.",
  },
  endeavouros: {
    distroName: 'EndeavourOS',
    nature: 'Restless',
    path: 'pace',
    natureText:
      "You're someone who likes to tinker, but you have nothing to " +
      "prove. You want to explore your own way, without anyone marking " +
      "the path for you — but you also have no desire to fight every " +
      "detail. You know what you want: freedom without unnecessary " +
      "friction.",
    revealText:
      "Your distro is EndeavourOS. It gives you the full power that " +
      "seasoned explorers enjoy, but spares you the initiation ritual. " +
      "An open door into the Arch world, without the storm.",
  },

  // ─── Serene ─────────────────────────────────────────────────────────────
  pop_os_serene: {
    distroName: 'Pop!_OS',
    nature: 'Serene',
    path: 'forward',
    natureText:
      "You're someone who dives in. You want a tool that matches your " +
      "stride, one that won't slow you down when you mean business. It " +
      "doesn't matter if it's for creating, for playing, or for hard " +
      "work — what you ask is that it be ready when you are.",
    revealText:
      "Your distro is Pop!_OS. Made for people who don't want to ask " +
      "the system if they can do something — they just do it. Power " +
      "well-wrapped, ready to take flight.",
  },
  manjaro: {
    distroName: 'Manjaro',
    nature: 'Serene',
    path: 'plan',
    natureText:
      "You're someone who wants the best of both worlds. The modern " +
      "draws you in — what's alive and evolving — but you don't want " +
      "to gamble every week. You seek balance between the new and the " +
      "safe, between control and a net to catch you if something twists.",
    revealText:
      "Your distro is Manjaro. It gives you access to a world in " +
      "constant motion — but filtered, tested, presented with calm. " +
      "Adventure, yes, but with a map in hand.",
  },
  ubuntu: {
    distroName: 'Ubuntu',
    nature: 'Serene',
    path: 'help',
    natureText:
      "You're someone who likes things to just work without having to " +
      "think about them too much. You value your time, your peace of " +
      "mind, and the sense that if anything gets tangled, there'll be " +
      "someone on the other side who knows how to help. You have " +
      "nothing to prove — you just want to live your life.",
    revealText:
      "Your distro is Ubuntu. The most familiar, the most accompanied, " +
      "the one with an answer for almost any question. Not the rarest " +
      "or the most brilliant — and that's precisely why so many hands " +
      "reach out to you.",
  },
  mint: {
    distroName: 'Linux Mint',
    nature: 'Serene',
    path: 'pace',
    natureText:
      "You're someone who delights in the familiar. You don't chase " +
      "the latest, and you have no interest in proving how much you " +
      "know. What you want is to feel at home — for things to be where " +
      "you expect, to work how you expect, for your day to flow " +
      "without jolts. That, for you, is freedom.",
    revealText:
      "Your distro is Linux Mint. It greets you with a welcoming smile, " +
      "no strange questions, no asking you to learn a new language. " +
      "It's the comfortable armchair after a long day.",
  },

  // ─── Stoic ──────────────────────────────────────────────────────────────
  slackware: {
    distroName: 'Slackware',
    nature: 'Stoic',
    path: 'forward',
    natureText:
      "You're someone who prefers the old done well to the new done " +
      "halfway. What's in fashion doesn't interest you — what's still " +
      "here thirty years later does. There's something in you that " +
      "respects slow methods, long roads, things that were done once " +
      "and done right.",
    revealText:
      "Your distro is Slackware. The oldest of those still alive. It " +
      "hasn't changed much, and it doesn't need to. For those who " +
      "understand it, that's exactly its virtue.",
  },
  debian: {
    distroName: 'Debian',
    nature: 'Stoic',
    path: 'plan',
    natureText:
      "You're someone who values what has stood the test of time. " +
      "Trends don't impress you, and you're in no rush to try the " +
      "latest. For you, what matters is coherence — that what works " +
      "today will keep working tomorrow. That quiet faithfulness is " +
      "who you are.",
    revealText:
      "Your distro is Debian. One of the oldest, one of the most " +
      "respected, one of the quietest. It promises nothing it can't " +
      "deliver, and that's why it's been delivering for decades.",
  },
  opensuse_leap: {
    distroName: 'openSUSE Leap',
    nature: 'Stoic',
    path: 'help',
    natureText:
      "You're someone who trusts what's well-built. You like that " +
      "behind things there's order — an institution, a steady hand " +
      "that takes care of them. You don't need everything to be " +
      "spectacular — you need it to be serious, rigorous, dependable. " +
      "That seriousness calms you.",
    revealText:
      "Your distro is openSUSE Leap. Discreet, solid, made with the " +
      "calm of those who have been doing things right for a long time. " +
      "It doesn't shout, it doesn't draw attention — it simply holds.",
  },
  mx_linux: {
    distroName: 'MX Linux',
    nature: 'Stoic',
    path: 'pace',
    natureText:
      "You're someone who values what lasts. Noise bothers you — " +
      "novelty for novelty's sake, things that change just to look " +
      "new. You prefer what endures, what's still there tomorrow, " +
      "what asks nothing from you in return. You know patience isn't " +
      "slowness — it's choosing well.",
    revealText:
      "Your distro is MX Linux. No rush, no fanfare, no asking you to " +
      "become someone else to use it. It does what it promised, and " +
      "it does it every day. For you, that's already enough.",
  },

  // ─── Dreamer ────────────────────────────────────────────────────────────
  garuda: {
    distroName: 'Garuda Linux',
    nature: 'Dreamer',
    path: 'forward',
    natureText:
      "You're someone who isn't satisfied with something just working " +
      "— you want it to make you feel something too. You like the " +
      "spectacle, the detail, the sense of holding something alive in " +
      "your hands. For you, aesthetics isn't decoration — it's energy.",
    revealText:
      "Your distro is Garuda Linux. Striking, intense, unafraid to " +
      "stand out. Made for those who prefer a system that seems to " +
      "have character, not one that apologizes for existing.",
  },
  pop_os_dreamer: {
    distroName: 'Pop!_OS',
    nature: 'Dreamer',
    path: 'plan',
    natureText:
      "You're someone who puts care into how they work. You like " +
      "having an environment that's worthy of what you're about to " +
      "do, where everything is where it should be. Aesthetics matter " +
      "to you — not on a whim, but because you know a well-designed " +
      "space makes you better.",
    revealText:
      "Your distro is Pop!_OS. Clean, thought through to the detail, " +
      "with an identity of its own that shows in every corner. A tool " +
      "made by people who care about the people who use it.",
  },
  zorin: {
    distroName: 'Zorin OS',
    nature: 'Dreamer',
    path: 'help',
    natureText:
      "You're someone who wants beauty without giving up the familiar. " +
      "You like things to be intuitive, to trust what you see, to find " +
      "that what's new doesn't ask you to start over. You're after " +
      "beauty, yes — but also a friendly hand.",
    revealText:
      "Your distro is Zorin OS. Polished, accessible, designed so that " +
      "change feels like a gift, not a test. Gentle on the eyes, " +
      "gentle to use.",
  },
  elementary: {
    distroName: 'elementary OS',
    nature: 'Dreamer',
    path: 'pace',
    natureText:
      "You're someone for whom beautiful is also functional. Careless " +
      "details bother you — things poorly thought out, gratuitous " +
      "ugliness. For you, a well-designed tool isn't a luxury — it's " +
      "respect. Respect for whoever uses it, and for the time spent " +
      "with it.",
    revealText:
      "Your distro is elementary OS. Cared for, coherent, made with " +
      "the conviction that every pixel matters. Not the most powerful " +
      "or the most flexible — but the kindest to you.",
  },

  // ─── Cautious ───────────────────────────────────────────────────────────
  tails: {
    distroName: 'Tails',
    nature: 'Cautious',
    path: 'forward',
    natureText:
      "You're someone who understands there are moments when no trace " +
      "can be left. Fear doesn't paralyze you — awareness moves you. " +
      "You know there are situations that demand not being there, not " +
      "appearing, not being recorded. And when the moment comes, you " +
      "don't hesitate.",
    revealText:
      "Your distro is Tails. It lives on a USB stick and dies when " +
      "you power down. It saves nothing, remembers nothing, betrays " +
      "nothing. Made for moments when existing in silence is the only " +
      "way to exist.",
  },
  qubes: {
    distroName: 'Qubes OS',
    nature: 'Cautious',
    path: 'plan',
    natureText:
      "You're someone who understands that trust isn't given away. " +
      "You read the fine print. You notice who's watching through the " +
      "window before you speak. You've learned, maybe the hard way, " +
      "that giving information is losing it — and you'd rather own " +
      "less than own things you don't control. That doesn't make you " +
      "paranoid. It makes you awake.",
    revealText:
      "Your distro is Qubes OS. It doesn't ask you to trust it — it " +
      "teaches you not to need to trust anyone. Everything in its " +
      "place, every risk in its box. Finally, someone who understands.",
  },
  parrot: {
    distroName: 'Parrot Home',
    nature: 'Cautious',
    path: 'help',
    natureText:
      "You're someone who cares about privacy, but you don't want to " +
      "wall yourself off from the world to protect it. You're after " +
      "balance — being protected without turning every daily gesture " +
      "into a clandestine operation. You want tools, not walls.",
    revealText:
      "Your distro is Parrot Home. It gives you the defenses you need " +
      "without asking you to give up everything else. Discreet, " +
      "complete, ready for real life.",
  },
  whonix: {
    distroName: 'Whonix',
    nature: 'Cautious',
    path: 'pace',
    natureText:
      "You're someone who has learned to move without making noise. " +
      "You don't hide out of fear — you go unseen out of conviction. " +
      "You know anonymity isn't a luxury, it's a discipline, and it's " +
      "built slowly, layer by layer, with no shortcuts.",
    revealText:
      "Your distro is Whonix. Designed so your trail fades along the " +
      "way, with no apparent effort. A shadow carefully cast.",
  },

  // ─── Curious ────────────────────────────────────────────────────────────
  cachyos: {
    distroName: 'CachyOS',
    nature: 'Curious',
    path: 'forward',
    natureText:
      "You're someone interested in squeezing what you have. You're " +
      "not satisfied with something just working — you want to know " +
      "how much it can give. You like understanding from the inside, " +
      "optimizing, watching theory translate into something real and " +
      "measurable. The good leaves you wanting more if you believe it " +
      "can be better.",
    revealText:
      "Your distro is CachyOS. Built from the ground up for " +
      "performance, no apologies, no comfortable compromises. For " +
      "those who believe every millisecond matters.",
  },
  opensuse_tumbleweed: {
    distroName: 'openSUSE Tumbleweed',
    nature: 'Curious',
    path: 'plan',
    natureText:
      "You're someone who wants the latest, but not at any price. You " +
      "like change, you like the edge — but you despise sloppiness. " +
      "For you, innovation without method isn't innovation. It's " +
      "noise. You want to live on the edge, but with a net.",
    revealText:
      "Your distro is openSUSE Tumbleweed. Constantly up to date, yet " +
      "validated with an almost obsessive rigor. The adventure for " +
      "those who can't tolerate recklessness.",
  },
  fedora: {
    distroName: 'Fedora',
    nature: 'Curious',
    path: 'help',
    natureText:
      "You're someone who likes to stay awake. New things interest " +
      "you — not as fashion, but to understand where the world is " +
      "heading. You want to learn, but not alone — you like knowing " +
      "there are others like you asking the same questions.",
    revealText:
      "Your distro is Fedora. Always a step ahead, but surrounded by " +
      "serious people, backed by a community that also wants to " +
      "understand. The new, yes — but done with care.",
  },
  nixos: {
    distroName: 'NixOS',
    nature: 'Curious',
    path: 'pace',
    natureText:
      "You're someone fascinated by ideas that change the way things " +
      "are done. You're not satisfied with something just working — " +
      "you want to know if there's a better way to think about it " +
      "from scratch. You love elegant solutions, the ones that feel " +
      "like a revelation.",
    revealText:
      "Your distro is NixOS. It isn't a distro — it's a different way " +
      "of thinking about what a system can be. For those who, above " +
      "all, enjoy having their mind blown.",
  },
};
