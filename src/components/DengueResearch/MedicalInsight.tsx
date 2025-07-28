import React from 'react';
import { Stethoscope } from 'lucide-react';

interface MedicalInsightProps {
  quote: string;
  doctor: string;
  credentials: string;
  className?: string;
}

export const MedicalInsight: React.FC<MedicalInsightProps> = ({
  quote,
  doctor,
  credentials,
  className = ''
}) => {
  return (
    <div className={`medical-insight ${className}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-health-primary rounded-full flex items-center justify-center">
            <Stethoscope className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-health-primary mb-2">Medical Advice</h4>
          <blockquote className="text-gray-700 italic mb-3">
            "{quote}"
          </blockquote>
          <cite className="text-sm text-gray-600 not-italic">
            <strong>{doctor}</strong> {credentials}
          </cite>
        </div>
      </div>
    </div>
  );
};