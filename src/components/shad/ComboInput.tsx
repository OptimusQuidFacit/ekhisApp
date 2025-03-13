"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { usePatientContext } from "@/customHooks"
import { patientContextType } from "@/ContextProvider"


interface dataObject{
    value:string,
    label:string
}
interface prop {
    options: dataObject[]
    title: string,
}
export function ComboInput({options, title}:prop) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

    const {setFacility, setLGA} = usePatientContext() as patientContextType
    // const [showOptions, setShowOptions] = useState(false)
    // const [value, setValue] = useState<string>('')
    // const formRef= useRef<HTMLInputElement>(null);
    // console.log(value);

    // React.useEffect(() => { 
    //   return () => {
    //     setFacility(null);
    //     setLGA(null);
    //   }
    // }, [])
    React.useEffect(() => {
      chooseValue()
    
     
    }, [value])
    
    
    const chooseValue=()=>{
        if (title==='Facility'){
            setFacility(value)
        }
        if (title==='LGA'){
            setLGA(value)
        }
    }
    // const getValue=()=>{
    //     if (title==='Facility'){
    //         return facility;
    //     }
    //     if (title==='LGA'){
    //         return LGA;
    //     }
    // }
    // console.log(facility)
    // const handleClose=()=>{
    //     chooseValue("");
    // }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="overflow-hidden w-full max-w-[200px] justify-between"
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : `Select ${title}...`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`Search ${title}`} />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
