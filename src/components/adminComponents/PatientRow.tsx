
type props={
    adminRange:number
    index:number,
    name:string,
    NIN: string|number,
    phoneNumber:string|number,
    LGA:string,
    facility:string,
    jan?:number,
    feb?:number,
    mar?:number,
    apr?:number,
    may?:number,
    jun?:number,
    jul?:number,
    aug?:number,
    sep?:number,
    oct?:number,
    nov?:number,
    dec?:number,
}
const PatientRow = (props:props) => {
    console.log("row componeent", props.adminRange)
    return (
        <div className="flex my-3">
            <div className="flex-[0.2] font-semibold">
                {props.index+1}
            </div>
            <div className="flex-[2]">
                {props.name}
            </div>
            <div className="flex-1">
                {props.NIN}
            </div>
            <div className="flex-1">
                {props.phoneNumber}
            </div>
            <div className="flex-[0.5]">
                {props.LGA}
            </div>
            <div className="flex-1 me-[10px]">
                {props.facility}
            </div>
            <div className="flex-[0.2]">
                {props.jul}
            </div>
            <div className="flex-[0.2]">
                {props.aug}
            </div>
            <div className="flex-[0.2]">
                {props.adminRange===2?props.sep:props.mar}
            </div>
            <div className="flex-[0.2]">
                {props.oct}
            </div>
            <div className="flex-[0.2]">
                {props.nov}
            </div>
            <div className="flex-[0.2]">
                {props.dec}
            </div>
        </div>
    );
}

export default PatientRow;