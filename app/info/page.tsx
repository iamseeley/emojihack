import Link from "next/link"
import type { Metadata } from "next"
import emojisOG from '../../emojis/emojisOg.json';

type Props = {
    params: { id: string }
    isSafariOnIOS: { [key: string]: string | string[] | undefined }
  }

export async function generateMetadata({ params, isSafariOnIOS }: Props): Promise<Metadata | undefined> {
    const faviconPngData = emojisOG['🛠️'];

    let faviconSvgUrl = `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🛠️</text></svg>`
    )}`;
    const faviconUrl = isSafariOnIOS ? faviconPngData : faviconSvgUrl;
    return {
        title: 'Info ~ Emoji Hack',
        description: 'Emoji Hack is a collection of software and web dev projects for every single emoji',
        icons: { 
            icon: { url: faviconUrl, type: isSafariOnIOS ? 'image/png' : 'image/svg+xml' },
            shortcut: faviconPngData,
            apple: faviconPngData,
          },
        openGraph: {
          title: 'Info',
          description: 'Emoji Hack is a collection of software and web dev projects for every single emoji',
          url: 'https://emojihack.com/info',
        },  
    }
}


export default function Info({ params, isSafariOnIOS }) {
    return (
        <section>
            <div className="mb-8">
                <h2 className="flex gap-2 font-semibold text-3xl mb-2">What&apos;s Emoji Hack?</h2>
            </div>
            <article className="prose">
            <p>Hi there, I&apos;m Thomas. I started Emoji Hack as a challenge to create a software or web dev project for every single emoji.</p>
            <p>I wanted to make lots of different things and keep track of them in a fun way, so I thought, why not use emojis? Emojis are fun right?</p>
            <p>So, for every project there is an associated emoji. Sometimes an idea comes first, and then an emoji is chosen for it; other times, the emoji itself inspires the project.</p>
            <p>There will be a tag on each project indicating whether the idea or the emoji came first.</p>

            <h3 className="text-2xl font-semibold ">Why do this?</h3>
            <p>Well, I did it for a few reasons.</p>
            <ol>
                <li>It&apos;s very fun.</li>
                <li>It&apos;s a commitment to creation.</li>
                <li>It&apos;s challenging.</li>
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
            
            <p>If you would like to join in the fun go to the <Link target="_blank" rel="noreferrer noopener" href={'https://github.com/iamseeley/emojihack'}>source</Link> and follow the instructions to clone emoji hack and remove my project data. Then you can start adding your own projects!</p>

            <p>Also, join the <Link target="_blank" rel="noreferrer noopener" href={''}>discord</Link>!</p>

            <p>Big shoutout to <Link target="_blank" rel="noreferrer noopener" href="https://twitter.com/leeerob">@leeerob</Link>. I adapted some of the code from his personal site to return my mdx file data (without using something like contentlayer) and format my project dates.</p>


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