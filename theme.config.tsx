import React from "react";

export default {
  useNextSeoProps() {
    return {
      title: "Docs - Minecraft Utilities",
      titleTemplate: '%s - Spectex',
      description: "Official Documentation for Minecraft Utilities Discord Bot.",
      openGraph: {
        title: "Docs - Minecraft Utilities",
        description: "Official Documentation for Minecraft Utilities Discord Bot.",
        type: "website",
        url: "https://minecraftutilities.github.io",
        site_name: "Minecraft Utilities",
        images: [
          {
            url: "https://minecraftutilities.github.io/opengraph-image.png?a315f3e467acaec4",
            width: 800,
            height: 600,
            alt: "Minecraft Utilities",
          },
        ],
      },
      twitter: {
        handle: "@theashiqtasdid",
        site: "@theashiqtasdid",
        cardType: "summary_large_image",
      },
    };
  },

  logo: <span>Minecraft Utilities</span>,
  project: {
    link: "https://github.com/minecraftutilities/documentation",
  },
  docsRepositoryBase: "https://github.com/minecraftutilities/documentation",
  footer: {
    text: "2024 - Minecraft Utilities",
  },
  head: (
    <>
      <meta name="title" content="Docs - Minecraft Utilities " />
      <meta
        name="description"
        content="Official Documentation for Minecraft Utilities Discord Bot."
      />
      <meta
        name="keywords"
        content="minecraft, utitlities, mcutils, discord bot, documentation, spectex"
      />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="SPECTEX" />

      <meta property="og:title" content="Docs - Minecraft Utilities" />
      <meta property="og:site_name" content="Minecraft Utilities" />
      <meta property="og:url" content="https://minecraftutilities.github.io" />
      <meta
        property="og:description"
        content="The Official Documentation of the Discord Bot called Minecraft Utilities. A feature-rich bot for Minecraft tools & utilities. Easily, get real-time information about a Minecraft Server, Player Skin, UUID & much more!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://minecraftutilities.github.io/opengraph-image.png?a315f3e467acaec4" />
    </>
  ),
};
