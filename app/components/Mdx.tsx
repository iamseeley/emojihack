import { MDXRemote } from "next-mdx-remote/rsc"
import Header from "./Header"
import Link from "next/link";

function CustomLink(props) {
    let href = props.href;
  
    if (href.startsWith('/')) {
      return (
        <Link href={href} {...props}>
          {props.children}
        </Link>
      );
    }
  
    if (href.startsWith('#')) {
      return <a {...props} />;
    }
  
    return <a target="_blank" rel="noopener noreferrer" {...props} />;
  }

const components = { Header, CustomLink }

export function Mdx(props) {
    return (
        <MDXRemote {...props} components={{ ...components, ...(props.components || {})}} />
    )
}