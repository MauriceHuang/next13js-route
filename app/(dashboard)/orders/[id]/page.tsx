export default function page({ params }: { params: { id: string } }) {
    return (
        <h1>Order {params.id}</h1>
    )
}