import { type SectionText } from "@/lib/data";

type Props = {
  section: SectionText;
};

export default function TagLine({section} : Props) {
  return (
    <section className="mt-8 text-center text-base">
      <div className="space-y-3">
        <div className="space-y-1">
          {section.title.map((line, i) => (
            <div key={i}>{line}</div>
          ))}          
        </div>
        <div className="space-y-1">
          {section.subtitle.map((line, i) => (
            <div key={i}>{line}</div>
          ))}          
        </div>
      </div>
    </section>
  );
}
