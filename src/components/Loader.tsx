const Loader = () => {
    return (
        <div className="flex justify-center items-center gap-3">
            <p className="text-white">
                Loading
            </p>
            <div className="border-white h-[25px] w-[25px] animate-spin rounded-full border-[5px] border-t-[#3A6A71]" />
        </div>
    );
}

export default Loader;