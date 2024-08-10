import Link from 'next/link';

export default function Example() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">
       <h1>Hola Example</h1>
      </span>

      <Link href={'/about'}>About Page</Link>
    </main>
  )
}