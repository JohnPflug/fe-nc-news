import { Link } from 'react-router';

export default function Header() {
    return (
        <header>
            <h1>NC News</h1>
            <nav>
                <Link to="/articles">Articles</Link>
            </nav>
        </header>
    )
}