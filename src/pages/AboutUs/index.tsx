import ProfileImg1 from '~/assets/team-1.webp'
import ProfileImg2 from '~/assets/team-2.webp'
import ProfileImg3 from '~/assets/team-3.webp'
import ProfileImg4 from '~/assets/team-4.webp'
import ProfileImg5 from '~/assets/team-5.webp'

type SectionProps = {
  title: string,
  children: JSX.Element
}

const AboutSection: React.FC<SectionProps> = ({ title, children }) => (
  <div className='flex flex-col gap-6'>
    <h2 className='text-2xl md:text-3xl text-center font-bold text-slate-800'>
      { title }
    </h2>
    { children }
  </div>
)

type ValueParagProps = {
  children: string,
}

const ValueParag: React.FC<ValueParagProps> = ({ children }) => (
  <p className='text-md text-slate-900' >{ children }</p>
)

type ProfileCardProps = {
  name: string,
  role: string,
  profileImg: string,
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, profileImg }) => (
  <div className='w-28 sm:w-36'>
    <img className='w-full rounded-full' src={ profileImg } alt='name' />
    <div className='flex flex-col pt-4 text-center'>
      <strong className='text-base text-slate-900 font-bold'>{ name }</strong>
      <small className='text-sm text-slate-600 font-light mt-1'>{ role }</small>
    </div>
  </div>
)

export const AboutUs = () => {
  return (
    <div className='h-full max-w-3xl mx-auto px-8 py-10 flex flex-col items-center gap-10'>
      <AboutSection title='Our Values'>
        <div className='flex flex-col gap-4'>
          <ValueParag>
            At DevNews, we are passionate about keeping you informed on the latest developments in the programming world. Our dedicated team of tech enthusiasts and experienced developers curate and deliver the most relevant news, trends, and insights to help you stay ahead in the fast-paced world of technology.
          </ValueParag>
          <ValueParag>
            Our mission is to empower developers by providing timely and accurate information that enhances their skills and keeps them connected to the global coding community. Whether you're a seasoned professional or just starting your coding journey, DevNews is your go-to source for everything programming.
          </ValueParag>
          <ValueParag>
            Join us and become a part of a vibrant community that values innovation, continuous learning, and collaboration. Together, we can drive the future of technology forward.
          </ValueParag>
        </div>
      </AboutSection>
      <AboutSection title='Our Team'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12'>
          <ProfileCard name='Michael Johnson' role='CEO' profileImg={ ProfileImg5 } />
          <ProfileCard name='David Martinez' role='CTO' profileImg={ ProfileImg1 } />
          <ProfileCard name='Olivia Carter' role='Head of Content' profileImg={ ProfileImg3 } />
          <ProfileCard name='Benjamin Lee' role='Lead Developer' profileImg={ ProfileImg2 } />
          <ProfileCard name='John Smith' role='Marketing Manager' profileImg={ ProfileImg4 } />
        </div>
      </AboutSection>
    </div>
  )
}
