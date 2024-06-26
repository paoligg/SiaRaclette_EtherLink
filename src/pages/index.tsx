import { NextPage } from 'next';
import Head from 'next/head';
import SurveyDisplay from '@/components/SurveysDisplay';

const Home: NextPage = () => {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] gap-4'>
      <Head>
        <title>DESURV</title>
        <meta name="description" content="An awesome app" />
      </Head>

      {/* Optional: Any content you want at the top */}
      <div>
        {/* Your top content here */}
      </div>

      {/* This section now takes the remaining space but doesn't push the bottom content entirely to the bottom */}
      <div className='flex-grow'>
        {/* Adjust this space or content as needed */}
      </div>
        <div className='flex flex-col gap-4'>
          <div className='text-center'>
            <span className='text-4xl'>ANSWER SURVEYS</span>
          </div>
          <SurveyDisplay /> 
        
        </div>
          </div>
        );
};

export default Home;
