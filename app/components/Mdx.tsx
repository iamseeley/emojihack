import { MDXRemote } from "next-mdx-remote/rsc"
import Header from "./Header"


const components = { Header }

export function Mdx(props) {
    return (
        <MDXRemote {...props} components={{ ...components, ...(props.components || {})}} />
    )
}