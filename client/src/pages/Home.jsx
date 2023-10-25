import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay  } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div>
      {/* Swiper */}
      <Swiper navigation Autoplay={{ delay: 0 }}>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className="h-[500px]"
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Hero Section */}
      <section
        className="text-white py-20 text-center"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0)', // Adjust opacity as needed
          position: 'absolute',
          width: '100%',
          height: '65%',
          top: 100,
          left: 0,
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-5 mt-1 pt-1">
            Find Your Dream Home
          </h1>
          <p className="text-lg mb-8">
            Discover a wide range of properties to choose from.
          </p>
          <Link
            to={'/search'}
            className="bg-white text-blue-700 py-3 px-8 font-bold rounded-full transition duration-300 hover:bg-blue-800 hover:text-white"
          >
            Get Started
          </Link>
        </div>
      </section>
