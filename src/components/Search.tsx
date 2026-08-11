"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Icon from "./Icon";
import { PAGES, PROJECTS } from "@/lib/data";

type Result = { type: "page" | "project"; title: string; href: string };

export default function Search() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const index = useMemo<Result[]>(
    () => [
      ...PAGES.map((p) => ({ type: "page" as const, title: p.title, href: p.href })),
      ...PROJECTS.filter((p) => p.href).map((p) => ({
        type: "project" as const,
        title: p.title,
        href: p.href as string,
      })),
    ],
    []
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return index.filter((item) => item.title.toLowerCase().includes(q)).slice(0, 8);
  }, [query, index]);

  useEffect(() => {
    setActive(0);
  }, [results]);

  // Prefetch internal pages up front so a result click is instant, not just fast-ish.
  useEffect(() => {
    for (const p of PAGES) router.prefetch(p.href);
  }, [router]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((v) => !v);
      }
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock scroll without shifting layout when the scrollbar disappears.
  useEffect(() => {
    if (!isOpen) return;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPadding = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);

  function go(result: Result) {
    setIsOpen(false);
    if (result.href.startsWith("http")) {
      window.open(result.href, "_blank", "noreferrer");
    } else {
      router.push(result.href);
    }
  }

  function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(results[active]);
    }
  }

  return (
    <>
      <button
        className="search-trigger"
        onClick={() => setIsOpen(true)}
        aria-label="Open search"
        title="Press Cmd+K to search"
      >
        <Icon name="search" size="0.95rem" />
        <span>Search</span>
        <kbd>⌘K</kbd>
      </button>

      {isOpen && (
        <div className="search-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="search-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Site search"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="search-header">
              <Icon name="search" size="1rem" />
              <input
                type="text"
                placeholder="Search pages and projects..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                autoFocus
                className="search-input"
                role="combobox"
                aria-expanded={results.length > 0}
                aria-controls="search-listbox"
                aria-autocomplete="list"
              />
              <button
                className="search-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close search"
              >
                Esc
              </button>
            </div>

            {query && (
              <div className="search-results" id="search-listbox" role="listbox">
                {results.length > 0 ? (
                  results.map((result, i) => {
                    const content = (
                      <>
                        <Icon
                          name={result.type === "page" ? "file" : "box"}
                          size="0.9rem"
                        />
                        <span className="result-type">{result.type}</span>
                        <span className="result-title">{result.title}</span>
                        <Icon name="arrowRight" size="0.9rem" className="result-arrow" />
                      </>
                    );
                    const rowProps = {
                      className: "search-result",
                      role: "option" as const,
                      "aria-selected": i === active,
                      onMouseEnter: () => setActive(i),
                      onClick: () => setIsOpen(false),
                      style: { animationDelay: `${i * 25}ms` },
                    };

                    return result.href.startsWith("/") ? (
                      <Link key={result.href} href={result.href} {...rowProps}>
                        {content}
                      </Link>
                    ) : (
                      <a
                        key={result.href}
                        href={result.href}
                        target="_blank"
                        rel="noreferrer"
                        {...rowProps}
                      >
                        {content}
                      </a>
                    );
                  })
                ) : (
                  <div className="search-empty">
                    <Icon name="search" size="1.25rem" />
                    No results found
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
