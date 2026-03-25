import { useParams } from 'react-router-dom'
import PageWrapper from '../components/ui/PageWrapper'

export default function SharedTrip() {
  const { shareId } = useParams()

  return (
    <PageWrapper
      title="Shared Trip"
      description={shareId ? `Share ID: ${shareId}` : 'Shared trip will appear here.'}
    >
      <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
        Placeholder shared trip page. Collaboration/sharing comes later.
      </div>
    </PageWrapper>
  )
}

