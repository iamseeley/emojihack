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
                    <Link href={"/info"} className='hover:opacity-80  rounded-lg inline-flex items-center h-9 py-2 px-4 shadow-sm bg-black '>more info</Link><Link target='_blank' rel="noreferrer" href={"https://github.com/iamseeley/emojihack"} className='hover:opacity-80 hover:bg-gray-200 rounded-lg py-2 h-9  px-4 inline-flex items-center   text-black bg-gray-200   shadow-sm'>source</Link>
                </div>
            </div>
        </>
    ) 
}