import { pageMeta } from "@/lib/metadata";
import type { Metadata } from "next";
import { H1, H2, H3, H4, List, P, Page } from "@/components/typography";
import Image from "next/image";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Servers",
  description: "Features, specs and custom map locations of the CSG ARMA 3 Exile Chernarus Isles server.",
  ...pageMeta("/servers"),
};

export default function Servers() {
  return (
    <Page>
      <H1>
        CSG ARMA 3 Exile Chernarus Isles
      </H1>
      <H2>
        Features
      </H2>
      <List>
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
        <li>Custom Loot Table</li>
        <li>Custom Traders</li>
        <li>Custom Missions</li>
        <li>Custom Static Missions</li>
        <li>Custom Locations</li>
        <li>Large variety of high quality mods</li>
        <li>Advanced Towing</li>
        <li>Advanced Urban Rappelling</li>
        <li>Better UI</li>
        <li>Roaming AI</li>
        <li>Territory Payment Warnings</li>
        <li>Helicopter Crashes</li>
        <li>Loot Drops</li>
        <li>Extra XM8 Apps</li>
        <li>Unique Flags</li>
        <li>Black Market trader</li>
        <li>Revive Script</li>
        <li>Claim Vehicle</li>
      </List>
      <H2>
        Our Server
      </H2>
      <H3>
        Server Specs
      </H3>
      <List>
        <li>Intel Xeon E3-1270v6 - 4 cores/8 threads at 3.8Ghz</li>
        <li>32 Gb DDR4 ECC 2400Mhz RAM</li>
        <li>
          2x Intel PCIe NVMe SSDs RAID 1 - Read 1200 MB/s, Write 600 MB/s
        </li>
        <li>Windows Server 2016</li>
        <li>1Gb/s Upload, 500Mb/s Download</li>
      </List>
      <Image
        alt="CSG Chernarus Isles Klen Trader"
        src={media("map1.avif")}
        width="1125"
        height="656"
        sizes="(max-width: 1125px) 100vw, 1125px"
      />
      <P>
        Many hours of work have been put towards giving the traders a
        signature apocalyptic look. A large variety of special features have
        been added to further increase functionality and immersion such as
        extra detailing, trader animations and apocalyptic soundtracks playing
        from the radios.
      </P>
      <H2>
        Our Map
      </H2>
      <H3>
        Map Development
      </H3>
      <P>
        New areas have been added to the map such as the improved North East
        Airfield and Custom Built military bases containing hidden secrets to
        the origin of the Apocalypse. The downfall of society is evident all
        through the map. Everything from soundtracks, to custom weather
        scripts have been added to create a new environment that captures some
        of the original DayZ magic.
      </P>
      <Image
        alt="CSG Chernarus Isles Berezino Camp"
        src={media("map2.avif")}
        width="1125"
        height="593"
        sizes="(max-width: 1125px) 100vw, 1125px"
      />
      <P>
        Each trader has been built with a backstory in mind.
      </P>
      <P>
        The Klen Trader, once a popular campground, and summer getaway was
        overtaken by the virus and abandoned for many years. Survivors later
        stumbled upon it, and fortified it as their new home, transporting
        many crates from the Rify ship wreck to be used as walls. The
        stockpile of loot they built up is now for bargain to other survivors.{" "}
      </P>
      <P>
        The Stary Sobor Trader has a similar story to Klen. The old factory
        was abandoned after the outbreak of the virus, and several survivors
        hid their supplies deep inside the concrete jungles of the
        installation. As their group expanded, so did their gear stockpile
        until they decided to barter it away to the highest bidder.
      </P>
      <P>
        The Zelenogorsk trader, the largest hospital center in Chernarus, was
        over loaded with the sick as the outbreak spread. Because of its
        importance, U.N. Forces were quick to reinforce the installation, and
        protect the hospital from any desperate survivors attempting to steal
        the medical supplies there. Many fights broke out around the premise,
        hence all the carnage that surrounds the trade zone&apos;s walls. It
        now stands as a beacon of hope for the small remaining population of
        Chernarus and offers help to those who come to them without hostile
        intent.
      </P>
      <Image
        alt="CSG Chernarus Isles North East Airfield C130 Crash"
        src={media("map3.avif")}
        width="1125"
        height="593"
        sizes="(max-width: 1125px) 100vw, 1125px"
      />
      <H3>
        Custom Locations
      </H3>
      <P>
        Many new military bases, sites, and evac sites have been added for
        increased military presence and gear. Civilian houses are not chocked
        full of automatic assault rifles, as is often the case on Exile
        servers. For this reasons, you must venture out to the higher risk
        sites to gain higher quality loot.
      </P>
      <H4>
        The custom military bases are:
      </H4>
      <List>
        <li>Airbase Tent City (North West Airfield)</li>
        <li>Strelok Airbase (North East Airfield)</li>
        <li>Balota Airfield Field Treatment Area</li>
        <li>Cherno Containment Camp</li>
        <li>Elektro Triage Center</li>
        <li>Berezino Field Hospital</li>
        <li>Veresnik Military Compound</li>
        <li>Installation 175</li>
      </List>
    </Page>
  );
}
