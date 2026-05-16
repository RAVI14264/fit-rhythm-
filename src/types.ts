export interface Program {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  duration: string;
  image: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  image: string;
  socials: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface Transformation {
  id: string;
  title: string;
  imageBefore: string;
  imageAfter: string;
  description: string;
}
