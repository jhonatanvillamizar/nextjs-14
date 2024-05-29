import { getCollections } from "app/services/shopify/collections"
import Link from "next/link"

export default async function Layout({ children }: { children: React.ReactNode }) {

  const collections = await getCollections()

  return (
    <main>
      <nav>
        {
        collections.map((collection) => (
          <Link href={'store/' + collection.handle} key={collection.id}>
            {collection.title}
          </Link>
        ))
        }
      </nav>
      {children}
    </main>
  )
}