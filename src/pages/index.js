import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <header>
        <h1>AceIt</h1>
        <p>Your Monthly Productivity Tracker</p>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/services">Planner</Link>
          <Link href="/tracker">Tracker</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </header>

      <section className="welcome-section">
        <h2>Welcome to AceIt</h2>
        <p>
          Stay on track and crush your monthly goals with ease! <br />
          Organize your tasks by category, check progress daily, and celebrate consistency.<br />
          Ready to get started?
        </p>
    
      </section>

      <footer>
        <p>&copy; 2025 AceIt &nbsp;|&nbsp; Stay productive!</p>
      </footer>
    </div>
  );
};

export default Home;