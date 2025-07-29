import Hero from '@/app/homepage/sections/Hero'
import MetricsSection from '@/app/homepage/sections/Metrics'
import Process from '@/app/homepage/sections/Process'
import CaseStudiesSection from "@/app/homepage/sections/CaseStudy";
import FAQSection from "@/app/homepage/sections/FAQ";
import CTASection from "@/app/homepage/sections/CTA";
import TechnologiesSection from "@/app/homepage/sections/Technologies";


export default function Home() {
    return (
        <>
            <Hero />
            <MetricsSection />
            <Process />
            <CaseStudiesSection/>
            <TechnologiesSection/>
            <FAQSection/>
            <CTASection/>
        </>
    )
}
