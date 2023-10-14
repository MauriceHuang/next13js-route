import Link from "next/link";

export default function page() {
    return (
        <>
            <h1>Order Records</h1>
            <Link href='/orders/lists'>Orders</Link >
        </>
    )
}