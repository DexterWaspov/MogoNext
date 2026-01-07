import TopLink from "@/components/TopLink";

export default function TopNavigation ({isWhite}: {isWhite: boolean}) {
    const navigation: { title: string; href: string }[] = [
        {
            title: 'about',
            href: '/about'
        },
        {
            title: 'service',
            href: '/service'
        },
        {
            title: 'work',
            href: '/work'
        },
        {
            title: 'blog',
            href: '/blog'
        },
        {
            title: 'contact',
            href: '/contact'
        }
    ];

    return (
        <ul className="max-md:flex max-md:flex-row max-md:flex-wrap max-md:justify-center">
            {navigation.map((item: { title: string; href: string }, index: number) => (
                <TopLink key={index} elem={item} isWhite={isWhite} />
            ))}
        </ul>
    )
}