"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useState } from "react"

interface AddMedicationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddMedicationDialog({ open, onOpenChange }: AddMedicationDialogProps) {
  const [prescribedDate, setPrescribedDate] = useState<Date | undefined>(new Date())
  const [endDate, setEndDate] = useState<Date | undefined>()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Add New Medication</DialogTitle>
          <DialogDescription>
            Enter the details of the medication to be added to the patient's record.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="medication-name">Medication Name</Label>
            <Input id="medication-name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dosage">Dosage</Label>
            <Input id="dosage" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="frequency">Frequency</Label>
            <Select defaultValue="once-daily">
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="once-daily">Once daily</SelectItem>
                <SelectItem value="twice-daily">Twice daily</SelectItem>
                <SelectItem value="three-times-daily">Three times daily</SelectItem>
                <SelectItem value="four-times-daily">Four times daily</SelectItem>
                <SelectItem value="as-needed">As needed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="status">Status</Label>
            <Select defaultValue="active">
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="discontinued">Discontinued</SelectItem>
                <SelectItem value="on-hold">On Hold</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="prescribed-date">Prescribed Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !prescribedDate && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {prescribedDate ? format(prescribedDate, "yyyy-MM-dd") : "yyyy-mm-dd"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={prescribedDate} onSelect={setPrescribedDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="end-date">End Date (if applicable)</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal", !endDate && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, "yyyy-MM-dd") : "yyyy-mm-dd"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="prescribed-by">Prescribed By</Label>
            <Input id="prescribed-by" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="purpose">Purpose</Label>
            <Input id="purpose" />
          </div>
          <div className="col-span-2 grid gap-2">
            <Label htmlFor="instructions">Instructions</Label>
            <Textarea id="instructions" className="min-h-[100px]" />
          </div>
          <div className="col-span-2 grid gap-2">
            <Label htmlFor="side-effects">Side Effects</Label>
            <Textarea id="side-effects" className="min-h-[100px]" />
          </div>
          <div className="col-span-2 grid gap-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" className="min-h-[100px]" />
          </div>
        </div>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-600">Add Medication</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
