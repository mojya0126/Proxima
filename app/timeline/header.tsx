export default function header() {
    return (
        <div>
            <header className="border-b-2 border-gray-900 h-14 fixed top-0 w-full bg-white">
                <div className="flex items-center justify-between h-full px-6">
                    <div className="flex items-center">
                        <h1 className="text-2xl">𝙋𝙧𝙤𝙭𝙞𝙢𝙖</h1>
                    </div>
                    <nav className="flex h-full">
                        <a href="#" className="h-full px-4 flex items-center hover:text-white hover:bg-gray-900 transition duration-500">Home</a>
                        <a href="#" className="h-full px-4 flex items-center hover:text-white hover:bg-gray-900 transition duration-500">Search</a>
                        <a href="#" className="h-full px-4 flex items-center hover:text-white hover:bg-gray-900 transition duration-500">Tools</a>
                        <a href="#" className="h-full px-4 flex items-center hover:text-white hover:bg-gray-900 transition duration-500">Help</a>
                    </nav>
                </div>
            </header>
        </div>
    )
}