import { Program, Trainer, MembershipPlan, Testimonial, Transformation } from './types';

export const GYM_INFO = {
  name: "Fit Rhythm Fitness Studio",
  address: "FF - 110 - 113, Shukan Hub, Near Canal, Sama-Savli Rd, above Bank of Baroda, opp. Shivam Party Plot, Vadodara, Gujarat 390024",
  phone: "+91 77780 12790",
  email: "info@fitrhythmvdr.in",
  website: "fitrhythmvdr.in",
  workingHours: {
    weekdays: "5:30 AM - 10:30 PM",
    saturday: "6:00 AM - 10:00 PM",
    sunday: "Holiday"
  }
};

export const PROGRAMS: Program[] = [
  {
    id: "strength",
    title: "Strength Training",
    description: "Build raw power and lean muscle with our state-of-the-art resistance equipment.",
    benefits: ["Increased core power", "Improved bone density", "Better metabolic rate"],
    duration: "45-60 min",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "weight-loss",
    title: "Weight Loss",
    description: "Customized fat burning protocols designed to shed pounds while maintaining muscle.",
    benefits: ["Targeted fat reduction", "High caloric burn", "Conditioned physique"],
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "crossfit",
    title: "CrossFit",
    description: "High-intensity functional movements that push your limits every single day.",
    benefits: ["Functional strength", "Endurance", "Versatility"],
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1541534741688-6078c64b5903?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "cardio",
    title: "Cardio Training",
    description: "Elevate your heart rate and improve cardiovascular health on our premium machines.",
    benefits: ["Heart health", "Stamina", "Stress relief"],
    duration: "30-50 min",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "yoga",
    title: "Yoga",
    description: "Balance your mind and body through mindful stretching and breathing exercises.",
    benefits: ["Flexibility", "Mental clarity", "Posture improvement"],
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: "zumba",
    title: "Zumba",
    description: "Dance your way to fitness with high-energy Latin and international music.",
    benefits: ["Fun workout", "Total body toning", "Improved coordination"],
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2070&auto=format&fit=crop"
  }
];

export const MEMBERSHIPS: MembershipPlan[] = [
  {
    id: "basic",
    name: "Basic Plan",
    price: "₹1,999",
    period: "Monthly",
    features: [
      "Access to Gym Floor",
      "Standard Equipment Use",
      "Locker Room Access",
      "Mobile App Access"
    ]
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: "₹4,999",
    period: "Quarterly",
    isPopular: true,
    features: [
      "Everything in Basic",
      "Personal Training Session (1/mo)",
      "Zumba & Yoga Classes",
      "Diet Consultation",
      "Guest Passes (2/mo)"
    ]
  },
  {
    id: "elite",
    name: "Elite Plan",
    price: "₹14,999",
    period: "Annually",
    features: [
      "Full Gym Access",
      "Unlimited Personal Training",
      "All Group Classes Included",
      "Spa & Recovery Zone",
      "Meal Prep Guidance",
      "VIP Events Access"
    ]
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "1",
    name: "Vikram Shah",
    specialization: "Bodybuilding & Strength",
    experience: "10+ Years",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974&auto=format&fit=crop",
    socials: { instagram: "#", linkedin: "#" }
  },
  {
    id: "2",
    name: "Anjali Patel",
    specialization: "Yoga & Holistic Wellness",
    experience: "8+ Years",
    image: "https://images.unsplash.com/photo-1518611012118-2969c636020c?q=80&w=1974&auto=format&fit=crop",
    socials: { instagram: "#" }
  },
  {
    id: "3",
    name: "Rahul Mehta",
    specialization: "HIIT & CrossFit",
    experience: "6+ Years",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    socials: { instagram: "#", twitter: "#" }
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: "1",
    title: "12 Weeks Fat Loss",
    description: "Shed 15kg while maintaining muscle mass.",
    imageBefore: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&blur=40",
    imageAfter: "https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Muscle Hypertrophy",
    description: "Focused bulk gaining 8kg of pure muscle.",
    imageBefore: "https://images.unsplash.com/photo-1541534741688-6078c64b5903?q=80&w=2070&auto=format&fit=crop&blur=40",
    imageAfter: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Deepak Sharma",
    role: "Member since 2023",
    content: "The trainers here are exceptional. They don't just give you a workout; they teach you how to move.",
    rating: 5
  },
  {
    id: "2",
    name: "Neha Gupta",
    role: "Personal Training Client",
    content: "Best gym experience in Vadodara. The atmosphere is high-energy and the equipment is top-notch.",
    rating: 5
  },
  {
    id: "3",
    name: "Rohan Vyas",
    role: "CrossFit Enthusiast",
    content: "Fit Rhythm changed my life. I've never felt stronger or more capable.",
    rating: 5
  }
];
