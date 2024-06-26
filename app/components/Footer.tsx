import emojihack from '../../emojihack.json'
import Link from 'next/link'


export default function Footer() {
    return  (
        <footer className="border-t">
            <div className='max-w-3xl mx-auto px-4 py-2 flex flex-row gap-4'>
                <p className=""><Link className="opacity-60 hover:opacity-100 group" target="_blank" rel='noreferrer noopener' href={emojihack.personalWebsite}><span className='group-hover:rotate-1'>✌️</span> tseeley.com</Link></p>
            </div>
        </footer>
    )
}