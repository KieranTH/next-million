import { ScrollArea } from "@/components/Radix";

type ContentProps = {
    children: React.ReactNode
}
const Content = ({children}: ContentProps) => {
    return (
        <ScrollArea className="flex-1 flex bg-white text-black">
            {children}
        </ScrollArea>
    )
}

export default Content;