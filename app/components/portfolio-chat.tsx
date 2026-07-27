"use client";

import { useState } from "react";
import { faqItems } from "@/lib/faq";
import { MessageCircleQuestion, FileSearch } from "lucide-react";

const categories = Array.from(new Set(faqItems.map((f) => f.category)));

export default function PortfolioChat() {
  const [mode, setMode] = useState<"faq" | "jd">("faq");
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selected, setSelected] = useState<string | null>(null);

  const [jdInput, setJdInput] = useState("");
  const [jdResult, setJdResult] = useState<string | null>(null);
  const [jdLoading, setJdLoading] = useState(false);

  async function handleJdSubmit() {
    if (!jdInput.trim() || jdLoading) return;
    setJdLoading(true);
    setJdResult(null);
    try {
      const res = await fetch("/api/jd-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jd: jdInput }),
      });
      if (!res.ok) throw new Error("request failed");
      const data = await res.json();
      setJdResult(data.result);
    } catch {
      setJdResult("Scoring failed — the model might be rate-limited. Try again shortly.");
    } finally {
      setJdLoading(false);
    }
  }

  const visibleItems = faqItems.filter((f) => f.category === activeCategory);
  const activeItem = faqItems.find((f) => f.question === selected);

  return (
    <div className="relative isolate z-10 flex w-full flex-col overflow-hidden rounded-lg border bg-card shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-2 border-b bg-card px-5 py-4">
        {mode === "faq" ? (
          <MessageCircleQuestion className="h-4 w-4 text-primary" />
        ) : (
          <FileSearch className="h-4 w-4 text-primary" />
        )}
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Ask about Prakarsh
        </p>
      </div>

      {/* Mode toggle */}
      <div className="flex bg-card px-5 pt-3">
        <button
          onClick={() => setMode("faq")}
          className={`relative px-1 pb-3 text-sm font-medium transition-colors ${
            mode === "faq" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Ask a question
          {mode === "faq" && <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-primary" />}
        </button>
        <button
          onClick={() => setMode("jd")}
          className={`relative ml-6 px-1 pb-3 text-sm font-medium transition-colors ${
            mode === "jd" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Score a job description
          {mode === "jd" && <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-primary" />}
        </button>
        <div className="flex-1 border-b" />
      </div>

      {mode === "faq" ? (
        <div className="bg-card p-5">
          {/* Category pills */}
          <div className="mb-4 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelected(null);
                }}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Question grid */}
          <div className="grid gap-2 sm:grid-cols-2">
            {visibleItems.map((item) => (
              <button
                key={item.question}
                onClick={() => setSelected(item.question === selected ? null : item.question)}
                className={`rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                  selected === item.question
                    ? "border-primary bg-primary/5 text-foreground"
                    : "text-muted-foreground hover:border-primary/40 hover:bg-muted/50"
                }`}
              >
                {item.question}
              </button>
            ))}
          </div>

          {/* Answer */}
          {activeItem && (
            <div className="mt-4 rounded-md border-l-2 border-primary bg-muted/60 p-4">
              {Array.isArray(activeItem.answer) ? (
                <ul className="space-y-1.5">
                  {activeItem.answer.map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm text-foreground/90">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-foreground/90">{activeItem.answer}</p>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-3 bg-card p-5">
          <textarea
            value={jdInput}
            onChange={(e) => setJdInput(e.target.value)}
            placeholder="Paste the job description here…"
            rows={4}
            className="resize-none rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-ring"
          />
          <button
            onClick={handleJdSubmit}
            disabled={jdLoading || !jdInput.trim()}
            className="self-start rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-50"
          >
            {jdLoading ? "Scoring…" : "Score match"}
          </button>
          {jdResult && (
            <div className="whitespace-pre-wrap rounded-md border-l-2 border-primary bg-muted/60 p-4 text-sm text-foreground/90">
              {jdResult}
            </div>
          )}
        </div>
      )}
    </div>
  );
}