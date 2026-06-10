import SectionLabel from "./label";
import { stack } from "../data/Portafolio";


function Stack() {
  return (
    <section id="stack" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionLabel n="02 /" label="Stack" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {Object.entries(stack).map(([group, items]) => (
            <div key={group} className="border-t border-border pt-6">
              <h3 className="font-mono-tag mb-5 text-foreground">{group}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-background px-4 py-1.5 text-sm transition hover:border-accent hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Stack
