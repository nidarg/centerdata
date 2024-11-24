// import { Title } from '@/components/Title';

// import { ContainerScroll } from '@/components/ui/container-scroll-animation';


import TextImage from '@/components/TextImage';
// import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

// import { videoUrls } from '@/utils/videos';
import { innovation, consulting } from '@/utils/about';

import ServiceCardMain from '@/components/card/ServiceCardMain';
import WorkWithUsMain from '@/components/work-with-us/WorkWithUsMain';

import Testimonials from '@/components/Testimonials';
import VideoBackground from '@/components/VideoBackground';

const headers = ['BE AHEAD.', 'BE SECURE.','BE COMPLIANT.']

export default function Home() {
  return (
    <div className='flex flex-cols justify-center gap-6'>
      <VideoBackground videoUrl='./videos/video1.mp4' height='80vh' headers = {headers} />
      {/* <VideoBackground videoUrl='./videos/businessman.mp4' height='80vh' headers = {headers} /> */}
      <div className='mt-[85vh]'>
        <ServiceCardMain />

       
        <TextImage
          title={consulting.title}
          text={consulting.text}
          imageUrl={consulting.imageUrl}
        />
        <TextImage
          title={innovation.title}
          text={innovation.text}
          subtitle={innovation.subtitle}
          imageUrl={innovation.imageUrl}
          reverse={true}
        />
        <WorkWithUsMain />

        <Testimonials />
      </div>
    </div>
  );
}

{
  /* <div className='flex flex-col md:flex-row w-full gap-8 p-8 pt-20'>
        <Title title='Our Services' />
        {mainServices.map((service, index) => (
          <ContainerScroll key={index} titleComponent=''>
            <ServiceCard
              title={service.title}
              description={service.description}
            />
          </ContainerScroll>
        ))}
      </div> */
}
