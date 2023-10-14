export default function page({ params }: { params: { id: string } }) {
    return (
        <main>
            <h1>You are searching : {params.id}</h1>
            <h2>Results</h2>
        </main>
    )
}