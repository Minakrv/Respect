import p_img1 from "./p_img1.jpg";
import p_img2 from "./p_img2.jpg";
import p_img3 from "./p_img3.jpg";
import p_img4 from "./p_img4.jpg";
import p_img5 from "./p_img5.jpg";
import p_img6 from "./p_img6.jpg";
import p_img7 from "./p_img7.jpg";
import p_img8 from "./p_img8.jpg";
import p_img9 from "./p_img9.jpg";
import p_img10 from "./p_img10.jpg";
import p_img11 from "./p_img11.jpg";
import p_img12 from "./p_img12.jpg";
import p_img13 from "./p_img13.jpg";

import logo from "./logo.png";
import hero_img from './hero_img.png'
import cart_icon from "./cart_icon.png";
import bin_icon from "./bin_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import exchange_icon from "./exchange_icon.png";
import profile_icon from "./profile_icon.png";
import quality_icon from "./quality_icon.png";
import search_icon from "./search_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";
import support_img from "./support_img.png";
import menu_icon from "./menu_icon.png";
import aboutHome from "./aboutHome.jpg";
import about from "./about.png";
import contact from "./contact_us.jpg";




export const assets = {
  logo,
  hero_img,
  cart_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  quality_icon,
  search_icon,
  star_dull_icon,
  star_icon,
  bin_icon,
  support_img,
  menu_icon,
  aboutHome,
  about,
  contact
};


export const products = [
  {
    _id: "aaaaa",
    name: "شمع",
    description:
      "این شمع دست‌ساز با عشق و دقت ساخته شده و از بهترین مواد طبیعی تهیه شده است",
    price: 100,
    image: [p_img1],
    category: "new",
    subCategory: "sangi",
    date: new Date('2023-09-01').getTime(), // 10 شهریور 1402
    bestseller: true,
  },
  {
    _id: "aaaab",
    name:"شمع",
    description:
      "این شمع دست‌ساز با عشق و دقت ساخته شده و از بهترین مواد طبیعی تهیه شده است",
    price: 200,
    image: [p_img2],
    category: "new",
    subCategory: "ghalami",
    date: new Date('2023-09-05').getTime(), 
    bestseller: true,
  },
  {
    _id: "aaaac",
    name: "شمع",
    description:
      "این شمع دست‌ساز با عشق و دقت ساخته شده و از بهترین مواد طبیعی تهیه شده است",
    price: 220,
    image: [p_img3],
    category: "new",
    subCategory: "sangi",
    date: new Date('2023-09-10').getTime(), // 19 شهریور 1402
    bestseller: true,
  },
  {
    _id: "aaaad",
    name: "شمع",
    description:
      "این شمع دست‌ساز با عشق و دقت ساخته شده و از بهترین مواد طبیعی تهیه شده است",
    price: 110,
    image: [p_img4],
    category: "new",
    subCategory: "sangi",
    date: new Date('2023-09-15').getTime(), // 24 شهریور 1402
    bestseller: true,
  },
  {
    _id: "aaaae",
    name: "شمع",
    description:
      "این شمع دست‌ساز با عشق و دقت ساخته شده و از بهترین مواد طبیعی تهیه شده است",
    price: 130,
    image: [p_img5],
    category: "old",
    subCategory: "sangi",
    date: new Date('2023-09-20').getTime(), // 29 شهریور 1402
    bestseller: true,
  },
  {
    _id: "aaaaf",
    name: "شمع",
    description:
      "این شمع دست‌ساز با عشق و دقت ساخته شده و از بهترین مواد طبیعی تهیه شده است",
    price: 140,
    image: [p_img6],
    category: "old",
    subCategory: "sangi",
    date: new Date('2023-09-25').getTime(), // 4 مهر 1402
    bestseller: true,
  },
  {
    _id: "aaaag",
    name: "شمع",
    description:
      "این شمع دست‌ساز با عشق و دقت ساخته شده و از بهترین مواد طبیعی تهیه شده است",
    price: 190,
    image: [p_img7],
    category: "old",
    subCategory: "sangi",
    date: new Date('2023-09-30').getTime(), // 9 مهر 1402
    bestseller: false,
  },
  {
    _id: "aaaah",
    name: "شمع",
    description:
      "این شمع دست‌ساز با عشق و دقت ساخته شده و از بهترین مواد طبیعی تهیه شده است",
    price: 140,
    image: [p_img8],
    category: "old",
    subCategory: "ghalami",
    date: new Date('2023-10-05').getTime(), // 14 مهر 1402
    bestseller: false,
  },
  {
    _id: "aaaai",
    name: "شمع",
    description:
      "این شمع دست‌ساز با عشق و دقت ساخته شده و از بهترین مواد طبیعی تهیه شده است",
    price: 100,
    image: [p_img9],
    category: "old",
    subCategory: "ghalami",
    date: new Date('2023-10-10').getTime(), // 19 مهر 1402
    bestseller: false,
  },
  {
    _id: "aaaaj",
    name: "شمع",
    description:
      "این شمع دست‌ساز با عشق و دقت ساخته شده و از بهترین مواد طبیعی تهیه شده است",
    price: 110,
    image: [p_img10],
    category: "old",
    subCategory: "ghalami",
    date: new Date('2023-10-20').getTime(), // 24 مهر 1402
    bestseller: false,
  },
  {
    _id: "aaaaj",
    name: "شمع",
    description:
      "این شمع دست‌ساز با عشق و دقت ساخته شده و از بهترین مواد طبیعی تهیه شده است",
    price: 110,
    image: [p_img11],
    category: "old",
    subCategory: "sangi",
    date: new Date('2023-10-22').getTime(), // 24 مهر 1402
    bestseller: false,
  },
  {
    _id: "aaaaj",
    name: "شمع",
    description:
      "این شمع دست‌ساز با عشق و دقت ساخته شده و از بهترین مواد طبیعی تهیه شده است",
    price: 110,
    image: [p_img12],
    category: "old",
    subCategory: "ghalami",
    date: new Date('2023-10-25').getTime(), // 24 مهر 1402
    bestseller: false,
  },
  {
    _id: "aaaaj",
    name: "شمع",
    description:
      "این شمع دست‌ساز با عشق و دقت ساخته شده و از بهترین مواد طبیعی تهیه شده است",
    price: 110,
    image: [p_img13],
    category: "old",
    subCategory: "ghalami",
    date: new Date('2023-10-28').getTime(), // 24 مهر 1402
    bestseller: false,
  }
  
];