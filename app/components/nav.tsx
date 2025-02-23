import Link from "next/link";
import { Button } from "@mui/material";

export const Nav = () => {
    return (
        <nav>
            <Link href="/">
                <Button variant="contained" color="primary">
                    Home
                </Button>
            </Link>
            <Link href="/edit">
                <Button variant="contained" color="primary">
                    Edit
                </Button>
            </Link>
            <Link href="/docs">
                <Button variant="contained" color="primary">
                    Docs
                </Button>
            </Link>
        </nav>
    );
};
