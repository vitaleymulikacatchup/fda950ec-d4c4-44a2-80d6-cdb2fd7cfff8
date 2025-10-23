"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Car, Settings, Star, Users, MessageSquare, Handshake, Phone } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Inventory", id: "inventory" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="AutoMax"
          logoSrc="https://images.pexels.com/photos/8305278/pexels-photo-8305278.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="Person holding a Lexus car key inside a luxury vehicle's interior, showcasing brand elegance."
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="eqwijbfijebwfiewf"
          description="qwfqwfqwfqwf"
          tag="Premium Dealership"
          tagIcon={Car}
          buttons={[
            { text: "Browse Inventory", href: "inventory" },
            { text: "Schedule Test Drive", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/32727782/pexels-photo-32727782.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="A stylish bronze Toyota Supra showcased indoors at a car event, highlighting its modern design and appeal."
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About AutoMax"
          description={[
            "For over 20 years, AutoMax has been the trusted name in automotive excellence, serving thousands of satisfied customers with premium vehicles and exceptional service.",
            "Our commitment to quality, transparency, and customer satisfaction has made us the premier destination for car buyers looking for reliability and value."
          ]}
          buttons={[
            { text: "Learn More", href: "services" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardOne
          title="Our Services"
          description="We provide comprehensive automotive services to ensure your car buying experience is smooth and hassle-free."
          tag="Services"
          tagIcon={Settings}
          features={[
            {
              title: "Financing Solutions",
              description: "Flexible financing options with competitive rates to help you drive away in your dream car today.",
              imageSrc: "https://images.pexels.com/photos/7144191/pexels-photo-7144191.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "An interracial couple consults with a salesman at a car dealership, exploring vehicle options.",
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "Vehicle Inspection",
              description: "Thorough multi-point inspections ensure every vehicle meets our high standards for quality and safety.",
              imageSrc: "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mechanic inspecting and adjusting tire pressure in an auto repair shop.",
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "Insurance Assistance",
              description: "We help you find the best insurance coverage for your new vehicle at competitive rates.",
              imageSrc: "https://images.pexels.com/photos/7731330/pexels-photo-7731330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Professional meeting discussing business agreements with laptops and documents on a rustic table.",
              button: { text: "Get Quote", href: "contact" }
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="inventory" data-section="inventory">
        <ProductCardThree
          title="Featured Inventory"
          description="Explore our handpicked selection of premium vehicles, all thoroughly inspected and ready for immediate delivery."
          tag="Best Sellers"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "2023 Luxury Sedan Premium",
              price: "$45,000",
              imageSrc: "https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Bright red Ford Mustang showcased with a sleek front view in Ahmedabad.",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "2024 Family SUV Deluxe",
              price: "$52,000",
              imageSrc: "https://images.pexels.com/photos/13101559/pexels-photo-13101559.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Two Mercedes Benz car keys resting on a luxurious leather seat, showcasing elegance and design.",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "2024 Electric Eco Plus",
              price: "$38,000",
              imageSrc: "https://images.pexels.com/photos/11099563/pexels-photo-11099563.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A modern white electric car driving swiftly on a highway in Philadelphia, PA, showcasing luxury and innovation.",
              initialQuantity: 1
            },
            {
              id: "4",
              name: "2023 Convertible Sport",
              price: "$65,000",
              imageSrc: "https://images.pexels.com/photos/209644/pexels-photo-209644.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Blue Ford GT sports car with racing stripes, parked in a sunlit garage with wooden walls.",
              initialQuantity: 1
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Expert Team"
          description="Our experienced professionals are dedicated to helping you find the perfect vehicle and providing exceptional service every step of the way."
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Michael Rodriguez",
              role: "Sales Manager",
              description: "With 15 years of automotive sales experience, Michael specializes in matching customers with their ideal vehicle.",
              imageSrc: "https://images.pexels.com/photos/7144177/pexels-photo-7144177.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A diverse team of adults discussing a car purchase in a dealership showroom."
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Finance Director",
              description: "Sarah helps customers secure the best financing options and has helped thousands of families get their dream cars.",
              imageSrc: "https://images.pexels.com/photos/7223036/pexels-photo-7223036.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A professional businesswoman in a stylish office environment with a laptop and notes."
            },
            {
              id: "3",
              name: "David Thompson",
              role: "Service Advisor",
              description: "David ensures every vehicle meets our quality standards and provides ongoing support for customer satisfaction.",
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Colleagues celebrate success with a fist bump over financial charts depicting teamwork and unity."
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Don't just take our word for it. Here's what our satisfied customers have to say about their AutoMax experience."
          tag="Testimonials"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Jennifer Martinez",
              role: "Marketing Director",
              company: "TechStart Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7144209/pexels-photo-7144209.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Joyful couple in their new car, holding keys in a dealership showroom, smiling warmly."
            },
            {
              id: "2",
              name: "Robert Anderson",
              role: "Business Owner",
              company: "Anderson Consulting",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3777565/pexels-photo-3777565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Adult man in pink dress shirt looking stressed while talking on a smartphone indoors."
            },
            {
              id: "3",
              name: "Lisa Zhang",
              role: "Project Manager",
              company: "Digital Innovations",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7776140/pexels-photo-7776140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A dedicated dressmaker with a measuring tape in a fashion design studio, looking focused and creative."
            },
            {
              id: "4",
              name: "Mark Johnson",
              role: "Operations Manager",
              company: "Global Logistics",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3778610/pexels-photo-3778610.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of a confident businessman in a suit standing outside a modern office building."
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="partners" data-section="partners">
        <SocialProofOne
          title="Authorized Dealer Network"
          description="We're proud partners with leading automotive manufacturers, ensuring authentic parts and comprehensive warranties."
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/29229531/pexels-photo-29229531.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9331808/pexels-photo-9331808.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/57409/ford-mustang-stallion-red-57409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/913078/pexels-photo-913078.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1338396/pexels-photo-1338396.png?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4100825/pexels-photo-4100825.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/168938/pexels-photo-168938.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Contact Us"
          title="Ready to Find Your Perfect Car?"
          description="Get in touch with our team today to schedule a test drive, get a quote, or ask any questions about our inventory and services."
          tagIcon={Phone}
          inputPlaceholder="Enter your email address"
          buttonText="Get Started"
          termsText="By submitting, you agree to receive updates about our latest inventory and special offers."
          imageSrc="https://images.pexels.com/photos/22890762/pexels-photo-22890762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Night view of a neon-lit car dealership in Des Moines, Iowa, USA."
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Inventory",
              items: [
                { label: "New Cars", href: "inventory" },
                { label: "Used Cars", href: "inventory" },
                { label: "Electric Vehicles", href: "inventory" },
                { label: "Luxury Cars", href: "inventory" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Financing", href: "services" },
                { label: "Trade-In", href: "services" },
                { label: "Warranties", href: "services" },
                { label: "Insurance", href: "services" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Careers", href: "contact" },
                { label: "Location", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "contact" },
                { label: "Service Center", href: "services" },
                { label: "Parts Department", href: "services" }
              ]
            }
          ]}
          logoSrc="https://images.pexels.com/photos/8305278/pexels-photo-8305278.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoWidth={120}
          logoHeight={40}
          copyrightText="© 2025 AutoMax. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}