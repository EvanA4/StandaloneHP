import { Nav } from '../components/general/nav'

export default function Blogs() {
    return (
        <div className='bg-zinc-950 min-h-[100vh]'>
            <Nav alwaysOn={true} />

            <div className="text-white py-[10vh] px-[10vw]">
                <div className='text-neutral-200'>
                    <div className='mt-[40px] mb-[20px]'>
                        <p className='text-white text-[36px]'><b>Welcome to the art page!</b></p>
                        <hr className='border-neutral-700'/>
                    </div>
                    <p>
                        This site is still a work in progress, so it may be a minute before this is available.
                    </p>
                </div>
            </div>
        </div>
    );
}