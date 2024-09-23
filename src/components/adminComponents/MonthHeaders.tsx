//@ts-nocheck
const MonthHeaders = ({patients, adminRange}:{patients:any, adminRange:number}) => {
    return (
        <>
          {
            adminRange===2?
            <>
                <div className="flex-[0.2]">
                    Jul
                    <p className="text-sm">
                        ({patients?.reduce((acc:number, patient:any)=>acc+patient.july, 0)})
                    </p>
                </div>
                <div className="flex-[0.2]">
                    Aug
                    <p className="text-sm">
                        ({patients?.reduce((acc:number, patient:any)=>acc+patient.august, 0)})
                    </p>
                </div>
                <div className="flex-[0.2]">
                    Sep
                    <p className="text-sm">
                        ({patients?.reduce((acc:number, patient:any)=>acc+patient.september, 0)})
                    </p>
                </div>
                <div className="flex-[0.2]">
                    Oct
                    <p className="text-sm">
                        ({patients?.reduce((acc:number, patient:any)=>acc+patient.october, 0)})
                    </p>
                </div>
                <div className="flex-[0.2]">
                    Nov
                    <p className="text-sm">
                        ({patients?.reduce((acc:number, patient:any)=>acc+patient.november, 0)})
                    </p>
                </div>
                <div className="flex-[0.2]">
                    Dec
                    <p className="text-sm">
                        ({patients?.reduce((acc:number, patient:any)=>acc+patient.december, 0)})
                    </p>
                </div>
            </>:
            <>
                <div className="flex-[0.2]">
                    Jan
                    <p className="text-sm">
                        ({patients?.reduce((acc:number, patient:any)=>acc+patient.january, 0)})
                    </p>
                </div>
                <div className="flex-[0.2]">
                    Feb
                    <p className="text-sm">
                        ({patients?.reduce((acc:number, patient:any)=>acc+patient.febuary, 0)})
                    </p>
                </div>
                <div className="flex-[0.2]">
                    Mar
                    <p className="text-sm">
                        ({patients?.reduce((acc:number, patient:any)=>acc+patient.march, 0)})
                    </p>
                </div>
                <div className="flex-[0.2]">
                    Apr
                    <p className="text-sm">
                        ({patients?.reduce((acc:number, patient:any)=>acc+patient.april, 0)})
                    </p>
                </div>
                <div className="flex-[0.2]">
                    May
                    <p className="text-sm">
                        ({patients?.reduce((acc:number, patient:any)=>acc+patient.may, 0)})
                    </p>
                </div>
                <div className="flex-[0.2]">
                    Jun
                    <p className="text-sm">
                        ({patients?.reduce((acc:number, patient:any)=>acc+patient.june, 0)})
                    </p>
                </div>
            </>
          }  
        </>
    );
}

export default MonthHeaders;