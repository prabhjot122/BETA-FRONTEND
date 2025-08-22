import type { Metadata } from "next";
import { homeMetadata as metadata } from "./home-metadata";
import HomepageClient from "./_clients/HomepageClient";

export { metadata };
// canonical is already set in home-metadata via alternates.canonical
export default function Page() { return <HomepageClient />; }
