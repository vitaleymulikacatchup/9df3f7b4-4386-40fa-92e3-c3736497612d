"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = /* provided JSON array */;

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant={"hover-magnetic"}
      defaultTextAnimation={"entrance-slide"}
      borderRadius={"rounded"}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Pizzeria"
          logoSrc="/brand/logo.png"
          buttonText="Order Now"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-red-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Our Pizzeria"
            description="Experience the taste of authentic Italian cuisine."
            imageSrc="https://images.pexels.com/photos/6188305/pexels-photo-6188305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[{ text: "View Menu", href: "menu" }, { text: "Contact Us", href: "contact" }]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-red-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={["We are passionate about bringing the taste of Italy to your table.", "Our ingredients are sourced from local farms and crafted with love."]}
            showBorder={true}
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 bg-red-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardThree
            products={[
              { id: "1", name: "Pepperoni Pizza", price: "$18.00", imageSrc: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "2", name: "Veggie Delight", price: "$16.00", imageSrc: "https://images.pexels.com/photos/7315010/pexels-photo-7315010.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
            ]}
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24 bg-red-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardThree
            members={[
              { id: "1", name: "Giovanni Rossi", role: "Head Chef", imageSrc: "https://images.pexels.com/photos/5953493/pexels-photo-5953493.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24 bg-red-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            testimonials={[
              { id: "1", name: "Maria Lopez", role: "Food Critic", testimonial: "The best pizza I've ever had! A must-visit for pizza lovers." }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-red-50 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenterForm
            title="Contact Us"
            description="We're here to answer your questions!"
            inputs={[{ name: "name", type: "text", placeholder: "Name" }, { name: "email", type: "email", placeholder: "Email" }]}
            textarea={{ name: "message", placeholder: "Your Message", rows: 5 }}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-gray-800 text-white">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Home", href: "home" }] },
              { items: [{ label: "Menu", href: "menu" }] },
              { items: [{ label: "Contact", href: "contact" }] }
            ]}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}