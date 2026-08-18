import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Sparkles, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Recommendations — BookMind',
  description: 'A curated collection of books picked for your reading taste.',
}

const recommendations = [
  { title: 'The Book Thief', author: 'Markus Zusak', genre: 'Historical fiction', rating: 4.8, match: 96, isbn: '9780375842207', reason: 'Lyrical storytelling and deeply human characters' },
  { title: 'The Kite Runner', author: 'Khaled Hosseini', genre: 'Literary fiction', rating: 4.7, match: 93, isbn: '9781594631931', reason: 'A moving story of friendship and redemption' },
  { title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fiction', rating: 4.6, match: 89, isbn: '9780061122415', reason: 'Reflective, hopeful, and rich with meaning' },
  { title: 'Sapiens', author: 'Yuval Noah Harari', genre: 'History', rating: 4.6, match: 86, isbn: '9780062316097', reason: 'Big ideas told through an accessible narrative' },
  { title: '1984', author: 'George Orwell', genre: 'Classic fiction', rating: 4.7, match: 84, isbn: '9780451524935', reason: 'Thought-provoking themes and lasting relevance' },
  { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Classic romance', rating: 4.7, match: 81, isbn: '9780141439518', reason: 'Sharp wit, memorable characters, and slow-burn romance' },
]

const cover = (isbn: string) => `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`

export default function RecommendationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" className="flex items-center gap-2 font-serif text-xl font-bold">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground"><BookOpen className="size-5" /></span>
            BookMind
          </Link>
          <Button variant="ghost" render={<Link href="/" />}><ArrowLeft data-icon="inline-start" />Back to home</Button>
        </div>
      </header>

      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-14 lg:px-8 lg:py-20">
        <div className="flex max-w-3xl flex-col gap-6">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
            <Sparkles className="size-7" aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-accent-foreground">Picked for your taste</p>
            <h1 className="text-balance font-serif text-5xl font-semibold leading-tight md:text-6xl">Your next favorite book is here.</h1>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">Thoughtful recommendations based on the stories, ideas, and writing styles you enjoy most.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((book) => (
            <article key={book.title} className="group flex overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-[38%] shrink-0 bg-muted p-3">
                <img src={cover(book.isbn)} alt={`Cover of ${book.title}`} className="h-full min-h-56 w-full rounded-lg object-cover shadow-md" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-3 p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-accent-foreground">{book.match}% MATCH</span>
                  <span className="flex items-center gap-1 text-sm font-semibold"><Star className="size-4 fill-accent text-accent" />{book.rating}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-pretty font-serif text-xl font-semibold leading-tight">{book.title}</h2>
                  <p className="text-sm text-muted-foreground">{book.author}</p>
                </div>
                <p className="text-xs font-medium text-foreground">{book.genre}</p>
                <p className="mt-auto text-pretty text-sm leading-relaxed text-muted-foreground">{book.reason}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-primary p-7 text-primary-foreground md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <Sparkles className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <h2 className="font-serif text-2xl font-semibold">Want a more personal list?</h2>
              <p className="mt-1 text-sm leading-relaxed text-primary-foreground/70">Explore the library and choose a book you already love.</p>
            </div>
          </div>
          <Button variant="secondary" render={<Link href="/#explore" />}>Explore books</Button>
        </div>
      </section>
    </main>
  )
}
