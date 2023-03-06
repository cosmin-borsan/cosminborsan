import ArrowUturnLeftIcon from "@heroicons/react/24/solid/ArrowUturnLeftIcon";
import Image from "next/image";
import Link from "next/link";

function Logo(props: any) {
    const { renderDefault, title } = props;

    return (
        <div className="flex items-center space-x-2">
            <Link href="/" className="text-[#F7AB0A] flex items-center">
                <ArrowUturnLeftIcon className="h-6 w-6 text-[#F7AB0A] mr-2"></ArrowUturnLeftIcon>
            </Link>
            <>{renderDefault(props)}</>
        </div>
    );
}

export default Logo;
