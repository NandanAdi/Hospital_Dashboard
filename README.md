Here's a polished `README.md` with your image link properly integrated:

```markdown
# 🏥 Hospital Management Dashboard

![Dashboard Preview](https://raw.githubusercontent.com/NandanAdi/Hospital_Dashboard/main/public/image.png)

A modern healthcare dashboard built with React and Vite for managing patient appointments and health metrics with real-time visualization.

## ✨ Key Features

- **Interactive Calendar View**  
  Color-coded appointment scheduling with daily breakdown
- **Patient Health Monitoring**  
  Visual anatomy model with organ health indicators
- **Activity Analytics**  
  Weekly activity trends with highlighted peak periods
- **Upcoming Appointments**  
  Collapsible schedule with doctor details and time slots
- **Responsive Design**  
  Fully functional across mobile, tablet, and desktop

## 🛠️ Tech Stack

| Category       | Technologies                          |
|---------------|---------------------------------------|
| Frontend      | React 18, Vite 4, CSS Modules         |
| UI Components | Custom-built with Lucide-react icons  |
| Data Flow     | Prop drilling with mock JSON data     |
| Styling       | Flexbox/Grid, Mobile-first CSS        |

## 🚀 Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/NandanAdi/Hospital_Dashboard.git
   ```
2. Install dependencies:
   ```bash
   cd Hospital_Dashboard && npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```bash
src/
├── components/          # Reusable components
│   ├── ActivityFeed/    # Bar chart visualization
│   ├── AnatomySection/  # Body health indicators
│   └── CalendarView/    # Interactive scheduler
├── data/               # Mock datasets
├── App.jsx             # Root component
└── main.jsx            # Vite entry point
```

## 🎨 Design System

- **Color Palette**:
  ```
  Primary: #22d3ee (Cyan)
  Secondary: #3b82f6 (Blue)
  Danger: #ef4444 (Red)
  Success: #22c55e (Green)
  ```

- **Breakpoints**:
  - Mobile: <768px
  - Tablet: 768px-1024px
  - Desktop: ≥1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/new-component
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new patient view component"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/new-component
   ```
5. Open a pull request


> **Note**: Requires Node.js ≥16.0 and npm ≥8.0  
```
