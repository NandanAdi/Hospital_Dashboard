

// Dashbord Health Bars
export const healthStatusData = [
  {
    id: 'lungs',
    name: 'Lungs',
    date: 'Done 26 Oct, 2021',
    status: 'needs-attention',
    icon: '🫁',
    color: '#ef4444'
  },
  {
    id: 'teeth',
    name: 'Teeth',
    date: 'Done 26 Oct, 2021',
    status: 'good',
    icon: '🦷',
    color: '#22c55e'
  },
  {
    id: 'bone',
    name: 'Bone',
    date: 'Done 26 Oct, 2021',
    status: 'good',
    icon: '🦴',
    color: '#22c55e'
  }
];

// Calendar Part

export const calendarData = {
  month: 'October 2021',
  days: [
    { date: 25, day: 'Mon', appointments: ['10:00'] },
    { date: 26, day: 'Tues', appointments: ['08:00', '09:00'] },
    { date: 27, day: 'Wed', appointments: ['12:00', '13:00'] },
    { date: 28, day: 'Thurs', appointments: ['10:00', '11:00'] },
    { date: 29, day: 'Fri', appointments: ['14:00', '16:00'] },
    { date: 30, day: 'Sat', appointments: ['14:00', '15:00'] },
    { date: 31, day: 'Sun', appointments: ['09:00', '10:00', '11:00'] }
  ]
};

// Appointment Part

export const appointmentCards = [
  {
    id: 1,
    title: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr Cameron Williamson',
    type: 'dentist',
    color: '#4f46e5'
  },
  {
    id: 2,
    title: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr Kevin Djones',
    type: 'physiotherapy',
    color: '#f59e0b'
  }
];

// Schedule Part

export const upcomingSchedule = [
  {
    day: 'On Thursday',
    appointments: [
      { id: 1, title: 'Health checkup complete', time: '11:00 AM', icon: '🩺' },
      { id: 2, title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' }
    ]
  },
  {
    day: 'On Saturday',
    appointments: [
      { id: 3, title: 'Cardiologist', time: '12:00 AM', icon: '❤️' },
      { id: 4, title: 'Neurologist', time: '16:00 PM', icon: '🧠' }
    ]
  }
];