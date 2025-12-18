'use client'

import { useEffect, useState } from 'react'
import { Globe, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LanguageSelector() {
  const [showLanguageModal, setShowLanguageModal] = useState(false)

  useEffect(() => {
    // Check if user has already selected language preference
    const languagePreference = localStorage.getItem('languagePreference')
    
    // Add Google Translate script
    const addGoogleTranslateScript = () => {
      // Check if script already exists
      if (document.querySelector('script[src*="translate.google.com"]')) {
        initializeGoogleTranslate(languagePreference)
        return
      }

      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      script.onload = () => {
        initializeGoogleTranslate(languagePreference)
      }
      document.body.appendChild(script)

      // Initialize Google Translate
      ;(window as any).googleTranslateElementInit = () => {
        initializeGoogleTranslate(languagePreference)
      }
    }

    const initializeGoogleTranslate = (pref: string | null) => {
      const checkAndInit = () => {
        if (!(window as any).google || !(window as any).google.translate) {
          return false
        }

        const googleTranslate = (window as any).google.translate
        const TranslateElement = googleTranslate.TranslateElement
        
        // Check if TranslateElement exists and is a constructor function
        if (!TranslateElement || typeof TranslateElement !== 'function') {
          return false
        }

        // Create hidden translate element if it doesn't exist
        let translateElement = document.getElementById('google_translate_element')
        if (!translateElement) {
          translateElement = document.createElement('div')
          translateElement.id = 'google_translate_element'
          translateElement.style.display = 'none'
          document.body.appendChild(translateElement)
          
          try {
            // Initialize Google Translate
            new TranslateElement(
              {
                pageLanguage: 'en',
                includedLanguages: 'en,ne,hi',
                autoDisplay: false,
              },
              'google_translate_element'
            )
          } catch (error) {
            console.error('Error initializing Google Translate:', error)
            return false
          }
        }
        return true
      }

      // Try to initialize
      if (!checkAndInit()) {
        // Wait and try again
        setTimeout(() => initializeGoogleTranslate(pref), 500)
        return
      }

      // Apply saved language preference after a delay to ensure element is ready
      if (pref && pref !== 'en') {
        setTimeout(() => {
          const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement
          if (selectElement) {
            selectElement.value = pref
            selectElement.dispatchEvent(new Event('change'))
          }
        }, 1500)
      }
    }

    // Load Google Translate script
    addGoogleTranslateScript()

    // Show modal on page load (check sessionStorage to avoid showing multiple times per session)
    const hasShownThisSession = sessionStorage.getItem('languageModalShown')
    
    if (!hasShownThisSession) {
      // Mark as shown for this session
      sessionStorage.setItem('languageModalShown', 'true')
      
      // Small delay for better UX
      setTimeout(() => {
        setShowLanguageModal(true)
      }, 800)
    } else if (languagePreference && languagePreference !== 'en') {
      // If a language preference exists and it's not English, trigger translation
      setTimeout(() => {
        const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement
        if (selectElement) {
          selectElement.value = languagePreference
          selectElement.dispatchEvent(new Event('change'))
        }
      }, 1000)
    }
  }, [])

  const handleLanguageSelect = (langCode: string, langName: string) => {
    // Store preference
    localStorage.setItem('languagePreference', langCode)
    setShowLanguageModal(false)
    
    // Trigger Google Translate if not English
    if (langCode !== 'en') {
      // Wait for Google Translate to initialize, then trigger language change
      const triggerTranslation = () => {
        const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement
        if (selectElement) {
          selectElement.value = langCode
          selectElement.dispatchEvent(new Event('change'))
          return true
        }
        return false
      }

      // Try after a short delay
      setTimeout(() => {
        if (!triggerTranslation()) {
          // If not ready, keep trying
          const checkInterval = setInterval(() => {
            if (triggerTranslation()) {
              clearInterval(checkInterval)
            }
          }, 300)
          
          // Stop checking after 5 seconds
          setTimeout(() => clearInterval(checkInterval), 5000)
        }
      }, 800)
    } else {
      // If English is selected, reload the page to show original content
      window.location.reload()
    }
  }

  return (
    <AnimatePresence>
      {showLanguageModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4"
          onClick={() => {
            localStorage.setItem('languagePreference', 'en')
            setShowLanguageModal(false)
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Globe className="w-6 h-6 text-[#20201F]" />
                <h3 className="text-2xl font-bold text-[#20201F]">Select Language</h3>
              </div>
              <button
                onClick={() => {
                  localStorage.setItem('languagePreference', 'en')
                  setShowLanguageModal(false)
                }}
                className="text-gray-400 hover:text-[#20201F] transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <p className="text-[#20201F] mb-6">
              Choose your preferred language to view the website
            </p>
            
            <div className="space-y-3">
              <button
                onClick={() => handleLanguageSelect('en', 'English')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-[#EE6E4D] hover:bg-[#EE6E4D]/5 transition-all duration-300 ease-out group"
              >
                <div className="font-semibold text-[#20201F] group-hover:text-[#EE6E4D]">
                  English
                </div>
                <div className="text-sm text-[#20201F]/70">English</div>
              </button>
              
              <button
                onClick={() => handleLanguageSelect('ne', 'Nepali')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-[#EE6E4D] hover:bg-[#EE6E4D]/5 transition-all duration-300 ease-out group"
              >
                <div className="font-semibold text-[#20201F] group-hover:text-[#EE6E4D]">
                  नेपाली (Nepali)
                </div>
                <div className="text-sm text-[#20201F]/70">Nepali Language</div>
              </button>
              
              <button
                onClick={() => handleLanguageSelect('hi', 'Hindi')}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-[#EE6E4D] hover:bg-[#EE6E4D]/5 transition-all duration-300 ease-out group"
              >
                <div className="font-semibold text-[#20201F] group-hover:text-[#EE6E4D]">
                  हिन्दी (Hindi)
                </div>
                <div className="text-sm text-[#20201F]/70">Hindi Language</div>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

