import { useState, useEffect, useRef } from "react";

const STOPS = [
  {
    num: 1,
    name: "Pack Square",
    tag: "gather",
    emoji: "🌿",
    color: "#5C9E6E",
    time: "~15 min",
    walk: null,
    vibe: "Opening. Grounding. Welcome.",
    body: "This is where we begin — together. Take a breath. Look around at these people who showed up for love. Maggie & Hilary's story doesn't start today, but today we get to celebrate it out loud.",
    prompt: "☕ Grab your first sip here — coffee, cocktail, whatever your heart wants.",
    note: "Babies welcome for this whole stretch 🌱",
  },
  {
    num: 2,
    name: "Register of Deeds",
    tag: "love + justice",
    emoji: "🌈",
    color: "#C2527A",
    time: "~10 min",
    walk: "1–2 min walk",
    vibe: "Where love was named out loud.",
    body: "In 2014, Buncombe County became the first place in North Carolina to issue same-sex marriage licenses. Couples gathered right here — waiting, celebrating, stepping into recognition and legal love.\n\nThis is YOUR moment.",
    prompt: "“This is a place where love was named out loud. Where people stood, waited, hoped — and were finally seen. And now, we get to celebrate that same kind of love, together.”",
    note: "🥹 This will land.",
  },
  {
    num: 3,
    name: "City Hall / Art Deco Cluster",
    tag: "beauty + craft",
    emoji: "🏛️",
    color: "#C8941A",
    time: "~10 min",
    walk: "1–2 min walk",
    vibe: "People built beautiful things here on purpose.",
    body: "Asheville's Art Deco district survived because the city couldn't afford to tear it down during the Depression. Sometimes preservation happens by accident. Sometimes the things that last are the ones nobody had the energy to destroy.",
    prompt: "Look up. The details on these buildings were hand-carved by people who believed the world deserved beauty even during hard times.",
    note: null,
  },
  {
    num: 4,
    name: "YMI Cultural Center + Eagle Street",
    tag: "Black history",
    emoji: "✊🏾",
    color: "#6B4226",
    time: "~15 min",
    walk: "2 min walk",
    vibe: "Community. Resistance. Joy anyway.",
    body: "The YMI (Young Men's Institute) was built in 1893 as one of the oldest Black cultural centers in the country. Eagle Street was the heart of Asheville's Black business district — thriving despite every system designed to crush it. Urban renewal nearly destroyed it. The community is still fighting to preserve what remains.",
    prompt: "We walk on land shaped by people whose names we may never know. Honor that.",
    note: null,
  },
  {
    num: 5,
    name: "Flatiron Building",
    tag: "lightness + photos",
    emoji: "🌸",
    color: "#9B72CF",
    time: "~10 min",
    walk: "5–7 min walk",
    vibe: "The goofy one. The photo op.",
    body: "Built in 1926, Asheville's Flatiron Building is the skinniest commercial building in Western North Carolina. It's weird. It's charming. It shouldn't work but it absolutely does. Sound like any love stories you know?",
    prompt: "📸 Group photo moment! Get silly. Get tender. Get both.",
    note: null,
  },
  {
    num: 6,
    name: "Grove Arcade",
    tag: "rest + refuel",
    emoji: "🪴",
    color: "#4A8C6E",
    time: "~20 min",
    walk: "5 min walk",
    vibe: "Sit. Sip. Breathe.",
    body: "The Grove Arcade was supposed to be a skyscraper. Plans changed. It became something better — a gorgeous, grounded gathering place instead. Not everything has to reach the sky to be magnificent.",
    prompt: "🍹 Optional drink stop. Rest your feet. Check in with each other.",
    note: "Good spot for anyone who needs a bathroom break or to regroup.",
  },
  {
    num: 7,
    name: "Basilica of Saint Lawrence",
    tag: "awe + quiet",
    emoji: "⛪",
    color: "#7A9E7E",
    time: "~15 min",
    walk: "4 min walk",
    vibe: "Whether or not you're religious, this place will hush you.",
    body: "The largest freestanding elliptical dome in North America. Designed by Rafael Guastavino, built without steel beams — just tile, mortar, and an unreasonable amount of faith in geometry. Sometimes the most extraordinary things are held together by craft and trust alone.",
    prompt: "Step inside if it's open. Just look up. That's it. That's the instruction.",
    note: null,
  },
  {
    num: 8,
    name: "Urban Trail",
    tag: "flexible ending",
    emoji: "🌺",
    color: "#C2527A",
    time: "wind down",
    walk: "wander",
    vibe: "No rush. Just be.",
    body: "The Asheville Urban Trail is a 1.7-mile walking tour with 30 sculptural stations telling the city's story. You don't have to see them all. You don't have to do anything. Wander. Linger. Let the day settle in your body before the next adventure begins.",
    prompt: "🌈 You just walked through a gay love story set inside a city's history. Not bad for a Thursday.",
    note: "End wherever feels right.",
  },
];

