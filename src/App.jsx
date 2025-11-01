import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';

// Pages
import HomePage from './pages/HomePage';
import MeetDrAmr from './pages/MeetDrAmr';
import PatientJourneyPage from './pages/PatientJourneyPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

// Category Pages
import KneeSurgeriesPage from './pages/KneeSurgeriesPage';
import HipSurgeriesPage from './pages/HipSurgeriesPage';
import SportsInjuriesPage from './pages/SportsInjuriesPage';
import ShoulderInjuriesPage from './pages/ShoulderInjuriesPage';

// Knee Surgery Pages
import QuadricepsTendonRepair from './pages/knee/QuadricepsTendonRepair';
import KneecapStabilization from './pages/knee/KneecapStabilization';
import KneeReplacement from './pages/knee/KneeReplacement';
import KneeArthroscopy from './pages/knee/KneeArthroscopy';
import MultiLigamentInjury from './pages/knee/MultiLigamentInjury';
import LCLTearSurgery from './pages/knee/LCLTearSurgery';
import MCLReconstruction from './pages/knee/MCLReconstruction';
import PCLTearSurgery from './pages/knee/PCLTearSurgery';

// Hip Surgery Pages
import HipReplacement from './pages/hip/HipReplacement';
import HipResurfacing from './pages/hip/HipResurfacing';
import HipRevision from './pages/hip/HipRevision';

// Sports Injury Pages
import ACLTearInjury from './pages/sports/ACLTearInjury';
import MeniscusTearInjury from './pages/sports/MeniscusTearInjury';
import TennisElbow from './pages/sports/TennisElbow';

// Shoulder Injury Pages
import ShoulderTendonitis from './pages/shoulder/ShoulderTendonitis';
import FrozenShoulder from './pages/shoulder/FrozenShoulder';
import DislocatedShoulder from './pages/shoulder/DislocatedShoulder';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/meet-dr-amr" element={<MeetDrAmr />} />
        <Route path="/patient-journey" element={<PatientJourneyPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Knee Surgeries Routes */}
        <Route path="/knee-surgeries" element={<KneeSurgeriesPage />} />
        <Route path="/knee-surgeries/quadriceps-tendon-repair" element={<QuadricepsTendonRepair />} />
        <Route path="/knee-surgeries/kneecap-stabilization" element={<KneecapStabilization />} />
        <Route path="/knee-surgeries/knee-replacement" element={<KneeReplacement />} />
        <Route path="/knee-surgeries/knee-arthroscopy" element={<KneeArthroscopy />} />
        <Route path="/knee-surgeries/multi-ligament-injury" element={<MultiLigamentInjury />} />
        <Route path="/knee-surgeries/lcl-tear-surgery" element={<LCLTearSurgery />} />
        <Route path="/knee-surgeries/mcl-reconstruction" element={<MCLReconstruction />} />
        <Route path="/knee-surgeries/pcl-tear-surgery" element={<PCLTearSurgery />} />

        {/* Hip Surgeries Routes */}
        <Route path="/hip-surgeries" element={<HipSurgeriesPage />} />
        <Route path="/hip-surgeries/hip-replacement" element={<HipReplacement />} />
        <Route path="/hip-surgeries/hip-resurfacing" element={<HipResurfacing />} />
        <Route path="/hip-surgeries/hip-revision" element={<HipRevision />} />

        {/* Sports Injuries Routes */}
        <Route path="/sports-injuries" element={<SportsInjuriesPage />} />
        <Route path="/sports-injuries/acl-tear-injury" element={<ACLTearInjury />} />
        <Route path="/sports-injuries/meniscus-tear-injury" element={<MeniscusTearInjury />} />
        <Route path="/sports-injuries/tennis-elbow" element={<TennisElbow />} />

        {/* Shoulder Injuries Routes */}
        <Route path="/shoulder-injuries" element={<ShoulderInjuriesPage />} />
        <Route path="/shoulder-injuries/shoulder-tendonitis" element={<ShoulderTendonitis />} />
        <Route path="/shoulder-injuries/frozen-shoulder" element={<FrozenShoulder />} />
        <Route path="/shoulder-injuries/dislocated-shoulder" element={<DislocatedShoulder />} />
      </Routes>
    </Router>
  );
}

export default App;
