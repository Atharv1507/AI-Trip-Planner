import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import LoginPage from './pages/auth/Login'
import SignupPage from './pages/auth/Signup'
import DashboardPage from './pages/dashboard/Dashboard'
import CreateTripPage from './pages/trips/CreateTrip'
import TripDetailsPage from './pages/trips/TripDetails'
import ProfilePage from './pages/Profile'
import SharedTripPage from './pages/SharedTrip'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-trip" element={<CreateTripPage />} />
        <Route path="/trips/:tripId" element={<TripDetailsPage />} />

        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/shared/:shareId" element={<SharedTripPage />} />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  )
}
