"use client"

import {
    type CarouselApi,
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card"
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import {
//     Card,
//     CardHeader,
//     CardTitle,
//     CardDescription,
//     CardContent,
//     CardFooter
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";


export default function PortfolioCarousel() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <Carousel setApi={setApi} orientation="vertical">
            <CarouselContent className="-ml-4">
                <CarouselItem className="basis-1/3 pl-4">
                    <Card className="w-full min-w-md mx-auto text-center">
                        <Image className="dark:invert w-125 h-25 mx-auto"
                            src="/bar.png"
                            alt="Next.js logo"
                            width={180}
                            height={38}
                            priority />
                        <h1>Tech Fitness Pal</h1>
                        <p>Constructed a Web Application reminiscent of MyFitnessPal, allowing users to log meals, track
                            calorie goals, and visualize fitness progress.</p>
                        <p>Technologies: Java, Vue.js, PostgreSQL, MVC, Spring Boot, HTML, CSS</p>
                        <Link href="https://github.com/Csbaumgard/M3CS-TechFitnessPal.git">Github</Link>
                    </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/3 pl-4">
                    <Card className="w-full min-w-md mx-auto text-center image-center">
                        <Image className="dark:invert w-125 h-25 mx-auto"
                            src="/bar.png"
                            alt="Next.js logo"
                            width={180}
                            height={38}
                            priority />
                        <h1>TEnmo Money Transfer</h1>
                        <p>Implemented a RESTful API Server and Command-Line Application that facilitates money
                            transfers between users stored in a remote database.</p>
                        <p>Technologies: Java, PostgreSQL, OOP, MVC, Spring Boot, pgAdmin</p>
                        <Link href="https://github.com/Csbaumgard/M2CS-TEnmo-Money-Transfer.git">Github</Link>
                    </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/3 pl-4">
                    <Card className="w-full min-w-md mx-auto text-center">
                        <Image className="dark:invert w-125 h-25 mx-auto"
                            src="/bar.png"
                            alt="Next.js logo"
                            width={180}
                            height={38}
                            priority />
                        <h1>Vending Machine Software</h1>
                        <p>Designed and implemented a vending machine application capable of allowing customers to
                            purchase products from their computers for their convenience.</p>
                        <p>Technologies: Java, OOP, Git</p>
                        <Link href="https://github.com/Csbaumgard/M1CS-Vending-Machine-Software.git">Github</Link>
                    </Card>
                </CarouselItem>
            </CarouselContent >
            <CarouselPrevious />
            <CarouselNext />
        </Carousel >
    )
}
