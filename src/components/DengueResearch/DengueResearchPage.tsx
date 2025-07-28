import React, { useState, useEffect } from 'react';
import { TableOfContents } from './TableOfContents';
import { SocialShareBar } from './SocialShareBar';
import { ScrollProgressBar } from './ScrollProgressBar';
import { ReadMoreCard } from './ReadMoreCard';
import { MedicalInsight } from './MedicalInsight';
import { StatCard } from './StatCard';
import { PreventionSection } from './PreventionSection';
import { GeographicSection } from './GeographicSection';
import { 
  Droplets, 
  TrendingUp, 
  Users, 
  AlertTriangle, 
  Shield,
  Activity,
  MapPin,
  Calendar,
  Search,
  Heart,
  Thermometer,
  BarChart3
} from 'lucide-react';

export const DengueResearchPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    // Fade in animation observer
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach((el) => fadeObserver.observe(el));

    return () => {
      observer.disconnect();
      fadeObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollProgressBar />
      <TableOfContents activeSection={activeSection} />
      <SocialShareBar />
      
      <main className="section-snap">
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="container mx-auto px-6 text-center">
            <div className="hero-content max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
                Dengue: The Silent Threat of the Monsoon Season
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 fade-in-up">
                Understanding dengue patterns, demographics, and seasonal trends through
                PharmEasy Lab data and global research insights.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 fade-in-up">
                <StatCard
                  title="Study Duration"
                  value="26 Months"
                  icon={Calendar}
                  className="bg-white/20 backdrop-blur text-white"
                />
                <StatCard
                  title="Lab Tests"
                  value="770K+"
                  icon={Activity}
                  className="bg-white/20 backdrop-blur text-white"
                />
                <StatCard
                  title="States Covered"
                  value="40+"
                  icon={MapPin}
                  className="bg-white/20 backdrop-blur text-white"
                />
                <StatCard
                  title="Peak Season"
                  value="Aug-Oct"
                  icon={Droplets}
                  className="bg-white/20 backdrop-blur text-white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="introduction" className="min-h-screen flex items-center py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <span className="inline-block px-4 py-2 bg-health-primary/10 text-health-primary rounded-full text-sm font-medium mb-4">
                  INTRODUCTION
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Dengue Deserves Your Attention?
                </h2>
              </div>

              <ReadMoreCard
                className="fade-in-up"
                summary={
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <p className="text-lg leading-relaxed">
                          We look forward to the monsoon, including the cool breeze, the scent of fresh rain, and a
                          much-needed break from the summer heat. However, these are not the only things that
                          monsoon brings!
                        </p>
                        <div className="mt-6 p-6 bg-health-danger/10 border-l-4 border-health-danger rounded-r-lg">
                          <p className="font-semibold text-health-danger">
                            In the case of dengue, taking action early is not only sensible, but it also saves lives.
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <StatCard
                          title="Global Trend"
                          value="Rising"
                          trend="up"
                          description="WHO reports increasing infections"
                        />
                        <StatCard
                          title="Risk Level"
                          value="High"
                          trend="up"
                          description="During monsoon season"
                        />
                      </div>
                    </div>
                  </div>
                }
              >
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    The season also invites one of the most serious seasonal health risks, dengue, a
                    mosquito-borne illness. It typically begins with mild symptoms, including fever and body
                    aches. However, in some cases, it can quickly turn fatal. Symptoms such as sudden high
                    fever, severe fatigue, joint pain, and low platelet counts make dengue a public health
                    crisis that affects countless individuals across India every year.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    According to the World Health Organisation (WHO), dengue infections are on the rise
                    globally. In a country like India, where the monsoon season often signals an increase in
                    dengue cases, awareness and early detection can significantly reduce the spread of the
                    disease. This article uses diagnostic data from PharmEasy's lab network to understand
                    how dengue patterns are changing across the nation. It also highlights when cases tend
                    to spike, the health impact and the symptoms that should not be ignored.
                  </p>
                </div>
              </ReadMoreCard>
            </div>
          </div>
        </section>

        {/* Trend Analysis Section */}
        <section id="trends" className="min-h-screen flex items-center py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <span className="inline-block px-4 py-2 bg-health-info/10 text-health-info rounded-full text-sm font-medium mb-4">
                  TREND ANALYSIS
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  How Dengue Trends Have Shifted Over the Years
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <ReadMoreCard
                  className="fade-in-up"
                  summary={
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-health-info" />
                        Key Findings
                      </h3>
                      <ul className="space-y-2 text-lg">
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-health-success rounded-full mt-3 flex-shrink-0"></span>
                          Tests increased annually with earlier seasonal testing (May vs June)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-health-info rounded-full mt-3 flex-shrink-0"></span>
                          Positivity rate steadily decreasing due to increased awareness
                        </li>
                      </ul>
                    </div>
                  }
                >
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      Our lab data reveals a clear shift in dengue testing patterns. Over the past few
                      years, not only has the total number of dengue tests increased annually, but people
                      are also getting tested earlier in the season. For example, in 2024, we observed a
                      notable rise in dengue test bookings starting as early as May, compared to June in
                      previous years.
                    </p>
                    <p className="text-lg leading-relaxed">
                      At the same time, as you can see, the dengue positivity rate has been steadily
                      decreasing. This trend, in fact, reveals that increased public awareness is leading
                      to more proactive testing. As more people are tested to determine the cause of their
                      fever, the lower percentage of positive results suggests that other causes of fever,
                      such as typhoid, influenza, and chikungunya, may be at play.
                    </p>
                  </div>
                </ReadMoreCard>

                <div className="space-y-6 fade-in-up">
                  <img 
                    src="https://pharmeasy.in/blog/dengue/PE_DengueStudy_Page02_Graph01.webp" 
                    alt="Tests Done for the 26 months" 
                    className="w-full rounded-lg shadow-medium"
                  />
                  <img 
                    src="https://pharmeasy.in/blog/dengue/PE_DengueStudy_Page02_Graph02.webp" 
                    alt="Tests Done Vs Positivity Rate" 
                    className="w-full rounded-lg shadow-medium"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Monsoon Section */}
        <section id="monsoon" className="min-h-screen flex items-center py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <span className="inline-block px-4 py-2 bg-health-secondary/10 text-health-secondary rounded-full text-sm font-medium mb-4">
                  DENGUE & MONSOON
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  The Monsoon-Dengue Link
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <ReadMoreCard
                  className="fade-in-up"
                  summary={
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <Droplets className="h-5 w-5 text-health-secondary" />
                        Weather Conditions for Dengue
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <StatCard
                          title="Temperature"
                          value=">27°C"
                          description="Ideal for mosquito breeding"
                        />
                        <StatCard
                          title="Humidity"
                          value="60-78%"
                          description="Perfect breeding conditions"
                        />
                      </div>
                      <div className="p-4 bg-health-secondary/10 rounded-lg">
                        <p className="font-semibold text-health-secondary">
                          In short, dengue doesn't just coexist with the monsoon season; it shapes how the disease spreads.
                        </p>
                      </div>
                    </div>
                  }
                >
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      Dengue follows a clear pattern tied to the Indian monsoon. Every year, when the
                      rains begin in June, the humidity increases, creating an ideal breeding ground
                      for mosquitoes, particularly in stagnant water. This also raises the risk of
                      outbreaks. Lab data shows that dengue cases begin to rise in July, peak from
                      August to October, and decline by December.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Warm temperatures above 27°C, combined with humidity levels between 60% and 78%,
                      and steady rainfall, create ideal conditions for the Aedes mosquito to thrive.
                      Therefore, it's fair to say that the weather plays a crucial role.
                      Interestingly, very heavy rainfall can sometimes reduce mosquito numbers by
                      washing away their larvae.
                    </p>
                  </div>
                </ReadMoreCard>

                <div className="fade-in-up">
                  <img 
                    src="https://pharmeasy.in/blog/dengue/PE_DengueStudy_MosquittoLifeCycle_01.webp" 
                    alt="Infographic of how monsoon links to dengue" 
                    className="w-full rounded-lg shadow-medium"
                  />
                </div>
              </div>

              <div className="mt-12 fade-in-up">
                <MedicalInsight
                  quote="In India, we observe a significant surge in dengue cases during the monsoon season (June to September), primarily due to stagnant water becoming breeding grounds for mosquitoes. People must be particularly careful in this weather to avoid contact with female Aedes mosquito responsible for dengue, which can be identified by the distinct white lines it has on its legs and thorax."
                  doctor="Dr. Nayana Shetty"
                  credentials="MBBS MD"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Exposure & Risk Section */}
        <section id="exposure" className="min-h-screen flex items-center py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <span className="inline-block px-4 py-2 bg-health-warning/10 text-health-warning rounded-full text-sm font-medium mb-4">
                  EXPOSURE & RISK
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Who is More Likely to be Affected?
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <ReadMoreCard
                  className="fade-in-up"
                  summary={
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <Users className="h-5 w-5 text-health-warning" />
                        High-Risk Age Groups
                      </h3>
                      <StatCard
                        title="Most Affected"
                        value="Ages 11-30"
                        description="Highest dengue positivity rates"
                        trend="up"
                      />
                      <p className="text-lg leading-relaxed">
                        PharmEasy Labs data shows that individuals aged 11 to 30 have the highest dengue
                        positivity rates when compared to other age groups. This trend likely reflects
                        more outdoor activity and exposure.
                      </p>
                    </div>
                  }
                >
                  <div className="space-y-6">
                    <MedicalInsight
                      quote="Children most often play outside in fields exposing themselves to risk, likewise individuals of the working age (18 to 60 years) who do physical work for a living specially in outdoor settings also get exposed thus increasing their risk to infection."
                      doctor="Dr. Nayana Shetty"
                      credentials="MBBS MD"
                    />
                  </div>
                </ReadMoreCard>

                <div className="fade-in-up">
                  <img 
                    src="https://pharmeasy.in/blog/dengue/PE_DengueStudy_WhoIsAtMostRisk_01.webp" 
                    alt="Who is at most risk infographic" 
                    className="w-full rounded-lg shadow-medium"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms Section */}
        <section id="symptoms" className="min-h-screen flex items-center py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <span className="inline-block px-4 py-2 bg-health-danger/10 text-health-danger rounded-full text-sm font-medium mb-4">
                  SYMPTOMS
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Symptoms to Look Out For
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  According to the National Guidelines for Clinical Management of Dengue Fever, here are
                  some of the warning signs to watch for.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <ReadMoreCard
                  className="fade-in-up"
                  summary={
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <Thermometer className="h-5 w-5 text-health-danger" />
                        National Guidelines: Warning Symptoms
                      </h3>
                      <div className="grid gap-3">
                        {[
                          "Persistent vomiting",
                          "Abdominal pain and tenderness",
                          "Lethargy and/or restlessness",
                          "Sudden behavioural changes"
                        ].map((symptom, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-health-danger/5 rounded-lg">
                            <div className="w-2 h-2 bg-health-danger rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700">{symptom}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  }
                >
                  <div className="space-y-6">
                    <div className="grid gap-3">
                      {[
                        "Bleeding signs like nosebleeds, blood in stools or urine",
                        "Bruising, fainting or dizziness, drop in blood pressure"
                      ].map((symptom, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-health-danger/5 rounded-lg">
                          <div className="w-2 h-2 bg-health-danger rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">{symptom}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-6 bg-health-info/10 border-l-4 border-health-info rounded-r-lg">
                      <h4 className="font-semibold text-health-info mb-2">Laboratory Monitoring</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Lab tests show that as dengue progresses, hematocrit levels tend to
                        rise while platelet counts drop quickly. When platelet counts are low and hematocrit 
                        is high, it may signal a risk of severe dengue. In such cases, it's essential to 
                        consult a doctor immediately.
                      </p>
                    </div>
                  </div>
                </ReadMoreCard>

                <div className="fade-in-up">
                  <img 
                    src="https://pharmeasy.in/blog/dengue/THINK-IT-COULD-BE-DENGUE.webp" 
                    alt="Think it could be dengue symptoms guide" 
                    className="w-full rounded-lg shadow-medium"
                  />
                </div>
              </div>

              <div className="mt-12 fade-in-up">
                <div className="section-card">
                  <h3 className="text-2xl font-bold mb-6 text-center">When Dengue Turns Severe</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-lg leading-relaxed mb-4">
                        The severity of symptoms in dengue fever varies from person to person.
                        While most people recover after a short illness, some experience severe
                        complications due to leakage of plasma, bleeding, and a drop in BP.
                      </p>
                      <p className="text-lg leading-relaxed">
                        Serious cases of dengue or dengue haemorrhagic fever (DHF) can progress to 
                        dengue shock syndrome (DSS) if not managed promptly in a hospital.
                      </p>
                    </div>
                    <div>
                      <MedicalInsight
                        quote="If a family has children and elderly in their homes then they should proactively implement preventive steps because if these age groups get the infection then the chances of severe dengue is higher in them."
                        doctor="Dr. Nayana Shetty"
                        credentials="MBBS MD"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Geographic Section */}
        <GeographicSection />

        {/* Seasonal Trends Section */}
        <section id="seasonal" className="min-h-screen flex items-center py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <span className="inline-block px-4 py-2 bg-health-info/10 text-health-info rounded-full text-sm font-medium mb-4">
                  SEASONAL TRENDS
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Seasonal Trends in Dengue: Lab Data and Public Interest
                </h2>
              </div>

              <ReadMoreCard
                className="fade-in-up mb-12"
                summary={
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <StatCard
                        title="Peak Season"
                        value="Aug-Oct"
                        description="Consistent yearly pattern"
                        icon={Calendar}
                      />
                      <StatCard
                        title="Google Searches"
                        value="Peak Together"
                        description="Match real case trends"
                        icon={Search}
                      />
                      <StatCard
                        title="Fever Testing"
                        value="27.7%"
                        description="Of all fever tests are for dengue"
                        icon={BarChart3}
                      />
                    </div>
                    <p className="text-lg leading-relaxed">
                      Our PharmEasy Lab data reveals a clear pattern in dengue testing, where cases surge
                      between August and October every year. This trend has remained consistent over the
                      past few years, showing that dengue cases peak during the monsoon and post-monsoon season.
                    </p>
                  </div>
                }
              >
                <div className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <img 
                      src="https://pharmeasy.in/blog/dengue/PE_DengueStudy_Page8_GoogleTrendsdata.webp" 
                      alt="Google trends data for dengue searches" 
                      className="w-full rounded-lg shadow-medium"
                    />
                    <img 
                      src="https://pharmeasy.in/blog/dengue/PE_DengueStudy_DengueCasesTrend.webp" 
                      alt="Dengue cases trend analysis" 
                      className="w-full rounded-lg shadow-medium"
                    />
                  </div>
                  
                  <p className="text-lg leading-relaxed">
                    We also looked at Google search trends, and the searches for "dengue" rose
                    sharply during the same months. This shows a strong link between real
                    cases and public concern. Other causes like typhoid, malaria, and influenza have 
                    significantly lower and more consistent search volumes with no discernible seasonal spikes.
                  </p>

                  <img 
                    src="https://pharmeasy.in/blog/dengue/PE_DengueStudy_GoogleSearchTrendsforDengue.webp" 
                    alt="Google search trends for dengue over time" 
                    className="w-full max-w-4xl mx-auto rounded-lg shadow-medium"
                  />
                </div>
              </ReadMoreCard>
            </div>
          </div>
        </section>

        {/* People Queries Section */}
        <section id="queries" className="min-h-screen flex items-center py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <span className="inline-block px-4 py-2 bg-health-secondary/10 text-health-secondary rounded-full text-sm font-medium mb-4">
                  PEOPLE QUERIES
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  What People Search When They're Worried About Dengue?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  During dengue season, millions of people in India search online for help. We analysed
                  Google search data and identified the top 10 dengue-related keywords.
                </p>
              </div>

              <ReadMoreCard
                className="fade-in-up"
                summary={
                  <div className="space-y-6">
                    <StatCard
                      title="Total Searches"
                      value="770,000+"
                      description="Top 10 dengue keywords"
                      icon={Search}
                    />
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-4">Top Search Terms:</h3>
                        <div className="space-y-2">
                          {[
                            "dengue symptoms",
                            "dengue",
                            "dengue mosquito",
                            "dengue fever",
                            "dengue treatment"
                          ].map((term, index) => (
                            <div key={index} className="flex items-center gap-2 p-2 bg-white rounded">
                              <span className="w-6 h-6 bg-health-secondary text-white rounded-full flex items-center justify-center text-xs font-bold">
                                {index + 1}
                              </span>
                              <span>{term}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-4">What People Want:</h3>
                        <div className="space-y-3">
                          {[
                            { icon: "🔍", text: "Know the symptoms" },
                            { icon: "🦟", text: "Understand how dengue spreads" },
                            { icon: "💊", text: "Learn about treatment" },
                            { icon: "⚠️", text: "Spot the warning signs" }
                          ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <span className="text-2xl">{item.icon}</span>
                              <span>{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                }
              >
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-4">Additional Search Terms:</h3>
                      <div className="space-y-2">
                        {[
                          "dengue fever treatment",
                          "7 warning signs of dengue fever",
                          "dengue ke lakshan",
                          "dengue test",
                          "dengue symptoms in Hindi"
                        ].map((term, index) => (
                          <div key={index} className="flex items-center gap-2 p-2 bg-white rounded">
                            <span className="w-6 h-6 bg-health-info text-white rounded-full flex items-center justify-center text-xs font-bold">
                              {index + 6}
                            </span>
                            <span>{term}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 bg-health-secondary/10 rounded-lg">
                      <h4 className="font-semibold text-health-secondary mb-3">Key Insights</h4>
                      <p className="text-gray-700 leading-relaxed">
                        These trending searches show that people are eager to recognise symptoms early,
                        understand how dengue spreads, find effective treatments, and learn about warning
                        signs, often in both English and Hindi. The surge in these queries signals a growing
                        concern and a proactive approach to staying informed and safe during dengue outbreaks.
                      </p>
                    </div>
                  </div>

                  <img 
                    src="https://pharmeasy.in/blog/dengue/PE_DengueStudy_DengueSearch_01.webp" 
                    alt="Dengue search trends analysis" 
                    className="w-full max-w-4xl mx-auto rounded-lg shadow-medium"
                  />

                  <MedicalInsight
                    quote="You must take steps to protect yourself from mosquito bites and avoid water stagnation, especially since these diseases spread easily in endemic areas. Ask your doctor to explain everything in a way that's easy to follow, and discuss any queries you have before leaving."
                    doctor="Dr. Nayana Shetty"
                    credentials="MBBS MD"
                  />
                </div>
              </ReadMoreCard>
            </div>
          </div>
        </section>

        {/* Prevention Section */}
        <PreventionSection />

        {/* Demographics Section */}
        <section id="demographics" className="min-h-screen flex items-center py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 fade-in-up">
                <span className="inline-block px-4 py-2 bg-health-primary/10 text-health-primary rounded-full text-sm font-medium mb-4">
                  DEMOGRAPHICS
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Who Gets Tested & How It Spreads Across Demographics
                </h2>
              </div>

              <div className="space-y-12">
                <ReadMoreCard
                  className="fade-in-up"
                  summary={
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <StatCard
                          title="Higher Risk"
                          value="Men <50"
                          description="More likely to test positive"
                          trend="up"
                        />
                        <StatCard
                          title="Severe Cases"
                          value="Women >50"
                          description="Higher positivity & severity"
                          trend="up"
                        />
                        <StatCard
                          title="Most Affected"
                          value="Ages 11-30"
                          description="Highest positivity rates"
                        />
                      </div>
                    </div>
                  }
                >
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      Our analysis of PharmEasy Labs data reveals clear patterns in dengue positivity rates
                      based on age and gender. Overall, men are more likely to test positive for dengue
                      than women, especially those under 50. They have shown to have a low platelet
                      count, as seen in the chart.
                    </p>
                    <p className="text-lg leading-relaxed">
                      These findings align with Indian studies that say younger men get more infections and
                      serious illnesses because they spend more time outside or have jobs that expose them
                      to more risks.
                    </p>
                  </div>
                </ReadMoreCard>

                <div className="grid lg:grid-cols-2 gap-8 fade-in-up">
                  <img 
                    src="https://pharmeasy.in/blog/dengue/Graph-01.webp" 
                    alt="Test done and Positivity rate graph of Overall age group" 
                    className="w-full rounded-lg shadow-medium"
                  />
                  <img 
                    src="https://pharmeasy.in/blog/dengue/Graph-02.webp" 
                    alt="Demographics analysis" 
                    className="w-full rounded-lg shadow-medium"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section id="conclusion" className="min-h-screen flex items-center py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="fade-in-up">
                <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
                  CONCLUSION
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Act Early. Stay Ahead.
                </h2>
                
                <div className="space-y-6 text-lg">
                  <p className="leading-relaxed">
                    Dengue has become a significant public health concern and is no longer limited to a seasonal worry. 
                    Although the numbers indicate that awareness is increasing, the threat remains serious and should not be overlooked.
                  </p>
                  
                  <p className="leading-relaxed">
                    Dismissing early symptoms or self-medicating can lead to serious complications,
                    especially when platelet levels and/or BP start to drop.
                  </p>
                  
                  <div className="p-8 bg-white/10 rounded-lg backdrop-blur">
                    <p className="text-xl font-semibold mb-4">
                      However, the good news is that you can stay ahead of it.
                    </p>
                    <p className="leading-relaxed">
                      Recognise the early signs. Get tested promptly if you have a fever and follow the treatment 
                      prescribed by your doctor. With awareness and early action, we can protect ourselves and our 
                      families and work together for a healthier tomorrow.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                  <StatCard
                    title="Key Message"
                    value="Early Detection"
                    icon={Heart}
                    className="bg-white/20 backdrop-blur text-white"
                  />
                  <StatCard
                    title="Action Required"
                    value="Get Tested"
                    icon={Activity}
                    className="bg-white/20 backdrop-blur text-white"
                  />
                  <StatCard
                    title="Prevention"
                    value="Stay Aware"
                    icon={Shield}
                    className="bg-white/20 backdrop-blur text-white"
                  />
                  <StatCard
                    title="Outcome"
                    value="Save Lives"
                    icon={Heart}
                    className="bg-white/20 backdrop-blur text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};