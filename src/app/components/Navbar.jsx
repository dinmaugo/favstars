import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
        <ul   className="flex justify-between h-[100px] bg-blue-900 text-white items-center text-3xl">
            <Link href='/'>
            <li>Home</li>
            </Link>
            <Link href='/Course'>
            <li>Course</li>
            </Link>
            <Link href='/About'>
            <li>About</li>
            </Link>
             <Link href='/Contact'>
            <li>Contact</li>
            </Link>
        </ul>
    </nav>
  )
}
