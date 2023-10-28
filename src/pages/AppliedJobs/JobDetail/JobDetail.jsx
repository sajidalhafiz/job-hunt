import dollar from '../../../assets/icons/money.png';
import calendar from '../../../assets/icons/calendar.png';
import phone from '../../../assets/icons/phone.png';
import loc from '../../../assets/icons/location2.png';
import email from '../../../assets/icons/email.png';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import { useLocation } from 'react-router-dom';


const JobDetail = () => {
    const location = useLocation();
    // console.log(location.state.job)

    const job = location.state.job;
    const { jobTitle,
        jobDescription,
        jobResponsibility,
        educationalRequirements,
        experiences,
        contactInformation,
        salary } = job;
    

    return (
        <div>
            <PageTitle>Job Details</PageTitle>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 w-full p-0 lg:w-9/12 mx-auto my-20 lg:my-32 px-4 lg:px-0'>
                <div className='lg:col-span-2 text-zinc-700 text-md lg:text-lg space-y-6'>
                    <div>
                        <h3 className='font-bold'>Job Description: </h3>
                        <p>{jobDescription}</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>Job Responsibility: </h3>
                        <p>{jobResponsibility}</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>Educational Requirements: </h3>
                        <p>{educationalRequirements}</p>
                    </div>
                    <div>
                        <h3 className='font-bold'>Experiences: </h3>
                        <p>{experiences}</p>
                    </div>
                </div>
                <div className='flex flex-col space-y-6'>
                    <div className='p-7 text-zinc-700 text-md lg:text-lg bg-gradient-to-br from-[#7e8ffe2f] to-[#9873ff2f] rounded-lg'>
                        <h2 className='text-zinc-900 lg:text-xl font-extrabold'>Job Details</h2>
                        <div className='my-6 h-1 opacity-30 bg-indigo-400' />
                        <div className='flex gap-4 mb-4'>
                            <img className='w-6 h-6' src={dollar} alt="" />
                            <p><span className='font-bold'>Salary : </span>{salary}</p>
                        </div>
                        <div className='flex gap-4 mb-4'>
                            <img className='w-6 h-6' src={calendar} alt="" />
                            <p><span className='font-bold'>Job Title : </span>{jobTitle}</p>
                        </div>
                        <h2 className='text-zinc-900 lg:text-xl font-extrabold mt-10'>Contact Information</h2>
                        <div className='my-6 h-1 opacity-30 bg-indigo-400' />
                        <div className='flex gap-4 mb-4'>
                            <img className='w-6 h-6' src={phone} alt="" />
                            <p><span className='font-bold'>Phone : </span>{contactInformation.phone}</p>
                        </div><div className='flex gap-4 mb-4'>
                            <img className='w-6 h-6' src={email} alt="" />
                            <p><span className='font-bold'>Email : </span>{contactInformation.email}</p>
                        </div><div className='flex gap-4 mb-4'>
                            <img className='w-6 h-6' src={loc} alt="" />
                            <p><span className='font-bold'>Address : </span>{contactInformation.address}</p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <button className="btn normal-case btn-gradient active:scale-95 border-none text-xs lg:text-lg min-w-full">Start Applying</button>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default JobDetail;