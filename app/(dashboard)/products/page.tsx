import Link from "next/link";

export default function page() {
    return (
        <>
            <h1>Products page</h1>
            <Link href='/products/list'>Products</Link >
        </>
    )
}