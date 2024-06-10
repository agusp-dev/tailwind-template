import { ourValues, ourTeam } from '~/mock/aboutUs'
import { TeamMember } from '~/types'

type SectionProps = {
  title: string,
  children: JSX.Element
}

const AboutSection: React.FC<SectionProps> = ({ title, children }) => (
  <div className='flex flex-col gap-6'>
    <h2 className='text-2xl md:text-3xl text-center font-bold text-slate-800 dark:text-slate-100'>
      { title }
    </h2>
    { children }
  </div>
)

type ValueParagProps = {
  children: string,
}

const ValueParag: React.FC<ValueParagProps> = ({ children }) => (
  <p className='text-md text-slate-900 dark:text-slate-200' >{ children }</p>
)

const ProfileCard: React.FC<TeamMember> = ({ name, role, profileImg }) => (
  <div className='w-28 sm:w-36'>
    <img className='w-full rounded-full' src={ profileImg } alt='name' />
    <div className='flex flex-col pt-4 text-center'>
      <strong className='text-base text-slate-900 dark:text-slate-200 font-bold'>{ name }</strong>
      <small className='text-sm text-slate-600 dark:text-slate-300 font-light mt-1'>{ role }</small>
    </div>
  </div>
)

export const AboutUs = () => {
  return (
    <div className='h-full max-w-3xl mx-auto px-8 py-10 flex flex-col items-center gap-10'>
      <AboutSection title='Our Values'>
        <div className='flex flex-col gap-4'>
          {ourValues?.map(ourValue => <ValueParag key={ ourValue }>{ ourValue }</ValueParag>)}
        </div>
      </AboutSection>
      <AboutSection title='Our Team'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12'>
          {ourTeam?.map(({ name, role, profileImg }: TeamMember) => (
            <ProfileCard 
              key={ name }
              name={ name }
              role={ role }
              profileImg={ profileImg }
            />
          ))}
        </div>
      </AboutSection>
    </div>
  )
}
