import Link from "next/link";

export default function OrdersList() {
    return (
        <main>
            <h1>Order list</h1>

            <ul>
                <li>
                    <Link href="/orders/1">1</Link>
                </li>
                <li>
                    <Link href="/orders/2">2</Link>
                </li>

                <li>
                    <Link href="/orders/3">3</Link>
                </li>

                <li>
                    <Link href="/orders/4">4</Link>
                </li>

            </ul>
        </main>
    )
}