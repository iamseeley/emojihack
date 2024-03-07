import Link from "next/link"


export default function Hero() {
    return (
        <>
            <div className="flex flex-col  text-center items-center">
                <div className="flex flex-col gap-2 max-w-lg">
                    <p className="text-lg md:text-xl text-gray-600">Instead of getting an internship dudes will</p>
                    <h4 className='text-4xl md:text-5xl font-bold'>Build a project for every emoji</h4>
                    
                </div>
                <div className='flex flex-row gap-2 mt-6 font-medium text-white'>
                    <Link href={"/info"} className='hover:opacity-80  rounded-lg inline-flex items-center h-9 py-2 px-4 shadow-sm bg-blue-600 '>more info</Link>
                    <Link className="px-4 h-9 hover:opacity-80  py-1 bg-blue-50 text-blue-600 rounded-lg shadow-sm font-medium inline-flex items-center" target="_blank" rel="noreferrer" href={'https://github.com/iamseeley/emojihack'}>source <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></Link>
                    
                </div>
            </div>
        </>
    ) 
}