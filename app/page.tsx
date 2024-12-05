import {Button} from "@/components/ui/button"

export default function Home() {
    return (
        <div
            className="grid grid-cols-[1fr_1fr] grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <p>
                Variant: default
            </p>
            <Button>Button</Button>
            <p>
                Variant: destructive
            </p>
            <Button variant="destructive">Button</Button>
            <p>
                Variant: outline
            </p>
            <Button variant="outline">Button</Button>
            <p>
                Variant: secondary
            </p>
            <Button variant="secondary">Button</Button>
            <p>
                Variant: ghost
            </p>
            <Button variant="ghost">Button</Button>
            <p>
                Variant: link
            </p>
            <Button variant="link">Button</Button>
        </div>
    );
}
