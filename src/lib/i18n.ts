import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          hero_title: "Transform Your Body. Elevate Your Life.",
          join_now: "Join Now",
          book_trial: "Book Free Trial",
          explore: "Explore Memberships",
          home: "Home",
          about: "About",
          programs: "Programs",
          trainers: "Trainers",
          membership: "Membership",
          gallery: "Gallery",
          bmi: "BMI Calculator",
          testimonials: "Testimonials",
          contact: "Contact"
        }
      },
      hi: {
        translation: {
          hero_title: "अपने शरीर को बदलें। अपने जीवन को ऊपर उठाएं।",
          join_now: "अभी शामिल हों",
          book_trial: "नि:शुल्क परीक्षण बुक करें",
          explore: "सदस्यता देखें",
          home: "होम",
          about: "हमारे बारे में",
          programs: "प्रोग्राम",
          trainers: "ट्रेनर्स",
          membership: "सदस्यता",
          gallery: "गैलरी",
          bmi: "बीएमआई कैलकुलेटर",
          testimonials: "प्रशंसापत्र",
          contact: "संपर्क"
        }
      },
      gu: {
        translation: {
          hero_title: "તમારા શરીરને બદલો. તમારા જીવનને ઉન્નત બનાવો.",
          join_now: "હમણાં જોડાઓ",
          book_trial: "ફ્રી ટ્રાયલ બુક કરો",
          explore: "મેમ્બરશીપ જુઓ",
          home: "હોમ",
          about: "વિશે",
          programs: "પ્રોગ્રામ્સ",
          trainers: "ટ્રેનર્સ",
          membership: "મેમ્બરશીપ",
          gallery: "ગેલેરી",
          bmi: "BMI કેલ્ક્યુલેટર",
          testimonials: "પ્રશંસાપત્રો",
          contact: "સંપર્ક"
        }
      }
    }
  });

export default i18n;
