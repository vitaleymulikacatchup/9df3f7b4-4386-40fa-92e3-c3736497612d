"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { "id": "heroImage", "url": "https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Colorful pink crust pizza with vegetables and herbs on a wooden platter. Perfect for food lovers." },
  { "id": "aboutImage", "url": "https://images.pexels.com/photos/5908216/pexels-photo-5908216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Smiling Asian woman spreading tomato sauce on pizza dough while looking at funny female covering eyes with tomato slices in kitchen" },
  { "id": "feature1Image", "url": "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A mouthwatering slice of pepperoni pizza with cheese and spices, ideal for any meal." },
  { "id": "feature2Image", "url": "https://images.pexels.com/photos/5848245/pexels-photo-5848245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Delicious gourmet pizza in an open cardboard box, shot from above for a classic flat lay presentation." }
];

export default function Home() {
  const logoUrl = assetMap.find(a => a.id === "logo")?.url || "/public/images/placeholder.webp";
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc={logoUrl}
          logoAlt="Pizzeria Logo"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 bg-rose-100 text-gray-800">
          <HeroBillboard
            title="Welcome to Our Pizzeria"
            description="Taste the best pizza in town! Freshly baked every day."
            imageSrc={assetMap.find(a => a.id === "heroImage")?.url}
            buttons={[{ text: "Order Now", href: "menu" }, { text: "Explore", href: "about" }]}
            className="bg-rose-100 text-gray-800"
            titleClassName="text-yellow-700"
            descriptionClassName="text-gray-800"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 bg-rose-100 text-gray-800">
          <TextSplitAbout
            title="About Us"
            description={[
              "Our pizzeria is family-owned and has been serving the community for over 30 years.",
              "We pride ourselves on using fresh, locally-sourced ingredients and traditional recipes."
            ]}
            showBorder
            buttons={[{ text: "Learn More", href: "about" }]}
            className="bg-rose-100 text-gray-800"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 bg-rose-100 text-gray-800">
          <FeatureCardOne
            features={[
              { title: "Pepperoni Pizza", description: "A classic favorite with spicy pepperoni slices.", imageSrc: assetMap.find(a => a.id === "feature1Image")?.url },
              { title: "Vegetarian Pizza", description: "Fresh vegetables for our health-conscious customers.", imageSrc: assetMap.find(a => a.id === "feature2Image")?.url }
            ]}
            layout="default"
            className="bg-rose-100 text-gray-800"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 bg-rose-100 text-gray-800">
          <ProductCardThree
            products={[
              { id: "1", name: "Margherita Pizza", price: "$12.99", imageSrc: assetMap.find(a => a.id === "feature1Image")?.url },
              { id: "2", name: "BBQ Chicken Pizza", price: "$14.99", imageSrc: assetMap.find(a => a.id === "feature2Image")?.url }
            ]}
            className="bg-rose-100 text-gray-800"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 bg-rose-100 text-gray-800">
          <ContactCenter
            tag="Contact"
            title="Get in Touch"
            description="Have questions or want to place an order? Reach out to us!"
            inputPlaceholder="Your email address"
            buttonText="Submit"
            termsText="We respect your privacy. Unsubscribe at any time."
            className="bg-rose-100 text-gray-800"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 bg-rose-100 text-gray-800">
          <FooterBase
            columns={[
              { title: "Menu", items: [{ label: "Order Online", href: "menu" }, { label: "Contact", href: "contact" }]},
              { title: "Legal", items: [{ label: "Terms", href: "terms" }, { label: "Privacy Policy", href: "policy" }]},
            ]}
            logoSrc={logoUrl}
            copyrightText="© 2025 Pizzeria"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
