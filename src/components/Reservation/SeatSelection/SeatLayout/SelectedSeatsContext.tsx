import React, { createContext, useContext, useEffect, useState } from "react"
import { Passenger } from "store/types"
import { store as Store } from "store"
import { SetCurrentReservationPassangers } from "store/actions"

interface SelectedSeatsContextType {
  selectedSeats: string[]
  setSelectedSeats: React.Dispatch<React.SetStateAction<string[]>>
}

const SelectedSeatsContext = createContext<
  SelectedSeatsContextType | undefined
>(undefined)

export const useSelectedSeats = (): SelectedSeatsContextType => {
  const context = useContext(SelectedSeatsContext)
  if (!context) {
    throw new Error(
      "useSelectedSeats must be used within a SelectedSeatsProvider"
    )
  }
  return context
}

export const SelectedSeatsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const currentPassengers: Passenger[] =
    Store.getState().CurrentReservation.passangers || []
  const currentSelectedSeats: string[] = currentPassengers.map(
    (passenger: Passenger) => passenger.seat
  )

  const [selectedSeats, setSelectedSeats] =
    useState<string[]>(currentSelectedSeats)

  useEffect(() => {
    if (selectedSeats) {
      let passangers: Passenger[] = selectedSeats.map((seat: string) => {
        return {
          name: "",
          email: "",
          seat,
          dateOfBooking: Store.getState().CurrentReservation.boardingDate,
        }
      })
      Store.dispatch(SetCurrentReservationPassangers(passangers))
    }
  }, [selectedSeats])

  return (
    <SelectedSeatsContext.Provider value={{ selectedSeats, setSelectedSeats }}>
      {children}
    </SelectedSeatsContext.Provider>
  )
}
