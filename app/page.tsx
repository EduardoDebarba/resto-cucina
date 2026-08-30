import { Header } from '@/components/site/header';
import { Hero } from '@/components/site/hero';
import { About } from '@/components/site/about';
import { Chef } from '@/components/site/chef';
import { Experience } from '@/components/site/experience';
import { Footer } from '@/components/site/footer';
import { Gallery } from '@/components/site/gallery';
import { Location } from '@/components/site/location';
import { MenuPreview } from '@/components/site/menu-preview';
import { ReservationModal } from '@/components/site/reservation-modal';
import { ReservationCTA } from '@/components/site/reservation-cta';
import { SignatureDishes } from '@/components/site/signature-dishes';
import { StorySection } from '@/components/site/story-section';
import { Testimonials } from '@/components/site/testimonials';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <SignatureDishes />
        <StorySection />
        <Experience />
        <MenuPreview />
        <Chef />
        <Gallery />
        <Testimonials />
        <ReservationCTA />
        <Location />
      </main>
      <Footer />
      <ReservationModal />
    </>
  );
}
