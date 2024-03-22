import { cn } from "../../lib/utils"
import { Link, useLocation } from "react-router-dom"
const MainNav = () => {
  const location = useLocation()
  return (
    <nav className="flex items-center gap-6 text-sm">
      <Link
        to="/"
        className={cn(
          "transition-colors hover:text-foreground/80",
          location.pathname === "/" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Dashboard
      </Link>
      <Link
        to="/reservation"
        className={cn(
          "transition-colors hover:text-foreground/80",
          location.pathname === "/reservation"
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Reservation
      </Link>
    </nav>
  )
}

export default MainNav
