import Link from "next/link"

export default function CourseNav() {
  return (
    <aside>
      <ul>
        <Link href='/Course/frontend'>
        <li>Frontend</li>
        </Link>
        <Link href='/Course/backend'>
        <li>Backend</li>
        </Link>
        <Link href='/Course/product'>
         <li>Product Design</li>
        </Link>
      </ul>
    </aside>
  )
}
