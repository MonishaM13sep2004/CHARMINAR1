export const site = {
  name: "Charminar Biryani",
  tagline: "The Taste of Hyderabad, Served with Zafrani Royalty",
  phone: "+91 79937 04400",
  phoneHref: "tel:+917993704400",
  whatsapp: "917993704400",
  email: "hello@charminarbiryani.com",
  instagram: "https://www.instagram.com/charminarbiryanihyderabad?utm_source=ig_web_button_share_sheet&stkn=ODdmZWVhMTFiMw==",
  facebook: "https://facebook.com/charminarbiryani",
  youtube: "https://youtube.com/@charminarbiryani",
  googleReviews: "https://www.google.com/search?q=charminar+biryani+reviews",
};

export const waLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const orderLink = waLink(
  "Hi Charminar Biryani! I'd like to place an order for Zafrani Hyderabadi Dum Biryani.",
);

export type Outlet = {
  slug: string;
  name: string;
  area: string;
  address: string;
  hours: string;
  maps: string;
  phone: string;
};

export const outlets: Outlet[] = [
  {
    slug: "kondapur",
    name: "Charminar Biryani",
    area: "Kondapur",
    address: "Sriramnagar, Kondapur, Hyderabad, Telangana",
    hours: "11:30 AM - 11:30 PM, all days",
    maps: "https://share.google/tAyNiHHYl9zNu2ptS",
    phone: "+91 85209 06665",
  },
  {
    slug: "kondapur-rooftop",
    name: "Charminar Biryani Rooftop Restaurant",
    area: "Kondapur",
    address: "Raghvendra Colony, Kondapur, Hyderabad, Telangana",
    hours: "11:30 AM - 11:30 PM, all days",
    maps: "https://share.google/iupaGUUnZeSpRnEmh",
    phone: "+91 79937 04400",
  },
];

export const offers = [
  {
    title: "Family Pack Feast",
    detail: "Zafrani Chicken Dum Biryani Family Pack with raita, salan and dessert for four.",
    badge: "Family",
  },
  {
    title: "Weekend Zafrani Combo",
    detail: "Any Full biryani + a signature starter at a special weekend price.",
    badge: "Fri – Sun",
  },
  {
    title: "Corporate Lunch Offer",
    detail: "Bulk office lunches from 10 plates upward, delivered hot and on time.",
    badge: "Corporate",
  },
  {
    title: "New Outlet Launch",
    detail: "Complimentary Double Ka Meetha on Jumbo Pack orders at our newest outlet.",
    badge: "Launch",
  },
];

export type Testimonial = {
  name: string;
  source: string;
  text: string;
  stars: number;
};

