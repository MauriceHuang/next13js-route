import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/products">
                        Products
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link href="/cart">
                        Cart
                    </Link>
                </li>
                <li>
                    <Link href="/checkout">
                        Checkout
                    </Link>
                </li>
                <li>
                    <Link href="/orders">
                        Orders
                    </Link>
                </li>
                <li>
                    <Link href="/account">
                        My Account
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        Login
                    </Link>
                </li>
                <li>
                    <Link href="/register">
                        Sign Up
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;