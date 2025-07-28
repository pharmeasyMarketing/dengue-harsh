import React from 'react';
import { MapPin, TrendingUp, AlertTriangle } from 'lucide-react';
import { ReadMoreCard } from './ReadMoreCard';
import { StatCard } from './StatCard';

export const GeographicSection: React.FC = () => {
  const stateData = [
    { state: "Karnataka", cases: "32,886", deaths: "-", severity: "high" },
    { state: "Tamil Nadu", cases: "27,378", deaths: "-", severity: "high" },
    { state: "Kerala", cases: "20,674", deaths: "128", severity: "highest" },
    { state: "Maharashtra", cases: "19,385", deaths: "-", severity: "high" },
    { state: "Uttar Pradesh", cases: "15,868", deaths: "-", severity: "medium" },
    { state: "Delhi", cases: "10,585", deaths: "-", severity: "medium" }
  ];

  return (
    <section id="geographic" className="min-h-screen flex items-center py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <span className="inline-block px-4 py-2 bg-health-danger/10 text-health-danger rounded-full text-sm font-medium mb-4">
              GEOGRAPHIC & SEASONAL ANALYSIS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              When Dengue Hits Hardest?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over 40 regions reported cases in 2024. While dengue is widespread, the most severe cases
              were reported in parts of South and West India.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ReadMoreCard
              className="fade-in-up"
              summary={
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-health-danger" />
                    2024 State-wise Impact
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <StatCard
                      title="Highest Cases"
                      value="Karnataka"
                      description="32,886 cases"
                      trend="up"
                    />
                    <StatCard
                      title="Most Deaths"
                      value="Kerala"
                      description="128 fatalities"
                      trend="up"
                    />
                  </div>

                  <div className="space-y-3">
                    {stateData.slice(0, 3).map((data, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <span className="font-medium">{data.state}</span>
                          {data.deaths !== "-" && (
                            <span className="ml-2 text-sm text-health-danger">
                              ({data.deaths} deaths)
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="font-semibold">{data.cases}</span>
                          <span className="text-sm text-gray-500 ml-1">cases</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              }
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  {stateData.slice(3).map((data, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <span className="font-medium">{data.state}</span>
                        {data.deaths !== "-" && (
                          <span className="ml-2 text-sm text-health-danger">
                            ({data.deaths} deaths)
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="font-semibold">{data.cases}</span>
                        <span className="text-sm text-gray-500 ml-1">cases</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-health-warning/10 border-l-4 border-health-warning rounded-r-lg">
                  <h4 className="font-semibold text-health-warning mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Low-impact States
                  </h4>
                  <p className="text-sm text-gray-700">
                    States like Arunachal Pradesh, Nagaland, Andaman and Nicobar Islands, and Meghalaya 
                    had fewer than 100 cases, showing significant regional variation in dengue prevalence.
                  </p>
                </div>
              </div>
            </ReadMoreCard>

            <div className="fade-in-up">
              <img 
                src="https://pharmeasy.in/blog/dengue/DengueStudy_IndiaMap.webp" 
                alt="State wise dengue data across India" 
                className="w-full rounded-lg shadow-medium"
              />
            </div>
          </div>

          <div className="mt-16 fade-in-up">
            <div className="grid md:grid-cols-4 gap-6">
              <StatCard
                title="Total Regions"
                value="40+"
                description="Regions with reported cases"
                icon={MapPin}
              />
              <StatCard
                title="Southern States"
                value="High Impact"
                description="Karnataka, Tamil Nadu, Kerala"
                trend="up"
              />
              <StatCard
                title="Western States"
                value="Significant"
                description="Maharashtra major contributor"
                trend="up"
              />
              <StatCard
                title="Northeast"
                value="Low Cases"
                description="< 100 cases per state"
                trend="down"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};