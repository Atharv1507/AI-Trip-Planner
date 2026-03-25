import PageWrapper from '../../components/ui/PageWrapper'

export default function Dashboard() {
  return (
    <PageWrapper
      title="Dashboard"
      description="Your trips will appear here."
    >
      <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
        Placeholder dashboard. Trip list + actions come in later features.
      </div>
    </PageWrapper>
  )
}

