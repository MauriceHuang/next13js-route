import Link from "next/link";

export default function ProductsList() {
    return (
        <main>
            <h1>Products list</h1>

            <ul>
                <li>
                    <Link href="/products/1">1</Link>
                </li>
                <li>
                    <Link href="/products/2">2</Link>
                </li>

                <li>
                    <Link href="/products/3">3</Link>
                </li>

                <li>
                    <Link href="/products/4">4</Link>
                </li>

            </ul>
        </main>
    )
}