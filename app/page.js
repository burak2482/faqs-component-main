import Image from 'next/image';
import './globals.css';
import FAQ from './components/Faq';
import Accordion from './components/Accordion';

export default function Home() {
  return (
    <main className='background-pattern flex flex-col justify-center items-center min-h-screen bg-customPink'>
      <Image src='/background-pattern-desktop.svg' class='' alt='' width={1} height={1}/>
      <section class='w-1/4 bg-white px-10 py-16 rounded-2xl'>
        <div class='flex items-center'>
          <Image src='/icon-star.svg' class='' alt='' width={50} height={50}/>
          <h1 class='font-customNormal font-black text-5xl ml-4'>FAQs</h1>
        </div>
        <div class='flex mt-5'>
          <FAQ/>
        </div>
      </section>
    </main>
  );
}
