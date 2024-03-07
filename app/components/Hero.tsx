import Link from "next/link"


export default function Hero() {
    return (
        <>
            <div className="flex flex-col  text-center items-center">
                <div className="flex flex-col gap-2 max-w-lg">
                    <h4 className='text-4xl md:text-5xl font-bold'>A project for every emoji</h4>
                    <p className="text-lg md:text-xl text-gray-600">Bring your stories to life, scene by scene, and watch your movie unfold.</p>
                </div>
                <div className='flex flex-row gap-2 mt-4 font-medium text-white'>
                    <Link href={"/info"} className='hover:opacity-80  rounded-lg inline-flex items-center h-9 py-2 px-4 shadow-md bg-amber-500 '>more info</Link><Link target='_blank' rel="noreferrer" href={"https://github.com/iamseeley/emojihack"} className='hover:opacity-80 hover:bg-gray-200 rounded-lg py-2 h-9  px-4 inline-flex items-center  border-2 text-amber-500 bg-gray-50  border-amber-500 shadow-md'>source</Link>
                </div>
            </div>
        </>
    ) 
}