import { Service, GalleryItem, Testimonial } from './types';
import heroImage from './assets/images/hero_excavator_1782408109621.jpg';
import maintenanceImage from './assets/images/property_maintenance_1782408128636.jpg';

// Let's export the imported asset paths so they are correctly bundled by Vite
export const HERO_PATH = heroImage;
export const MAINTENANCE_PATH = maintenanceImage;

export const SERVICES: Service[] = [
  {
    id: 'plant-hire',
    title: 'Plant Hire & Machinery',
    description: 'Modern, high-performance machinery available with or without experienced, CPCS/NPORS certified operators. Ready for immediate deployment across South West Wales.',
    category: 'plant-hire',
    iconName: 'Wrench',
    bullets: [
      'Mini Diggers & Excavators (0.8t to 8t)',
      'Cherry Pickers & Access Platforms',
      'Professional Wood Chippers & Shredders',
      'Site Dumpers & Compilers',
      'Available with CPCS/NPORS operators or self-drive'
    ]
  },
  {
    id: 'painting',
    title: 'External & Internal Painting',
    description: 'High-quality painting and decorating services for domestic and commercial properties. Built to withstand rugged Pembrokeshire sea winds and coastal moisture.',
    category: 'maintenance',
    iconName: 'Paintbrush',
    bullets: [
      'Weather-resistant exterior masonry coating',
      'Flawless internal plaster painting & prep',
      'Soffit, fascia, and trim restoration',
      'Eco-friendly, long-lasting premium paint options'
    ]
  },
  {
    id: 'plastering',
    title: 'Plastering & Rendering',
    description: 'Professional skimming, plasterboard installation, and rendering services to create flawless, damp-proof, and flat interior walls and exterior structures.',
    category: 'maintenance',
    iconName: 'Layers',
    bullets: [
      'Smooth drywall skimming and finishing',
      'Sand & cement or monocouche rendering',
      'Plasterboard pinning and ceiling repairs',
      'Damp mitigation and plaster restoration'
    ]
  },
  {
    id: 'garden-maintenance',
    title: 'Garden, Tree Felling & Pruning',
    description: 'Comprehensive arboriculture and garden management, keeping your land safe, neat, and highly accessible all year round.',
    category: 'groundwork',
    iconName: 'Trees',
    bullets: [
      'Safe tree felling, sectioning & removal',
      'Crown reduction, hedge trimming & pruning',
      'Heavy brush clearance & site preparation',
      'Commercial & residential garden maintenance'
    ]
  },
  {
    id: 'paving-patios',
    title: 'Gravel Paving, Patios & Driveways',
    description: 'Stunning groundwork solutions designed for heavy vehicle load and exquisite aesthetic appeal. Custom patios, pathways, and drainage.',
    category: 'groundwork',
    iconName: 'Grid',
    bullets: [
      'Permeable gravel paving and grid systems',
      'Bespoke natural stone and slab patios',
      'Block paved and gravel driveways',
      'Land drains, channel drains & soakaways'
    ]
  },
  {
    id: 'roof-repairs',
    title: 'Roof Repairs & Care',
    description: 'Rapid-response and durable roofing maintenance. We diagnose and seal leaks, replace broken slates, and clear moss to safeguard your property.',
    category: 'maintenance',
    iconName: 'Home',
    bullets: [
      'Slate & tile repairs, ridge resetting',
      'Gutter cleaning, sealing & replacements',
      'Chimney stack pointing & leadwork',
      'Emergency leak patching & storm repairs'
    ]
  },
  {
    id: 'general-maintenance',
    title: 'General Property Maintenance',
    description: 'No job is too small. We provide a complete range of property maintenance, repairs, and installations for landlords, businesses, and private owners.',
    category: 'maintenance',
    iconName: 'ShieldCheck',
    bullets: [
      'Shed, fencing & decking installation/repairs',
      'Fascia and gutter cleaning',
      'Wall pointing and structural patching',
      'End-of-tenancy refits and property prep'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Groundwork Excavator',
    category: 'groundwork',
    imageUrl: HERO_PATH, // Using our beautiful custom generated image!
    description: 'Site preparation and trench digging for a seaside residential build in Pembrokeshire.'
  },
  {
    id: 'gal-2',
    title: 'Patios & Driveway Renovation',
    category: 'maintenance',
    imageUrl: MAINTENANCE_PATH, // Using our custom generated maintenance image!
    description: 'Completed premium natural stone patio with gravel border and clean rendering.'
  },
  {
    id: 'gal-3',
    title: 'Tree Felling & Crown Reduction',
    category: 'groundwork',
    imageUrl: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80',
    description: 'Professional tree work using our site wood chipper and access platforms.'
  },
  {
    id: 'gal-4',
    title: 'Excavator with Operator',
    category: 'plant-hire',
    imageUrl: 'https://images.unsplash.com/photo-1579684389782-64d84b5e9053?auto=format&fit=crop&w=800&q=80',
    description: 'Our high-performance 3-tonne mini digger prepared for operator-assisted foundation digging.'
  },
  {
    id: 'gal-5',
    title: 'Exterior Paint & Protection',
    category: 'maintenance',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    description: 'Long-lasting weatherproofing paint applied on a coastal house near Fishguard.'
  },
  {
    id: 'gal-6',
    title: 'Wood Chipper & Clearing',
    category: 'plant-hire',
    imageUrl: 'https://images.unsplash.com/photo-1590138226055-385352c3fe17?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy duty wood chipper machinery in use for quick site clearance.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Gareth Evans',
    location: 'Fishguard',
    rating: 5,
    text: 'Hired MJ Plant Hire for our driveway groundwork and extension. Outstanding service from start to finish. The excavator operator was incredibly skilled and got the job done ahead of schedule. Highly recommended!',
    serviceCategory: 'Groundwork & Plant Hire',
    date: 'May 2026'
  },
  {
    id: 't2',
    name: 'Sian Davies',
    location: 'Haverfordwest',
    rating: 5,
    text: 'We had a severe roof leak during a winter storm. MJ responded immediately, patched it up, and later returned to plaster the damaged bedroom ceiling. Efficient, friendly, and very reasonably priced. A fantastic multi-service company.',
    serviceCategory: 'Roof Repair & Plastering',
    date: 'April 2026'
  },
  {
    id: 't3',
    name: 'Richard Thomas',
    location: 'St Davids',
    rating: 5,
    text: 'Outstanding tree felling and garden clearance. They cleared out a massive overgrown hedge line and chipped everything on site. Left the place immaculately clean. Will definitely hire again.',
    serviceCategory: 'Tree Felling & Clearance',
    date: 'June 2026'
  },
  {
    id: 't4',
    name: 'Margaret Phillips',
    location: 'Cardigan',
    rating: 5,
    text: 'Had the front of my house repainted and a new gravel paving driveway installed. MJ Plant Hire & Property Maintenance did a wonderful job. It looks like a brand new house, and neighbors are already asking for their number!',
    serviceCategory: 'Exterior Painting & Paving',
    date: 'June 2026'
  }
];
