import { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/tutoring-data';
import { blogPosts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://themartincox.co.uk'; // Corrected to .co.uk

    // Base static pages
    const staticPages = [
        '',
        '/about',
        '/portfolio',
        '/blog',
        '/tutoring',
        '/contact',
        '/adhd',
        '/cycling',
        '/book-call',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Tutoring pages
    const tutoringPages = getAllSlugs().map(({ slug }) => ({
        url: `${baseUrl}/tutoring/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // Blog pages
    const blogPostPages = Object.keys(blogPosts).map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(blogPosts[slug].date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...tutoringPages, ...blogPostPages];
}
