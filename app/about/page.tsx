import { pageMeta } from "@/lib/metadata";
import type { Metadata } from "next";
import { H1, H2, H3, List, P, Page } from "@/components/typography";
export const metadata: Metadata = {
  title: "About Us",
  description: "How the Cerberus Stomping Grounds community formed, the servers we've played on, and our staff team.",
  ...pageMeta("/about"),
};

export default function About() {
  return (
    <Page>
      <H1>
        About Us
      </H1>
      <H2>
        How we formed
      </H2>
      <P>
        The founders of Cerberus Stomping Grounds or CSG community have been
        playing the ARMA games together since early 2014. We met on the
        Definitive Gaming and Stalk & Strike ARMA 2 wasteland servers, and
        developed our team coordination further through the popular mod of
        DayZ, then Epoch and eventually Overpoch.
      </P>
      <P>
        ARMA 3 was soon added to the mix, and we have been through many
        communities and game types ever since. Everything from Altis Life to
        Exile to Milsim, we&apos;ve done it at some point. We&apos;ve all
        partaken in varying communities and responsibilities within those
        communities, and have gained a very well rounded knowledge of the
        functionality of ARMA 3 and what it takes to be a part of and run a
        successful community.
      </P>
      <P>
        We are a dedicated group of skilled players that have decided to put
        our experience and deep knowledge of the game that we love into a
        server we hope you will enjoy.
      </P>
      <H2>
        Servers we played on
      </H2>
      <P>
        Over the years of ARMA, we played on many different game modes created
        by an even larger list of communities, below is a list of all
        servers/communities we have been involved in and/or have played on
        extensively:
      </P>
      <H3>
        ARMA 2 Communities:
      </H3>
      <List>
        <li>DefG Wasteland</li>
        <li>Stalk & Strike Wasteland</li>
        <li>OP4 Wasteland</li>
        <li>FFAAA Milsim</li>
        <li>EVoG DayZ Epoch</li>
        <li>TLC DayZ Overpoch</li>
        <li>Firecock DayZ Overpoch</li>
        <li>DNG DayZ Overpoch</li>
        <li>UK111 DayZ Overpoch</li>
      </List>
      <H3>
        ARMA 3 Communities:
      </H3>
      <List>
        <li>DMM Patrol Ops</li>
        <li>Spearhead Exile/ Milsim</li>
        <li>TAC BF Milsim</li>
        <li>STS Altis Life</li>
        <li>ADK Exile</li>
        <li>EXP Exile</li>
        <li>Spartan Gaming Exile</li>
        <li>Karlus Bojangles Exile</li>
      </List>
      <H3>
        DayZ Standalone Communities:
      </H3>
      <List>
        <li>ADK DayZ</li>
        <li>TW</li>
        <li>DAYZ Usonia</li>
        <li>MTAS Playground</li>
      </List>
      <H2>
        Staff Team
      </H2>
      <H3>
        Head Admins:
      </H3>
      <List>
        <li>Bubba</li>
        <li>Jstrow</li>
        <li>Spartan</li>
        <li>Danny Dorito</li>
      </List>
      <H3>
        Community Manager:
      </H3>
      <List>
        <li>iiBetrayforAR</li>
      </List>
    </Page>
  );
}
