import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TOCSection {
  id: string;
  title: string;
  isActive: boolean;
}

const sections: Omit<TOCSection, 'isActive'>[] = [
  { id: 'hero', title: 'Overview' },
  { id: 'introduction', title: 'Introduction' },
  { id: 'trends', title: 'Trend Analysis' },
  { id: 'monsoon', title: 'Dengue & Monsoon' },
  { id: 'demographics', title: 'Demographics' },
  { id: 'exposure', title: 'Exposure & Risk' },
  { id: 'symptoms', title: 'Symptoms' },
  { id: 'geographic', title: 'Geographic Analysis' },
  { id: 'seasonal', title: 'Seasonal Trends' },
  { id: 'queries', title: 'People Queries' },
  { id: 'prevention', title: 'Prevention' },
  { id: 'conclusion', title: 'Conclusion' }
];

interface TableOfContentsProps {
  activeSection: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMobile) setIsOpen(false);
    }
  };

  if (isMobile) {
    return (
      <>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 bg-health-primary hover:bg-health-primary/90"
          size="sm"
        >
          <Menu className="h-4 w-4" />
        </Button>
        
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)}>
            <div className="fixed left-0 top-0 h-full w-80 bg-white p-6 shadow-lg overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-health-primary">Contents</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-health-primary text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="toc-sticky hidden lg:block w-64">
      <h3 className="text-lg font-semibold mb-4 text-health-primary">Contents</h3>
      <nav className="space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-full text-left text-sm p-3 rounded-lg transition-colors ${
              activeSection === section.id
                ? 'bg-health-primary text-white font-medium'
                : 'hover:bg-gray-100'
            }`}
          >
            {section.title}
          </button>
        ))}
      </nav>
    </div>
  );
};