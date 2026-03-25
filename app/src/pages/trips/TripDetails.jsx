import { useParams } from 'react-router-dom'
import PageWrapper from '../../components/ui/PageWrapper'

export default function TripDetails() {
  const { tripId } = useParams()

  return (
    <PageWrapper
      title={`Trip Details`}
      description={tripId ? `Trip ID: ${tripId}` : 'Trip details will appear here.'}
    >
      <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
        Placeholder trip details page. AI itinerary + editing come later.
      </div>
    </PageWrapper>
  )
}

