'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter();
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const searchQuery = event.target.search.value;
        router.push(`/search?q=${searchQuery}`);
    };
    return (
        <>
            <h1>Search here!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" placeholder="Search here!" />
                <button type="submit">Search</button>
            </form>
        </>
    )
}