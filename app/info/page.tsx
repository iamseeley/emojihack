import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Info',
    description: 'Emoji Hack is a collection of software and web dev projects for every single emoji',
    openGraph: {
      title: 'Info',
      description: 'Emoji Hack is a collection of software and web dev projects for every single emoji',
      url: 'https://emojihack.com/info',
    },  
  };


export default function Info() {
    return (
        <section>
            <div className="mb-8">
                <h2 className="flex gap-2 font-semibold text-3xl mb-2">What&apos;s Emoji Hack?</h2>
            </div>
            <article className="prose">
            <p>Emoji Hack is a collection of software and web dev projects for every single emoji.</p>
            <p>Each project was either inspired by an emoji, or I had an idea and picked an emoji for it.</p>


            <h3 className="text-2xl font-semibold ">Why do this?</h3>
            <p>Well, I did it for a few reasons.</p>
            <ol>
                <li>It&apos;s very fun.</li>
                <li>It&apos;s a commitment to creation.</li>
                <li>It&apos;s a challenge.</li>
                <li>It&apos;s so much fun.</li>
            </ol>
            <p>I also hope people see this and it inspires them to build a bunch of stuff.</p>
            <p><em>You can just make things.</em></p>

            <h3 className="text-2xl font-semibold ">Project Areas</h3>
            <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 inline-flex bg-gray-100 text-sm font-medium">programming languages</span>
                <span className="px-2 py-1 inline-flex bg-gray-100 text-sm font-medium">machine learning</span>
                <span className="px-2 py-1 inline-flex bg-gray-100 text-sm font-medium">web frameworks</span>
                <span className="px-2 py-1 inline-flex bg-gray-100 text-sm font-medium">css frameworks</span>
                <span className="px-2 py-1 inline-flex bg-gray-100 text-sm font-medium">games</span>
                <span className="px-2 py-1 inline-flex bg-gray-100 text-sm font-medium">algorithms</span>
                <span className="px-2 py-1 inline-flex bg-gray-100 text-sm font-medium">experimental frontend</span>
                <span className="px-2 py-1 inline-flex bg-gray-100 text-sm font-medium">webGPU</span>
                <span className="px-2 py-1 inline-flex bg-gray-100 text-sm font-medium">personal software tools</span>
                <span className="px-2 py-1 inline-flex bg-gray-100 text-sm font-medium">web apps</span>
                <span className="px-2 py-1 inline-flex bg-gray-100 text-sm font-medium">browser extensions</span>
            </div>

            <p>I&apos;m going to try to keep the max time I spend on individual projects to one week.</p>

            <p>Big shoutout to <Link target="_blank" rel="noreferrer noopener" href="https://twitter.com/leeerob">@leeerob</Link>. I adapted some of the code from his personal site to return my mdx file data (without using something like contentlayer) and format my project dates.</p>
            
            <p>If you would like to join in the fun go to the <Link target="_blank" rel="noreferrer noopener" href={'https://github.com/iamseeley/emojihack'}>source</Link> and follow the instructions to clone emoji hack and remove my project data. Then you can start adding your own projects!</p>

            <p>Also, join the <Link target="_blank" rel="noreferrer noopener" href={''}>discord</Link>!</p>


            <h3 className="text-2xl font-semibold ">Inspo</h3>
            <div className="flex flex-wrap gap-2 text-sm ">
                <Link className="bg-black px-2 py-1 no-underline  rounded-full text-white" target="_blank" rel="noreferrer noopener" href="https://twitter.com/thesephist">@thesephist</Link>
                <Link className="bg-black px-2 py-1 no-underline rounded-full text-white" target="_blank" rel="noreferrer noopener" href="https://twitter.com/m1guelpf">@m1guelpf</Link>
                <Link className="bg-black px-2 py-1 no-underline rounded-full text-white" target="_blank" rel="noreferrer noopener" href="https://twitter.com/willdepue">@willdepue</Link>
            </div>


            </article>
        
        
        </section>
    )
}