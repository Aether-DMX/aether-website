import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import type { Processor } from 'unified'

const docsPath = path.join(process.cwd(), 'content', 'docs')

export type DocMeta = {
  title: string
  description?: string
  order?: number
  version?: string
}

export async function getAllDocs(): Promise<Array<{ slug: string; meta: DocMeta }>> {
  const files = await fs.promises.readdir(docsPath)
  const docs = [] as Array<{ slug: string; meta: DocMeta }>
  for (const file of files) {
    if (!file.endsWith('.md')) continue
    const full = path.join(docsPath, file)
    const raw = await fs.promises.readFile(full, 'utf8')
    const { data } = matter(raw)
    docs.push({ slug: file.replace(/\.md$/, ''), meta: data as DocMeta })
  }
  return docs
}

export async function getDocBySlug(slug: string): Promise<{ meta: DocMeta; contentHtml: string } | null> {
  const full = path.join(docsPath, `${slug}.md`)
  try {
    const raw = await fs.promises.readFile(full, 'utf8')
    const { data, content } = matter(raw)
    const result = await remark()
      .use(html as any)
      .process(content)
    const contentHtml = result.toString()
    return { meta: data as DocMeta, contentHtml }
  } catch (e) {
    return null
  }
}