// TODO: placeholder reviews for the design — replace with real Google reviews before launch.
export const testimonials: Testimonial[] = [
  { name: "Sravan K.", source: "Google Review", stars: 5, text: "The Zafrani chicken dum biryani is the real deal - long grain rice, proper dum aroma and generous pieces. Easily the best in Kondapur." },
  { name: "Ayesha R.", source: "Google Review", stars: 5, text: "Ordered the family pack for a house party. Quantity, taste and packaging were all premium. Everyone asked where it was from." },
  { name: "Rohit M.", source: "Google Review", stars: 4, text: "Mutton biryani is slow cooked to perfection and the ghee roast is superb. Ambience is elegant and service is quick." },
  { name: "Divya S.", source: "Google Review", stars: 5, text: "The veg Zafrani biryani finally does justice to vegetarians. Rooftop dining in the evening is lovely." },
  { name: "Mohammed Irfan", source: "Google Review", stars: 5, text: "Ekdum zabardast biryani hai miyan! Mutton itna soft, haddi se khud nikal raha tha. Old City wala taste, Kondapur mein." },
  { name: "Syed Abrar", source: "Google Review", stars: 4, text: "Kya baat hai! Dum ka khushbu door se aa raha tha. Full paisa vasool, next time family ko leke aata hoon." },
  { name: "Sai Kiran R.", source: "Google Review", stars: 5, text: "Nakko bolne ka koi reason nahi. Chicken dum biryani mast hai, salan bhi perfect. Pakka regular ban gaya." },
  { name: "Ayesha Fatima", source: "Google Review", stars: 4, text: "Double ka meetha khaake dil khush ho gaya. Biryani bhi ekdum ghar jaisa, zyada masala nahi, bas sahi." },
  { name: "Naveen Reddy", source: "Google Review", stars: 5, text: "Office lunch ke liye 25 plates mangaye, time pe aaye aur garam garam. Team ne bola hau, yahi se mangao." },
  { name: "Zoya Khan", source: "Google Review", stars: 5, text: "Rooftop pe shaam ko baithke biryani khana, kya scene hai! Ambience classy, staff bhi bahut polite." },
  { name: "Rahul Goud", source: "Google Review", stars: 4, text: "Baigan ka salan aur raita with Zafrani biryani, ekdum kadak combo. Portion bhi bahut hai, do log aaram se kha sakte." },
  { name: "Imran Qureshi", source: "Google Review", stars: 5, text: "Hyderabadi hoon, biryani ke maamle mein picky hoon. Yeh legit dum biryani hai, reheated wala nahi. Approved!" },
  { name: "Sneha Rao", source: "Google Review", stars: 4, text: "Kaju paneer biryani try kiya, vegetarians ke liye best option. Separate cooking hai, so no tension." },
  { name: "Abdul Rahman", source: "Google Review", stars: 5, text: "Jumma ke baad family ke saath aaye, sab log khush. Jumbo pack mein itna tha ki ghar bhi le gaye." },
  { name: "Pranav Varma", source: "Google Review", stars: 5, text: "Friends ke saath late night aaye, 11 baje bhi fresh biryani mili. Mast vibe, zabardast taste." },
  { name: "Sameera Begum", source: "Google Review", stars: 4, text: "Masha Allah, zafran ki khushbu aur leg piece dono ekdum perfect. Ammi ne bhi tareef ki, matlab pass!" },
  { name: "Karthik Yadav", source: "Google Review", stars: 5, text: "Prawn biryani first time try kiya, ekdum fresh prawns. Thoda spicy, but Hyderabadi log ko wahi chahiye." },
  { name: "Farhan Ali", source: "Google Review", stars: 4, text: "Kaiku door jaana Old City? Yahi pe asli taste mil raha. Service fast, packing bhi solid." },
  { name: "Lakshmi Prasanna", source: "Google Review", stars: 5, text: "Birthday ke liye catering book kiya, sab guests ne poocha kahan se mangaye. Full marks from our side." },
  { name: "Arif Hussain", source: "Google Review", stars: 4, text: "Gajar halwa garam garam, biryani ke baad perfect ending. Price bhi reasonable hai area ke hisaab se." },
  { name: "Vamshi Krishna", source: "Google Review", stars: 5, text: "Chicken 65 aur dum biryani, weekend ka pakka plan. Staff ne bhi achhe se suggest kiya kya lena." },
  { name: "Nazia Parveen", source: "Google Review", stars: 5, text: "Bachon ko bhi spice zyada nahi laga, sab ne plate saaf kar diya. Clean place, family friendly." },
  { name: "Harsha Vardhan", source: "Google Review", stars: 4, text: "Online order kiya, 30 minute mein aa gaya aur still garam tha. Ekdum reliable, jaise inka tagline bolta." },
  { name: "Mehdi Hasan", source: "Google Review", stars: 5, text: "Nizami style ka asli maza. Mirchi ka salan dekh ke hi pata chal gaya yeh log serious hain biryani ke baare mein." },
];
export const faqs = [
  {
    q: "What makes Charminar Biryani different?",
    a: "We cook only Zafrani Hyderabadi dum biryani - sealed handi, aged long-grain basmati, saffron, hand-pounded masala and marinated meat cooked on slow dum. Same recipe, same standard, every single plate.",
  },
  {
    q: "Is the biryani spicy?",
    a: "It is authentically Hyderabadi - aromatic and flavourful with a medium heat. Raita and mirchi ka salan balance it, and you can request a milder spice level while ordering.",
  },
  {
    q: "Do you offer vegetarian biryani?",
    a: "Yes. Zafrani Hyderabadi Veg Dum Biryani, Kaju Paneer Biryani, Paneer Biryani and Mushroom Biryani, all cooked separately from non-veg preparations.",
  },
  {
    q: "Do you provide family packs?",
    a: "Every biryani is available in Serve 1, Full, Family Pack and Jumbo Pack sizes.",
  },
  {
    q: "Do you offer catering?",
    a: "Yes - corporate events, weddings, birthdays, house parties and office lunches. Request a quote from our Catering page.",
  },
  {
    q: "Can I reserve a table?",
    a: "Yes. Use the reservation form on the Contact page or message us on WhatsApp with your outlet, date, time and number of guests.",
  },
  {
    q: "Do you accept bulk orders?",
    a: "We do. Bulk orders are best placed at least 24 hours in advance so the dum is prepared fresh for your event.",
  },
  {
    q: "Where are your outlets located?",
    a: "We currently serve Hyderabad from our two Kondapur outlets, with more locations opening soon.",
  },
  {
    q: "Do you offer delivery?",
    a: "Yes, across the delivery radius of each outlet. Ordering directly with us on WhatsApp or by phone is the fastest route.",
  },
  {
    q: "Can I order directly from the website?",
    a: "Yes. Tap Order Biryani anywhere on the site and your order goes straight to our outlet team - no third-party platform in between.",
  },
];
