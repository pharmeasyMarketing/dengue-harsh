import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ReadMoreCardProps {
  children: React.ReactNode;
  summary: React.ReactNode;
  className?: string;
}

export const ReadMoreCard: React.FC<ReadMoreCardProps> = ({ 
  children, 
  summary, 
  className = '' 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`section-card h-full flex flex-col ${className}`}>
      <div className="space-y-4 flex-1 flex flex-col">
        <div className="flex-1">
          {summary}
        </div>
        
        {!isExpanded && (
          <Button
            onClick={() => setIsExpanded(true)}
            variant="outline"
            className="w-full justify-between mt-auto"
          >
            Read More
            <ChevronDown className="h-4 w-4" />
          </Button>
        )}
        
        {isExpanded && (
          <>
            <div className="space-y-4 fade-in-up in-view flex-1">
              {children}
            </div>
            <Button
              onClick={() => setIsExpanded(false)}
              variant="outline"
              className="w-full justify-between mt-auto"
            >
              Read Less
              <ChevronUp className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};