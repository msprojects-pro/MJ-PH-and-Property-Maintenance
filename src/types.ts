export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'plant-hire' | 'maintenance' | 'groundwork';
  iconName: string; // Used to dynamically map Lucide icons
  bullets: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'plant-hire' | 'maintenance' | 'groundwork';
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  serviceCategory: string;
  date: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
  location: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  hireDuration?: string;
  withOperator: 'yes' | 'no' | 'unsure';
  details: string;
  location: string;
}
