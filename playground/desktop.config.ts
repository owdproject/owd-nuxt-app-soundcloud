import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  theme: '@owdproject/nuxt-theme-nova',
  apps: ['@owdproject/nuxt-app-soundcloud'],
  systemBar: { enabled: true, startButton: true },
  about: {
    title: 'SoundCloud (playground)',
    subtitle: 'app-soundcloud · theme-nova',
    href: 'https://github.com/owdproject/nuxt-app-soundcloud',
    versionText: 'Nuxt Desktop',
    icons: [
      {
        title: 'Open Web Desktop',
        name: 'mdi:hexagon-multiple-outline',
        size: 24,
      },
    ],
  },
})
