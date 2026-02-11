import { Metadata } from 'next';
import { getAllSlugs, getParamsFromSlug } from '@/lib/tutoring-data';
import TutoringPage from '../page';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return getAllSlugs();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const { level, location } = getParamsFromSlug(slug);

    if (!level && !location) return {};

    const cityName = location?.name || 'Nottingham';
    const levelName = level?.title || 'Business';

    const title = `Top-Rated ${levelName} Tutoring in ${cityName} | Martin Cox`;
    const description = level?.description || `Top-rated private business studies tutoring in ${cityName} and online. GCSE, A-Level, Degree, and Post-graduate levels. Specialised support for ADHD students.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
        }
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { level, location } = getParamsFromSlug(slug);

    if (!level && !location) {
        notFound();
    }

    return <TutoringPage level={level} location={location} />;
}
