import type { Metadata } from "next";
import { H1, H2, Page } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with CSG through Steam, Twitter or email.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <Page>
      <H1>
        Contact Us
      </H1>
      <H2>
        Steam
      </H2>
      <Button variant="secondary" asChild className="background-orange">
        <Link
          href="https://steamcommunity.com/groups/CerberusStompingGrounds"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Steam Group Link"
        >
          Steam Group
        </Link>
      </Button>
      <H2>
        Twitter
      </H2>
      <Button variant="secondary" asChild className="background-orange">
        <Link
          href="https://twitter.com/csg_exile"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Twitter Link"
        >
          Twitter
        </Link>
      </Button>
      <H2>
        Email
      </H2>
      <Button variant="secondary" asChild className="background-orange">
        <Link
          href="mailto:developer@csgcommunity.com"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Email Link"
        >
          Email Us
        </Link>
      </Button>
    </Page>
  );
}