export default function DayOfGay() {
  const [activeStop, setActiveStop] = useState(null);
  const [revealed, setRevealed] = useState(new Set());
  const [started, setStarted] = useState(false);
  const detailRef = useRef(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,700;1,9..144,400&family=DM+Sans:wght@400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);

  const toggleStop = (num) => {
    const next = activeStop === num ? null : num;
    setActiveStop(next);
    if (next !== null) {
      setRevealed((prev) => new Set([...prev, num]));
      setTimeout(
        () =>
          detailRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          }),
        100
      );
    }
  };

  if (!started) {
    return (
      <div className="splash">
        <div className="splash-icon">🌿</div>
        <h1 className="splash-title">Day of Gay</h1>
        <p className="splash-names">Maggie &amp; Hilary</p>
        <p className="splash-sub">
          A gay love story, set inside a city&rsquo;s history.
          <br />
          Downtown Asheville walking tour.
        </p>
        <button className="splash-btn" onClick={() => setStarted(true)}>
          Let&rsquo;s walk 🌈
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="header-title">Day of Gay 🌿</h1>
        <p className="header-sub">Maggie &amp; Hilary · Downtown Asheville</p>
      </header>

      <div className="progress-bar" role="progressbar" aria-label="Tour progress">
        {STOPS.map((s) => (
          <div
            key={s.num}
            className="progress-seg"
            style={{
              background: revealed.has(s.num) ? s.color : "rgba(44,74,30,0.12)",
            }}
          />
        ))}
      </div>

      <div className="stops">
        {STOPS.map((stop) => {
          const isActive = activeStop === stop.num;
          const isRevealed = revealed.has(stop.num);

          return (
            <div key={stop.num}>
              {stop.walk && (
                <div className="walk-label">
                  <span className="walk-icon">🌿</span> {stop.walk}
                </div>
              )}

              <div
                className={`stop-card${isActive ? " stop-card--active" : ""}`}
                style={
                  isActive
                    ? { borderColor: stop.color, boxShadow: `0 4px 28px rgba(44,74,30,0.12)` }
                    : {}
                }
                onClick={() => toggleStop(stop.num)}
                role="button"
                aria-expanded={isActive}
                aria-label={`Stop ${stop.num}: ${stop.name}`}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && toggleStop(stop.num)}
              >
                <div className="stop-header">
                  <div
                    className="stop-icon"
                    style={{
                      background: isRevealed ? stop.color : "rgba(44,74,30,0.1)",
                    }}
                  >
                    {isRevealed ? stop.emoji : stop.num}
                  </div>

                  <div className="stop-meta">
                    <div className="stop-name">{stop.name}</div>
                    <div className="stop-tag">
                      {stop.tag} · {stop.time}
                    </div>
                  </div>

                  <div
                    className="stop-toggle"
                    aria-hidden="true"
                    style={{ transform: isActive ? "rotate(45deg)" : "rotate(0)" }}
                  >
                    +
                  </div>
                </div>

                {isActive && (
                  <div ref={detailRef} className="stop-detail">
                    <p className="stop-vibe" style={{ color: stop.color }}>
                      {stop.vibe}
                    </p>

                    {stop.body.split("\n\n").map((para, j) => (
                      <p key={j} className="stop-body">
                        {para}
                      </p>
                    ))}

                    <div
                      className="stop-prompt-box"
                      style={{
                        background: `${stop.color}18`,
                        borderLeftColor: stop.color,
                      }}
                    >
                      <p
                        className="stop-prompt-text"
                        style={{ fontStyle: stop.num === 2 ? "italic" : "normal" }}
                      >
                        {stop.prompt}
                      </p>
                    </div>

                    {stop.note && <p className="stop-note">{stop.note}</p>}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <footer className="footer">
        <span className="footer-icon">🌿</span>
        <p className="footer-tagline">A gay love story, set inside a city&rsquo;s history.</p>
      </footer>
    </div>
  );
}
