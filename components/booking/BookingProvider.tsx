"use client";

import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from "react";
import { BookingModal } from "./BookingModal";
import { FloatingCta } from "./FloatingCta";
import { ExitIntentPopup } from "./ExitIntentPopup";

type BookingContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookingModal isOpen={isOpen} onClose={close} />
      {!isOpen && <FloatingCta />}
      {!isOpen && <ExitIntentPopup />}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within a BookingProvider");
  return ctx;
}
