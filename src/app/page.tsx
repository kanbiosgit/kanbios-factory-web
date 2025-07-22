import Hero from '@/components/homepage/Hero'
import MetricsSection from '@/components/homepage/Metrics'
import Process from '@/components/homepage/Process'
import CaseStudiesSection from "@/components/homepage/CaseStudy";
import FAQSection from "@/components/homepage/FAQ";
import CTASection from "@/components/homepage/CTA";
import TechnologiesSection from "@/components/homepage/Technologies";


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
