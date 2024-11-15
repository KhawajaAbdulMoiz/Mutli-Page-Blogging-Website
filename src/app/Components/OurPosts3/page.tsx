// pages/index.js
import Card from './card.js';

export default function Blog3() {
    return (
        <div className="container mx-auto p-4 mt-10">
            <div className="flex flex-wrap justify-center">
                <Card
                    image="/blg1.jpg"
                    category="Travel"
                    title="8 Rules Of Travelling In Sea You Need To Know"
                    description="Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs."
                />
                <Card
                    image="/blg3.jpg"
                    category="Development"

                    title="How to build a strong portfolio and get a Job in UI/UX"
                    description="Capitalize on low-hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs."
                />
                <Card
                    image="/blog2.jpg"
                    category="Sports"
                    title="How to Be a Professional Footballer in 2023"
                    description="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
                />
            </div>

            {/* BLOG SECTION */}
            <h1 className="mt-[12%] ml-[5rem] p-[0.5rem] pl-[1.5rem] pr-[1.5rem] text-[48px] font-200 font-raleway text-black">Popular Post</h1>
            <div className="flex flex-wrap justify-center">
                <Card
                    image="/blg1.jpg"
                    category="Travel"
                    title="8 Rules Of Travelling In Sea You Need To Know"
                    description="Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs."
                />
                <Card
                    image="/blg3.jpg"
                    category="Development"

                    title="How to build a strong portfolio and get a Job in UI/UX"
                    description="Capitalize on low-hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs."
                />
                <Card
                    image="/blog2.jpg"
                    category="Sports"
                    title="How to Be a Professional Footballer in 2023"
                    description="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
                />
            </div>
            <div className="flex flex-wrap justify-center">
                <Card
                    image="/blg1.jpg"
                    category="Travel"
                    title="8 Rules Of Travelling In Sea You Need To Know"
                    description="Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs."
                />
                <Card
                    image="/blg3.jpg"
                    category="Development"

                    title="How to build a strong portfolio and get a Job in UI/UX"
                    description="Capitalize on low-hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs."
                />
                <Card
                    image="/blog2.jpg"
                    category="Sports"
                    title="How to Be a Professional Footballer in 2023"
                    description="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
                />
            </div>
            <div className="flex flex-wrap justify-center">
                <Card
                    image="/blg1.jpg"
                    category="Travel"
                    title="8 Rules Of Travelling In Sea You Need To Know"
                    description="Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs."
                />
                <Card
                    image="/blg3.jpg"
                    category="Development"

                    title="How to build a strong portfolio and get a Job in UI/UX"
                    description="Capitalize on low-hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs."
                />
                <Card
                    image="/blog2.jpg"
                    category="Sports"
                    title="How to Be a Professional Footballer in 2023"
                    description="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
                />
            </div>
            
        </div>


    );
}
