import React from 'react';
import { Shield, Droplets, Heart, Clock, Users, AlertTriangle, CheckCircle } from 'lucide-react';
import { ReadMoreCard } from './ReadMoreCard';
import { StatCard } from './StatCard';

export const PreventionSection: React.FC = () => {
  const preventionTips = [
    {
      icon: Shield,
      title: "Use Mosquito Repellents",
      description: "Mosquitoes thrive during the monsoon. Use repellents and keep your surroundings clean to prevent mosquito breeding."
    },
    {
      icon: Heart,
      title: "Boost Your Immunity",
      description: "Eat a balanced diet rich in fruits, vegetables, and protein. Foods high in vitamins A, C and E are particularly good for your immune system."
    },
    {
      icon: Droplets,
      title: "Stay Hydrated",
      description: "Drink plenty of clean, filtered water. Avoid street food and beverages. Carry your own water and meals wherever possible."
    },
    {
      icon: Clock,
      title: "Regular Exercise and Rest",
      description: "Maintain a regular exercise routine and ensure you get enough sleep to keep your immune system strong."
    },
    {
      icon: Users,
      title: "Avoid Crowded Places",
      description: "If possible, avoid crowded areas where the risk of infection is higher. Wear a mask if you need to be in crowded places."
    },
    {
      icon: AlertTriangle,
      title: "Sanitise Surfaces",
      description: "Clean and disinfect commonly touched surfaces regularly, such as your phone, doorknobs, and study desks."
    }
  ];

  return (
    <section id="prevention" className="min-h-screen flex items-center py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <span className="inline-block px-4 py-2 bg-health-success/10 text-health-success rounded-full text-sm font-medium mb-4">
              EARLY DETECTION
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Essential Tips to Protect Yourself From Dengue
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dengue cases tend to increase during the rainy season. However, a few simple habits can
              help keep you and your loved ones protected and safe.
            </p>
          </div>

          <ReadMoreCard
            className="fade-in-up mb-12"
            summary={
              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <StatCard
                    title="Prevention Focus"
                    value="Mosquito Control"
                    icon={Shield}
                    description="Primary defense strategy"
                  />
                  <StatCard
                    title="Immunity Boost"
                    value="Nutrition"
                    icon={Heart}
                    description="Vitamins A, C, E"
                  />
                  <StatCard
                    title="Hydration"
                    value="Clean Water"
                    icon={Droplets}
                    description="Essential for recovery"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {preventionTips.slice(0, 3).map((tip, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-health-success rounded-full flex items-center justify-center">
                          <tip.icon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{tip.title}</h3>
                        <p className="text-sm text-gray-600">{tip.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }
          >
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {preventionTips.slice(3).map((tip, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-health-success rounded-full flex items-center justify-center">
                        <tip.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{tip.title}</h3>
                      <p className="text-sm text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-health-success/10 to-health-primary/10 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-health-success" />
                  Steps to Take If You Think You Might Have Dengue
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    If you or someone in your family is experiencing symptoms of dengue, get tested promptly.
                    To confirm a dengue infection, doctors often recommend tests for the NS1 antigen
                    and IgM/IgG antibodies. If you test positive, it's essential to take care of
                    yourself and monitor your symptoms closely.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Rest and hydration are key to recovering from dengue. Drink plenty of fluids, such as
                    water, ORS, coconut water, and fresh juices, to prevent dehydration. Monitor symptoms
                    between 3 and 7 days after the fever begins, as this is when complications can occur.
                  </p>
                </div>
              </div>
            </div>
          </ReadMoreCard>

          <div className="fade-in-up">
            <img 
              src="https://pharmeasy.in/blog/dengue/Prevention_copy1.webp" 
              alt="Dengue prevention infographic" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-medium"
            />
          </div>
        </div>
      </div>
    </section>
  );
};