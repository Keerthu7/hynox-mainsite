import { MetadataRoute } from 'next';
import { caseStudies } from './data/case-studies';
import { jobs } from './data/careers'; // Import jobs data

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.hynox.in';

  const staticPages = [
    '/',
    '/about',
    '/cancellation-refund-policy',
    '/careers',
    '/case-studies',
    '/contact',
    '/drop',
    '/marketing',
    '/pricing',
    '/privacy-policy',
    '/shipping-delivery-policy',
    '/team',
    '/terms-and-conditions',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.7,
  }));

  const caseStudyPages = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.9,
  }));

  const careerPages = jobs.map((job) => ({
    url: `${baseUrl}/careers/${job.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.8, // Slightly lower priority than case studies, but higher than static
  }));

  const imageFiles = [
    'approach.jpg', 'avatar.jpg', 'billing_cover.jpeg', 'blogwebsite.jpg', 'campus_cover.jpeg',
    'corporate.png', 'crm_cover.webp', 'custom_software_cover.jpeg', 'dashboard.png',
    'dropshipping_cover.jpeg', 'eccomerce.jpg', 'erp_cover.jpeg', 'favicon.ico', 'google.png',
    'googleads.jpeg', 'graasp_logo.jpg', 'hotstar_logo.svg', 'hotstar-svgrepo.png',
    'hynox_logo.jpg', 'jpnets_logo.jpg', 'kyto_logo.jpg', 'kyto_web.jpeg',
    'malika-garments_web.jpg', 'mallika_garments_logo.jpg', 'member1.jpg', 'member2.jpg',
    'member3.jpg', 'member4.jpg', 'member5.jpg', 'member6.jpg', 'meta_ads.jpeg', 'meta.png',
    'ml_cover.jpg', 'mobile_app_cover.jpeg', 'npglobal_logo.jpg', 'nsk_logo.jpg',
    'nsk_web.jpeg', 'onlinestore.jpg', 'placeholder-logo.png', 'placeholder-logo.svg',
    'placeholder-user.jpg', 'placeholder.jpg', 'placeholder.svg', 'strategy_svg.svg',
    'sub_agri_cover.jpeg', 'sub_cloth_cover.jpeg', 'sub_cosmetics_cover.jpeg',
    'sugarstar_logo.jpg', 'sugarstar_web.jpeg', 'teerex_logo.jpg', 'teerex_web.jpeg',
    'twinstar_logo.jpg', 'twinstar_web.jpeg', 'voice_cover.jpg', 'web_app_cover.jpeg',
    'webapplication.jpg', 'West_logo.png', 'zyden_logo.jpg'
  ].filter(file => /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(file));

  const imageSitemap = imageFiles.map(image => ({
    url: `${baseUrl}/${image}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.5,
  }));

  return [...staticPages, ...caseStudyPages, ...careerPages, ...imageSitemap];
}
