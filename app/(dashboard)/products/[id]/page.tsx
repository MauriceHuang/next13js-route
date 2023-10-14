export default function page({ params }: { params: { id: string } }) {
    return (
        <h1>Products {params.id}</h1>
    )
}