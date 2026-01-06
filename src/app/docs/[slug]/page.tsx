import { getDocBySlug } from '@/lib/markdown'
import styles from '../docs.module.css'
import Link from 'next/link'

type Params = { params: { slug: string } }

export default async function Page({ params }: Params) {
  const slug = params.slug
  const doc = await getDocBySlug(slug)
  if (!doc) {
    return (
      <main className={styles.docContainer}>
        <h1>Not found</h1>
        <p>Document "{slug}" not found.</p>
        <p>
          <Link href="/docs">Back to docs</Link>
        </p>
      </main>
    )
  }

  return (
    <main className={styles.docContainer}>
      <p>
        <Link href="/docs">← Documentation</Link>
      </p>
      <h1>{doc.meta.title} <span className={styles.badge}>{doc.meta.version}</span></h1>
      <p className={styles.docMeta}>{doc.meta.description}</p>
      <article className={styles.docContent} dangerouslySetInnerHTML={{ __html: doc.contentHtml }} />
    </main>
  )
}
