export default defineAppConfig({
  docus: {
    title: "Fat Duck Gaming",
    description: "Australia's favourite FiveM community",
    image:
      "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    // socials: {
    //   twitter: "nuxtstudio",
    //   github: "nuxt-themes/docus",
    // },
    // github: {
    //   dir: ".starters/default/content",
    //   branch: "main",
    //   repo: "docus",
    //   owner: "nuxt-themes",
    //   edit: true,
    // },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: false,
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
    footer: {
      credits: false,
      iconLinks: [],
      textLinks: [
        {
          text: 'Support',
          href: 'https://support.fatduckgaming.com',
          target: '_blank',
          rel: 'noopener'
        },
        {
          text: 'Discord',
          href: 'https://discord.gg/fatduckgaming',
          target: '_blank',
          rel: 'noopener'
        },
        {
          text: 'Forums',
          href: 'https://fatduckgaming.com',
          target: '_blank',
          rel: 'noopener'
        }
      ],
    },
  },
});
