import React, { useState } from 'react';
import Header from '../component/Header';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { BiPlus, BiMinus } from 'react-icons/bi';

import image1 from '../assets/image1.png';
import meetTheArtistImage from '../assets/image2.png';
// Import the logo again for use in the footer
import logo from '../assets/logo.png'; 
// Import all gallery images
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
 import image8 from '../assets/image8.png';
import image9 from '../assets/image9.png';
import image10 from '../assets/image10.png';
import image11 from '../assets/image11.png';


const Page1 = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How long does bridal mehendi take to apply?",
      answer: "Bridal mehendi application typically takes 3 to 5 hours, depending on the complexity of the design. Bridal Mehendi Designs with full-hand and feet coverage require more time for detailed patterns."
    },
    {
      question: "How long does mehendi last, and how can I make it darker?",
      answer: "Mehendi typically lasts for 1-3 weeks. To make it darker, avoid water immediately after application, apply a mixture of sugar and lemon juice, and wrap the mehendi with a cloth or bandage to keep it warm overnight."
    },
    {
      question: "What are the different mehendi styles you offer?",
      answer: "We specialize in Bridal Mehendi, Indian Mehendi, Arabic Mehendi, Indo-Arabic Mehendi, and Dubai Style Mehendi Designs. We can also create custom designs based on your preferences."
    },
    {
      question: "When should I get my bridal mehendi done before the wedding?",
      answer: "We recommend getting your bridal mehendi done 2-3 days before your wedding. This allows the mehendi to fully darken and settle into a beautiful, rich color in time for your big day."
    },
    {
      question: "Do you offer mehendi services for festivals and special occasions?",
      answer: "Yes, we offer mehendi services for all types of festivals and special occasions, including Karva Chauth, Diwali, family gatherings, and other celebrations. Contact us to discuss your requirements."
    }
  ];

  // A reusable component for each service card
  const ServiceCard = ({ title, imageSrc }) => (
    <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 border-4 border-rose-500">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
      />
      <div className="absolute inset-0 bg-red-800 bg-opacity-70 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
          {title}
        </h3>
        <button className="px-6 py-2 bg-white text-red-800 text-sm uppercase tracking-wider font-semibold rounded-full shadow-md hover:bg-gray-200 transition duration-300">
          SEND ENQUIRY
        </button>
      </div>
    </div>
  );

  // Array of gallery images
  const galleryImages = [
    image1,
    image3,
    image4,
    image5,
    image6,
    image8,
    image9,
    image10,
    image11,
  ];

  return (
    <div className="font-inter antialiased text-gray-800">

      {/* Use the new Header component */}
      <Header />

      {/* Main Content Sections - Increased padding to ensure content is not hidden by the fixed header */}
      <div className="pt-48"> 

        {/* Hero Section */}
        <section id="home" className="relative bg-gradient-to-br from-rose-50 to-pink-100 py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center relative z-10">
            <div className="text-center md:text-left md:w-1/2 p-4">
              <h1 className="text-4xl md:text-6xl font-serif text-red-800 mb-4 leading-tight">
                Mehendi For Every Occasion
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-2">
                Its not just a colour, its an Emotion.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                Its a happiness.
              </p>
              <button className="px-8 py-3 bg-red-800 text-white text-lg uppercase tracking-wider font-semibold rounded-md shadow-lg hover:bg-red-900 transition duration-300 transform hover:scale-105">
                SEND MESSAGE
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 px-4">
              <img 
                src={image1} 
                alt="Mehendi Designs" 
                className="w-full h-auto object-cover rounded-md shadow-xl" 
              />
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ankita Mehendi Artist | Bridal, Indian, Arabic, Indo-Arabic & Dubai Style Mehendi Designs in Varanasi
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover exquisite mehendi designs by Ankita Mehendi Artist, a trusted mehendi expert in Varanasi. Specializing in Bridal Mehendi, Indian Mehendi, Arabic Mehendi, Indo-Arabic Mehendi, and Dubai Style Mehendi Designs, we create unique and long-lasting henna art for weddings, festivals and special occasions. Book your session today and experience beautiful, traditional mehendi artistry that elevates every celebration.
            </p>
          </div>
        </section>

        {/* Our Mantra Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-12">
              <div className="flex-grow border-t border-rose-200"></div>
              <h2 className="text-3xl font-bold text-gray-800 mx-8">
                Our Mantra
              </h2>
              <div className="flex-grow border-t border-rose-200"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed text-justify">
              Mehendi goes far beyond its ability to create temporary and striking designs on the skin; it is an artistic tool that unites cultures, inviting people to embrace connection and cherish their differences. It's used to celebrate love, beauty, and grace through special occasions, personal and cultural milestones, or to simply relish its artistic elegance. Mehendi's ability to empower people through its trade and craft is admirable, to say the least, and we aspire to cultivate a brand that magnifies this notion of community and togetherness through artistic expression. Mehendi is a traditional art that has been practiced for centuries back and is still in style. It is believed to bring good luck in a newly wedded couple's life. Connecting from traditional designs to the latest design our Mehendi designers are able for creating every pattern of mehendi on your hand that perfectly defines your personality.
            </p>
          </div>
        </section>

        {/* Meet The Artist Section */}
        <section id="about" className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
                    Meet The Artist
                </h2>
                <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="md:w-1/2 p-6 md:p-8">
                        <img 
                            src={meetTheArtistImage} 
                            alt="Ankita Mehendi Artist" 
                            className="w-full h-auto object-cover rounded-md"
                        />
                    </div>
                    <div className="md:w-1/2 p-6 md:p-8">
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Ankita is a BMS graduate from VISiT and works at YES Bank as Credit Analyst. Wondering what she is doing here? Well, it's her hobby and she is absolutely in love with Mehendi designing. It's been 8 years since she started drawing her passion on people's hand with Mehendi Cones. Our artists are specialists in all fine arts of applying mehandi. She is creative and think of phenomenal designs that can impact anyone to go WOW. The classic design of mehendi comes out with the amazing design and the colour that it leaves on the palm and around the feet. The superb shade of Mehandi makes any occasion charming and memorable. Connect with her for bulk orders for Wedding and Festivals. Get services delivered at your doorstep.
                        </p>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Why choose Ankita for your mehendi requirements?
                        </h3>
                        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                            <li>8 years of experience in this field</li>
                            <li>300+ orders executed successfully</li>
                            <li>Google ratings of 4.9 (80+ ratings) - Best Mehendi Artist in Varanasi</li>
                            <li>Highly professional and innovative</li>
                            <li>Doorstep service at a very affordable price</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Mehendi Services Section */}
        <section id="services" className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
                    Mehendi Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <ServiceCard title="Bridal Mehendi Services" imageSrc={image1} />
                    <ServiceCard title="Indian Mehendi Services" imageSrc={image1} />
                    <ServiceCard title="Indo-Arabic Mehendi" imageSrc={image1} />
                    <ServiceCard title="Arabic Mehendi Services" imageSrc={image1} />
                    <div className="lg:col-start-2">
                      <ServiceCard title="Dubai Style Mehendi" imageSrc={image1} />
                    </div>
                </div>
            </div>
        </section>

        {/* Discount Offer Section */}
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 bg-rose-50 rounded-lg shadow-md p-8 md:p-12 text-center">
                <p className="text-gray-600 mb-2 text-sm">Bookings Started For This Wedding Season</p>
                <h3 className="text-4xl md:text-6xl font-bold text-red-800 mb-4">
                    -10% Discount
                </h3>
                <p className="text-xl md:text-2xl text-gray-700 mb-4">
                    On One Month Pre-Booking for<br/>Bridal Mehendi Services Till May 2025.
                </p>
                <button className="px-8 py-3 bg-red-800 text-white text-lg uppercase tracking-wider font-semibold rounded-md shadow-lg hover:bg-red-900 transition duration-300 transform hover:scale-105">
                    SEND MESSAGE
                </button>
            </div>
        </section>

        {/* How We Work Section */}
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
                    How We Work
                </h2>
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8 max-w-6xl mx-auto">
                    <div className="w-full md:w-1/3 p-4">
                        <p className="text-5xl md:text-6xl font-bold text-rose-500 mb-4">01.</p>
                        <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                            Share Your Requirement With Us
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Call us and share details like occasion, Mehendi design, number of people, location and date & time with our executive.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <p className="text-5xl md:text-6xl font-bold text-rose-500 mb-4">02.</p>
                        <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                            Confirm The Order Before 24 Hours
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Once you are satisfied with our answers & expertise, confirm your order by making 20% advance payment by online medium.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <p className="text-5xl md:text-6xl font-bold text-rose-500 mb-4">03.</p>
                        <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                            Our Designer Will Visit Your Place
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Our mehendi expert will visit your place as per date & time shared by you. Any change in plan should be communicated 12 hours prior the order timing.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Google Reviews Section */}
        <section id="testimonials" className="bg-gray-100 py-16 relative">
          <div className="absolute top-0 left-0 w-full flex items-center justify-center py-6">
            <div className="flex-grow border-t border-gray-300 mx-4"></div>
            <h2 className="text-3xl font-bold text-rose-500">Google Reviews</h2>
            <div className="flex-grow border-t border-gray-300 mx-4"></div>
          </div>
          <div className="container mx-auto px-4 text-center pt-24">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-xl md:text-2xl text-gray-700 mb-12">
              Rated 4.9 by 211+ Clients
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                <p className="text-gray-600 text-lg mb-4 italic">
                  "Ms Ankita is excellent mehendi artist. We got mehendi design done on Karva Chauth. All my friends praised the design, color and enquired about artist. I appreciate."
                </p>
                <p className="text-gray-800 font-semibold text-right">- Arun Anand</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                <p className="text-gray-600 text-lg mb-4 italic">
                  "Ankita was prompt and very hands on. Thank you for accommodating my last minute request and All the best Ankita."
                </p>
                <p className="text-gray-800 font-semibold text-right">- Reeni A Mittal</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                <p className="text-gray-600 text-lg mb-4 italic">
                  "Just one word, WOW...!! She is just amazing. Such clean and detailed work. I didn't even have to ask her for anything and I exactly got the work I wanted. Thank you so much Ankita and Keep up the good work."
                </p>
                <p className="text-gray-800 font-semibold text-right">- Swati Kamble</p>
              </div>
            </div>
            <button className="px-8 py-3 bg-red-800 text-white text-lg uppercase tracking-wider font-semibold rounded-md shadow-lg hover:bg-red-900 transition duration-300 transform hover:scale-105">
              SEE ALL REVIEWS
            </button>
          </div>
        </section>

        {/* Our Work / Photo Gallery Section */}
        <section id="gallery" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-12">
              <div className="flex-grow border-t border-rose-200"></div>
              <h2 className="text-3xl font-bold text-gray-800 mx-8">
                Our Work
              </h2>
              <div className="flex-grow border-t border-rose-200"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {galleryImages.map((img, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={img}
                    alt={`Mehendi design ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-12">
              <div className="flex-grow border-t border-rose-200"></div>
              <h2 className="text-3xl font-bold text-red-800 mx-8">
                FAQ
              </h2>
              <div className="flex-grow border-t border-rose-200"></div>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-red-800 rounded-lg shadow-md overflow-hidden">
                  <div
                    className="flex justify-between items-center p-6 cursor-pointer text-white"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-xl font-semibold">{item.question}</h3>
                    {openFaqIndex === index ? (
                      <BiMinus size={24} className="text-white" />
                    ) : (
                      <BiPlus size={24} className="text-white" />
                    )}
                  </div>
                  {openFaqIndex === index && (
                    <div className="bg-white p-6 text-gray-700">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-gray-300 py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Social Media */}
            <div className="col-span-1">
              <div className="flex flex-col items-start">
                <img src={logo} alt="Ankita Mehendi Artist Logo" className="h-12 mb-2" />
                <span className="text-sm uppercase tracking-widest text-gray-400">Mehendi Artist</span>
              </div>
              <p className="text-sm mt-4">
                Creating beautiful, traditional, and modern mehendi designs for every special occasion.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF className="text-gray-300 hover:text-white transition-colors duration-300" size={20} /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-gray-300 hover:text-white transition-colors duration-300" size={20} /></a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterestP className="text-gray-300 hover:text-white transition-colors duration-300" size={20} /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-gray-300 hover:text-white transition-colors duration-300" size={20} /></a>
                <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="text-gray-300 hover:text-white transition-colors duration-300" size={20} /></a>
              </div>
            </div>

            {/* Our Services */}
            <div className="col-span-1">
              <h4 className="text-lg font-bold text-white mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-white transition-colors duration-300">Bridal Mehendi</a></li>
                <li><a href="#services" className="hover:text-white transition-colors duration-300">Indian Mehendi</a></li>
                <li><a href="#services" className="hover:text-white transition-colors duration-300">Arabic Mehendi</a></li>
                <li><a href="#services" className="hover:text-white transition-colors duration-300">Indo-Arabic Mehendi</a></li>
                <li><a href="#services" className="hover:text-white transition-colors duration-300">Dubai Style Mehendi</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors duration-300">Gallery</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors duration-300">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-1">
              <h4 className="text-lg font-bold text-white mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li><a href="tel:+918090729792" className="hover:text-white transition-colors duration-300">+91 8090729792</a></li>
                <li><a href="mailto:ankitamehendiartist@gmail.com" className="hover:text-white transition-colors duration-300">ankitamehendiartist@gmail.com</a></li>
                <li>Varanasi, Uttar Pradesh, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
            © 2025 Ankita Mehendi Artist. All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Page1;