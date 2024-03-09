import type { Metadata } from "next"
import emojihack from '../../emojihack.json'

export const metadata: Metadata = {
    title: {
    default: "",
    template: `%s ~ ${emojihack.fullName}`,
  },
  };



  export default function ProjectLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>{children}</>
    )
}