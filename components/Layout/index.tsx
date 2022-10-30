import { Navbar } from '../../components';

export interface ILayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
    return (
        <section>
            <Navbar />
            <main>{children}</main>
        </section>
    );
}
