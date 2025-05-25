import { Grid3X3, Clock, Calendar, BarChart3, MessageCircle, HelpCircle, Settings, Stethoscope } from 'lucide-react';

export const navigationLinks = [
  { id: 'dashboard', name: 'Dashboard', icon: Grid3X3, active: true },
  { id: 'history', name: 'History', icon: Clock, active: false },
  { id: 'calendar', name: 'Calendar', icon: Calendar, active: false },
  { id: 'appointments', name: 'Appointments', icon: Calendar, active: false },
  { id: 'statistics', name: 'Statistics', icon: BarChart3, active: false },
  { id: 'tests', name: 'Tests', icon: Stethoscope, active: false },
  { id: 'chat', name: 'Chat', icon: MessageCircle, active: false },
  { id: 'support', name: 'Support', icon: HelpCircle, active: false },
  { id: 'setting', name: 'Setting', icon: Settings, active: false }
];