import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <div className="w-full">
      {/* handler to store the user data */}

      <header />

      <Outlet />

      <footer />
    </div>
  )
}

export default PublicLayout
