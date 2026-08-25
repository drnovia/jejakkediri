import type { Metadata } from "next";
import KediriPediaExperience from "./experience";

export const metadata: Metadata = {
  title: "KediriPedia — Ensiklopedia Digital Sejarah Kediri",
  description: "Cerita, tokoh, tempat, dan arsip yang membentuk sejarah Kediri.",
};

export default function KediriPediaPage() {
  return <KediriPediaExperience />;
}
