"use client"

import { useState } from "react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, AlertTriangle, ChevronDown, ChevronUp, CheckCircle, XCircle, Clock } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"
import { AddMedicationDialog } from "@/components/add-medication-dialog"

export default function MedicationDashboard() {
  const [isSertralineOpen, setIsSertralineOpen] = useState(false)
  const [isMetforminOpen, setIsMetforminOpen] = useState(true)
  const [isAddMedicationOpen, setIsAddMedicationOpen] = useState(false)

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <Tabs defaultValue="medication" className="w-full">
        <TabsList className="w-full grid grid-cols-5 bg-gray-100 rounded-md h-auto p-1">
          <TabsTrigger
            value="appointment"
            className="py-3 data-[state=inactive]:bg-transparent data-[state=inactive]:text-gray-600"
          >
            Appointment Details
          </TabsTrigger>
          <TabsTrigger
            value="safety"
            className="py-3 data-[state=inactive]:bg-transparent data-[state=inactive]:text-gray-600"
          >
            Suicide Safety Planning
          </TabsTrigger>
          <TabsTrigger value="medication" className="py-3 data-[state=active]:bg-white">
            Medication Adherence
          </TabsTrigger>
          <TabsTrigger
            value="treatment"
            className="py-3 data-[state=inactive]:bg-transparent data-[state=inactive]:text-gray-600"
          >
            Treatment Adherence
          </TabsTrigger>
          <TabsTrigger
            value="assessment"
            className="py-3 data-[state=inactive]:bg-transparent data-[state=inactive]:text-gray-600"
          >
            Assessment History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="medication" className="mt-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            {/* Patient Info */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 bg-blue-100">
                  <div className="text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </Avatar>
                <div>
                  <h2 className="text-xl font-bold">Jane Doe</h2>
                  <p className="text-gray-600">Patient ID: PT10023455 | Age: 38</p>
                </div>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600" onClick={() => setIsAddMedicationOpen(true)}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Medication
              </Button>
            </div>

            {/* Medication Adherence Summary */}
            <h3 className="text-xl font-bold mb-4">Medication Adherence Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="p-4 border-l-4 border-l-green-500">
                <p className="text-gray-600 mb-1">Overall Adherence</p>
                <p className="text-4xl font-bold">65%</p>
              </Card>
              <Card className="p-4 border-l-4 border-l-blue-500">
                <p className="text-gray-600 mb-1">Medications Tracked</p>
                <p className="text-4xl font-bold">2</p>
              </Card>
              <Card className="p-4 border-l-4 border-l-amber-500">
                <p className="text-gray-600 mb-1">Active Side Effects</p>
                <p className="text-4xl font-bold">2</p>
              </Card>
            </div>

            {/* Medication Details */}
            <h3 className="text-xl font-bold mb-4">Medication Details</h3>

            {/* Sertraline */}
            <Collapsible
              open={isSertralineOpen}
              onOpenChange={setIsSertralineOpen}
              className="border rounded-lg mb-4 overflow-hidden"
            >
              <CollapsibleTrigger className="w-full">
                <div className="p-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-20 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                    <div className="text-sm text-gray-500">90% Adherence</div>
                  </div>
                  <div className="flex-1 px-6 text-left">
                    <h4 className="text-lg font-bold">Sertraline (Zoloft) 50mg</h4>
                    <p className="text-gray-600">Once daily in the morning</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500 font-medium">On Track</span>
                    {isSertralineOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="bg-gray-50 p-4 border-t">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      <h5 className="font-bold">Side Effects</h5>
                    </div>
                    <p className="text-gray-500 italic">No side effects reported</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-blue-500" />
                      <h5 className="font-bold">Recent Logs</h5>
                    </div>

                    <div className="space-y-3">
                      {/* Apr 6 */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Apr 6, 2025</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>8:05 AM</span>
                          </div>
                          <span className="text-gray-500">Taken with breakfast</span>
                        </div>
                      </div>

                      {/* Apr 5 */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Apr 5, 2025</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>8:15 AM</span>
                        </div>
                      </div>

                      {/* Apr 4 */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Apr 4, 2025</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>8:00 AM</span>
                        </div>
                      </div>

                      {/* Apr 3 */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span>Apr 3, 2025</span>
                        </div>
                        <span className="text-gray-500">Forgot in morning rush</span>
                      </div>

                      {/* Apr 2 */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Apr 2, 2025</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>8:10 AM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Metformin */}
            <Collapsible
              open={isMetforminOpen}
              onOpenChange={setIsMetforminOpen}
              className="border rounded-lg overflow-hidden"
            >
              <CollapsibleTrigger className="w-full">
                <div className="p-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-20 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                    <div className="text-sm text-gray-500">40% Adherence</div>
                  </div>
                  <div className="flex-1 px-6 text-left">
                    <h4 className="text-lg font-bold">Metformin 500mg</h4>
                    <p className="text-gray-600">Twice daily with meals</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-500 font-medium">Attention Needed</span>
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                    {isMetforminOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="bg-gray-50 p-4 border-t">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      <h5 className="font-bold">Side Effects</h5>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Moderate</Badge>
                          <span className="font-medium">Nausea</span>
                        </div>
                        <div className="text-gray-500">Reported: Apr 2, 2025 • Ongoing</div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Moderate</Badge>
                          <span className="font-medium">Stomach pain</span>
                        </div>
                        <div className="text-gray-500">Reported: Mar 25, 2025 • Ongoing</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-5 w-5 text-blue-500" />
                      <h5 className="font-bold">Recent Logs</h5>
                    </div>

                    <div className="space-y-3">
                      {/* Apr 6 Morning */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Apr 6, 2025</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>8:05 AM</span>
                          </div>
                          <span className="text-gray-500">Morning dose</span>
                        </div>
                      </div>

                      {/* Apr 6 Evening */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span>Apr 6, 2025</span>
                        </div>
                        <span className="text-gray-500">Felt too sick in evening</span>
                      </div>

                      {/* Apr 5 Morning */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Apr 5, 2025</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>8:15 AM</span>
                          </div>
                          <span className="text-gray-500">Morning dose</span>
                        </div>
                      </div>

                      {/* Apr 5 Evening */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Apr 5, 2025</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>8:15 PM</span>
                          </div>
                          <span className="text-gray-500">Evening dose</span>
                        </div>
                      </div>

                      {/* Apr 4 */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Apr 4, 2025</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>8:00 AM</span>
                          </div>
                          <span className="text-gray-500">Morning dose</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </TabsContent>
      </Tabs>

      {/* Add Medication Dialog */}
      <AddMedicationDialog open={isAddMedicationOpen} onOpenChange={setIsAddMedicationOpen} />
    </div>
  )
}
