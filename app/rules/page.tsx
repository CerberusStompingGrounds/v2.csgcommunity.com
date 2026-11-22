"use client";

const sections = [
  {
    title: "General",
    rules: [
      "No hacking, glitching, duping, or exploiting of any kind, violations will be met with a temporary or permanent ban.",
      "No racist, homophobic, hateful comments, or extensive trash talking in chat! Any violations will result in a kick the first time, 24 hour ban the second time, 48 hour ban the third time, and perm for the final offence.",
      "Keep chatter to a minimum and please try to ask constructive questions and give constructive and respectful responses.",
      "Multiple instances of combat logging may result in temporary ban.",
      "No bases that cross over top of roads.",
      "No bases within 200m of military buildings. This is measured from the military building, to the base flag.",
      "No bases within 1000m of traders. This is measured from the edge of the green zone, to the base flag.",
      "No bases within 1000m of spawn areas. This is measured from the marker, to the base flag.",
      "Bases must be no higher than 30m off the ground at their highest point you can stand on. If a base is higher than 30m, the portion of the base above that mark will be removed and not refunded.",
      "All base flags must have a entrance/exit.",
      "A player must be able to steal the flag, it cannot be obstructed/buried inside an object.",
      "All bases must have a ground entrance. This means no sky bases.",
    ],
  },
  {
    title: "Traders",
    rules: [
      "No stealing or trolling in the trader cities.",
      "No camping the safe zones! There is a 500m no combat radius around all safe zones. Do not engage in combat within the radius. If killed inside the blue zone, screenshot your death marker on the map as evidence in your report.",
      "No running into safe zones while in combat. If being pursued, you must have 5 minutes free of contact (shots fired at you) before entering a safe zone!",
      "Do not follow people out of trader.",
      "If you are caught deliberately camping safe zone, you will be killed by an admin and your gear will be wiped. If further action is required it will result in a temporary ban.",
    ],
  },
];

export default function Rules() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl orange">
          Rules - CSG Chernarus Isles
        </h1>
        <p className="leading-7 not-first:mt-6">
          To keep the server enjoyable for all we have concise and easy to
          follow rules. Paired with a strict policy of all rule breaking,
          repeated violations will result in escalation to further temporary
          bans or permanent bans if high severity. A ban results in the
          prevention of joining all of our servers for a given time, this
          including TeamSpeak if necessary.
        </p>
        {sections.map((section) => (
          <section key={section.title} className="w-full">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
              {section.title}
            </h2>
            <ul className="my-6 ml-6 list-disc leading-7 marker:text-[var(--orange)] [&>li]:mt-2">
              {section.rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
