import Card from '@/app/OurPosts3/card';

import Link from 'next/link';
import React from 'react'

function AllBlog() {
    return (

        <div className="container mx-auto p-4 mt-10">

            {/* BLOG SECTION */}

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
            <div className="flex flex-wrap justify-center">
                <Link href={"/Blog-Posts/Train-Bus"}>
                    <Card
                        image="/TrianOrBus.jpg"
                        category="Travel"
                        title="Train or Bus Journey? Which One Suits You?"
                        description="When it comes to traveling, one of the most common decisions you'll face is whether to take a train or a bus. Both modes of transportation have their own unique advantages and disadvantages, and the best choice often depends on factors like cost, convenience, comfort, and the nature of your trip. Let’s take a closer look at both options to help you decide which one suits your needs."
                    />
                </Link>
                <Link href={"/Blog-Posts/Best-Webs"}>
                    <Card
                        image="/BestWeb.jpg"
                        category="Development"

                        title="Best Websites to Research for Your Next Project"
                        description="When starting a new project, whether it’s a website, an app, or even a research paper, having the right"
                    />
                </Link>
                <Link href={"/Blog-Posts/Dance"}>
                    <Card
                        image="/Dance.jpg"
                        category="Sports"
                        title="How to Be a Dancer in 2024 with Proper Skills"
                        description="Dancing is not only a form of art, but it’s also a way to express yourself, stay fit, and connect with."
                    />
                </Link>
            </div>
            <div className="flex flex-wrap justify-center">
                <Link href={"/Blog-Posts/Best-Singer"}>
                    <Card
                        image="/Singer.jpg"
                        category="Travel"
                        title="The Best Singers on the Charts in 2024"
                        description="In 2023, the music industry witnessed an array of talented artists who topped the charts, capturing the  of listeners globally"
                    />
                </Link>
                <Link href={"/Blog-Posts/Business"}>
                    <Card
                        image="/Business.jpg"
                        category="Development"

                        title="How to start export import business from home?"
                        description="Starting an import-export business from home can be a lucrative venture with the right approach and planning. Here’s a step-by-step guide to help you get started"
                    />
                </Link>
                <Link href={"/Blog-Posts/History-Football"}>
                    <Card
                        image="/Football.jpeg"
                        category="Sports"
                        title="How to Be a Professional Footballer in 2023"
                        description="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
                    />
                </Link>
            </div>

        </div>

    )
}

export default AllBlog



