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
{/* Recent Offers Section */}
      <section className="container mx-auto py-12 pl-10">
        {offerListings && offerListings.length > 0 && (
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Recent Offers</h2>
            <Link
              to={'/search?offer=true'}
              className="text-blue-700 font-bold hover:underline"
            >
              View More Offers
            </Link>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {offerListings.map((listing) => (
            <ListingItem key={listing._id} listing={listing} />
          ))}
        </div>
      </section>

      {/* Similar sections for Rent and Sale listings */}
      <section className="container mx-auto py-12 pl-10">
        {rentListings && rentListings.length > 0 && (
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">
              Recent Places for Rent
            </h2>
            <Link
              to={'/search?type=rent'}
              className="text-blue-700 font-bold hover:underline"
            >
              View More Places for Rent
            </Link>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rentListings.map((listing) => (
            <ListingItem key={listing._id} listing={listing} />
          ))}
        </div>
      </section>
