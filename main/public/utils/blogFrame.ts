export function addCodeFrame(blogContent: string): string {
    // DONT HIT RETURN ON THIS FIRST LINE TO MAKE SOURCE CODE PRETTY vvvv
    const before = `function blogTSX(props: any) {
        const Image = props

        const Note = (props: any) => {return (
            <div className={"my-[20px] border-l-[5px] border-l-blue-500 pl-[10px] py-[5px]"}>
                <p className={"text-blue-500"}>Note</p>
                <p className="text-[16px] text-white">{props.children}</p>
            </div>
        )}
        const Tip = (props: any) => {return (
            <div className={"my-[20px] border-l-[5px] border-l-green-600 pl-[10px] py-[5px]"}>
                <p className={"text-green-600"}>Tip</p>
                <p className="text-[16px] text-white">{props.children}</p>
            </div>
        )}
        const Important = (props: any) => {return (
            <div className={"my-[20px] border-l-[5px] border-l-[#c977ff] pl-[10px] py-[5px]"}>
                <p className={"text-[#c977ff]"}>Important</p>
                <p className="text-[16px] text-white">{props.children}</p>
            </div>
        )}
        const Warning = (props: any) => {return (
            <div className={"my-[20px] border-l-[5px] border-l-orange-500 pl-[10px] py-[5px]"}>
                <p className={"text-orange-500"}>Warning</p>
                <p className="text-[16px] text-white">{props.children}</p>
            </div>
        )}
        const Caution = (props: any) => {return (
            <div className={"my-[20px] border-l-[5px] border-l-red-500 pl-[10px] py-[5px]"}>
                <p className={"text-red-500"}>Caution</p>
                <p className="text-[16px] text-white">{props.children}</p>
            </div>
        )}
        const Textblock = (props: any) => {return (
            <p className="my-[20px] py-[5px] pl-[10px] border-l-[5px] border-l-neutral-400">{props.children}</p>
        )}
        const Code = (props: any) => {return (
            <span className='font-mono bg-zinc-800 p-1 rounded-[5px]'>{props.children}</span>
        )}
        const Codeblock = (props: any) => {return (
            <div className='font-mono bg-zinc-800 py-2 px-3 rounded-[5px]'>
                {props.children}
            </div>
        )}
        const Elist = (props: any) => { return (
            <ul className="list-disc pl-[20px]">
                {props.children}
            </ul>
        )}
        const H1 = (props: any) => {
            return (
                <div className='mt-[40px] mb-[20px]'>
                    <p className='text-white text-[36px]'><b>{props.children}</b></p>
                    <hr className='border-neutral-700'/>
                </div>
            )
        }
        const H2 = (props: any) => {
            return (
                <div className='mt-[40px] mb-[20px]'>
                    <p className='text-white text-[24px]'><b>{props.children}</b></p>
                    <hr className='border-neutral-700'/>
                </div>
            )
        }
        const H3 = (props: any) => {
            return (<p className='mt-[20px] mb-[10px] text-white text-[20px]'><b>{props.children}</b></p>)
        }
        const IMG = (props: any) => {
            return (
                <div className='flex flex-col items-center my-[50px]'>
                    <Image
                        priority
                        src={props.src}
                        height={props.height}
                        width={props.width}
                        alt={props.alt}
                        style={{width: "auto"}}
                    />
                    <p className='my-[10px]'>{props.children}</p>
                </div>
            )
        }

        return (
            <div className='text-neutral-200'>
    `
    const after = `
            </div>
        )
    }
    `

    let output = before + blogContent + after

    return output
}