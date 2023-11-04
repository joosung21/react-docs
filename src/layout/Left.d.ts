export interface NavProps {
  to: string
  title: string
  children: React.ReactNode
  key: number
}

export interface NavLink {
  title: string
  path: string
  parent: string
}
