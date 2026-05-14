import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../Elements/style.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import MovieCardSlide from './MovieCardSlide';
const SwiperSimillar = ({simillar}) => {
 return(
    
    simillar && (
        <>
        <h3 className='text-white '>other {`${simillar[0].type}`}s:</h3>
        <Swiper
        slidesPerView={4.5}
        spaceBetween={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper border rounded p-5"
      >
        {simillar.map((movie)=>(
            <SwiperSlide className='m-3' key={movie.id}>
                <MovieCardSlide {...movie}/>
        </SwiperSlide>
        ))}
      </Swiper>
        </>
    )
   
 )
}
export default SwiperSimillar