export type CardType = {
  title: string
  description: string
  link: { text: string; url: string } | null
  positionOnDesktop: 'right' | 'left'
  images: string[]
  topOnDesktop: number
  paddingOnDesktop: number
}
