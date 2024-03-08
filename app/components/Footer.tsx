import emojihack from '../../emojihack.json'



export default function Footer() {
    return  (
        <footer className="flex justify-center border-t">
            <p className="py-2"><a className="opacity-60 hover:opacity-100" target="_blank" href={emojihack.personalWebsite}>🛠️ tseeley.com</a></p>
        </footer>
    )
}