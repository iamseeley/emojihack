import Link from "next/link"


export default function Hero() {
    return (
        <>
            <div className="flex flex-col  text-center items-center">
                <div className="flex flex-col gap-2 max-w-lg">
                    <h4 className='text-3xl md:text-5xl font-bold'>A project for every. single. emoji.</h4>
                    <p className="text-lg md:text-xl text-gray-600">Bring your stories to life, scene by scene, and watch your movie unfold.</p>
                </div>
                <div className='flex flex-row gap-2 mt-4'>
                    <Link target='_blank' href={"/info"} className='hover:bg-gray-300 rounded-lg py-1 px-4 drop-shadow-sm bg-yellow-300 font-semibold'>info</Link><Link target='_blank' href={"https://github.com/iamseeley/emojihack"} className='hover:bg-gray-300 rounded-lg font-semibold py-1 px-4 bg-yellow-300 drop-shadow-sm'>source</Link>
                </div>
            </div>
        </>
    ) 
}