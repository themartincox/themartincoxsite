export type TutoringLevel = 'GCSE' | 'A-Level' | 'Undergraduate' | 'Post-graduate';

export interface LocationData {
    name: string;
    slug: string;
    counties?: string[];
    schools?: string[];
    description?: string;
}

export interface LevelData {
    title: string;
    slug: string;
    description: string;
    curriculum?: string;
    icon: string;
}

export const LOCATIONS: LocationData[] = [
    { name: 'Nottingham', slug: 'nottingham', schools: ['Nottingham High School', 'Trent College', 'The Becket School'] },
    { name: 'London', slug: 'london', schools: ['City of London School', 'Westminster School', 'St Paul\'s School'] },
    { name: 'Surrey', slug: 'surrey', schools: ['Guildford High School', 'Charterhouse', 'Royal Grammar School'] },
    { name: 'Kent', slug: 'kent', schools: ['Sevenoaks School', 'Tonbridge School', 'The King\'s School Canterbury'] },
    { name: 'Manchester', slug: 'manchester', schools: ['Manchester Grammar School', 'Withington Girls\' School'] },
    { name: 'Reading', slug: 'reading', schools: ['Reading School', 'Abbey School', 'Kendrick School'] },
    { name: 'Sheffield', slug: 'sheffield', schools: ['Sheffield High School', 'Tapton School'] },
    { name: 'Leicester', slug: 'leicester', schools: ['Leicester Grammar School', 'Wyggeston and Queen Elizabeth I College'] },
    { name: 'Birmingham', slug: 'birmingham', schools: ['King Edward VI High School', 'Bishop Vesey\'s Grammar School'] },
    { name: 'Oxford', slug: 'oxford', schools: ['Magdalen College School', 'Oxford High School'] },
    { name: 'Cambridge', slug: 'cambridge', schools: ['The Perse School', 'The Leys School'] },
    { name: 'Warwick', slug: 'warwick', schools: ['Warwick School', 'King\'s High School'] },
    { name: 'Durham', slug: 'durham', schools: ['Durham School', 'John Snow College'] },
];

export const LEVELS: Record<TutoringLevel, LevelData> = {
    'GCSE': {
        title: 'GCSE Business Studies',
        slug: 'gcse-business-studies',
        description: 'Building fundamental business knowledge and exam confidence. Focus on AQA, Edexcel, and OCR specifications.',
        curriculum: 'AQA, Edexcel, and OCR',
        icon: '📚'
    },
    'A-Level': {
        title: 'A-Level Business Studies',
        slug: 'a-level-business-studies',
        description: 'Mastering complex theories, case studies, and critical analysis. Advanced preparation for university entry.',
        curriculum: 'AQA, Edexcel, and OCR Business',
        icon: '🎓'
    },
    'Undergraduate': {
        title: 'Business Studies Degree',
        slug: 'business-studies-degree',
        description: 'Support for degree-level business, management, and marketing modules. Specialised help with dissertation and critical theory.',
        curriculum: 'University-level management and marketing',
        icon: '🏛️'
    },
    'Post-graduate': {
        title: 'Masters Business Studies',
        slug: 'masters-business-studies',
        description: 'Specialised guidance for MBA and Masters level business studies. Strategic leadership, finance, and organisational behaviour.',
        curriculum: 'MBA and Specialised Masters',
        icon: '🚀'
    }
};

export const TESTIMONIALS = [
    {
        name: 'Anne',
        text: 'Martin is an expert at adapting his teaching style to make learning both engaging and memorable. He uses practical examples to bring business concepts to life, helping my daughter stay focused and inspired while building a deep understanding of the subject.',
        rating: 5
    },
    {
        name: 'Jake',
        text: 'Faced with a tight deadline for a third-year Marketing degree assignment, Martin provided immediate and effective support. He understood the challenges of my son\'s late-diagnosed ADD and was instrumental in keeping his studies on track and delivering high-quality work on time.',
        rating: 5
    },
    {
        name: 'Karin',
        text: 'A fantastic tutor with a methodical approach to complex problems. Martin breaks down difficult topics into manageable sections, bringing clarity and confidence to the learning process. He\'s not only brilliant at what he does but also a genuinely supportive person.',
        rating: 5
    },
    {
        name: 'Rachel',
        text: 'An outstanding and adaptable tutor. Martin helped me achieve an A grade in my MBA assignment through insightful feedback and a calm, knowledgeable approach. His dedication to his students\' success is truly remarkable.',
        rating: 5
    },
    {
        name: 'Jeanette',
        text: 'Martin\'s patience and ability to explain topics using multiple approaches have significantly boosted my daughter\'s confidence. His sense of humour and calm manner make every session productive and enjoyable.',
        rating: 5
    },
    {
        name: 'Shokat',
        text: 'An exceptional marketing lecturer who blends academic rigour with real-world industry insights. Martin\'s engaging teaching style and commitment to staying current with industry trends made a huge difference in my Global MBA studies. He achieves the perfect balance of theory and practice.',
        rating: 5
    },
    {
        name: 'Saleh',
        text: 'Martin\'s Marketing Management classes were a highlight of my MBA. His ability to bridge the gap between academic study and real-world application is invaluable. He is deeply dedicated to student success and makes complex topics relatable and engaging.',
        rating: 5
    }
];

export function getAllSlugs() {
    const slugs: { slug: string }[] = [];

    // Base level pages (e.g., /tutoring/gcse-business-studies)
    Object.values(LEVELS).forEach(level => {
        slugs.push({ slug: level.slug });
    });

    // Location pages (e.g., /tutoring/nottingham)
    LOCATIONS.forEach(loc => {
        slugs.push({ slug: loc.slug });
    });

    // Matrix pages (e.g., /tutoring/gcse-business-studies-london)
    Object.values(LEVELS).forEach(level => {
        LOCATIONS.forEach(loc => {
            slugs.push({ slug: `${level.slug}-${loc.slug}` });
        });
    });

    return slugs;
}

export function getParamsFromSlug(slug: string) {
    // Try to match matrix first (long to short)
    for (const level of Object.values(LEVELS)) {
        for (const loc of LOCATIONS) {
            if (slug === `${level.slug}-${loc.slug}`) {
                return { level, location: loc };
            }
        }
    }

    // Try level only
    for (const level of Object.values(LEVELS)) {
        if (slug === level.slug) return { level, location: null };
    }

    // Try location only
    for (const loc of LOCATIONS) {
        if (slug === loc.slug) return { level: null, location: loc };
    }

    return { level: null, location: null };
}
