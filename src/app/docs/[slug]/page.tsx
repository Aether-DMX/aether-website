import { getDocBySlug } from '@/lib/markdown'
import styles from '../docs.module.css'
import Link from 'next/link'

type Params = { params: { slug: string } }

export default async function Page({ params }: Params) {
  const slug = params.slug
  const doc = await getDocBySlug(slug)
  if (!doc) {
    return (
      <div className={styles.docPageWrapper}>
        <div className={styles.docPageContainer}>
          <Link href="/docs" className={styles.backLink}>← Back to Documentation</Link>
          <div className="mt-12 text-center">
            <h1 className="text-3xl font-bold mb-4 text-white">Document Not Found</h1>
            <p className="text-[#71717a] mb-6">The document "{slug}" doesn't exist.</p>
            <Link href="/docs" className={styles.btn}>
              View All Docs
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className={styles.docPageWrapper}>
      <div className={styles.docPageContainer}>
        <Link href="/docs" className={styles.backLink}>← Back to Documentation</Link>
        <header className={styles.docHeader}>
          <div>
            <h1 className={styles.docTitle}>{doc.meta.title}</h1>
            {doc.meta.description && (
              <p className={styles.docDescription}>{doc.meta.description}</p>
            )}
          </div>
          {doc.meta.version && (
            <span className={styles.badge}>{doc.meta.version}</span>
          )}
        </header>
        <article className={styles.docContent} dangerouslySetInnerHTML={{ __html: doc.contentHtml }} />
        <footer className="mt-12 pt-6 border-t border-[#1f1f24]">
          <Link href="/docs" className={styles.backLink}>← Back to Documentation</Link>
        </footer>
      </div>
    </main>
  )
}
