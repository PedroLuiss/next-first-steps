import Link from 'next/link';
import Example from './example';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">
        Hola Mundo pedro 
      </span>

      <Link href={'/about'}>About Page</Link>

      <Example/>
    </main>
  )
}
