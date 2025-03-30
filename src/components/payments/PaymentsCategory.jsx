import SideBar from "../SideBar";
import PaymentsContent from "./paymentscategory/PaymentsContent";

export default function PaymentsCategory() {
    return(
        <>
            <div className="bg-white rounded-lg h-5/6 w-2/3 flex">
                <SideBar />
                <PaymentsContent />
            </div>  
        </>
    )
}