import Meta from '../components/meta'

type LayoutProps = {
  preview: boolean
  children: React.ReactNode
}

export default function Layout({ preview, children }: LayoutProps) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}
