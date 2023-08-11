import Header from './header';
import Contents from './contents';
import Useractionbutton from './useraction';

export default function TimeLine() {
    return (
        <div className="">
            <div className=""><Header /></div>
            <div className="flex h-screen">
                <div className="hidden sm:flex mt-14 w-2/5 items-center justify-center">User Info</div>
                <div className="mt-14 w-full sm:w-3/5 overflow-y-scroll hidden-scrollbar border-l border-gray-500">
                    <Contents />
                </div>
                <div className="bottom-0 right-0">
                    <Useractionbutton />
                </div>
            </div>
        </div>
    );
};