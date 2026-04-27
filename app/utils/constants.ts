export const META_DESCRIPTION
  = 'Heydar Gerayzade, a front-end developer with over 10 years of hands-on experience in tech'

export type SocialName = 'github' | 'linkedin' | 'telegram' | 'instagram'

export interface Social {
  name: SocialName
  href: string
}

export const SOCIALS: Social[] = [
  { name: 'github', href: 'https://github.com/gerayzade' },
  { name: 'linkedin', href: 'https://www.linkedin.com/in/heydar-gerayzade/' },
  { name: 'telegram', href: 'https://t.me/gesha97' },
  { name: 'instagram', href: 'https://www.instagram.com/h.gerayzade/' },
]
