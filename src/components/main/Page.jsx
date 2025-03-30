import Content from "./page/content";
import SideBar from "../SideBar";

export default function Page() {
    return(
        <>
            <div className="bg-white rounded-lg h-5/6 w-2/3 flex">
                <SideBar />
                <Content />
            </div>
        </>
    )
}