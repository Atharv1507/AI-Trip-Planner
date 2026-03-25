import PageWrapper from '../components/ui/PageWrapper'

export default function Profile() {
  return (
    <PageWrapper
      title="Profile"
      description="Account-related settings will go here."
    >
      <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
        Placeholder profile page. No business logic yet.
      </div>
    </PageWrapper>
  )
}

