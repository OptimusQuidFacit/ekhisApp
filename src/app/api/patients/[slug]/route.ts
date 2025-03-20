//@ts-nocheck
import { getPatients, getPatientsWithQuery } from "@/lib/data/patients";

// import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

type Params={
    slug: string
}
export const GET= async (request:NextRequest, {params}:{params:Params})=>{
    try{
        const {slug}=params;
        const year= parseInt(slug as string);
        const searchParams = request.nextUrl.searchParams;
        console.log(year);
    if(searchParams.has("query")){
        const query = searchParams.get("query") as string;
        
        let queryObject= JSON.parse(decodeURIComponent(query as string))
        // console.log(queryObject)
        const response = await getPatientsWithQuery(queryObject, year);
        // console.log(response);
        return NextResponse.json(response);

    }
        const response =await getPatients(year);
        // console.log(response);
       return NextResponse.json(response);
    }
    catch(err){
        console.log(err);
        return NextResponse.json(err)
    }
}