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
        description: 'Support for degree-level business, management, and marketing modules. Specialized help with dissertation and critical theory.',
        curriculum: 'University-level management and marketing',
        icon: '🏛️'
    },
    'Post-graduate': {
        title: 'Masters Business Studies',
        slug: 'masters-business-studies',
        description: 'Specialized guidance for MBA and Masters level business studies. Strategic leadership, finance, and organizational behavior.',
        curriculum: 'MBA and Specialized Masters',
        icon: '🚀'
    }
};

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
