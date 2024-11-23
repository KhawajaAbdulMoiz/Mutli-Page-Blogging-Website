import Card from '@/app/OurPosts3/card';
import Link from 'next/link';

export default function AllBlogsSection() {
    return (
        <div className="container mx-auto p-4 mt-10">
            <div className="flex flex-wrap justify-center">
                <Link href={"/Blog-Posts/Air-Travel-Blog"}>
                    <Card
                        image="/blg1.jpg"
                        category="Travel"
                        title="4 Rules Of Travelling In Sea You Need To Know"
                        description="Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs."
                    />
                </Link>
                <Link href={"/Blog-Posts/UI-UX"}>
                    <Card
                        image="/blg3.jpg"
                        category="Development"
                        title="How to build a strong portfolio and get a Job in UI/UX"
                        description="Capitalize on low-hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs."
                    />
                </Link>
                <Link href={"/Blog-Posts/Footballer"}>
                    <Card
                        image="/blog2.jpg"
                        category="Sports"
                        title="How to Be a Professional Footballer in 2023"
                        description="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
                    />
                </Link>
            </div>
        </div>
    );
}
