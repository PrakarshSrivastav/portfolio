import { nowLearning } from "@/lib/now"

export default function NowSection() {
  return (
    <section id="now" className="border-y bg-secondary/25 pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
            </span>
            <h2 className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-primary">Currently Learning</h2>
          </div>
          <div className="rounded-md border bg-background/80 p-4 font-mono text-sm shadow-sm">
            {nowLearning.slice(0, 3).map((item) => (
              <div key={item.label} className="grid gap-2 border-b py-4 last:border-b-0 md:grid-cols-[160px_1fr_120px]">
                <span className="text-primary">$ {item.label}</span>
                <span className="text-muted-foreground">{item.detail}</span>
                <span className="text-xs text-muted-foreground md:text-right">{item.since}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
