import { footerSections, type FooterSection } from "@/lib/data";

export default function Footer() {
  const sections = footerSections ?? [];

  return (
    <footer className="py-10 text-center text-sm bg-[var(--color-footer-bg)]">
      <div className="space-y-8">
        {sections.map((section: FooterSection) => (
          <div key={section.title}>
            <h3 className="mb-2 font-semibold">
              {section.title}
            </h3>
            <div className="space-y-1 text-[var(--color-text-meta)]">
              {section.lines.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-xs tracking-wide">
        ALOHA GOODIES
      </div>
    </footer>
  );
}
