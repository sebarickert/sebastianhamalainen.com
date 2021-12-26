export const isExternalLink = (link: string): boolean =>
  link.substr(0, 8) === 'https://' || link.substr(0, 7) === 'http://';
