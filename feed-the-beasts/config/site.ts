export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Feed THE Beasts",
  description: "Delicious eats for the hungry beasts",
  navItems: [
    {
      label: "Restaurants",
      href: "/restaurants",
    },
    {
      label: "Dishes",
      href: "/dishes",
    }
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Find Restaurants",
      href: "/restaurants",
    },
    {
      label: "Find Dishes",
      href: "/dishes",
    },
    {
      label: "Cart",
      href: "/cart",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
