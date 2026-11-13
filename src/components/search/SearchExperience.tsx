/**
 * SearchExperience — the client wrapper for /search.
 *
 * Reads the ?q= deep-link via useSearchParams and hands it to SearchBox.
 * This component MUST stay inside a <Suspense> boundary (see
 * src/app/search/page.tsx): useSearchParams without one breaks the
 * static export build.
 */
"use client";

import { useSearchParams } from "next/navigation";
import SearchBox from "./SearchBox";

export default function SearchExperience() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  return <SearchBox initialQuery={initialQuery} autoFocus />;
}
