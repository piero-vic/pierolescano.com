export const OWNER_DID = "did:plc:jssrfnxgnmimpo5hndcirt6r";

export type SocialItem = {
  key: string;
  name: string;
  link: string;
  icon: string;
};

export const SOCIAL_ITEMS: SocialItem[] = [
  {
    key: "github",
    name: "GitHub",
    link: "https://github.com/piero-vic",
    icon: "prime:github",
  },
  {
    key: "linkedin",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/piero-lescano",
    icon: "prime:linkedin",
  },
  {
    key: "atproto",
    name: "ATProto",
    link: `https://pds.ls/at://${OWNER_DID}`,
    icon: "ph:at",
  },
  {
    key: "email",
    name: "Email",
    link: "mailto:me@pierolescano.com",
    icon: "ph:envelope-simple-fill",
  },
];
