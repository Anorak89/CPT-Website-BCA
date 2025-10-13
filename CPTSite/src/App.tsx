import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Header } from '@/components/Layouts/header'
import { Sidebar, SidebarProvider } from '@/components/Layouts/sidebar'
import { Providers } from './app/providers'
import PageTransition from '@/components/PageTransition'

// Import all pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CalendarPage from './pages/CalendarPage'
import LessonsPage from './pages/LessonsPage'
import CompetitionsPage from './pages/CompetitionsPage'
import ResourcesPage from './pages/ResourcesPage'
import NewsPage from './pages/NewsPage'
import ContactPage from './pages/ContactPage'

// Import additional pages
import SignInPage from './pages/auth/SignInPage'
import BasicChartPage from './pages/charts/BasicChartPage'
import FormElementsPage from './pages/forms/FormElementsPage'
import FormLayoutPage from './pages/forms/FormLayoutPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import TablesPage from './pages/TablesPage'
import AlertsPage from './pages/ui-elements/AlertsPage'
import ButtonsPage from './pages/ui-elements/ButtonsPage'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simple loading simulation
    const timer = setTimeout(() => setIsLoading(false), 100)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0b1228]">
        <div className="text-xl text-white">Loading...</div>
      </div>
    )
  }

  return (
    <Providers>
      <SidebarProvider>
        <div className="flex min-h-screen bg-[#0b1228]">
          <Sidebar />
          
          <div className="flex w-full flex-col">
            <Header />
            
            <main className="flex-1 overflow-hidden p-4 md:p-6 2xl:p-10 bg-[#0b1228]">
              <PageTransition>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/calendar" element={<CalendarPage />} />
                  <Route path="/lessons" element={<LessonsPage />} />
                  <Route path="/competitions" element={<CompetitionsPage />} />
                  <Route path="/resources" element={<ResourcesPage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  
                  {/* Auth routes */}
                  <Route path="/auth/sign-in" element={<SignInPage />} />
                  
                  {/* Charts routes */}
                  <Route path="/charts/basic-chart" element={<BasicChartPage />} />
                  
                  {/* Forms routes */}
                  <Route path="/forms/form-elements" element={<FormElementsPage />} />
                  <Route path="/forms/form-layout" element={<FormLayoutPage />} />
                  
                  {/* Other routes */}
                  <Route path="/pages/settings" element={<SettingsPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/tables" element={<TablesPage />} />
                  
                  {/* UI Elements routes */}
                  <Route path="/ui-elements/alerts" element={<AlertsPage />} />
                  <Route path="/ui-elements/buttons" element={<ButtonsPage />} />
                  
                  {/* 404 fallback */}
                  <Route path="*" element={<div className="text-center py-10"><h1 className="text-2xl font-bold">Page Not Found</h1></div>} />
                </Routes>
              </PageTransition>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </Providers>
  )
}

export default App