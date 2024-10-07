// import BarChart from "@/components/adminComponents/BarChart";
import Charts from "@/components/adminComponents/Charts";
import FilterButton from "@/components/adminComponents/FilterButton";

const page = () => {
    return (
        <div className="flex flex-col gap-3 h-full w-full">
            <div className="flex mt-5 items-center">
                <h1 className="flex-1 text-center text-xl font-semibold justify-self-center">
                    Data Insights
                </h1>
            </div>
            <div className="flex gap-4 h-4/5">
              <Charts/>
            </div>
        </div>
    );
}

export default page;