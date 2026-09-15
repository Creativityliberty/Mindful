import type { Article } from '@/pages/home/blog/blog-data';

export const ACADEMY_INFO = {
    name: 'FormationSession',
    alternateName: 'Spiritualité 1.618 & FormationSession',
    url: 'https://formationsession.com',
    logo: 'https://formationsession.com/assets/images/logo.png',
    description: 'Plateforme et académie d\'apprentissage holistique et de développement personnel : Lithothérapie, Radiesthésie, LaHoChi, Chakras et Méthodes Contemplatives.',
    coEditor: 'Fabienne Dizy-Olliveaud',
    siret: '98200809600025',
};

/**
 * Builds standard BreadcrumbList JSON-LD
 */
export function generateBreadcrumbSchema(
    items: { name: string; url: string }[],
    origin: string = 'https://formationsession.com'
) {
    return {
        '@type': 'BreadcrumbList',
        'itemListElement': items.map((item, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'name': item.name,
            'item': item.url.startsWith('http') ? item.url : `${origin}${item.url}`,
        })),
    };
}

/**
 * Builds rich Schema.org JSON-LD Graph for the Blog Index (/blog)
 */
export function generateBlogSchema(
    articles: Article[],
    origin: string = 'https://formationsession.com',
    title: string = 'Le Journal Holistique & Spirituel — FormationSession',
    description: string = 'Découvrez nos guides et articles experts en Lithothérapie, Radiesthésie, LaHoChi, harmonisation des Chakras et développement spirituel.'
) {
    const globalKeywords = [
        'lithothérapie',
        'radiesthésie',
        'lahochi',
        'chakras',
        'pendule divinatoire',
        'minéraux et pierres',
        'soins énergétiques',
        'méditation de pleine conscience',
        'orisugi',
        'bien-être holistique',
        'spiritualité 1.618',
        'formations certifiantes en ligne',
    ];

    return JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': `${origin}/#organization`,
                'name': ACADEMY_INFO.name,
                'alternateName': ACADEMY_INFO.alternateName,
                'url': origin,
                'logo': {
                    '@type': 'ImageObject',
                    'url': `${origin}/assets/images/logo.png`,
                },
                'founder': {
                    '@type': 'Person',
                    'name': ACADEMY_INFO.coEditor,
                },
            },
            {
                '@type': 'Blog',
                '@id': `${origin}/blog#blog`,
                'url': `${origin}/blog`,
                'name': title,
                'headline': title,
                'description': description,
                'inLanguage': 'fr-FR',
                'keywords': globalKeywords.join(', '),
                'publisher': {
                    '@id': `${origin}/#organization`,
                },
                'blogPost': articles.map((art) => ({
                    '@type': 'BlogPosting',
                    '@id': `${origin}/blog/${art.slug}#post`,
                    'headline': art.titre,
                    'description': art.description,
                    'url': `${origin}/blog/${art.slug}`,
                    'datePublished': art.dateIso || art.date,
                    'image': art.image.startsWith('http') ? art.image : `${origin}${art.image}`,
                    'keywords': art.keywords ? art.keywords.join(', ') : art.categories.join(', '),
                    'articleSection': art.articleSection || art.categories[0],
                    'author': {
                        '@type': 'Person',
                        'name': art.author?.name || ACADEMY_INFO.coEditor,
                    },
                })),
            },
            generateBreadcrumbSchema([
                { name: 'Accueil', url: '/' },
                { name: 'Blog & Guides', url: '/blog' },
            ], origin),
        ],
    });
}

/**
 * Builds rich Schema.org JSON-LD Graph for an individual Article (/blog/:slug)
 */
export function generateArticleSchema(
    article: Article,
    origin: string = 'https://formationsession.com'
) {
    const imageUrl = article.image.startsWith('http') ? article.image : `${origin}${article.image}`;
    const articleUrl = `${origin}/blog/${article.slug}`;
    const authorName = article.author?.name || ACADEMY_INFO.coEditor;
    const authorRole = article.author?.role || 'Formatrice Holistique';

    const keywordsString = (article.keywords && article.keywords.length > 0)
        ? article.keywords.join(', ')
        : article.categories.join(', ');

    return JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': `${origin}/#organization`,
                'name': ACADEMY_INFO.name,
                'alternateName': ACADEMY_INFO.alternateName,
                'url': origin,
                'logo': {
                    '@type': 'ImageObject',
                    'url': `${origin}/assets/images/logo.png`,
                },
            },
            {
                '@type': 'Person',
                '@id': `${origin}/#author-${encodeURIComponent(authorName)}`,
                'name': authorName,
                'jobTitle': authorRole,
                'affiliation': {
                    '@id': `${origin}/#organization`,
                },
            },
            {
                '@type': 'BlogPosting',
                '@id': `${articleUrl}#post`,
                'mainEntityOfPage': {
                    '@type': 'WebPage',
                    '@id': articleUrl,
                },
                'headline': article.titre,
                'name': article.titre,
                'description': article.description,
                'url': articleUrl,
                'inLanguage': 'fr-FR',
                'keywords': keywordsString,
                'articleSection': article.articleSection || article.categories[0],
                'datePublished': article.dateIso || article.date,
                'dateModified': article.dateIso || article.date,
                'timeRequired': `PT${parseInt(article.duree, 10) || 10}M`,
                'image': {
                    '@type': 'ImageObject',
                    'url': imageUrl,
                },
                'author': {
                    '@id': `${origin}/#author-${encodeURIComponent(authorName)}`,
                },
                'publisher': {
                    '@id': `${origin}/#organization`,
                },
                'isPartOf': {
                    '@type': 'Blog',
                    '@id': `${origin}/blog#blog`,
                    'name': 'Blog FormationSession',
                    'url': `${origin}/blog`,
                },
            },
            generateBreadcrumbSchema([
                { name: 'Accueil', url: '/' },
                { name: 'Blog', url: '/blog' },
                { name: article.titre, url: `/blog/${article.slug}` },
            ], origin),
        ],
    });
}
